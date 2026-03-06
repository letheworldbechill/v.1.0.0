const { sections, renderSection } = require('./sections');
const { buildPage, buildDocument, minifyHtml } = require('./generator');
const { purgeCSS, extractUsedClasses } = require('./purge');

module.exports = {
  sections,
  renderSection,
  buildPage,
  buildDocument,
  minifyHtml,
  purgeCSS,
  extractUsedClasses
};
