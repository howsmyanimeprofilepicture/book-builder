import fs from "fs";
import path from "path";

export default function createCategoryStyle({ main, sub }: {
    main: { [key: string]: string },
    sub: { [key: string]: string }
} = { main: {}, sub: {} }): void {

    let categoryCSS: string = ""

    for (let key in main) {
        categoryCSS += `.main-category[name="${key}"]{
    list-style: '${main[key]}';
}
`   }
    for (let key in sub) {
        categoryCSS += `.sub-category[name="${key}"]{
    list-style: '${sub[key]}';
}
`   }

    fs.writeFileSync(
        path.join(__dirname, "../build/_assets/category-style.css"),
        categoryCSS, { encoding: "utf-8" }
    );
}