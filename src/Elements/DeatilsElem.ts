import HTML from "./HTML";
import SummaryElem from "./SummaryElem";

export default class DetailsElem extends HTML {
    public tagName: string = "details";
    public summary: SummaryElem = new SummaryElem();
    constructor() {
        super();
        this.innerHTML.push(this.summary);
    }
}