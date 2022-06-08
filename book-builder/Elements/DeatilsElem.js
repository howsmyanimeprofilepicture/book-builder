"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTML_1 = __importDefault(require("./HTML"));
const SummaryElem_1 = __importDefault(require("./SummaryElem"));
class DetailsElem extends HTML_1.default {
    constructor() {
        super();
        this.tagName = "details";
        this.summary = new SummaryElem_1.default();
        this.innerHTML.push(this.summary);
    }
}
exports.default = DetailsElem;
