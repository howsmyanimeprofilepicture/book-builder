"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools_1 = __importDefault(require("./Tools"));
const fs_1 = __importDefault(require("fs"));
const parseMarkdown_1 = __importDefault(require("./parseMarkdown"));
const Subcategory_1 = __importDefault(require("../Elements/Subcategory"));
const path_1 = __importDefault(require("path"));
function createSubcategories(mainChapter) {
    const subChapters = fs_1.default.readdirSync(path_1.default.join(__dirname, "../_posts", mainChapter));
    return subChapters.map((subChapter) => {
        Tools_1.default.makeDir(path_1.default.join(__dirname, "../build/_posts", mainChapter, subChapter));
        let posts = fs_1.default.readdirSync(path_1.default.join(__dirname, "../_posts", mainChapter, subChapter));
        posts = posts.map(post => post.split(".")[0]);
        posts.forEach((post) => {
            let mdText = fs_1.default.readFileSync(path_1.default.join(__dirname, `../_posts/${mainChapter}/${subChapter}/${post}.md`), { encoding: "utf-8" });
            mdText = (0, parseMarkdown_1.default)(mdText);
            fs_1.default.writeFileSync(path_1.default.join(__dirname, `../build/_posts/${mainChapter}/${subChapter}/${post}.html`), mdText, {
                encoding: "utf-8"
            });
        });
        return new Subcategory_1.default({
            categoryName: subChapter,
            posts: posts,
        });
    });
}
exports.default = createSubcategories;
