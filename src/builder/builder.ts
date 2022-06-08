import * as fs from 'fs';
import Maincategory from '../Elements/Maincategory';
import htmlTemplate from './htmlTemplate';
import T from './Tools';
import createSubcategories from './createSubcategories';
import path from "path";
import sendAsset from './sendAsset';
import parseMarkdown from './parseMarkdown';
import createCategoryStyle from './createCategoryStyle';



export default function builder(): void {
    T.makeDir(path.join(__dirname, "../../docs"));
    T.makeDir(path.join(__dirname, "../../docs", "assets"));
    T.makeDir(path.join(__dirname, "../../docs", "posts"));

    let maincategory_html: string = ""

    const mainChapters: Array<string> = fs.readdirSync(
        path.join(__dirname, "../posts")
    );

    mainChapters.forEach((mainChapter) => {
        T.makeDir(path.join(
            __dirname, "../../docs", "posts", mainChapter,
        ));
        const maincategory: Maincategory = new Maincategory({
            categoryName: mainChapter,
            subcategories: createSubcategories(mainChapter),
        })
        maincategory_html += maincategory.getHTML()
    })

    const config: any = T.getConfig();
    const { main, sub } = config.categoryStyle
    console.log(T.getConfig());

    createCategoryStyle({ main, sub });
    sendAsset();

    fs.writeFileSync(
        path.join(__dirname, "../../docs/index.html"),
        htmlTemplate(maincategory_html), {
        encoding: "utf-8",
    });


    const mainMarkdown: string = fs.readFileSync(path.join(
        __dirname, "../main.md"), { encoding: "utf-8" });


    fs.writeFileSync(
        path.join(__dirname, "../../docs/posts/main.html"),
        parseMarkdown(mainMarkdown, "main"),
        { encoding: "utf-8", }
    );
}
