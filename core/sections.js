function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderCards(items = []) {
  return items
    .map(
      (item) => `
      <article class="card stack">
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.text)}</p>
      </article>`
    )
    .join('');
}

const sections = {
  header: (data = {}) => `
    <header class="header">
      <div class="container">
        <strong>${esc(data.brand || 'Brand')}</strong>
      </div>
    </header>`,

  hero: (data = {}) => `
    <section class="hero">
      <div class="container stack">
        <h1>${esc(data.title || '')}</h1>
        <p>${esc(data.text || '')}</p>
        <div class="actions">
          ${data.ctaPrimary ? `<a href="${esc(data.ctaPrimaryHref || '#')}" class="btn btn-primary">${esc(data.ctaPrimary)}</a>` : ''}
          ${data.ctaSecondary ? `<a href="${esc(data.ctaSecondaryHref || '#')}" class="btn btn-outline">${esc(data.ctaSecondary)}</a>` : ''}
        </div>
      </div>
    </section>`,

  trustBar: (data = {}) => `
    <section class="trust-bar section">
      <div class="container">
        <ul class="trust-list">
          ${(data.items || []).map((item) => `<li>${esc(item)}</li>`).join('')}
        </ul>
      </div>
    </section>`,

  features: (data = {}) => `
    <section class="section">
      <div class="container stack">
        ${data.title ? `<h2>${esc(data.title)}</h2>` : ''}
        <div class="grid grid-3">
          ${renderCards(data.items || [])}
        </div>
      </div>
    </section>`,

  benefits: (data = {}) => `
    <section class="section">
      <div class="container stack">
        ${data.title ? `<h2>${esc(data.title)}</h2>` : ''}
        <div class="grid grid-2">
          ${renderCards(data.items || [])}
        </div>
      </div>
    </section>`,

  testimonials: (data = {}) => `
    <section class="section">
      <div class="container stack">
        ${data.title ? `<h2>${esc(data.title)}</h2>` : ''}
        <div class="grid grid-2">
          ${(data.items || [])
            .map(
              (item) => `
              <blockquote class="card stack">
                <p>“${esc(item.quote)}”</p>
                <strong>${esc(item.author)}</strong>
              </blockquote>`
            )
            .join('')}
        </div>
      </div>
    </section>`,

  faq: (data = {}) => `
    <section class="section">
      <div class="container stack">
        ${data.title ? `<h2>${esc(data.title)}</h2>` : ''}
        <div>
          ${(data.items || [])
            .map(
              (item) => `
              <article class="faq-item stack">
                <h3>${esc(item.question)}</h3>
                <p>${esc(item.answer)}</p>
              </article>`
            )
            .join('')}
        </div>
      </div>
    </section>`,

  cta: (data = {}) => `
    <section class="section">
      <div class="container">
        <div class="cta stack">
          <h2>${esc(data.title || '')}</h2>
          <p>${esc(data.text || '')}</p>
          ${data.button ? `<div><a href="${esc(data.href || '#')}" class="btn btn-primary">${esc(data.button)}</a></div>` : ''}
        </div>
      </div>
    </section>`,

  footer: (data = {}) => `
    <footer class="footer">
      <div class="container">
        <small>${esc(data.text || '')}</small>
      </div>
    </footer>`
};

function renderSection(section = {}) {
  const fn = sections[section.type];
  if (!fn) return '';
  return fn(section.data || {});
}

module.exports = {
  sections,
  renderSection,
  esc
};
