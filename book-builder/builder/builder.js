"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const Maincategory_1 = __importDefault(require("../Elements/Maincategory"));
const htmlTemplate_1 = __importDefault(require("./htmlTemplate"));
const Tools_1 = __importDefault(require("./Tools"));
const createSubcategories_1 = __importDefault(require("./createSubcategories"));
const path_1 = __importDefault(require("path"));
const sendAsset_1 = __importDefault(require("./sendAsset"));
const parseMarkdown_1 = __importDefault(require("./parseMarkdown"));
const createCategoryStyle_1 = __importDefault(require("./createCategoryStyle"));
function builder() {
    Tools_1.default.makeDir(path_1.default.join(__dirname, "../build"));
    Tools_1.default.makeDir(path_1.default.join(__dirname, "../build", "_assets"));
    Tools_1.default.makeDir(path_1.default.join(__dirname, "../build", "_posts"));
    let maincategory_html = "";
    const mainChapters = fs.readdirSync(path_1.default.join(__dirname, "../_posts"));
    mainChapters.forEach((mainChapter) => {
        Tools_1.default.makeDir(path_1.default.join(__dirname, "../build", "_posts", mainChapter));
        const maincategory = new Maincategory_1.default({
            categoryName: mainChapter,
            subcategories: (0, createSubcategories_1.default)(mainChapter),
        });
        maincategory_html += maincategory.getHTML();
    });
    const config = Tools_1.default.getConfig();
    const { main, sub } = config.categoryStyle;
    console.log(Tools_1.default.getConfig());
    (0, createCategoryStyle_1.default)({ main, sub });
    (0, sendAsset_1.default)();
    fs.writeFileSync(path_1.default.join(__dirname, "../build/index.html"), (0, htmlTemplate_1.default)(maincategory_html), {
        encoding: "utf-8",
    });
    const mainMarkdown = fs.readFileSync(path_1.default.join(__dirname, "../main.md"), { encoding: "utf-8" });
    fs.writeFileSync(path_1.default.join(__dirname, "../build/_posts/main.html"), (0, parseMarkdown_1.default)(mainMarkdown, "main"), { encoding: "utf-8", });
}
exports.default = builder;
