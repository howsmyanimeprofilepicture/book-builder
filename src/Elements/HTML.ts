export default abstract class HTML {
    public abstract tagName: string;
    public id: string = "";
    public className: string = "";
    public innerHTML: Array<string | HTML> = [];

    public attr: { [key: string]: string } = {};

    public getHTML(): string {
        let answer: string = `<${this.tagName}`
        if (this.id) {
            answer += ` id="${this.id}"`;
        }
        if (this.className) {
            answer += ` class="${this.className}"`;
        }

        // attribute iteration
        for (let key in this.attr) {
            answer += ` ${key}="${this.attr[key]}"`
        }
        answer += ">";

        // innerHTML iteration
        for (let _html of this.innerHTML) {
            if (typeof _html === "string") {
                answer += _html;
            } else if (_html instanceof HTML) {
                answer += _html.getHTML();
            } else {
                throw new Error("The type of `_html` must be `HTML` or `string`!💩💩");
            }
        }

        // end code
        answer += `</${this.tagName}>`;
        return answer;
    }
}