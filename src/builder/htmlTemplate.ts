export default function (maincategory_html: string): string {
    const header: string = `<!DOCTYPE html>
    <html lang="ko" >
    <head>
    <meta charset="UTF-8" >
    <meta http - equiv="X-UA-Compatible" content="IE=edge" >
    <meta name="viewport" content = "width=device-width, initial-scale=1.0" >
        <title>a r c h i v e </title>
        <link rel = "stylesheet" href="./assets/ui.css">
        
        <script src='./assets/index.js' defer > </script>
    </head>`;


    const body: string = `
<body>
    <nav id='appbar' >
        <details>
            <summary id='folding'> 열기 / 닫기 </summary>
            <div id='containa'></div>
        </details>
    </nav> 

    <div id='side-bar'>
        <section>
            ${maincategory_html}
        </section>
    </div>

    </body>
</html>
`

    return header + body;
}