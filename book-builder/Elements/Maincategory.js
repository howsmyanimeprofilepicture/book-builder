"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeatilsElem_1 = __importDefault(require("./DeatilsElem"));
class Maincategory extends DeatilsElem_1.default {
    constructor(args) {
        super();
        this.summary.className = "main-category";
        this.summary.attr.name = args.categoryName;
        this.summary.innerHTML.push(args.categoryName);
        for (let subcategory of args.subcategories) {
            this.innerHTML.push(subcategory);
        }
    }
}
exports.default = Maincategory;
