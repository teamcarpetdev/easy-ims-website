/**
 * Easy-IMS  ·  Frontend Application Engine
 * Language-aware, fully dynamic renderer.
 * Reads renderDB (ES or EN merged) for every render call.
 */
(function () {
  'use strict';

  /* ─── Load data ──────────────────────────────────────────────── */
  const ORIG_DB = JSON.parse(JSON.stringify(window.EIMS_DB));
  let DB = JSON.parse(JSON.stringify(ORIG_DB));

  // Merge helper used at load time (deepMerge defined later is the same logic)
  function _merge(target, source) {
    for (const k in source) {
      if (source[k] && typeof source[k] === 'object' && !Array.isArray(source[k])
          && target[k] && typeof target[k] === 'object' && !Array.isArray(target[k])) {
        _merge(target[k], source[k]); // recurse into objects
      } else if (source[k] !== undefined) {
        target[k] = source[k];       // saved value wins for scalars & arrays
      }
    }
  }

  try {
    const s = localStorage.getItem('eims_db');
    if (s) {
      // Merge saved admin changes ON TOP of the current defaults.
      // This preserves any NEW fields added to db.js (like countries, marketBadge)
      // even when localStorage still holds an older snapshot.
      _merge(DB, JSON.parse(s));
    }
  } catch(e){}

  let currentLang = localStorage.getItem('eims_lang') || 'es';
  let renderDB    = DB; // all render fns read this

  /* ─── Deep merge helper ──────────────────────────────────────── */
  function deepMerge(target, source) {
    const result = JSON.parse(JSON.stringify(target));
    (function merge(t, s) {
      for (const key in s) {
        if (Array.isArray(s[key]) && Array.isArray(t[key])) {
          s[key].forEach((item, i) => {
            if (t[key][i] !== undefined) {
              if (item && typeof item === 'object') merge(t[key][i], item);
              else t[key][i] = item;
            }
          });
        } else if (s[key] && typeof s[key] === 'object' && !Array.isArray(s[key])) {
          if (!t[key] || typeof t[key] !== 'object') t[key] = {};
          merge(t[key], s[key]);
        } else {
          t[key] = s[key];
        }
      }
    })(result, source);
    return result;
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('eims_lang', lang);
    renderDB = (lang === 'en' && DB.translations?.en)
      ? deepMerge(DB, DB.translations.en)
      : DB;
  }

  /* ─── Theme ──────────────────────────────────────────────────── */
  function applyTheme() {
    const t = renderDB.theme;
    const r = document.documentElement;
    r.style.setProperty('--c-primary',    t.primaryColor);
    r.style.setProperty('--c-accent',     t.accentColor);
    r.style.setProperty('--c-accent2',    t.accentColor2);
    r.style.setProperty('--c-success',    t.successColor);
    r.style.setProperty('--c-dark-bg',    t.darkBg);
    r.style.setProperty('--c-dark-surf',  t.darkSurface);
    r.style.setProperty('--c-dark-card',  t.darkCard);
    document.title = renderDB.config.siteName + ' · Software Empresarial';
    const d = document.getElementById('page-desc');
    if (d) d.content = renderDB.config.description;
  }

  /* ─── Icon helper ────────────────────────────────────────────── */
  function icon(name, style = '') {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      data-lucide="${name}" ${style ? `style="${style}"` : ''}></svg>`;
  }
  function stars(n) {
    return Array.from({length:n},()=>`<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`).join('');
  }

  const BAR_H = [35,55,45,70,60,80,65,85,72,90,78,95];
  let _particleFrame = null;

  /* ── Flag emoji from countries table (stored locally in db.js) ── */
  function flagImg(codeOrEmoji) {
    if (!codeOrEmoji) return '';
    // Find the country row by ISO code
    const c     = (renderDB.countries||[]).find(c => c.code === codeOrEmoji) || {};
    const emoji = c.flag || codeOrEmoji; // fall back to whatever was passed if not found
    const alt   = currentLang === 'en' ? (c.nameEn || codeOrEmoji) : (c.name || codeOrEmoji);
    return `<span class="flag-emoji" role="img" aria-label="${alt}" title="${alt}">${emoji}</span>`;
  } // tracks the running animation frame so we can cancel it

  /* ═══════════════════════════════════════════════════════════
     SECTION RENDERERS  (all use renderDB)
  ═══════════════════════════════════════════════════════════ */

  function renderHero() {
    const h = renderDB.hero;
    return `
    <section id="inicio">
      <canvas id="hero-canvas"></canvas>
      <div class="hero-gradient"></div>
      <div class="container">
        <div class="hero-inner">
          <div class="hero-content">
            <!-- Both badges on the same row -->
            <div class="hero-badges-row">
              <div class="hero-badge">${h.badge}</div>
              ${renderDB.config.marketBadge?.visible ? (() => {
                const mb       = renderDB.config.marketBadge;
                const text     = currentLang === 'en' ? (mb.textEn || mb.text) : mb.text;
                const flagSrc  = mb.countryCode || mb.flag || ''; // supports both old and new format
                return `
              <div class="hero-market-badge">
                ${flagImg(flagSrc)}
                <span>${text}</span>
                ${mb.since ? `<span class="market-since">${mb.since}</span>` : ''}
              </div>`;
              })() : ''}
            </div>
            <h1>${h.headline}</h1>
            <p>${h.subheadline}</p>
            <div class="hero-actions">
              <a href="${h.ctaPrimary.href}" class="btn btn-primary btn-lg">
                ${icon('rocket')} ${h.ctaPrimary.label}
              </a>
              <a href="${h.ctaSecondary.href}" class="btn btn-secondary btn-lg">
                ${icon('play-circle')} ${h.ctaSecondary.label}
              </a>
            </div>
            <p class="hero-trust">${icon('shield-check')} ${h.trustNote}</p>
            <div class="hero-stats">
              ${h.stats.filter(s=>s.visible!==false).map(s=>`
                <div class="hero-stat">
                  <div class="hero-stat-value" data-target="${s.value}" data-suffix="${s.suffix}">${s.value}${s.suffix}</div>
                  <div class="hero-stat-label">${s.label}</div>
                </div>`).join('')}
            </div>
          </div>

          <div class="hero-visual">

            <!-- ── Live Banner ────────────────────────────── -->
            ${(() => {
              const lb = renderDB.liveBanner;
              if (!lb?.visible) return '';
              const isEn = currentLang === 'en';
              return `
              <div class="hv-live-banner">
                <div class="hv-live-indicator">
                  <div class="hv-live-dot-wrap"><span class="hv-live-dot"></span></div>
                  <span class="hv-live-label">${isEn ? lb.labelEn : lb.label}</span>
                </div>
                <div class="hv-live-sep"></div>
                <span class="hv-live-text">${isEn ? lb.textEn : lb.text}</span>
                <div class="hv-live-chips">
                  ${(lb.chips||[]).map(c=>`
                  <span class="hv-live-chip hv-chip-${c.color}">
                    ${c.value} ${isEn ? c.labelEn : c.label}
                  </span>`).join('')}
                </div>
              </div>`;
            })()}

            <!-- ── Desktop Browser ─────────────────────────── -->
            <div class="hv-desktop">
              <div class="dev-browser">
                <div class="dev-browser-bar">
                  <div class="dev-browser-dots">
                    <div class="dev-browser-dot"></div>
                    <div class="dev-browser-dot"></div>
                    <div class="dev-browser-dot"></div>
                  </div>
                  <div class="dev-browser-url">
                    ${icon('lock','width:8px;height:8px;color:var(--c-success)')}
                    easy-ims.com/dashboard
                  </div>
                </div>
                <div class="dev-browser-screen">
                  <div class="dev-mini-kpis">
                    ${(renderDB.mockup?.kpis||[]).map(k=>`
                    <div class="dev-mini-kpi">
                      <div class="dev-mini-kpi-label">${k.label}</div>
                      <div class="dev-mini-kpi-value">${k.value||''}</div>
                      <div class="dev-mini-kpi-change" style="color:${k.changeColor||'var(--c-success)'}">${k.change||''}</div>
                    </div>`).join('')}
                  </div>
                  <div class="dev-mini-chart">
                    <div class="dev-mini-chart-label">${renderDB.mockup?.chartLabel||''}</div>
                    <div class="dev-mini-bars">
                      ${BAR_H.map(h=>`<div class="dev-mini-bar" style="height:${h}%"></div>`).join('')}
                    </div>
                  </div>
                  <div class="dev-mini-rows">
                    ${(renderDB.mockup?.rows||[]).map(r=>`
                    <div class="dev-mini-row">
                      <div class="dev-mini-row-dot" style="background:${r.color}"></div>
                      <div class="dev-mini-row-name">${r.name}</div>
                      <div class="dev-mini-row-val">${r.value||''}</div>
                      <div class="dev-mini-badge" style="background:${r.bc};color:${r.bcc}">${r.badge}</div>
                    </div>`).join('')}
                  </div>
                </div>
              </div>
              <div class="dev-desktop-stand">
                <div class="dev-stand-neck"></div>
                <div class="dev-stand-base"></div>
              </div>
            </div>

            <!-- ── Phone + iPad grouped bottom-right ─────── -->
            <div class="hv-devices-group">

            <!-- iPhone -->
            <div class="hv-phone dev-phone">
              <div class="dev-phone-notch"></div>
              <div class="dev-phone-screen">
                <div class="dev-phone-time">9:41</div>
                ${(renderDB.mockup?.kpis||[]).slice(0,1).map(k=>`
                <div class="dev-phone-big">
                  <div class="dev-phone-big-label">${k.label}</div>
                  <div class="dev-phone-big-value">${k.value||''}</div>
                  <div class="dev-phone-big-change">${k.change||''}</div>
                </div>`).join('')}
                <div class="dev-phone-cards">
                  ${(renderDB.mockup?.kpis||[]).slice(1).map(k=>`
                  <div class="dev-phone-card">
                    <span class="dev-phone-card-label">${k.label}</span>
                    <span class="dev-phone-card-value">${k.value||''}</span>
                  </div>`).join('')}
                </div>
              </div>
              <div class="dev-phone-home-bar"></div>
            </div>

            <!-- iPad -->
            <div class="hv-tablet dev-tablet">
              <div class="dev-tablet-camera"></div>
              <div class="dev-tablet-screen">
                <div class="dev-tab-header">${renderDB.mockup?.chartLabel||''}</div>
                <div class="dev-tab-kpis">
                  ${(renderDB.mockup?.kpis||[]).map(k=>`
                  <div class="dev-tab-kpi">
                    <div class="dev-tab-kpi-v">${k.value||''}</div>
                    <div class="dev-tab-kpi-l">${k.label}</div>
                  </div>`).join('')}
                </div>
                <div class="dev-tab-rows">
                  ${(renderDB.mockup?.rows||[]).map(r=>`
                  <div class="dev-tab-row">
                    <div class="dev-tab-row-dot" style="background:${r.color}"></div>
                    <div class="dev-tab-row-name">${r.name}</div>
                    <div class="dev-tab-row-badge" style="background:${r.bc};color:${r.bcc}">${r.badge}</div>
                  </div>`).join('')}
                </div>
              </div>
              <div class="dev-tablet-home"></div>
            </div>

            </div><!-- end hv-devices-group -->

          </div>
        </div>
      </div>
    </section>`;
  }

  /* ── Devices Showcase ────────────────────────────────────────── */
  const DEV_BARS = [30,50,42,65,55,75,62,80,70,88,74,95];
  const RING_C   = 2 * Math.PI * 42; // circumference for r=42

  function renderDevices() {
    if (!renderDB.devices?.visible) return '';
    const d   = renderDB.devices;
    const kpi = renderDB.mockup?.kpis  || [];
    const rows= renderDB.mockup?.rows  || [];

    /* ── Stat cards ── */
    function statCard(s, i) {
      const color = s.color || 'var(--c-primary)';
      if (s.ring) {
        const pct  = s.value;
        const fill = (pct / 100) * RING_C;
        return `
        <div class="dev-stat reveal reveal-delay-${i+1}">
          <div class="dev-stat-ring">
            <svg viewBox="0 0 100 100">
              <circle class="ring-track" cx="50" cy="50" r="42"/>
              <circle class="ring-fill" cx="50" cy="50" r="42"
                stroke="${color}"
                stroke-dasharray="${fill.toFixed(1)} ${RING_C.toFixed(1)}"
                data-fill="${fill.toFixed(1)}" data-total="${RING_C.toFixed(1)}"/>
            </svg>
            <div class="dev-stat-ring-label">
              <span class="dev-stat-ring-value" style="color:${color}">${pct}</span>
              <span class="dev-stat-ring-suffix" style="color:${color}">${s.suffix}</span>
            </div>
          </div>
          <div class="dev-stat-label">${s.label}</div>
          <div class="dev-stat-sublabel">${s.sublabel}</div>
        </div>`;
      }
      return `
      <div class="dev-stat reveal reveal-delay-${i+1}">
        <div class="dev-stat-big">
          <div class="dev-stat-number" style="color:${color}"
               data-target="${s.value}" data-suffix="${s.suffix}">
            ${s.value}${s.suffix}
          </div>
        </div>
        <div class="dev-stat-label">${s.label}</div>
        <div class="dev-stat-sublabel">${s.sublabel}</div>
      </div>`;
    }

    /* ── Desktop browser screen content ── */
    const browserScreen = `
      <div class="dev-mini-kpis">
        ${kpi.map(k=>`
          <div class="dev-mini-kpi">
            <div class="dev-mini-kpi-label">${k.label}</div>
            <div class="dev-mini-kpi-value">${k.value||''}</div>
            <div class="dev-mini-kpi-change" style="color:${k.changeColor||'var(--c-success)'}">${k.change||''}</div>
          </div>`).join('')}
      </div>
      <div class="dev-mini-chart">
        <div class="dev-mini-chart-label">${renderDB.mockup?.chartLabel||''}</div>
        <div class="dev-mini-bars">
          ${DEV_BARS.map(h=>`<div class="dev-mini-bar" style="height:${h}%"></div>`).join('')}
        </div>
      </div>
      <div class="dev-mini-rows">
        ${rows.map(r=>`
          <div class="dev-mini-row">
            <div class="dev-mini-row-dot" style="background:${r.color}"></div>
            <div class="dev-mini-row-name">${r.name}</div>
            <div class="dev-mini-row-val">${r.value||''}</div>
            <div class="dev-mini-badge" style="background:${r.bc};color:${r.bcc}">${r.badge}</div>
          </div>`).join('')}
      </div>`;

    /* ── Tablet screen content ── */
    const tabletScreen = `
      <div class="dev-tab-header">${renderDB.mockup?.chartLabel||''}</div>
      <div class="dev-tab-kpis">
        ${kpi.slice(0,4).map(k=>`
          <div class="dev-tab-kpi">
            <div class="dev-tab-kpi-v">${k.value||''}</div>
            <div class="dev-tab-kpi-l">${k.label}</div>
          </div>`).join('')}
      </div>
      <div class="dev-tab-rows">
        ${rows.map(r=>`
          <div class="dev-tab-row">
            <div class="dev-tab-row-dot" style="background:${r.color}"></div>
            <div class="dev-tab-row-name">${r.name}</div>
            <div class="dev-tab-row-badge" style="background:${r.bc};color:${r.bcc}">${r.badge}</div>
          </div>`).join('')}
      </div>`;

    /* ── Phone screen content ── */
    const first = kpi[0]||{};
    const phoneScreen = `
      <div class="dev-phone-time">9:41</div>
      <div class="dev-phone-big">
        <div class="dev-phone-big-label">${first.label||''}</div>
        <div class="dev-phone-big-value">${first.value||''}</div>
        <div class="dev-phone-big-change">${first.change||''}</div>
      </div>
      <div class="dev-phone-cards">
        ${kpi.slice(1).map(k=>`
          <div class="dev-phone-card">
            <span class="dev-phone-card-label">${k.label}</span>
            <span class="dev-phone-card-value">${k.value||''}</span>
          </div>`).join('')}
      </div>`;

    return `
    <section id="dispositivos" class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label light">${d.sectionLabel}</span>
          <h2 style="color:var(--c-text-white)">${d.headline}</h2>
          <p>${d.subheadline}</p>
        </div>

        <div class="devices-stage">
          <!-- iPhone -->
          <div class="dev-phone-wrap reveal">
            <div class="dev-phone">
              <div class="dev-phone-notch"></div>
              <div class="dev-phone-screen">${phoneScreen}</div>
              <div class="dev-phone-home-bar"></div>
            </div>
            <div class="dev-label">iPhone</div>
          </div>

          <!-- Desktop Browser -->
          <div class="dev-desktop-wrap reveal">
            <div class="dev-browser">
              <div class="dev-browser-bar">
                <div class="dev-browser-dots">
                  <div class="dev-browser-dot"></div>
                  <div class="dev-browser-dot"></div>
                  <div class="dev-browser-dot"></div>
                </div>
                <div class="dev-browser-url">
                  ${icon('lock', 'width:8px;height:8px;color:var(--c-success)')}
                  easy-ims.com/dashboard
                </div>
              </div>
              <div class="dev-browser-screen">${browserScreen}</div>
            </div>
            <div class="dev-desktop-stand">
              <div class="dev-stand-neck"></div>
              <div class="dev-stand-base"></div>
            </div>
            <div class="dev-label">Desktop</div>
          </div>

          <!-- iPad -->
          <div class="dev-tablet-wrap reveal">
            <div class="dev-tablet">
              <div class="dev-tablet-camera"></div>
              <div class="dev-tablet-screen">${tabletScreen}</div>
              <div class="dev-tablet-home"></div>
            </div>
            <div class="dev-label">iPad</div>
          </div>
        </div>

        <!-- Stats row with percentage rings -->
        <div class="devices-stats">
          ${d.stats.filter(s=>s.visible!==false).map((s,i) => statCard(s, i)).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderClients() {
    if (!renderDB.clients.visible) return '';
    const items = [...renderDB.clients.items, ...renderDB.clients.items];
    return `
    <section id="clients">
      <div class="container"><p class="clients-label">${renderDB.clients.sectionLabel}</p></div>
      <div class="clients-track-wrap">
        <div class="clients-track">
          ${items.map(c=>`
            <div class="client-logo">
              <div class="client-initial">${c.initial}</div>
              <span class="client-name">${c.name}</span>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderFeatures() {
    if (!renderDB.features.visible) return '';
    const f = renderDB.features;
    return `
    <section id="caracteristicas" class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${f.sectionLabel}</span>
          <h2>${f.headline}</h2>
          <p>${f.subheadline}</p>
        </div>
        <div class="features-tabs-wrap">
          <div class="features-tabs reveal" id="feat-tabs">
            ${f.tabs.map((tab,i)=>`
              <button class="feat-tab ${i===0?'active':''}" data-tab="${tab.id}">
                ${icon(tab.icon)} <span>${tab.label}</span>
                ${tab.addon?'<span class="feat-tab-addon">Add-on</span>':''}
              </button>`).join('')}
          </div>
        </div>
        ${f.tabs.map((tab,i)=>`
          <div class="feat-panel ${i===0?'active':''}" id="panel-${tab.id}">
            <div class="feat-panel-content reveal-left">
              ${tab.addon?`<span class="feat-panel-addon">${currentLang === 'en' ? 'Add-on module -- not included in the base plan' : 'Módulo add-on -- no incluido en el plan base'}</span>`:''}
              <h3>${tab.headline}</h3>
              <p>${tab.description}</p>
              <div class="feat-items">
                ${tab.items.map(item=>`
                  <div class="feat-item">
                    <div class="feat-item-icon" style="background:${tab.color}18">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                           stroke="${tab.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           style="width:18px;height:18px" data-lucide="${item.icon}"></svg>
                    </div>
                    <span>${item.text}</span>
                  </div>`).join('')}
              </div>
              <a href="#contacto" class="btn btn-outline" style="margin-top:1.75rem">
                ${renderDB.ui?.requestDemo||'Solicitar demo'} ${icon('arrow-right')}
              </a>
            </div>
            <div class="feat-visual reveal-right">
              <div style="text-align:center;opacity:.7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="${tab.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                     style="width:96px;height:96px;margin:0 auto 1rem" data-lucide="${tab.icon}"></svg>
                <p style="color:var(--c-text-muted);font-size:.9rem">${tab.label}</p>
              </div>
            </div>
          </div>`).join('')}
      </div>
    </section>`;
  }

  function renderBenefits() {
    if (!renderDB.benefits.visible) return '';
    const b = renderDB.benefits;
    return `
    <section id="beneficios" class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label light">${b.sectionLabel}</span>
          <h2 style="color:var(--c-text-white)">${b.headline}</h2>
          <p style="color:var(--c-text-muted)">${b.subheadline}</p>
        </div>
        <div class="benefits-grid">
          ${b.items.map((item,i)=>`
            <div class="benefit-card reveal reveal-delay-${(i%3)+1}">
              <div class="benefit-icon" style="background:${item.color}22">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="${item.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     style="width:24px;height:24px" data-lucide="${item.icon}"></svg>
              </div>
              <h4>${item.title}</h4>
              <p>${item.description}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderModules() {
    if (!renderDB.modules.visible) return '';
    const m = renderDB.modules;
    return `
    <section id="modulos" class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label purple">${m.sectionLabel}</span>
          <h2>${m.headline}</h2>
          <p>${m.subheadline}</p>
        </div>
        <div class="modules-grid">
          ${m.items.map((mod,i)=>`
            <div class="module-card reveal reveal-delay-${(i%4)+1}" style="--card-color:${mod.color}">
              ${mod.tag?`<span class="module-badge" style="background:${mod.color}18;color:${mod.color}">${mod.tag}</span>`:''}
              <div class="module-icon" style="background:${mod.bg}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="${mod.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     style="width:24px;height:24px" data-lucide="${mod.icon}"></svg>
              </div>
              <h4>${mod.title}</h4>
              <p>${mod.description}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderPlatform() {
    if (!renderDB.platform?.visible) return '';
    const p = renderDB.platform;
    return `
    <section id="plataforma" class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label purple">${p.sectionLabel}</span>
          <h2>${p.headline}</h2>
          <p>${p.subheadline}</p>
        </div>
        <div class="platform-grid">
          ${p.items.map((item, i) => `
            <div class="power-card reveal reveal-delay-${(i % 3) + 1}"
                 style="--power-color:${item.color}">
              <div class="power-icon" style="background:${item.color}18">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="${item.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     style="width:22px;height:22px" data-lucide="${item.icon}"></svg>
              </div>
              <h4>${item.title}</h4>
              <p>${item.description}</p>
              <div class="power-bullets">
                ${item.bullets.map(b => `<div class="power-bullet">${b}</div>`).join('')}
              </div>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderStats() {
    if (!renderDB.stats.visible) return '';
    const s = renderDB.stats;
    return `
    <section id="estadisticas" class="section">
      <div class="container">
        <div class="section-header reveal"><h2>${s.headline}</h2></div>
        <div class="stats-grid">
          ${s.items.map((item,i)=>`
            <div class="stat-card reveal reveal-delay-${i+1}">
              <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     style="width:24px;height:24px" data-lucide="${item.icon}"></svg>
              </div>
              <div class="stat-value" data-target="${item.value}" data-suffix="${item.suffix}">${item.value}${item.suffix}</div>
              <div class="stat-label">${item.label}</div>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderHowItWorks() {
    if (!renderDB.howItWorks.visible) return '';
    const h = renderDB.howItWorks;
    return `
    <section id="como-funciona" class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${h.sectionLabel}</span>
          <h2>${h.headline}</h2>
          <p>${h.subheadline}</p>
        </div>
        <div class="steps-grid">
          ${h.steps.map((step,i)=>`
            <div class="step-card reveal reveal-delay-${i+1}">
              <div class="step-number">${step.number}</div>
              <div class="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     style="width:28px;height:28px" data-lucide="${step.icon}"></svg>
              </div>
              <h4>${step.title}</h4>
              <p>${step.description}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderTestimonials() {
    if (!renderDB.testimonials.visible) return '';
    const t = renderDB.testimonials;
    return `
    <section id="testimonios" class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${t.sectionLabel}</span>
          <h2>${t.headline}</h2>
          <p>${t.subheadline}</p>
        </div>
        <div class="testimonials-grid">
          ${t.items.map((item,i)=>`
            <div class="testimonial-card reveal reveal-delay-${(i%3)+1}">
              <div class="testimonial-stars">${stars(item.rating)}</div>
              <p class="testimonial-quote">${item.quote}</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar">${item.name.split(' ').map(n=>n[0]).join('')}</div>
                <div>
                  <div class="testimonial-name">${item.name}</div>
                  <div class="testimonial-role">${item.role} · ${item.company}</div>
                </div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderPricing() {
    if (!renderDB.pricing.visible) return '';
    const p = renderDB.pricing;
    const lblMonthly = renderDB.ui?.pricingMonthly || 'Mensual';
    const lblAnnual  = renderDB.ui?.pricingAnnual  || 'Anual';
    const lblPeriod  = renderDB.ui?.pricingPeriod  || '/mes';
    return `
    <section id="precios" class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${p.sectionLabel}</span>
          <h2>${p.headline}</h2>
          <p>${p.subheadline}</p>
        </div>
        <div class="pricing-toggle reveal">
          <span class="pricing-toggle-label active" id="lbl-monthly">${lblMonthly}</span>
          <div class="toggle-switch" id="billing-toggle" role="switch" aria-checked="false">
            <div class="toggle-knob"></div>
          </div>
          <span class="pricing-toggle-label" id="lbl-annual">${lblAnnual}</span>
          <span class="pricing-save-badge">${p.billingNote}</span>
        </div>
        <div class="pricing-grid">
          ${p.plans.map(plan=>`
            <div class="pricing-card ${plan.highlighted?'featured':''} reveal">
              ${plan.badge?`<div class="pricing-card-badge">${plan.badge}</div>`:''}
              <h3 class="pricing-name">${plan.name}</h3>
              <p class="pricing-desc">${plan.description}</p>
              <div class="pricing-price">
                <span class="pricing-currency">${plan.currency}</span>
                <span class="pricing-amount" data-monthly="${plan.price_monthly}" data-annual="${plan.price_annual}">${plan.price_monthly}</span>
                <span class="pricing-period">${lblPeriod}</span>
              </div>
              <hr class="pricing-divider"/>
              <ul class="pricing-features">
                ${plan.features.map(f=>`
                  <li class="pricing-feature ${f.included?'included':'excluded'}">
                    ${f.included
                      ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="check-circle"></svg>`
                      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="x-circle"></svg>`}
                    <span>${f.text}</span>
                  </li>`).join('')}
              </ul>
              <a href="#contacto" class="btn ${plan.highlighted?'btn-primary':'btn-outline'} btn-full btn-lg">
                ${plan.cta} ${icon('arrow-right')}
              </a>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderFAQ() {
    if (!renderDB.faq.visible) return '';
    const f = renderDB.faq;
    return `
    <section id="faq" class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${f.sectionLabel}</span>
          <h2>${f.headline}</h2>
          <p>${f.subheadline}</p>
        </div>
        <div class="faq-list">
          ${f.items.map((item,i)=>`
            <div class="faq-item reveal" data-faq="${i}">
              <button class="faq-question">
                <span>${item.question}</span>
                <div class="faq-icon">${icon('plus')}</div>
              </button>
              <div class="faq-answer">
                <div class="faq-answer-inner">${item.answer}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderCTA() {
    if (!renderDB.cta.visible) return '';
    const c = renderDB.cta;
    return `
    <section id="cta-section" class="section">
      <div class="container">
        <div class="cta-inner reveal">
          <h2>${c.headline}</h2>
          <p>${c.subheadline}</p>
          <div class="cta-actions">
            <a href="${c.ctaPrimary.href}" class="btn btn-primary btn-lg">${icon('rocket')} ${c.ctaPrimary.label}</a>
            <a href="${c.ctaSecondary.href}" class="btn btn-secondary btn-lg">${icon('message-circle')} ${c.ctaSecondary.label}</a>
          </div>
          <div class="cta-trust">
            ${c.trustItems.map(item=>`<span class="cta-trust-item">${icon('check')} ${item}</span>`).join('')}
          </div>
        </div>
      </div>
    </section>`;
  }

  function renderContact() {
    if (!renderDB.contact.visible) return '';
    const c   = renderDB.contact;
    const cfg = renderDB.config;
    const f   = renderDB.ui?.form || {};
    return `
    <section id="contacto" class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info reveal-left">
            <span class="section-label">${c.sectionLabel}</span>
            <h2>${c.headline}</h2>
            <p>${c.subheadline}</p>
            <div class="contact-details">
              <div class="contact-detail"><div class="contact-detail-icon">${icon('phone')}</div><span class="contact-detail-text">${cfg.phone}</span></div>
              <div class="contact-detail"><div class="contact-detail-icon">${icon('mail')}</div><span class="contact-detail-text">${cfg.email}</span></div>
              <div class="contact-detail"><div class="contact-detail-icon">${icon('map-pin')}</div><span class="contact-detail-text">${cfg.address}</span></div>
            </div>
            <div style="padding:1.5rem;background:rgba(79,142,247,.06);border-radius:var(--r-lg);border:1px solid rgba(79,142,247,.12)">
              <p style="font-size:.875rem;font-weight:600;color:var(--c-text-dark);margin-bottom:.5rem">${icon('clock')} ${renderDB.ui?.contactResponseTitle||''}</p>
              <p style="font-size:.85rem;color:var(--c-text-dark2)">${renderDB.ui?.contactResponseBody||''}</p>
            </div>
          </div>
          <div class="contact-form-wrap reveal-right">
            <div class="contact-form">
              <h3 style="margin-bottom:1.5rem;font-size:1.25rem">${c.submitLabel}</h3>
              <form id="contact-form" novalidate>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="f-nombre">${f.nameLbl||'Nombre'} *</label>
                    <input id="f-nombre" type="text" class="form-input" placeholder="${f.namePH||''}" required/>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="f-empresa">${f.companyLbl||'Empresa'} *</label>
                    <input id="f-empresa" type="text" class="form-input" placeholder="${f.companyPH||''}" required/>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="f-email">${f.emailLbl||'Email'} *</label>
                    <input id="f-email" type="email" class="form-input" placeholder="${f.emailPH||''}" required/>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="f-telefono">${f.phoneLbl||'Teléfono'}</label>
                    <input id="f-telefono" type="tel" class="form-input" placeholder="${f.phonePH||''}"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="f-empleados">${f.employLbl||'Empleados'}</label>
                  <select id="f-empleados" class="form-input form-select">
                    <option value="">${f.selectPH||'Seleccionar...'}</option>
                    <option>1-10</option><option>11-50</option><option>51-200</option><option>201-500</option><option>500+</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="f-mensaje">${f.messageLbl||'Mensaje'}</label>
                  <textarea id="f-mensaje" class="form-input form-textarea" placeholder="${f.messagePH||''}"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-full btn-lg">
                  ${icon('send')} ${c.submitLabel}
                </button>
              </form>
              <div class="form-success" id="form-success">${icon('check-circle')} ${c.successMsg}</div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function renderFooter() {
    const f   = renderDB.footer;
    const cfg = renderDB.config;
    return `
    <footer id="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="nav-logo" style="margin-bottom:.75rem">
              <div class="nav-logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     style="width:18px;height:18px;color:#fff" data-lucide="layers"></svg>
              </div>
              <span style="font-family:var(--font-head);font-weight:800;color:var(--c-text-white)">${cfg.siteName}</span>
            </div>
            <p class="footer-desc">${f.description}</p>
            <div class="footer-social">
              ${renderDB.footer.social.map(s=>`
                <a href="${s.href}" class="social-btn" target="_blank" rel="noopener" aria-label="${s.platform}">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       style="width:16px;height:16px" data-lucide="${s.icon}"></svg>
                </a>`).join('')}
            </div>
          </div>
          ${f.columns.map(col=>`
            <div class="footer-col">
              <h5>${col.title}</h5>
              <ul class="footer-links">
                ${col.links.map(lnk=>`<li><a href="${lnk.href}" class="footer-link">${lnk.label}</a></li>`).join('')}
              </ul>
            </div>`).join('')}
        </div>
        <div class="footer-bottom">
          <p class="footer-copy">© ${cfg.year} ${cfg.siteName}. ${renderDB.ui?.footerRights||'Todos los derechos reservados.'}</p>
          <div class="footer-badges">
            ${f.badges.map(b=>`<span class="footer-badge">${b}</span>`).join('')}
          </div>
        </div>
      </div>
    </footer>`;
  }

  /* ─── Navigation ─────────────────────────────────────────────── */
  function renderNav() {
    const nav   = renderDB.navigation;
    const items = [...nav.items].sort((a,b)=>a.order-b.order).filter(i=>i.visible);
    const menu  = document.getElementById('nav-menu');
    const mob   = document.getElementById('nav-mobile-items');
    const logo  = document.getElementById('nav-logo-text');
    const cta   = document.getElementById('nav-cta');
    const admin = document.getElementById('nav-admin-link');

    if (menu) menu.innerHTML = items.map(i=>`<li><a href="${i.href}" class="nav-link">${i.label}</a></li>`).join('');
    if (mob)  mob.innerHTML  = items.map(i=>`<li><a href="${i.href}" class="nav-mobile-link">${i.label}</a></li>`).join('');
    if (logo) logo.textContent = renderDB.navigation.logo;
    if (cta)  { cta.textContent = nav.ctaLabel; cta.href = nav.ctaHref; }
    if (admin) admin.href = nav.adminHref;

    // update lang toggle label
    const langLabel = document.getElementById('lang-label');
    if (langLabel) langLabel.textContent = currentLang === 'es' ? 'EN' : 'ES';
  }

  /* ─── Main render ────────────────────────────────────────────── */
  function render() {
    const app = document.getElementById('app');
    const sections = [...renderDB.sections].sort((a,b)=>a.order-b.order);
    const map = {
      hero:         renderHero,
      devices:      renderDevices,
      clients:      renderClients,
      features:     renderFeatures,
      benefits:     renderBenefits,
      modules:      renderModules,
      platform:     renderPlatform,
      stats:        renderStats,
      howItWorks:   renderHowItWorks,
      testimonials: renderTestimonials,
      pricing:      renderPricing,
      faq:          renderFAQ,
      cta:          renderCTA,
      contact:      renderContact
    };
    app.innerHTML = sections
      .filter(s => s.visible && map[s.id])
      .map(s => map[s.id]())
      .join('') + renderFooter();

    renderNav();
    if (window.lucide) lucide.createIcons();
  }

  /* ─── Language toggle ────────────────────────────────────────── */
  function initLangToggle() {
    const btn = document.getElementById('lang-toggle');
    if (!btn || btn._langBound) return; // guard: only bind once
    btn._langBound = true;
    btn.addEventListener('click', () => {
      const next = currentLang === 'es' ? 'en' : 'es';
      applyLang(next);
      render();
      reinitAfterRender();
      if (window._updateAnnounce) window._updateAnnounce(); // update announce bar language
    });
  }

  /* ═══════════════════════════════════════════════════════════
     INTERACTIONS
  ═══════════════════════════════════════════════════════════ */

  function initScrollSpy() {
    const nav  = document.getElementById('nav');
    const links = document.querySelectorAll('.nav-link');
    const secs  = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
      let cur = '';
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#'+cur));
    }, {passive:true});
  }

  function initMobileMenu() {
    const btn     = document.getElementById('nav-hamburger');
    const menu    = document.getElementById('nav-mobile');
    const overlay = document.getElementById('nav-overlay');
    const links   = document.querySelectorAll('.nav-mobile-link');
    function close() { menu.classList.remove('open'); overlay.style.display='none'; document.body.style.overflow=''; }
    btn?.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      overlay.style.display = open ? 'block' : 'none';
      document.body.style.overflow = open ? 'hidden' : '';
    });
    overlay?.addEventListener('click', close);
    links.forEach(l => l.addEventListener('click', close));
  }

  function initTabs() {
    const tabs = document.querySelectorAll('.feat-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.feat-panel').forEach(p => p.classList.remove('active'));
        const panel = document.getElementById('panel-' + tab.dataset.tab);
        if (panel) panel.classList.add('active');
        if (window.lucide) lucide.createIcons();
      });
    });
  }

  function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
      item.querySelector('.faq-question')?.addEventListener('click', () => {
        const open = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!open) item.classList.add('open');
      });
    });
  }

  function initPricing() {
    const toggle  = document.getElementById('billing-toggle');
    const amounts = document.querySelectorAll('.pricing-amount[data-monthly]');
    const lblM    = document.getElementById('lbl-monthly');
    const lblA    = document.getElementById('lbl-annual');
    if (!toggle) return;
    let annual = false;
    toggle.addEventListener('click', () => {
      annual = !annual;
      toggle.classList.toggle('annual', annual);
      lblM.classList.toggle('active', !annual);
      lblA.classList.toggle('active', annual);
      amounts.forEach(el => { el.textContent = annual ? el.dataset.annual : el.dataset.monthly; });
    });
  }

  function initContactForm() {
    const form    = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    form?.addEventListener('submit', e => {
      e.preventDefault();
      form.style.display = 'none';
      if (success) success.style.display = 'block';
    });
  }

  function initReveal() {
    const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
    }, {threshold:0.1, rootMargin:'0px 0px -60px 0px'});
    els.forEach(el => obs.observe(el));
  }

  function animateCounter(el, target, suffix, duration=1800) {
    if (!el || isNaN(target)) return;
    const isFloat = !Number.isInteger(target);
    // Show correct final value immediately — survives any animation failure
    el.textContent = (isFloat ? target.toFixed(1) : Math.round(target).toLocaleString()) + suffix;
    let t0 = null;
    function tick(now) {
      if (!t0) t0 = now;
      const p  = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const v  = target * ease;
      // Math.max(0, …) guards against any floating-point negative edge case
      el.textContent = (isFloat ? v.toFixed(1) : Math.max(0, Math.round(v)).toLocaleString()) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick); // always start via RAF — never call directly
  }

  function initCounters() {
    const els = document.querySelectorAll('[data-target]');
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target, parseFloat(e.target.dataset.target), e.target.dataset.suffix||'');
          obs.unobserve(e.target);
        }
      });
    }, {threshold:0.5});
    els.forEach(el => obs.observe(el));
  }

  function initParticles() {
    // Cancel any running loop before starting a new one (prevents frame stacking on re-render)
    if (_particleFrame) { cancelAnimationFrame(_particleFrame); _particleFrame = null; }
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
    window.addEventListener('resize', resize, {passive:true});
    resize();
    class P {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random()*W; this.y = Math.random()*H;
        this.r = Math.random()*1.5+.5;
        this.vx = (Math.random()-.5)*.4; this.vy = (Math.random()-.5)*.4;
        this.alpha = Math.random()*.4+.1;
      }
      update() { this.x+=this.vx; this.y+=this.vy; if(this.x<0||this.x>W||this.y<0||this.y>H) this.reset(); }
      draw() { ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2); ctx.fillStyle=`rgba(79,142,247,${this.alpha})`; ctx.fill(); }
    }
    for (let i=0;i<100;i++) particles.push(new P());
    (function loop() {
      ctx.clearRect(0,0,W,H);
      particles.forEach(p=>{ p.update(); p.draw(); });
      for (let i=0;i<particles.length;i++)
        for (let j=i+1;j<particles.length;j++) {
          const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
          const d=Math.sqrt(dx*dx+dy*dy);
          if (d<120) {
            ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y);
            ctx.strokeStyle=`rgba(79,142,247,${.12*(1-d/120)})`; ctx.lineWidth=.5; ctx.stroke();
          }
        }
      _particleFrame = requestAnimationFrame(loop);
    })();
  }

  function initWhatsApp() {
    const btn = document.getElementById('whatsapp-btn');
    if (!btn) return;
    btn.href = `https://wa.me/${renderDB.config.whatsapp}?text=${encodeURIComponent(renderDB.ui?.whatsappMsg||'Hola, quiero más información sobre Easy-IMS')}`;
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }
      });
    });
  }

  /* ─── Re-init only the dynamic DOM (safe to call on every render) ── */
  function reinitAfterRender() {
    initTabs();
    initFAQ();
    initPricing();
    initContactForm();
    initReveal();
    initCounters();
    initParticles();
    initWhatsApp();
    initSmoothScroll();
    if (window.lucide) lucide.createIcons();
  }

  /* ─── Announce bar ──────────────────────────────────────────── */
  function initAnnounceBar() {
    const bar   = document.getElementById('announce-bar');
    const text  = document.getElementById('announce-text');
    const cta   = document.getElementById('announce-cta');   // DGII official link
    const cta2  = document.getElementById('announce-cta2');  // Easy-IMS contact
    const close = document.getElementById('announce-close');
    if (!bar) return;

    // Hide permanently if user already dismissed it
    if (localStorage.getItem('eims_announce_closed') === '1') {
      bar.style.display = 'none';
      document.body.classList.add('no-announce');
      return;
    }

    // Language-aware text + links
    function updateAnnounceText() {
      const ann = DB.announce;
      if (!ann) return;
      if (text)  text.innerHTML    = currentLang === 'en' ? ann.en      : ann.es;
      if (cta) {
        cta.textContent = currentLang === 'en' ? ann.cta_en  : ann.cta_es;
        cta.href        = ann.dgii_url || '#';
      }
      if (cta2)  cta2.textContent  = currentLang === 'en' ? ann.cta2_en : ann.cta2_es;
    }
    updateAnnounceText();

    // Expose so lang toggle can call it
    window._updateAnnounce = updateAnnounceText;

    // Dismiss — bind only once
    if (close && !close._closeBound) {
      close._closeBound = true;
      close.addEventListener('click', () => {
        bar.style.display = 'none';
        document.body.classList.add('no-announce');
        localStorage.setItem('eims_announce_closed', '1');
      });
    }
  }

  /* ─── Boot ───────────────────────────────────────────────────── */
  function boot() {
    applyLang(currentLang); // default: 'es' (Spanish)
    applyTheme();
    render();
    // Static listeners — bound ONCE to elements that never leave the DOM
    initScrollSpy();
    initMobileMenu();
    initLangToggle();
    initAnnounceBar();
    // Dynamic listeners — bound to freshly rendered content
    reinitAfterRender();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
