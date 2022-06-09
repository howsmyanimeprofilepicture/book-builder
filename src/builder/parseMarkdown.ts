import { pageType } from "../Elements/types";
import PostTemplate from "../Elements/PostTemplate";

const md = require('markdown-it')()
    .use(require('markdown-it-highlightjs'))
    .use(require('@iktakahiro/markdown-it-katex'))
    .use(require("markdown-it-mark"));


export default function parseMarkdown(
    markdown: string,
    pageType: pageType = "post",
): PostTemplate {

    return new PostTemplate({
        body: md.render(markdown),
        pageType: pageType,
        lang: "ko",
        title: "Maru's Lemma",
    });
}


