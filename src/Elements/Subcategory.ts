import DetailsElem from "./DeatilsElem";
import LiElem from "./LiElem";

export default class Subcategory extends DetailsElem {
    constructor(args: {
        categoryName: string;
        posts: Array<string>;
    }) {
        super();
        this.summary.className = "sub-category";
        this.summary.attr.name = args.categoryName;
        this.summary.innerHTML.push(args.categoryName);

        for (let post of args.posts) {
            const li: LiElem = new LiElem();
            li.className = "_postsLink";
            li.innerHTML.push(post);
            this.innerHTML.push(li);
        }
    }
}
