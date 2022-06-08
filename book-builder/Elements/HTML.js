"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTML {
    constructor() {
        this.id = "";
        this.className = "";
        this.innerHTML = [];
        this.attr = {};
    }
    getHTML() {
        let answer = `<${this.tagName}`;
        if (this.id) {
            answer += ` id="${this.id}"`;
        }
        if (this.className) {
            answer += ` class="${this.className}"`;
        }
        for (let key in this.attr) {
            answer += ` ${key}="${this.attr[key]}"`;
        }
        answer += ">";
        for (let _html of this.innerHTML) {
            if (typeof _html === "string") {
                answer += _html;
            }
            else if (_html instanceof HTML) {
                answer += _html.getHTML();
            }
            else {
                throw new Error("The type of `_html` must be `HTML` or `string`!💩💩");
            }
        }
        answer += `</${this.tagName}>`;
        return answer;
    }
}
exports.default = HTML;
