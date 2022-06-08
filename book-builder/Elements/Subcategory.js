"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeatilsElem_1 = __importDefault(require("./DeatilsElem"));
const LiElem_1 = __importDefault(require("./LiElem"));
class Subcategory extends DeatilsElem_1.default {
    constructor(args) {
        super();
        this.summary.className = "sub-category";
        this.summary.attr.name = args.categoryName;
        this.summary.innerHTML.push(args.categoryName);
        for (let post of args.posts) {
            const li = new LiElem_1.default();
            li.className = "postsLink";
            li.innerHTML.push(post);
            this.innerHTML.push(li);
        }
    }
}
exports.default = Subcategory;
