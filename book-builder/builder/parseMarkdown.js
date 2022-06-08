"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseMarkdown(markdown, pageType = "post") {
    const tm = require('markdown-it-texmath');
    const md = require('markdown-it')()
        .use(require('markdown-it-highlightjs'))
        .use(tm, {
        engine: require('katex'),
        delimiters: 'dollars',
        katexOptions: { macros: { "\\RR": "\\mathbb{R}" } }
    });
    return `<!DOCTYPE html>
<html lang="ko" >
<head>
<meta charset="UTF-8" >
<meta http - equiv="X-UA-Compatible" content="IE=edge" >
<meta name="viewport" content = "width=device-width, initial-scale=1.0" >
    <title>a r c h i v e </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css">
    ${pageType === "main" ? '<link rel="stylesheet" href="../_assets/post.css">' : ""} 
    ${pageType === "post" ? '<link rel="stylesheet" href="../../../_assets/post.css">' : ""}
</head>
<body>
${md.render(markdown)}
</body>
</html>
`;
}
exports.default = parseMarkdown;
