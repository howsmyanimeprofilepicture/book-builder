
type pageType = "post" | "main"

export default function parseMarkdown(
    markdown: string,
    pageType: pageType = "post",
) {
    const tm = require('markdown-it-texmath');

    const md = require('markdown-it')()
        .use(require('markdown-it-highlightjs'))
        .use(tm, {
            engine: require('katex'),
            delimiters: 'dollars',
            katexOptions: { macros: { "\\RR": "\\mathbb{R}" } }
        });

    // const mk = require('@iktakahiro/markdown-it-katex');
    // const md = require('markdown-it')()
    //     .use(require('markdown-it-highlightjs'))
    //     .use(mk);



    return `<!DOCTYPE html>
<html lang="ko" >
<head>
<meta charset="UTF-8" >
<meta http - equiv="X-UA-Compatible" content="IE=edge" >
<meta name="viewport" content = "width=device-width, initial-scale=1.0" >
    <title>a r c h i v e </title>
    ${pageType === "main" ? '<link rel="stylesheet" href="../_assets/post.css">' : ""} 
    ${pageType === "post" ? '<link rel="stylesheet" href="../../../_assets/post.css">' : ""}


    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.css" integrity="sha384-1IGr2Yb8xuHjwTG+WoGjj2+I/a/N6z0gDD5YIGCQxywPROOKc3+orbn/R7arWQxD" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.js" integrity="sha384-I2b1Pcl48X93GxEkGkaMo1hrd6n+IX8H2wgSsMimGbkZoGTve/87h1FjaDNvlpQi" crossorigin="anonymous"></script>

</head>
<body>
${md.render(markdown)}
</body>
</html>
`;
}


