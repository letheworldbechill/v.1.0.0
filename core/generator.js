const { renderSection } = require('./sections');
const { purgeCSS } = require('./purge');

function buildPage(page = {}) {
  const sections = Array.isArray(page.sections) ? page.sections : [];
  return sections.map((section) => renderSection(section)).join('\n');
}

function minifyHtml(html = '') {
  return String(html)
    .replace(/\n+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
}

function buildDocument({ page = {}, css = '', title = 'Sales Page', minify = true } = {}) {
  const body = buildPage(page);
  const purgedCss = purgeCSS(body, css);

  const doc = `<!doctype html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <style>${purgedCss}</style>
</head>
<body>${body}</body>
</html>`;

  return {
    body,
    css: purgedCss,
    html: minify ? minifyHtml(doc) : doc
  };
}

module.exports = {
  buildPage,
  buildDocument,
  minifyHtml
};
