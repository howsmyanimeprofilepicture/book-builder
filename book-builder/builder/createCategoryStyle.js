"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function createCategoryStyle({ main, sub } = { main: {}, sub: {} }) {
    let categoryCSS = "";
    for (let key in main) {
        categoryCSS += `.main-category[name="${key}"]{
    list-style: '${main[key]}';
}
`;
    }
    for (let key in sub) {
        categoryCSS += `.sub-category[name="${key}"]{
    list-style: '${sub[key]}';
}
`;
    }
    fs_1.default.writeFileSync(path_1.default.join(__dirname, "../../docs/assets/category-style.css"), categoryCSS, { encoding: "utf-8" });
}
exports.default = createCategoryStyle;
