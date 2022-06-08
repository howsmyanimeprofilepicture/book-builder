"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTML_1 = __importDefault(require("./HTML"));
class SummaryElem extends HTML_1.default {
    constructor() {
        super(...arguments);
        this.tagName = "summary";
    }
}
exports.default = SummaryElem;
