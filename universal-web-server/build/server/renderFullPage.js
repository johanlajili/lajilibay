'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = renderFullPage;
function renderFullPage(html, preloadedState, styles) {
    return '\n        <!doctype html>\n        <html>\n        <head>\n            <meta charset="utf-8">\n            <title> Johan sells his stuff </title>\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">\n            <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>\n            ' + styles + '\n        </head>\n        <body>\n            <div id="root">' + html + '</div>\n            <script>\n            window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n            </script>\n            <script src=\'/bundle.js\'></script>\n        </body>\n        </html>\n    ';
}