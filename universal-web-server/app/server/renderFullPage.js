export default function renderFullPage(html, preloadedState, styles) {
	return `
        <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title> Johan sells his stuff </title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
            <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
            ${styles}
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src='/bundle.js'></script>
        </body>
        </html>
    `;
}
