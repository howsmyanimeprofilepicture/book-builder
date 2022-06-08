import Subcategory from "./Subcategory";
import DetailsElem from "./DeatilsElem";

export default class Maincategory extends DetailsElem {
    constructor(args: {
        categoryName: string;
        subcategories: Array<Subcategory>;
    }) {
        super();
        this.summary.className = "main-category";
        this.summary.attr.name = args.categoryName;
        this.summary.innerHTML.push(args.categoryName);


        for (let subcategory of args.subcategories) {
            this.innerHTML.push(subcategory);
        }
    }

}
