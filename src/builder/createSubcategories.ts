import T from "./Tools";
import fs from "fs";
import parseMarkdown from "./parseMarkdown";
import Subcategory from "../Elements/Subcategory";
import path from "path";

import Maincategory from "../Elements/Maincategory";
import assert from "assert";
import PostTemplate from "../Elements/PostTemplate";

function parseAndCopy(
    file: string,
    ...dir: Array<string>
): void {

    const parsedHTML: PostTemplate = parseMarkdown(fs.readFileSync(
        path.join(__dirname, "../posts", ...dir, file),
        { encoding: "utf-8" },
    ));

    fs.writeFileSync(
        path.join(
            __dirname, "../../docs/posts",
            ...dir, file.split(".md")[0] + ".html"
        ),
        parsedHTML.getHTML(),
        { encoding: "utf-8" },
    );
}

function parseMarkdownFiles(
    markdowns: Array<string>,
    dir: string = "",
): void {
    markdowns.forEach((file) => {
        if (file.endsWith(".md")) {
            parseAndCopy(file, dir);
        }
    })
}

function recursiveParser(dirDict: any, opt_dir: string = ""): void {
    assert(!Array.isArray(dirDict), "`dirDict`'s type must not be `Array`!!💩")

    for (let dir in dirDict) {
        T.makeDir(path.join(__dirname, "../../docs/posts", opt_dir, dir))
        if (Array.isArray(dirDict[dir])) {


            parseMarkdownFiles(
                dirDict[dir],
                path.join(opt_dir, dir)
            );

        } else {
            recursiveParser(dirDict[dir], opt_dir + dir)
        }
    }
}



export default class CategoryFacotry {
    public directoryDict: any;

    constructor(directoryDict: any = {}) {
        this.directoryDict = directoryDict;
        T.makeDir(path.join(__dirname, "../../docs"));
        T.makeDir(path.join(__dirname, "../../docs", "assets"));
        T.makeDir(path.join(__dirname, "../../docs", "posts"));
    }

    public parseMarkdowns(): void {
        recursiveParser(this.directoryDict);
    }
}

class AutoCategoryFactory extends CategoryFacotry {

    public setdirectoryDictAuto(): void {
        this.directoryDict = {};

        const parts: Array<string> = fs.readdirSync(
            path.join(__dirname, "../posts")
        );

        parts.forEach((part) => {
            const chapters: Array<string> = fs.readdirSync(
                path.join(__dirname, "../posts", part),
            );
            chapters.forEach((chpater) => {
                this.directoryDict[part][chpater] = [];
                const files: Array<string> = fs.readdirSync(
                    path.join(__dirname, "../posts", part, chpater)
                );
                files.forEach((file) => {
                    if (file.endsWith(".md")) {
                        this.directoryDict[part][chpater].push(file);
                    }
                });
            })
        })
    }
}