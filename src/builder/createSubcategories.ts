import T from "./Tools";
import fs from "fs";
import parseMarkdown from "./parseMarkdown";
import Subcategory from "../Elements/Subcategory";
import path from "path";

export default function createSubcategories(mainChapter: string): Array<Subcategory> {
    const subChapters: Array<string> = fs.readdirSync(
        path.join(__dirname, "../posts", mainChapter));

    return subChapters.map((subChapter) => {
        T.makeDir(path.join(__dirname, "../../docs/posts",
            mainChapter, subChapter));
        let posts: Array<string> = fs.readdirSync(
            path.join(__dirname, "../posts", mainChapter, subChapter)
        );
        posts = posts.map(post => post.split(".md")[0]);

        posts.forEach((post) => {
            let mdText: string = fs.readFileSync(
                path.join(__dirname, `../posts/${mainChapter}/${subChapter}/${post}.md`),
                { encoding: "utf-8" }
            );
            mdText = parseMarkdown(mdText);

            fs.writeFileSync(
                path.join(__dirname, `../../docs/posts/${mainChapter}/${subChapter}/${post}.html`),
                mdText, {
                encoding: "utf-8"
            })
        })

        return new Subcategory({
            categoryName: subChapter,
            posts: posts,
        });
    })
}