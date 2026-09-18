/**
 * Easy-IMS  ·  Admin Panel Logic
 * CRUD interface for all site content. Saves to localStorage.
 * The main site (app.js) reads localStorage first, then falls back to backend/db.js.
 */
(function () {
  'use strict';

  /* ─── State ──────────────────────────────────────────────────── */
  let DB = JSON.parse(JSON.stringify(window.EIMS_DB)); // deep clone default
  try {
    const saved = localStorage.getItem('eims_db');
    if (saved) DB = JSON.parse(saved);
  } catch (e) { /* use default */ }

  /* ─── Utils ──────────────────────────────────────────────────── */
  function getPath(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : ''), obj);
  }
  function setPath(obj, path, value) {
    const keys = path.split('.');
    let cur = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      if (cur[keys[i]] === undefined) cur[keys[i]] = {};
      cur = cur[keys[i]];
    }
    cur[keys[keys.length - 1]] = value;
  }
  function toast(msg, type = 'success') {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.className = `toast ${type} show`;
    setTimeout(() => { el.classList.remove('show'); }, 3000);
  }
  function save() {
    try {
      localStorage.setItem('eims_db', JSON.stringify(DB));
      toast('Cambios guardados correctamente ✓');
    } catch (e) {
      toast('Error al guardar: ' + e.message, 'error');
    }
  }
  function makeEl(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else el.setAttribute(k, v);
    });
    children.forEach(c => { if (c) el.appendChild(c); });
    return el;
  }

  /* ─── Navigation ─────────────────────────────────────────────── */
  function initNav() {
    const links = document.querySelectorAll('.sidebar-link[data-section]');
    const sections = document.querySelectorAll('.admin-section');
    const topbarName = document.getElementById('topbar-section-name');
    const labels = {
      dashboard:'Dashboard', configuracion:'Configuración', tema:'Tema & Colores',
      hero:'Hero / Portada', clientes:'Clientes', caracteristicas:'Características',
      beneficios:'Beneficios', modulos:'Módulos', estadisticas:'Estadísticas',
      testimonios:'Testimonios', precios:'Precios', faq:'FAQ',
      secciones:'Secciones', exportar:'Exportar / Importar'
    };

    function showSection(id) {
      sections.forEach(s => s.classList.remove('active'));
      links.forEach(l => l.classList.remove('active'));
      const sec = document.getElementById('section-' + id);
      const lnk = document.querySelector(`.sidebar-link[data-section="${id}"]`);
      if (sec) sec.classList.add('active');
      if (lnk) lnk.classList.add('active');
      if (topbarName) topbarName.textContent = labels[id] || id;
      populateSection(id);
      if (window.lucide) lucide.createIcons();
    }

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        showSection(link.dataset.section);
        // close mobile sidebar
        document.getElementById('sidebar')?.classList.remove('open');
      });
    });

    // Quick actions
    document.querySelectorAll('.quick-action[data-goto]').forEach(btn => {
      btn.addEventListener('click', () => showSection(btn.dataset.goto));
    });

    // Mobile sidebar toggle
    document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.toggle('open');
    });

    showSection('dashboard');
  }

  /* ─── Bind data-path inputs ──────────────────────────────────── */
  function bindInputs(scope) {
    const el = scope || document;
    el.querySelectorAll('[data-path]').forEach(input => {
      const path = input.dataset.path;
      const val = getPath(DB, path);
      if (input.type === 'checkbox') {
        input.checked = !!val;
      } else if (input.type === 'color') {
        input.value = val || '#000000';
      } else {
        input.value = (val !== undefined && val !== null) ? val : '';
      }
      const sync = () => {
        const v = input.type === 'checkbox' ? input.checked :
                  input.type === 'number'   ? parseFloat(input.value) || 0 :
                  input.value;
        setPath(DB, path, v);
        // Sync paired color pickers
        if (input.type === 'color') {
          el.querySelectorAll(`input[type="text"][data-path="${path}"]`)
            .forEach(t => { t.value = v; });
        }
        if (input.type === 'text' && /^#/.test(input.value)) {
          el.querySelectorAll(`input[type="color"][data-path="${path}"]`)
            .forEach(c => { c.value = input.value; });
        }
      };
      input.addEventListener('input', sync);
      input.addEventListener('change', sync);
    });

    // Handle visual toggle switches bound to a DB boolean via data-toggle-path
    el.querySelectorAll('[data-toggle-path]').forEach(tog => {
      const path = tog.dataset.togglePath;
      // Set initial visual state from DB
      tog.classList.toggle('on', !!getPath(DB, path));
      // Bind click only once
      if (!tog._togglePathBound) {
        tog._togglePathBound = true;
        tog.addEventListener('click', () => {
          const next = !getPath(DB, path);
          setPath(DB, path, next);
          tog.classList.toggle('on', next);
        });
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════
     SECTION POPULATORS
  ═══════════════════════════════════════════════════════════ */

  function populateSection(id) {
    switch(id) {
      case 'dashboard':       renderDashboard();          break;
      case 'configuracion':   bindInputs(); populateCountrySelect(); break;
      case 'tema':            bindInputs(); break;
      case 'hero':            renderHeroEditor();    break;
      case 'clientes':        renderClientsTable();  break;
      case 'caracteristicas': renderFeaturesEditor();break;
      case 'beneficios':      renderBenefitsTable(); break;
      case 'modulos':         renderModulesTable();  break;
      case 'estadisticas':    renderStatsTable();    break;
      case 'testimonios':     renderTestimonialsTable(); break;
      case 'precios':         renderPricingEditor(); break;
      case 'faq':             renderFAQTable();      break;
      case 'secciones':       renderSectionsManager(); break;
      case 'exportar':        renderExport();        break;
    }
    bindInputs(document.getElementById('section-' + id));
  }

  /* ── Dashboard ────────────────────────────────────────────── */
  function renderDashboard() {
    const kpiGrid = document.getElementById('kpi-grid');
    if (!kpiGrid) return;
    const kpis = [
      { label:'Módulos', value: DB.modules.items.length,      icon:'grid-3x3', color:'#4F8EF7', bg:'#EFF6FF' },
      { label:'Testimonios',value:DB.testimonials.items.length,icon:'message-square',color:'#34D399',bg:'#ECFDF5'},
      { label:'Planes',  value: DB.pricing.plans.length,      icon:'tag',      color:'#A78BFA', bg:'#F5F3FF' },
      { label:'FAQs',    value: DB.faq.items.length,          icon:'help-circle',color:'#FBBF24',bg:'#FFFBEB'}
    ];
    kpiGrid.innerHTML = kpis.map(k => `
      <div class="kpi-card">
        <div class="kpi-icon" style="background:${k.bg}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="${k.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               data-lucide="${k.icon}"></svg>
        </div>
        <div>
          <div class="kpi-value">${k.value}</div>
          <div class="kpi-label">${k.label}</div>
        </div>
      </div>
    `).join('');

    const secList = document.getElementById('dash-sections-list');
    if (secList) {
      secList.innerHTML = DB.sections.map(s => `
        <div class="section-row">
          <span class="section-row-name">${s.id}</span>
          <span class="badge-vis ${s.visible ? 'badge-on' : 'badge-off'}">
            ${s.visible ? 'Visible' : 'Oculta'}
          </span>
        </div>
      `).join('');
    }
  }

  /* ── Hero editor ──────────────────────────────────────────── */
  function renderHeroEditor() {
    const container = document.getElementById('hero-stats-editor');
    if (!container) return;
    container.innerHTML = `
      <div class="table-wrap">
        <table class="admin-table">
          <thead><tr><th>#</th><th>Valor</th><th>Sufijo</th><th>Etiqueta</th><th>Acc.</th></tr></thead>
          <tbody id="hero-stats-tbody"></tbody>
        </table>
      </div>
      <button class="btn-add-row" id="hero-stats-add">
        <svg data-lucide="plus-circle"></svg> Agregar estadística
      </button>
    `;
    renderHeroStatsRows();
    document.getElementById('hero-stats-add')?.addEventListener('click', () => {
      DB.hero.stats.push({ value: 0, suffix: '+', label: 'Nueva estadística' });
      renderHeroStatsRows();
      if (window.lucide) lucide.createIcons();
    });
  }

  function renderHeroStatsRows() {
    const tbody = document.getElementById('hero-stats-tbody');
    if (!tbody) return;
    tbody.innerHTML = DB.hero.stats.map((s, i) => `
      <tr>
        <td>${i+1}</td>
        <td><input class="table-input" type="number" value="${s.value}" data-arr="hero.stats" data-idx="${i}" data-key="value"/></td>
        <td><input class="table-input" type="text"   value="${s.suffix}" data-arr="hero.stats" data-idx="${i}" data-key="suffix" style="width:60px"/></td>
        <td><input class="table-input" type="text"   value="${s.label}" data-arr="hero.stats" data-idx="${i}" data-key="label"/></td>
        <td><button class="btn-row-del" data-arr="hero.stats" data-idx="${i}">✕</button></td>
      </tr>
    `).join('');
    bindArrayInputs(tbody, DB.hero.stats);
    bindDeleteBtns(tbody, DB.hero.stats, renderHeroStatsRows);
  }

  /* ── Clients table ────────────────────────────────────────── */
  function renderClientsTable() {
    renderArrayTable('clients-tbody', DB.clients.items,
      ['name', 'initial'],
      ['Nombre', 'Inicial'],
      () => renderClientsTable()
    );
    document.getElementById('clients-add')?.onclick = () => {
      DB.clients.items.push({ name: 'Nuevo cliente', initial: 'NC' });
      renderClientsTable();
    };
  }

  /* ── Benefits table ───────────────────────────────────────── */
  function renderBenefitsTable() {
    renderArrayTable('benefits-tbody', DB.benefits.items,
      ['icon', 'title', 'description', 'color'],
      ['Icono', 'Título', 'Descripción', 'Color'],
      () => renderBenefitsTable()
    );
    document.getElementById('benefits-add')?.onclick = () => {
      DB.benefits.items.push({ icon:'star', title:'Nuevo beneficio', description:'Descripción', color:'#4F8EF7' });
      renderBenefitsTable();
    };
  }

  /* ── Modules table ────────────────────────────────────────── */
  function renderModulesTable() {
    renderArrayTable('modules-tbody', DB.modules.items,
      ['icon', 'title', 'description', 'tag', 'color'],
      ['Icono', 'Título', 'Descripción', 'Tag', 'Color'],
      () => renderModulesTable()
    );
    document.getElementById('modules-add')?.onclick = () => {
      DB.modules.items.push({ icon:'box', title:'Nuevo módulo', description:'Descripción', tag: null, color:'#4F8EF7', bg:'#EFF6FF' });
      renderModulesTable();
    };
  }

  /* ── Stats table ──────────────────────────────────────────── */
  function renderStatsTable() {
    renderArrayTable('stats-tbody', DB.stats.items,
      ['icon', 'value', 'suffix', 'label'],
      ['Icono', 'Valor', 'Sufijo', 'Etiqueta'],
      () => renderStatsTable()
    );
    document.getElementById('stats-add')?.onclick = () => {
      DB.stats.items.push({ icon:'bar-chart', value:0, suffix:'+', label:'Nueva métrica' });
      renderStatsTable();
    };
  }

  /* ── Testimonials table ───────────────────────────────────── */
  function renderTestimonialsTable() {
    renderArrayTable('testimonials-tbody', DB.testimonials.items,
      ['name', 'role', 'company', 'rating', 'quote'],
      ['Nombre', 'Cargo', 'Empresa', 'Estrellas', 'Testimonio'],
      () => renderTestimonialsTable()
    );
    document.getElementById('testimonials-add')?.onclick = () => {
      DB.testimonials.items.push({ name:'Nombre', role:'Cargo', company:'Empresa', rating:5, quote:'Testimonio aquí...' });
      renderTestimonialsTable();
    };
  }

  /* ── FAQ table ────────────────────────────────────────────── */
  function renderFAQTable() {
    renderArrayTable('faq-tbody', DB.faq.items,
      ['question', 'answer'],
      ['Pregunta', 'Respuesta'],
      () => renderFAQTable()
    );
    document.getElementById('faq-add')?.onclick = () => {
      DB.faq.items.push({ question:'Nueva pregunta', answer:'Respuesta...' });
      renderFAQTable();
    };
  }

  /* ── Features editor ──────────────────────────────────────── */
  function renderFeaturesEditor() {
    const container = document.getElementById('features-tabs-editor');
    if (!container) return;
    container.innerHTML = DB.features.tabs.map((tab, i) => `
      <div style="border:1px solid var(--adm-border);border-radius:var(--adm-r-lg);margin-bottom:1rem;overflow:hidden">
        <div style="padding:.85rem 1.25rem;background:var(--adm-bg);display:flex;align-items:center;gap:.75rem">
          <span style="font-size:.85rem;font-weight:700">Pestaña ${i+1}:</span>
          <span style="font-size:.85rem;color:var(--adm-text2)">${tab.label}</span>
        </div>
        <div style="padding:1.25rem">
          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">Etiqueta de pestaña</label>
              <input class="admin-input" type="text" value="${tab.label}" data-feat-tab="${i}" data-key="label"/>
            </div>
            <div class="form-group">
              <label class="form-label">Icono (Lucide)</label>
              <input class="admin-input" type="text" value="${tab.icon}" data-feat-tab="${i}" data-key="icon"/>
            </div>
            <div class="form-group form-group-full">
              <label class="form-label">Titular</label>
              <input class="admin-input" type="text" value="${tab.headline}" data-feat-tab="${i}" data-key="headline"/>
            </div>
            <div class="form-group form-group-full">
              <label class="form-label">Descripción</label>
              <textarea class="admin-input admin-textarea" data-feat-tab="${i}" data-key="description">${tab.description}</textarea>
            </div>
          </div>
          <p style="font-size:.78rem;font-weight:700;margin:.75rem 0 .5rem;color:var(--adm-text2)">Items (${tab.items.length})</p>
          ${tab.items.map((item, j) => `
            <div style="display:flex;gap:.5rem;margin-bottom:.4rem">
              <input class="table-input" style="width:90px" type="text" value="${item.icon}"
                     data-feat-tab="${i}" data-feat-item="${j}" data-key="icon" placeholder="icono"/>
              <input class="table-input" type="text" value="${item.text}"
                     data-feat-tab="${i}" data-feat-item="${j}" data-key="text" placeholder="texto"/>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('[data-feat-tab]').forEach(input => {
      input.addEventListener('input', () => {
        const ti = parseInt(input.dataset.featTab);
        const key = input.dataset.key;
        if (input.dataset.featItem !== undefined) {
          const ji = parseInt(input.dataset.featItem);
          DB.features.tabs[ti].items[ji][key] = input.value;
        } else {
          DB.features.tabs[ti][key] = input.value;
        }
      });
    });
  }

  /* ── Pricing editor ───────────────────────────────────────── */
  function renderPricingEditor() {
    const container = document.getElementById('pricing-plans-editor');
    if (!container) return;
    container.innerHTML = DB.pricing.plans.map((plan, i) => `
      <div class="plan-editor">
        <div class="plan-editor-header" data-plan="${i}">
          <h4>${plan.name} <small style="font-weight:400;color:var(--adm-text2)">USD $${plan.price_monthly}/mes</small></h4>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               style="width:16px;height:16px" data-lucide="chevron-down"></svg>
        </div>
        <div class="plan-editor-body" id="plan-body-${i}">
          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">Nombre del plan</label>
              <input class="admin-input" type="text" value="${plan.name}" data-plan="${i}" data-key="name"/>
            </div>
            <div class="form-group">
              <label class="form-label">Badge / Etiqueta</label>
              <input class="admin-input" type="text" value="${plan.badge||''}" data-plan="${i}" data-key="badge"/>
            </div>
            <div class="form-group">
              <label class="form-label">Precio mensual (USD)</label>
              <input class="admin-input" type="number" value="${plan.price_monthly}" data-plan="${i}" data-key="price_monthly"/>
            </div>
            <div class="form-group">
              <label class="form-label">Precio anual (USD)</label>
              <input class="admin-input" type="number" value="${plan.price_annual}" data-plan="${i}" data-key="price_annual"/>
            </div>
            <div class="form-group form-group-full">
              <label class="form-label">Descripción</label>
              <input class="admin-input" type="text" value="${plan.description}" data-plan="${i}" data-key="description"/>
            </div>
            <div class="form-group">
              <label class="form-label">Texto del botón CTA</label>
              <input class="admin-input" type="text" value="${plan.cta}" data-plan="${i}" data-key="cta"/>
            </div>
            <div class="form-group">
              <label class="form-label">¿Plan destacado?</label>
              <select class="admin-input" data-plan="${i}" data-key="highlighted">
                <option value="false" ${!plan.highlighted?'selected':''}>No</option>
                <option value="true" ${plan.highlighted?'selected':''}>Sí</option>
              </select>
            </div>
          </div>
          <div class="plan-features-editor">
            <p style="font-size:.78rem;font-weight:700;margin-bottom:.75rem;color:var(--adm-text2)">
              Características del plan
            </p>
            ${plan.features.map((f, j) => `
              <div class="plan-feature-row">
                <input type="checkbox" ${f.included?'checked':''} data-plan="${i}" data-feat="${j}" data-key="included"/>
                <input class="table-input" type="text" value="${f.text}" data-plan="${i}" data-feat="${j}" data-key="text"/>
                <button class="btn-row-del" data-plan="${i}" data-feat="${j}" data-action="del-feat">✕</button>
              </div>
            `).join('')}
            <button class="btn-add-row" data-plan="${i}" data-action="add-feat" style="margin-top:.5rem">
              + Agregar característica
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Toggle plan body
    container.querySelectorAll('.plan-editor-header').forEach(hdr => {
      hdr.addEventListener('click', () => {
        const body = document.getElementById('plan-body-' + hdr.dataset.plan);
        body?.classList.toggle('open');
      });
    });

    // Plan field inputs
    container.querySelectorAll('[data-plan][data-key]:not([data-feat])').forEach(input => {
      input.addEventListener('input', () => {
        const pi = parseInt(input.dataset.plan);
        const key = input.dataset.key;
        let val = input.type === 'checkbox' ? input.checked : input.value;
        if (key === 'highlighted') val = val === 'true';
        if (key === 'price_monthly' || key === 'price_annual') val = parseFloat(val) || 0;
        DB.pricing.plans[pi][key] = val;
      });
    });

    // Feature inputs
    container.querySelectorAll('[data-plan][data-feat][data-key]').forEach(input => {
      input.addEventListener('change', () => {
        const pi = parseInt(input.dataset.plan);
        const fi = parseInt(input.dataset.feat);
        const key = input.dataset.key;
        DB.pricing.plans[pi].features[fi][key] = input.type === 'checkbox' ? input.checked : input.value;
      });
      input.addEventListener('input', () => {
        if (input.type !== 'checkbox') {
          const pi = parseInt(input.dataset.plan);
          const fi = parseInt(input.dataset.feat);
          DB.pricing.plans[pi].features[fi][input.dataset.key] = input.value;
        }
      });
    });

    // Delete / add features
    container.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pi = parseInt(btn.dataset.plan);
        if (btn.dataset.action === 'del-feat') {
          const fi = parseInt(btn.dataset.feat);
          DB.pricing.plans[pi].features.splice(fi, 1);
        } else if (btn.dataset.action === 'add-feat') {
          DB.pricing.plans[pi].features.push({ text: 'Nueva característica', included: true });
        }
        renderPricingEditor();
        if (window.lucide) lucide.createIcons();
      });
    });
  }

  /* ── Sections manager ─────────────────────────────────────── */
  function renderSectionsManager() {
    const container = document.getElementById('sections-list');
    if (!container) return;
    const sorted = [...DB.sections].sort((a,b) => a.order - b.order);
    container.innerHTML = sorted.map((sec, i) => `
      <div class="section-item" data-sec-id="${sec.id}">
        <div class="section-handle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               data-lucide="grip-vertical"></svg>
        </div>
        <span class="section-name">${sec.id}</span>
        <input class="section-order-input" type="number" value="${sec.order}" min="1" max="20"
               data-sec-order="${sec.id}"/>
        <div class="toggle-switch-sm ${sec.visible ? 'on' : ''}" data-sec-toggle="${sec.id}">
          <div class="toggle-knob-sm"></div>
        </div>
        <span class="badge-vis ${sec.visible ? 'badge-on' : 'badge-off'}" data-sec-badge="${sec.id}">
          ${sec.visible ? 'Visible' : 'Oculta'}
        </span>
      </div>
    `).join('');

    // Toggle visibility
    container.querySelectorAll('[data-sec-toggle]').forEach(tog => {
      tog.addEventListener('click', () => {
        const id = tog.dataset.secToggle;
        const sec = DB.sections.find(s => s.id === id);
        if (sec) {
          sec.visible = !sec.visible;
          tog.classList.toggle('on', sec.visible);
          const badge = container.querySelector(`[data-sec-badge="${id}"]`);
          if (badge) {
            badge.textContent = sec.visible ? 'Visible' : 'Oculta';
            badge.className = `badge-vis ${sec.visible ? 'badge-on' : 'badge-off'}`;
          }
        }
      });
    });

    // Order inputs
    container.querySelectorAll('[data-sec-order]').forEach(input => {
      input.addEventListener('change', () => {
        const id = input.dataset.secOrder;
        const sec = DB.sections.find(s => s.id === id);
        if (sec) sec.order = parseInt(input.value) || 1;
      });
    });

    if (window.lucide) lucide.createIcons();
  }

  /* ── Country select for market badge ─────────────────────── */
  function populateCountrySelect() {
    const sel = document.getElementById('mb-country-select');
    if (!sel) return;
    const current = getPath(DB, 'config.marketBadge.countryCode') || 'DO';
    const sorted  = [...(DB.countries || [])].sort((a, b) => a.name.localeCompare(b.name));
    sel.innerHTML = sorted.map(c =>
      `<option value="${c.code}" ${c.code === current ? 'selected' : ''}>
        ${c.flag || ''} ${c.name} / ${c.nameEn} (${c.code})
       </option>`
    ).join('');
    // bind change so DB stays in sync
    if (!sel._countryBound) {
      sel._countryBound = true;
      sel.addEventListener('change', () => {
        setPath(DB, 'config.marketBadge.countryCode', sel.value);
      });
    }
  }

  /* ── Export / Import ──────────────────────────────────────── */
  function renderExport() {
    const pre = document.getElementById('json-preview');
    if (pre) pre.textContent = JSON.stringify(DB, null, 2);

    const exportBtn = document.getElementById('btn-export');
    if (exportBtn && !exportBtn._bound) {
      exportBtn._bound = true;
      exportBtn.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(DB, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'eims-config.json'; a.click();
        URL.revokeObjectURL(url);
        toast('Archivo descargado');
      });
    }

    const importBtn = document.getElementById('btn-import');
    const importFile = document.getElementById('import-file');
    if (importBtn && !importBtn._bound) {
      importBtn._bound = true;
      importBtn.addEventListener('click', () => importFile?.click());
      importFile?.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
          try {
            DB = JSON.parse(ev.target.result);
            save();
            renderExport();
            toast('Datos importados correctamente');
          } catch (err) {
            toast('Error al importar: ' + err.message, 'error');
          }
        };
        reader.readAsText(file);
      });
    }
  }

  /* ─── Generic array table renderer ──────────────────────────── */
  function renderArrayTable(tbodyId, arr, keys, labels, refresh) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    tbody.innerHTML = arr.map((row, i) => `
      <tr>
        <td>${i+1}</td>
        ${keys.map(k => `
          <td>
            ${k === 'description' || k === 'answer' || k === 'quote'
              ? `<textarea class="table-input" style="min-height:56px" data-arr-idx="${i}" data-arr-key="${k}">${row[k] || ''}</textarea>`
              : `<input class="table-input" type="${k==='rating'?'number':'text'}" value="${row[k] || ''}" data-arr-idx="${i}" data-arr-key="${k}" ${k==='rating'?'min="1" max="5"':''}/>`
            }
          </td>
        `).join('')}
        <td><button class="btn-row-del" data-arr-del="${i}">✕</button></td>
      </tr>
    `).join('');

    tbody.querySelectorAll('[data-arr-idx]').forEach(input => {
      const handler = () => {
        const idx = parseInt(input.dataset.arrIdx);
        const key = input.dataset.arrKey;
        arr[idx][key] = input.type === 'number' ? parseFloat(input.value) || 0 : input.value;
      };
      input.addEventListener('input', handler);
      input.addEventListener('change', handler);
    });

    tbody.querySelectorAll('[data-arr-del]').forEach(btn => {
      btn.addEventListener('click', () => {
        arr.splice(parseInt(btn.dataset.arrDel), 1);
        refresh();
        if (window.lucide) lucide.createIcons();
      });
    });
  }

  /* ─── Array field binder ────────────────────────────────────── */
  function bindArrayInputs(scope, arr) {
    scope.querySelectorAll('[data-arr]').forEach(input => {
      input.addEventListener('input', () => {
        const idx = parseInt(input.dataset.idx);
        const key = input.dataset.key;
        arr[idx][key] = input.type === 'number' ? parseFloat(input.value) || 0 : input.value;
      });
    });
  }
  function bindDeleteBtns(scope, arr, refresh) {
    scope.querySelectorAll('[data-arr][data-idx]').forEach(btn => {
      if (btn.tagName === 'BUTTON') {
        btn.addEventListener('click', () => {
          arr.splice(parseInt(btn.dataset.idx), 1);
          refresh();
          if (window.lucide) lucide.createIcons();
        });
      }
    });
  }

  /* ─── Global save / reset ────────────────────────────────────── */
  function initActions() {
    document.getElementById('btn-save-all')?.addEventListener('click', save);
    document.getElementById('btn-reset')?.addEventListener('click', () => {
      if (confirm('¿Restaurar la configuración original? Se perderán todos los cambios.')) {
        localStorage.removeItem('eims_db');
        DB = JSON.parse(JSON.stringify(window.EIMS_DB));
        toast('Configuración restaurada', 'info');
        setTimeout(() => location.reload(), 1200);
      }
    });
  }

  /* ─── Boot ───────────────────────────────────────────────────── */
  function boot() {
    initNav();
    initActions();
    if (window.lucide) lucide.createIcons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
