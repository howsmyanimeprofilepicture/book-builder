import T from "./Tools";
import fs from "fs";
import parseMarkdown from "./parseMarkdown";
import Subcategory from "../Elements/Subcategory";
import path from "path";

import Maincategory from "../Elements/Maincategory";
import assert from "assert";

export class CategoryFacotry {
    constructor(public directoryDict: any = {}) {
        T.makeDir(path.join(__dirname, "../../docs"));
        T.makeDir(path.join(__dirname, "../../docs", "assets"));
        T.makeDir(path.join(__dirname, "../../docs", "posts"));
    }

    public parseMarkdowns(): void {
        this.recursiveParser(this.directoryDict);
    }


    private recursiveParser(directoryDict: any, opt_dir: string = "") {
        assert(!Array.isArray(directoryDict), "`dirmap`'s type must not be `Array`!!💩")

        for (let dir in directoryDict) {
            T.makeDir(path.join(__dirname, "../../docs/posts", opt_dir, dir))
            if (Array.isArray(directoryDict[dir])) {
                this.parseMarkdownFiles(directoryDict[dir], path.join(opt_dir, dir));
            } else {
                this.recursiveParser(directoryDict[dir], opt_dir + dir)
            }
        }
    }

    private parseMarkdownFiles(
        markdowns: Array<string>,
        dir: string = "",
        verbose: boolean = true,
    ) {
        markdowns.forEach((file) => {
            if (file.endsWith(".md")) {
                const parsedHTML: string = parseMarkdown(fs.readFileSync(
                    path.join(__dirname, "../posts", dir, file),
                    { encoding: "utf-8" },
                ));

                fs.writeFileSync(
                    path.join(
                        __dirname, "../../docs/posts",
                        dir, file.split(".md")[0] + ".html"
                    ),
                    parsedHTML,
                    { encoding: "utf-8" },
                );

                if (verbose) {
                    console.log(`${path.join(
                        __dirname, "../../docs/posts",
                        dir, file.split(".md")[0] + ".html"
                    )}:🐤🐤 parsing complete!`);
                }
            }
        })
    }
}

// T.makeDir(path.join(
//     __dirname, "../../docs", "posts", part,
// ));


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