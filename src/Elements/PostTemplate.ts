import BodyElem from "./BodyElem";
import HeadElem from "./HeadElem";
import HTMLElem from "./HTMLElem";
import { pageType } from "./types";


export default class PostTemplate extends HTMLElem {
    public head: HeadElem;
    public body: BodyElem;

    constructor(args: {
        body: string,
        pageType: pageType,
        lang: string,
        title: string,
    }) {
        super();
        this.attr = { "lang": args.lang };

        this.head = new HeadElem();
        this.head.innerHTML.push(`<meta charset="UTF-8" >
        <meta http - equiv="X-UA-Compatible" content="IE=edge" >
        <meta name="viewport" content = "width=device-width, initial-scale=1.0" >
            <title>${args.title}</title>
            ${args.pageType === "main" ? '<link rel="stylesheet" href="../assets/post.css">' : ""} 
            ${args.pageType === "post" ? '<link rel="stylesheet" href="../../../assets/post.css">' : ""}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.css" integrity="sha384-1IGr2Yb8xuHjwTG+WoGjj2+I/a/N6z0gDD5YIGCQxywPROOKc3+orbn/R7arWQxD" crossorigin="anonymous">
            <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.js" integrity="sha384-I2b1Pcl48X93GxEkGkaMo1hrd6n+IX8H2wgSsMimGbkZoGTve/87h1FjaDNvlpQi" crossorigin="anonymous"></script>
        `);

        this.body = new BodyElem();
        this.body.innerHTML.push(args.body);

        this.innerHTML.push(this.head, this.body);
    }
}