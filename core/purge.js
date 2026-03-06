function extractUsedClasses(html = '') {
  const set = new Set();
  const classAttrRegex = /class\s*=\s*"([^"]+)"/g;
  let match;

  while ((match = classAttrRegex.exec(html))) {
    match[1]
      .split(/\s+/)
      .map((c) => c.trim())
      .filter(Boolean)
      .forEach((c) => set.add(c));
  }

  return set;
}

function splitTopLevelRules(css = '') {
  const rules = [];
  let depth = 0;
  let start = 0;

  for (let i = 0; i < css.length; i += 1) {
    const ch = css[i];
    if (ch === '{') depth += 1;
    if (ch === '}') {
      depth -= 1;
      if (depth === 0) {
        rules.push(css.slice(start, i + 1));
        start = i + 1;
      }
    }
  }

  return rules.map((r) => r.trim()).filter(Boolean);
}

function shouldKeepRule(rule, usedClasses) {
  if (!rule.includes('{')) return false;

  const selector = rule.slice(0, rule.indexOf('{')).trim();

  if (selector.startsWith('@')) return true;
  if (!selector.includes('.')) return true;

  for (const className of usedClasses) {
    if (selector.includes(`.${className}`)) return true;
  }

  return false;
}

function purgeCSS(html = '', css = '') {
  const usedClasses = extractUsedClasses(html);
  const rules = splitTopLevelRules(css);

  return rules.filter((rule) => shouldKeepRule(rule, usedClasses)).join('\n\n');
}

module.exports = {
  extractUsedClasses,
  splitTopLevelRules,
  shouldKeepRule,
  purgeCSS
};
