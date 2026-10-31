/**
 * Easy-IMS Database
 * Table-driven data store – edit here or through the Admin Panel.
 * The admin panel saves overrides to localStorage; this file is the default.
 */
window.EIMS_DB = {

  /* Content version: change it on every publish. A browser that saved an older copy through the admin panel
     (localStorage "eims_db") drops it instead of showing old content over the published one. */
  contentVersion: "2026-10-31-3",

  /* ─────────────────────────── SITE CONFIG ─────────────────────────── */
  config: {
    siteName:    "Easy-IMS",
    domain:      "easy-ims.com",
    tagline:     "Software que transforma tu negocio",
    description: "Plataforma integral de gestión empresarial: facturación, inventario, contabilidad y más.",
    phone:       "+1 (809) 870-8940",
    whatsapp:    "18098708940",
    email:       "hello@mseller.app",
    address:     "Av. Charles Summer No.18, Plaza Los Prados, Santo Domingo, RD",
    trialDays:   15,
    year:        2026,
    marketBadge: {
      visible:     true,
      countryCode: "DO",
      text:        "Desarrollado para el Mercado Dominicano",
      textEn:      "Built for the Dominican Market",
      since:       "Est. 2010"
    }
  },

  /* ─────────────────────────── COUNTRIES TABLE ───────────────────────── */
  countries: [
    /* Caribbean & Central America */
    { code:"DO", flag:"🇩🇴", name:"República Dominicana",  nameEn:"Dominican Republic"   },
    { code:"PR", flag:"🇵🇷", name:"Puerto Rico",           nameEn:"Puerto Rico"          },
    { code:"CU", flag:"🇨🇺", name:"Cuba",                  nameEn:"Cuba"                 },
    { code:"HT", flag:"🇭🇹", name:"Haití",                 nameEn:"Haiti"                },
    { code:"JM", flag:"🇯🇲", name:"Jamaica",               nameEn:"Jamaica"              },
    { code:"TT", flag:"🇹🇹", name:"Trinidad y Tobago",     nameEn:"Trinidad & Tobago"    },
    { code:"BB", flag:"🇧🇧", name:"Barbados",              nameEn:"Barbados"             },
    { code:"GT", flag:"🇬🇹", name:"Guatemala",             nameEn:"Guatemala"            },
    { code:"HN", flag:"🇭🇳", name:"Honduras",              nameEn:"Honduras"             },
    { code:"SV", flag:"🇸🇻", name:"El Salvador",           nameEn:"El Salvador"          },
    { code:"NI", flag:"🇳🇮", name:"Nicaragua",             nameEn:"Nicaragua"            },
    { code:"CR", flag:"🇨🇷", name:"Costa Rica",            nameEn:"Costa Rica"           },
    { code:"PA", flag:"🇵🇦", name:"Panamá",                nameEn:"Panama"               },
    { code:"BZ", flag:"🇧🇿", name:"Belice",                nameEn:"Belize"               },
    /* South America */
    { code:"CO", flag:"🇨🇴", name:"Colombia",              nameEn:"Colombia"             },
    { code:"VE", flag:"🇻🇪", name:"Venezuela",             nameEn:"Venezuela"            },
    { code:"EC", flag:"🇪🇨", name:"Ecuador",               nameEn:"Ecuador"              },
    { code:"PE", flag:"🇵🇪", name:"Perú",                  nameEn:"Peru"                 },
    { code:"BO", flag:"🇧🇴", name:"Bolivia",               nameEn:"Bolivia"              },
    { code:"PY", flag:"🇵🇾", name:"Paraguay",              nameEn:"Paraguay"             },
    { code:"UY", flag:"🇺🇾", name:"Uruguay",               nameEn:"Uruguay"              },
    { code:"AR", flag:"🇦🇷", name:"Argentina",             nameEn:"Argentina"            },
    { code:"CL", flag:"🇨🇱", name:"Chile",                 nameEn:"Chile"                },
    { code:"BR", flag:"🇧🇷", name:"Brasil",                nameEn:"Brazil"               },
    { code:"GY", flag:"🇬🇾", name:"Guyana",                nameEn:"Guyana"               },
    { code:"SR", flag:"🇸🇷", name:"Surinam",               nameEn:"Suriname"             },
    /* North America */
    { code:"MX", flag:"🇲🇽", name:"México",                nameEn:"Mexico"               },
    { code:"US", flag:"🇺🇸", name:"Estados Unidos",        nameEn:"United States"        },
    { code:"CA", flag:"🇨🇦", name:"Canadá",                nameEn:"Canada"               },
    /* Europe */
    { code:"ES", flag:"🇪🇸", name:"España",                nameEn:"Spain"                },
    { code:"PT", flag:"🇵🇹", name:"Portugal",              nameEn:"Portugal"             },
    { code:"GB", flag:"🇬🇧", name:"Reino Unido",           nameEn:"United Kingdom"       },
    { code:"FR", flag:"🇫🇷", name:"Francia",               nameEn:"France"               },
    { code:"DE", flag:"🇩🇪", name:"Alemania",              nameEn:"Germany"              },
    { code:"IT", flag:"🇮🇹", name:"Italia",                nameEn:"Italy"                },
    { code:"NL", flag:"🇳🇱", name:"Países Bajos",          nameEn:"Netherlands"          },
    { code:"BE", flag:"🇧🇪", name:"Bélgica",               nameEn:"Belgium"              },
    { code:"CH", flag:"🇨🇭", name:"Suiza",                 nameEn:"Switzerland"          },
    { code:"SE", flag:"🇸🇪", name:"Suecia",                nameEn:"Sweden"               },
    { code:"NO", flag:"🇳🇴", name:"Noruega",               nameEn:"Norway"               },
    { code:"DK", flag:"🇩🇰", name:"Dinamarca",             nameEn:"Denmark"              },
    { code:"PL", flag:"🇵🇱", name:"Polonia",               nameEn:"Poland"               },
    { code:"RU", flag:"🇷🇺", name:"Rusia",                 nameEn:"Russia"               },
    /* Asia & Middle East */
    { code:"JP", flag:"🇯🇵", name:"Japón",                 nameEn:"Japan"                },
    { code:"CN", flag:"🇨🇳", name:"China",                 nameEn:"China"                },
    { code:"KR", flag:"🇰🇷", name:"Corea del Sur",         nameEn:"South Korea"          },
    { code:"IN", flag:"🇮🇳", name:"India",                 nameEn:"India"                },
    { code:"SG", flag:"🇸🇬", name:"Singapur",              nameEn:"Singapore"            },
    { code:"AE", flag:"🇦🇪", name:"Emiratos Árabes",       nameEn:"United Arab Emirates" },
    { code:"IL", flag:"🇮🇱", name:"Israel",                nameEn:"Israel"               },
    { code:"TR", flag:"🇹🇷", name:"Turquía",               nameEn:"Turkey"               },
    /* Africa & Oceania */
    { code:"ZA", flag:"🇿🇦", name:"Sudáfrica",             nameEn:"South Africa"         },
    { code:"NG", flag:"🇳🇬", name:"Nigeria",               nameEn:"Nigeria"              },
    { code:"EG", flag:"🇪🇬", name:"Egipto",                nameEn:"Egypt"                },
    { code:"MA", flag:"🇲🇦", name:"Marruecos",             nameEn:"Morocco"              },
    { code:"AU", flag:"🇦🇺", name:"Australia",             nameEn:"Australia"            },
    { code:"NZ", flag:"🇳🇿", name:"Nueva Zelanda",         nameEn:"New Zealand"          }
  ],

  /* ─────────────────────────── ANNOUNCE BAR ─────────────────────────── */
  announce: {
    visible:  true,
    dgii_url: "https://dgii.gov.do/noticias/Paginas/DGII-otorga-prorroga-seis-meses-Peque%C3%B1os-Micros-y-no-clasificados.aspx",
    es: "⚡ <strong>Prórroga DGII:</strong> MYPEs y contribuyentes no clasificados — implementa e-CF antes del <strong>15 de noviembre 2026</strong> <span class=\"announce-sep\">·</span> Prórroga de 6 meses a partir del 15 de mayo 2026",
    en: "⚡ <strong>DGII Extension:</strong> MYPEs & unclassified taxpayers — implement e-CF before <strong>November 15, 2026</strong> <span class=\"announce-sep\">·</span> 6-month extension from May 15, 2026",
    cta_es: "Ver comunicado oficial →",
    cta_en: "Official announcement →",
    cta2_es: "Adáptate con Easy-IMS",
    cta2_en: "Get ready with Easy-IMS"
  },

  /* ─────────────────────────── DEVICES SHOWCASE ──────────────────────── */
  devices: {
    visible: true,
    sectionLabel: "Multi-plataforma",
    headline: "Tu negocio, en todos tus dispositivos",
    subheadline: "Escritorio, tablet o móvil — Easy-IMS se adapta perfecto a cualquier pantalla sin instalar nada.",
    stats: [
      { value: 100,    suffix: "%",     label: "Basado en web",              sublabel: "Sin instalar nada",      color: "#34D399", ring: true  },
      { value: 18.5,   suffix: "M+",    label: "e-CF procesados",       sublabel: "Acumulados a la fecha",  color: "#4F8EF7", ring: false, visible: false }, // oculto temporalmente -- reactivar cuando el número sea real
      { value: 2597,   suffix: "+",     label: "Empresas activas",      sublabel: "En Latinoamérica",       color: "#A78BFA", ring: false, visible: false }, // oculto temporalmente -- reactivar cuando el número sea real
      { value: "",     suffix: "Muy fácil", label: "Para certificarte",  sublabel: "Con CerteCF · DGII",    color: "#FBBF24", ring: false }
    ]
  },

  /* ─────────────────────────── UI STRINGS (tabla de textos variables) ── */
  ui: {
    pricingMonthly:       "Mensual",
    pricingAnnual:        "Anual",
    pricingPeriod:        "/mes",
    requestDemo:          "Solicitar demo",
    footerRights:         "Todos los derechos reservados.",
    whatsappMsg:          "Hola, quiero más información sobre Easy-IMS",
    contactResponseTitle: "Tiempo de respuesta",
    contactResponseBody:  "Un especialista se comunicará contigo en menos de <strong>2 horas hábiles</strong>.",
    form: {
      nameLbl:    "Nombre completo",          namePH:    "Juan Pérez",
      companyLbl: "Empresa",                  companyPH: "Mi Empresa SRL",
      emailLbl:   "Correo electrónico",       emailPH:   "juan@empresa.com",
      phoneLbl:   "Teléfono",                 phonePH:   "+1 (809) 000-0000",
      employLbl:  "Número de empleados",      selectPH:  "Seleccionar...",
      messageLbl: "¿En qué te podemos ayudar?",
      messagePH:  "Cuéntanos sobre tu negocio y necesidades..."
    }
  },

  /* ─────────────────────────── LIVE BANNER (sobre los dispositivos) ──── */
  liveBanner: {
    visible:  true,
    label:    "EN VIVO",
    labelEn:  "LIVE",
    text:     "Dashboard actualizándose en tiempo real",
    textEn:   "Dashboard updating in real time",
    chips: [
      { value: "↑ 12.4%",   label: "Ventas",    labelEn: "Sales",     color: "green"  },
      { value: "147",        label: "Facturas",  labelEn: "Invoices",  color: "blue"   },
      { value: "E31–E47",    label: "e-CF",      labelEn: "e-CF",      color: "purple" }
    ]
  },

  /* ─────────────────────────── HERO FLOATING CARDS ───────────────────── */
  heroFloats: [
    { icon: "trending-up", bg: "rgba(52,211,153,.15)",  value: "+38% ventas",     label: "vs. mes anterior" },
    { icon: "zap",         bg: "rgba(79,142,247,.15)",  value: "e-CF automático", label: "Firma y envío a la DGII" },
    { icon: "shield",      bg: "rgba(167,139,250,.15)", value: "Respaldos cifrados", label: "En la nube, 90 días" }
  ],

  /* ─────────────────────────── HERO MOCKUP (datos demo) ──────────────── */
  mockup: {
    chartLabel: "Ventas — últimos 12 meses",
    kpis: [
      { label: "Ventas hoy", value: "RD$84,320", change: "↑ 12.4%",    changeColor: "var(--c-success)" },
      { label: "Facturas",   value: "147",        change: "↑ 8.1%",     changeColor: "var(--c-success)" },
      { label: "Inventario", value: "2,841",      change: "▲ 3 alertas",changeColor: "var(--c-warning)" }
    ],
    rows: [
      { name: "Factura #2041", value: "RD$12,400", badge: "Pagada",    color: "#34D399", bc: "rgba(52,211,153,.15)", bcc: "#34D399" },
      { name: "Factura #2040", value: "RD$8,750",  badge: "Pendiente", color: "#4F8EF7", bc: "rgba(79,142,247,.15)", bcc: "#4F8EF7" },
      { name: "Factura #2039", value: "RD$21,200", badge: "Pagada",    color: "#34D399", bc: "rgba(52,211,153,.15)", bcc: "#34D399" }
    ]
  },

  /* ─────────────────────────── THEME ────────────────────────────────── */
  theme: {
    primaryColor:   "#4F8EF7",
    accentColor:    "#0DCFDA",
    accentColor2:   "#A78BFA",
    successColor:   "#34D399",
    fontHeading:    "Space Grotesk",
    fontBody:       "Inter",
    darkBg:         "#070B14",
    darkSurface:    "#0D1626",
    darkCard:       "#162035"
  },

  /* ─────────────────────────── NAVIGATION ───────────────────────────── */
  navigation: {
    logo:      "Easy-IMS",
    logoIcon:  "layers",
    items: [
      { label: "Inicio",          href: "#inicio",         order: 1, visible: true },
      { label: "Características", href: "#caracteristicas", order: 2, visible: true },
      { label: "Módulos",         href: "#modulos",         order: 3, visible: true },
      { label: "Estadísticas",    href: "#estadisticas",    order: 4, visible: false },
      { label: "Precios",         href: "#precios",         order: 5, visible: true },
      { label: "Testimonios",     href: "#testimonios",     order: 6, visible: true },
      { label: "Contacto",        href: "#contacto",        order: 7, visible: true }
    ],
    ctaLabel:  "Prueba Gratis",
    ctaHref:   "#contacto",
    adminHref: "admin/index.html"
  },

  /* ─────────────────────────── HERO ─────────────────────────────────── */
  hero: {
    visible: true,
    badge:       "🏛️ <span class=\"badge-blink\">En Proceso</span> · Certificación PSFE con la DGII · Ley 32-23",
    headline:    "El software empresarial que tu negocio necesita",
    subheadline: "Facturación electrónica, inventario en tiempo real, contabilidad y CRM integrado — todo en una sola plataforma inteligente.",
    ctaPrimary:  { label: "Comienza Gratis — 15 días", href: "#contacto" },
    ctaSecondary:{ label: "Ver demostración",           href: "#caracteristicas" },
    trustNote:   "Sin tarjeta de crédito · Sin contrato de permanencia",
    stats: [
      { value: 5000,  suffix: "+",  label: "Empresas activas", visible: false }, // oculto temporalmente -- reactivar cuando el número sea real, solo cambiar a true
      { value: 10,    suffix: "",   label: "Tipos de e-CF (E31–E47)" },
      { value: 15,    suffix: "+",  label: "Años de experiencia" },
      { value: 24,    suffix: "/7", label: "Soporte disponible" }
    ]
  },

  /* ─────────────────────────── CLIENTS CAROUSEL ─────────────────────── */
  clients: {
    visible: true,
    sectionLabel: "Empresas líderes que confían en Easy-IMS",
    items: [
      { name: "TechCorp RD",     initial: "TC" },
      { name: "Farma Plus",      initial: "FP" },
      { name: "Distribuidora NH",initial: "DN" },
      { name: "Grupo Horizonte", initial: "GH" },
      { name: "Retail Express",  initial: "RE" },
      { name: "Servicios BCP",   initial: "SB" },
      { name: "Industrias MD",   initial: "IM" },
      { name: "LogiTrack",       initial: "LT" }
    ]
  },

  /* ─────────────────────────── FEATURES TABS ────────────────────────── */
  features: {
    visible: true,
    sectionLabel: "Características",
    headline: "Todo lo que necesitas en una sola plataforma",
    subheadline: "Descubre las herramientas que hacen crecer tu empresa día a día.",
    tabs: [
      {
        id:    "facturacion",
        label: "Facturación",
        icon:  "receipt",
        color: "#4F8EF7",
        headline: "e-CF: Facturación electrónica según los estándares de la DGII",
        description: "Emite los 10 tipos de Comprobantes Fiscales Electrónicos (e-CF), validados contra los esquemas XSD de la DGII. Conforme a la Ley 32-23 y el Decreto 587-24, con modo contingencia según el instructivo de la DGII.",
        items: [
          { icon: "file-check",  text: "10 tipos e-CF: E31, E32, E33, E34, E41, E43, E44, E45, E46, E47" },
          { icon: "key",         text: "Firma digital RSA-SHA256 con tu certificado .p12, guardado cifrado" },
          { icon: "wifi-off",    text: "Envío en cola con reintentos automáticos a la DGII" },
          { icon: "archive",     text: "XML firmado y PDF de cada e-CF, descargables cuando quieras" },
          { icon: "award",       text: "CerteCF: te guiamos en los 15 pasos de certificación DGII" },
          { icon: "shield",      text: "Representación impresa con código QR y código de seguridad" }
        ]
      },
      {
        id:    "inventario",
        label: "Inventario",
        icon:  "package",
        color: "#0DCFDA",
        headline: "Control total de tu inventario en tiempo real",
        description: "Gestiona entradas, salidas, transferencias y alertas de stock mínimo desde cualquier lugar.",
        items: [
          { icon: "layers",     text: "Multi-almacén y multi-sucursal" },
          { icon: "alert-circle",text: "Alertas de stock mínimo por almacén" },
          { icon: "bar-chart-2",text: "Costo promedio ponderado, último costo o estándar" },
          { icon: "scan",       text: "Etiquetas con código de barras y QR; búsqueda con escáner" },
          { icon: "truck",      text: "Historial de movimientos por artículo y almacén" },
          { icon: "tag",        text: "Gestión de lotes y fechas de vencimiento" }
        ]
      },
      {
        id:    "contabilidad",
        label: "Contabilidad",
        icon:  "book-open",
        color: "#A78BFA",
        headline: "Contabilidad automatizada e integrada",
        description: "Genera asientos contables automáticos. Estados financieros en tiempo real con un solo clic.",
        items: [
          { icon: "git-branch",  text: "Asientos contables automáticos" },
          { icon: "trending-up", text: "Balance, P&G y flujo de caja" },
          { icon: "file-text",   text: "Reportes DGII 606, 607, 608 e IT-1" },
          { icon: "users",       text: "Cuentas por cobrar y por pagar" },
          { icon: "dollar-sign", text: "Multi-moneda y tasas de cambio" },
          { icon: "calendar",    text: "Asiento de cierre automático con vista previa" }
        ]
      },
      {
        id:    "crm",
        label: "CRM",
        icon:  "users",
        color: "#34D399",
        addon: true,
        headline: "Gestión de clientes y ventas inteligente",
        description: "Seguimiento completo del ciclo de ventas. Nunca pierdas un cliente potencial.",
        items: [
          { icon: "user-check",   text: "Pipeline de ventas visual (arrastrar y soltar)" },
          { icon: "message-circle",text: "Historial de actividades por oportunidad" },
          { icon: "target",       text: "Cotizaciones del ERP vinculadas a la oportunidad" },
          { icon: "bell",         text: "Tareas y seguimientos con fecha de vencimiento" },
          { icon: "pie-chart",    text: "Tasa de conversión (ganadas vs. perdidas)" },
          { icon: "share-2",      text: "Entra con tu mismo usuario del ERP (SSO)" }
        ]
      },
      {
        id:    "nomina",
        label: "Nómina",
        icon:  "briefcase",
        color: "#FBBF24",
        addon: true,
        headline: "Nómina y RRHH completamente automatizados",
        description: "Cálculo de salarios, deducciones de ley, prestaciones laborales y archivo TSS desde un solo lugar.",
        items: [
          { icon: "clock",      text: "Control de asistencia y horas extras" },
          { icon: "percent",    text: "Cálculo automático de ISR, AFP y SFS" },
          { icon: "file",       text: "Archivo TSS y declaraciones IR-3 / IR-13" },
          { icon: "award",      text: "Gestión de vacaciones y beneficios" },
          { icon: "credit-card",text: "Archivo de pago para la banca en línea" },
          { icon: "archive",    text: "Historial de nóminas y contratos" }
        ]
      },
      {
        id:    "fixed-assets",
        label: "Fixed Assets",
        icon:  "box",
        color: "#F97316",
        addon: true,
        headline: "Control total de tus activos fijos",
        description: "Registra, deprecia y da seguimiento a cada activo de la empresa desde una sola pantalla.",
        items: [
          { icon: "box",          text: "Registro completo de activos por categoría" },
          { icon: "trending-down",text: "Depreciación en línea recta por corridas de período" },
          { icon: "map-pin",      text: "Calendario de depreciación de cada activo" },
          { icon: "git-branch",   text: "Integración directa con Contabilidad (asientos automáticos)" },
          { icon: "file-text",    text: "Valor en libros y depreciación acumulada por activo" },
          { icon: "archive",      text: "Bajas de activos con ganancia o pérdida contabilizada" }
        ]
      }
    ]
  },

  /* ─────────────────────────── BENEFITS ─────────────────────────────── */
  benefits: {
    visible: true,
    sectionLabel: "¿Por qué Easy-IMS?",
    headline: "La ventaja competitiva que tu empresa merece",
    subheadline: "Más de 15 años perfeccionando el software de gestión empresarial para el mercado latinoamericano.",
    items: [
      { icon: "cloud",       color: "#4F8EF7", title: "100% en la nube",           description: "Accede desde cualquier dispositivo, en cualquier lugar, sin instalaciones ni mantenimiento de servidores." },
      { icon: "shield",      color: "#34D399", title: "Tus datos, protegidos y respaldados", description: "Cada empresa en su propia base de datos, conexión cifrada, certificados de firma guardados cifrados, auditoría de cada cambio y respaldo diario en la nube." },
      { icon: "zap",         color: "#0DCFDA", title: "Envío ágil a la DGII",       description: "Cada e-CF se firma y se envía a la DGII desde una cola en segundo plano; en nuestras mediciones, la mediana de punta a punta es de unos 7 segundos." },
      { icon: "life-buoy",   color: "#A78BFA", title: "Soporte 24/7",               description: "Equipo de expertos disponible por chat, teléfono y video. Respuesta garantizada en menos de 2 horas." },
      { icon: "trending-up", color: "#FBBF24", title: "Crece a tu ritmo",           description: "Agrega módulos, sucursales y usuarios cuando los necesites; cada módulo se activa o desactiva por empresa." },
      { icon: "cpu",         color: "#F87171", title: "Inteligencia artificial",    description: "Asistente de IA opcional, activable por empresa, que responde en lenguaje natural sobre artículos, saldos, facturas y la ayuda del sistema." }
    ]
  },

  /* ─────────────────────────── MODULES / SERVICES ───────────────────── */
  modules: {
    visible: true,
    sectionLabel: "Módulos",
    headline: "Una suite completa de herramientas empresariales",
    subheadline: "Cada módulo es poderoso por sí solo. Juntos son imbatibles.",
    items: [
      { icon: "receipt",      color: "#4F8EF7",  bg: "#EFF6FF",  title: "Facturación Pro",       description: "e-CF, NCF, facturas recurrentes y más.", tag: "Popular" },
      { icon: "package",      color: "#0DCFDA",  bg: "#ECFEFF",  title: "Inventario 360",        description: "Multi-almacén, lotes y trazabilidad.", tag: null },
      { icon: "book-open",    color: "#A78BFA",  bg: "#F5F3FF",  title: "Contabilidad",          description: "Asientos automáticos y cierre con vista previa.", tag: "Nuevo" },
      { icon: "users",        color: "#34D399",  bg: "#ECFDF5",  title: "CRM Ventas",            description: "Pipeline, cotizaciones y seguimiento.", tag: "Add-on" },
      { icon: "briefcase",    color: "#FBBF24",  bg: "#FFFBEB",  title: "Nómina & RRHH",         description: "TSS, ISR y control de personal.", tag: "Add-on" },
      { icon: "shopping-cart",color: "#F87171",  bg: "#FEF2F2",  title: "Punto de Venta",        description: "POS táctil para tienda física: cajas, turnos y cuadre.", tag: null },
      { icon: "truck",        color: "#60A5FA",  bg: "#EFF6FF",  title: "Compras & Proveedores", description: "Órdenes de compra, recepción e importaciones.", tag: null },
      { icon: "bar-chart-2",  color: "#818CF8",  bg: "#EEF2FF",  title: "Analítica & BI",        description: "Dashboards ejecutivos y KPIs en tiempo real.", tag: "Premium" },
      { icon: "credit-card",  color: "#F59E0B",  bg: "#FFFBEB",  title: "Cobros y Medios de Pago", description: "Efectivo, tarjeta (resultado del terminal: aprobado, declinado o pendiente), transferencias y pagos mixtos.", tag: null },
      { icon: "box",          color: "#F97316",  bg: "#FFF7ED",  title: "Fixed Assets",          description: "Control de activos fijos y depreciación en línea recta.", tag: "Add-on" }
    ]
  },

  /* ─────────────────────────── PLATFORM POWER ───────────────────────── */
  platform: {
    visible: true,
    sectionLabel: "Plataforma Empresarial",
    headline: "Potencia empresarial. Sin compromisos.",
    subheadline: "Easy-IMS está construido sobre una arquitectura probada en producción con las capacidades avanzadas que las empresas más exigentes requieren.",
    items: [
      {
        icon: "git-branch", color: "#A78BFA",
        title: "Motor de Reglas y Flujos",
        description: "Define reglas de negocio que se ejecutan automáticamente según condiciones configurables.",
        bullets: ["Condiciones: ≤, ENTRE, ELSE / por defecto", "Escalamiento automático por rol aprobador", "Historial completo de decisiones y auditoría"]
      },
      {
        icon: "check-square", color: "#4F8EF7",
        title: "Flujos de Aprobación",
        description: "Sistema multinivel para facturas de suplidores y de clientes, pagos a suplidores y límites de crédito.",
        bullets: ["Aprobación por rol y por monto, con delegaciones", "Bandeja de pendientes con aviso por correo", "Aprobación o rechazo automático según la regla"]
      },
      {
        icon: "cpu", color: "#0DCFDA",
        title: "Agente de IA Empresarial",
        description: "Asistente conversacional (opcional, se activa por empresa) que consulta artículos, saldos, facturas y reportes.",
        bullets: ["Consultas en lenguaje natural en tiempo real", "Usa datos de tu empresa solo si el administrador lo permite", "Gemini por defecto; Groq, OpenRouter u Ollama (local) opcionales"]
      },
      {
        icon: "building-2", color: "#34D399",
        title: "Multi-empresa / Multi-tenant",
        description: "Base de datos dedicada e independiente por empresa: los datos de una empresa nunca comparten base con otra.",
        bullets: ["Arquitectura DB-per-tenant en PostgreSQL", "JWT con routing automático por empresa", "Administración centralizada en una sola interfaz"]
      },
      {
        icon: "shield-check", color: "#FBBF24",
        title: "Auditoría y Cumplimiento",
        description: "Registro de actividad y auditoría por campo, protegida contra cambios en la base de datos.",
        bullets: ["Log: usuario, IP, dispositivo, geolocalización", "Auditoría por campo: valor anterior vs. nuevo", "Bloqueo de cuenta tras intentos fallidos"]
      },
      {
        icon: "globe", color: "#F87171",
        title: "Validación por País",
        description: "Reglas configurables por país: RNC, CÉDULA, EIN, RFC y cualquier formato personalizado.",
        bullets: ["Patrones regex configurables por campo y país", "Mensajes de error configurables", "Atributos requeridos por país"]
      },
      {
        icon: "toggle-right", color: "#60A5FA",
        title: "Módulos Dinámicos",
        description: "Activa o desactiva funcionalidades por empresa en tiempo real. Arquitectura de feature flags.",
        bullets: ["Registro de módulos con dependencias suaves", "Rutas y menús ocultos automáticamente", "Habilitación por empresa sin reinicio del sistema"]
      },
      {
        icon: "lock", color: "#818CF8",
        title: "Control de Acceso Granular",
        description: "Roles, permisos, grupos y delegaciones temporales con expiración automática.",
        bullets: ["Permisos por módulo, ruta y acción", "Delegaciones temporales con fecha de expiración", "Grupos de roles para asignación masiva"]
      },
      {
        icon: "bar-chart-2", color: "#34D399",
        title: "Inteligencia Financiera",
        description: "P&G, Balance General, Flujo de Caja y Aging de AR/AP en tiempo real.",
        bullets: ["Aging: al día, 1-30, 31-60, 61-90 y 90+ días", "Presupuesto y pronóstico vs. real por mes", "Top clientes y artículos por volumen de ventas"]
      }
    ]
  },

  /* ─────────────────────────── STATISTICS ───────────────────────────── */
  stats: {
    visible: true,
    headline: "Números que respaldan nuestra trayectoria",
    items: [
      { value: 2597,     suffix: "+",  label: "Empresas activas",              icon: "briefcase" },
      { value: 18500000, suffix: "+",  label: "e-CF procesados",               icon: "receipt"   },
      { value: 10,       suffix: "",   label: "Tipos de e-CF soportados (E31–E47)",    icon: "server"    },
      { value: 2000,     suffix: "+",  label: "Desarrolladores en comunidad",  icon: "users"     }
    ]
  },

  /* ─────────────────────────── HOW IT WORKS ─────────────────────────── */
  howItWorks: {
    visible: true,
    sectionLabel: "Cómo funciona",
    headline: "Empieza en minutos, no en semanas",
    subheadline: "Nuestro proceso de incorporación te guía paso a paso para que estés operativo en tiempo récord.",
    steps: [
      { number: "01", icon: "user-plus",   title: "Solicita tu prueba",   description: "Déjanos tus datos y te creamos una empresa de prueba con datos de demostración. Sin tarjeta de crédito ni compromiso." },
      { number: "02", icon: "settings",    title: "Configura tu empresa",  description: "Importa tus productos, clientes y catálogos con plantillas de Excel." },
      { number: "03", icon: "play-circle", title: "Comienza a operar",     description: "Tu equipo estará listo para facturar, gestionar inventario y más desde el día uno." },
      { number: "04", icon: "trending-up", title: "Crece sin límites",     description: "Agrega módulos, usuarios y sucursales conforme tu negocio escala." }
    ]
  },

  /* ─────────────────────────── TESTIMONIALS ─────────────────────────── */
  testimonials: {
    visible: true,
    sectionLabel: "Testimonios",
    headline: "Lo que dicen nuestros clientes",
    subheadline: "Miles de empresas en Latinoamérica ya transformaron su gestión con Easy-IMS.",
    items: [
      { name: "María González",     role: "Directora General",  company: "TechCorp RD",       rating: 5, quote: "Easy-IMS revolucionó completamente nuestra operación. Redujimos el tiempo de facturación en un 80% y los errores contables prácticamente desaparecieron." },
      { name: "Carlos Ramírez",     role: "Gerente Financiero", company: "Distribuidora NH",  rating: 5, quote: "El módulo de contabilidad es excepcional. Los reportes DGII se generan solos y el equipo ahorra más de 20 horas mensuales en tareas manuales." },
      { name: "Ana Martínez",       role: "CEO",                company: "Farma Plus",        rating: 5, quote: "Llevamos 5 años con Easy-IMS y nunca hemos considerado cambiar. El soporte 24/7 es incomparable. Cualquier duda se resuelve en minutos." },
      { name: "Roberto Sánchez",    role: "Director Comercial", company: "Retail Express",    rating: 5, quote: "El CRM integrado nos permitió aumentar nuestras ventas en un 35% en solo 6 meses. La visibilidad del pipeline es exactamente lo que necesitábamos." },
      { name: "Lucía Hernández",    role: "Contadora General",  company: "Grupo Horizonte",   rating: 5, quote: "Como contadora, valoró muchísimo la precisión de Easy-IMS. Los asientos automáticos y los reportes financieros me ahorran días de trabajo cada mes." },
      { name: "Diego Vargas",       role: "Gerente de TI",      company: "Servicios BCP",     rating: 5, quote: "La implementación fue sorprendentemente rápida. En dos semanas ya teníamos todos los módulos funcionando. El equipo de soporte fue clave en el proceso." }
    ]
  },

  /* ─────────────────────────── PRICING ──────────────────────────────── */
  pricing: {
    visible: true,
    sectionLabel: "Precios",
    headline: "Planes diseñados para cada etapa de tu negocio",
    subheadline: "Sin letra pequeña. Sin costos ocultos. Cancela cuando quieras.",
    billingNote: "Ahorra hasta un 20% con facturación anual",
    plans: [
      {
        id:          "starter",
        name:        "Starter",
        description: "Perfecto para emprendedores y microempresas",
        price_monthly: 29,
        price_annual:  23,
        currency:    "USD",
        highlighted: false,
        badge:       null,
        cta:         "Comenzar gratis",
        features: [
          { text: "Hasta 3 usuarios",              included: true },
          { text: "Facturación electrónica",        included: true },
          { text: "Inventario básico",              included: true },
          { text: "1 sucursal",                     included: true },
          { text: "Reportes básicos",               included: true },
          { text: "Soporte por email",              included: true },
          { text: "Contabilidad",          included: false },
          { text: "CRM y ventas",                   included: false },
          { text: "Nómina y RRHH",                  included: false },
          { text: "API y webhooks",                 included: false }
        ]
      },
      {
        id:          "professional",
        name:        "Profesional",
        description: "Para empresas en crecimiento que necesitan más",
        price_monthly: 79,
        price_annual:  63,
        currency:    "USD",
        highlighted: true,
        badge:       "Más popular",
        cta:         "Prueba 15 días gratis",
        features: [
          { text: "Hasta 15 usuarios",              included: true },
          { text: "Facturación electrónica ilimitada",included: true },
          { text: "Inventario avanzado multi-almacén",included: true },
          { text: "Hasta 5 sucursales",             included: true },
          { text: "Contabilidad completa",          included: true },
          { text: "CRM y pipeline de ventas",       included: true },
          { text: "Reportes y dashboards BI",       included: true },
          { text: "Soporte 24/7 chat y teléfono",   included: true },
          { text: "Nómina y RRHH",                  included: false },
          { text: "API y webhooks",                 included: false }
        ]
      },
      {
        id:          "gateway",
        name:        "Gateway e-CF",
        description: "Para empresas con su propio sistema que solo necesitan facturar electrónicamente con la DGII",
        price_monthly: 19,
        price_annual:  19,
        price_note:  "Incluye 300 e-CF al mes · US$0.05 por cada e-CF adicional",
        currency:    "USD",
        highlighted: false,
        badge:       "Por transacción",
        cta:         "Conectar mi sistema",
        features: [
          { text: "300 e-CF aceptados incluidos cada mes",            included: true },
          { text: "US$0.05 por e-CF adicional; los rechazos no se cobran", included: true },
          { text: "Firma con tu certificado y envío a la DGII",        included: true },
          { text: "Todos los tipos E31–E47 y resumen de consumo",       included: true },
          { text: "API REST (JSON o XML) desde cualquier lenguaje",     included: true },
          { text: "Webhooks con el resultado de la DGII",               included: true },
          { text: "Recepción de e-CF de tus suplidores",                included: true },
          { text: "Portal de comprobantes con doble factor (MFA)",      included: true }
        ]
      },
      {
        id:          "enterprise",
        visible:     false,   // oculto por ahora (2026-10-31) -- poner true para mostrarlo otra vez
        name:        "Enterprise",
        description: "Para grandes empresas con necesidades complejas",
        price_monthly: 149,
        price_annual:  119,
        currency:    "USD",
        highlighted: false,
        badge:       "Completo",
        cta:         "Contactar ventas",
        features: [
          { text: "Usuarios ilimitados",            included: true },
          { text: "Todos los módulos incluidos",    included: true },
          { text: "Sucursales ilimitadas",          included: true },
          { text: "Nómina y RRHH completo",         included: true },
          { text: "API REST y webhooks",             included: true },
          { text: "Integraciones personalizadas",   included: true },
          { text: "SLA de respuesta < 1 hora",      included: true },
          { text: "Gerente de cuenta dedicado",     included: true },
          { text: "Capacitación presencial",        included: true },
          { text: "Implementación personalizada",   included: true }
        ]
      }
    ]
  },

  /* ─────────────────────────── FAQ ──────────────────────────────────── */
  faq: {
    visible: true,
    sectionLabel: "Preguntas frecuentes",
    headline: "Resolvemos tus dudas",
    subheadline: "Si no encuentras la respuesta que buscas, nuestro equipo está disponible 24/7.",
    items: [
      { question: "¿Necesito instalar algún software en mi computadora?",        answer: "No. Easy-IMS es 100% en la nube. Solo necesitas un navegador web y conexión a internet. Funciona en el navegador de Windows, Mac, Linux, iOS y Android." },
      { question: "¿Cómo funciona el período de prueba gratuita?",               answer: "Tienes 15 días de acceso completo a todos los módulos del plan Profesional, sin restricciones y sin necesidad de tarjeta de crédito. Al final del período, decides si continúas." },
      { question: "¿Puedo migrar mis datos desde otro sistema?",                 answer: "Sí. Nuestro equipo de implementación te ayuda a importar clientes, productos, inventario y historial contable con plantillas de Excel y nuestra herramienta de migración de datos." },
      { question: "¿Easy-IMS cumple con la normativa de la DGII?",              answer: "Sí. Emite los e-CF E31–E47 según los esquemas XSD de la DGII y genera los reportes 606, 607, 608 e IT-1. Estamos en proceso de certificación como PSFE (Proveedor de Servicios de Facturación Electrónica) con la DGII." },
      { question: "¿Qué pasa con mis datos si cancelo la suscripción?",         answer: "Tus datos son siempre tuyos. Al cancelar, puedes exportar todo tu historial en formatos estándar (Excel, PDF, XML) dentro de los 90 días posteriores a la cancelación." },
      { question: "¿Cuántos usuarios puedo tener en mi cuenta?",                answer: "Depende del plan. Starter: hasta 3 usuarios. Profesional: hasta 15. Puedes añadir usuarios adicionales en cualquier momento." },
      { question: "¿Ofrecen capacitación para usar el sistema?",                answer: "Sí. Todos los planes incluyen acceso a nuestra academia online con más de 200 tutoriales en video." },
      { question: "¿Qué tan segura es la plataforma?",                          answer: "Cada empresa tiene su propia base de datos. Las conexiones van cifradas por HTTPS, los certificados de firma se guardan cifrados, cada cambio queda auditado y los respaldos se guardan cifrados en la nube por 90 días (diarios o semanales, según tu empresa). El portal de facturas usa doble factor (MFA)." }
    ]
  },

  /* ─────────────────────────── CTA SECTION ──────────────────────────── */
  cta: {
    visible: true,
    headline: "Comienza hoy. Sin riesgos.",
    subheadline: "Simplifica la gestión de tu negocio con Easy-IMS.",
    ctaPrimary:   { label: "Prueba gratis 15 días", href: "#contacto" },
    ctaSecondary: { label: "Hablar con un experto",  href: "#contacto" },
    trustItems: [
      "Sin tarjeta de crédito",
      "Sin contrato de permanencia",
      "Soporte incluido",
      "Datos cifrados y respaldados"
    ]
  },

  /* ─────────────────────────── CONTACT FORM ─────────────────────────── */
  contact: {
    visible: true,
    sectionLabel: "Contacto",
    headline: "¿Listo para transformar tu empresa?",
    subheadline: "Déjanos tus datos y un especialista se comunicará contigo en menos de 2 horas.",
    fields: [
      { name: "nombre",    label: "Nombre completo",  type: "text",   required: true,  placeholder: "Juan Pérez" },
      { name: "empresa",   label: "Empresa",           type: "text",   required: true,  placeholder: "Mi Empresa SRL" },
      { name: "email",     label: "Correo electrónico",type: "email",  required: true,  placeholder: "juan@empresa.com" },
      { name: "telefono",  label: "Teléfono",          type: "tel",    required: false, placeholder: "+1 (809) 000-0000" },
      { name: "empleados", label: "Número de empleados",type: "select",required: false,
        options: ["1-10","11-50","51-200","201-500","500+"] },
      { name: "mensaje",   label: "¿En qué te podemos ayudar?",type:"textarea",required: false, placeholder: "Cuéntanos sobre tu negocio..." }
    ],
    submitLabel: "Solicitar demostración gratuita",
    successMsg:  "¡Gracias! Uno de nuestros especialistas se comunicará contigo pronto."
  },

  /* ─────────────────────────── FOOTER ───────────────────────────────── */
  footer: {
    description: "Plataforma integral de gestión empresarial para Latinoamérica. Más de 15 años simplificando la gestión de negocios.",
    columns: [
      {
        title: "Productos",
        links: [
          { label: "Facturación",   href: "#" },
          { label: "Inventario",    href: "#" },
          { label: "Contabilidad",  href: "#" },
          { label: "CRM",           href: "#" },
          { label: "Nómina",        href: "#" },
          { label: "Punto de Venta",href: "#" }
        ]
      },
      {
        title: "Empresa",
        links: [
          { label: "Nosotros",       href: "#" },
          { label: "Blog",           href: "#" },
          { label: "Prensa",         href: "#" },
          { label: "Socios",         href: "#" },
          { label: "Carreras",       href: "#" }
        ]
      },
      {
        title: "Soporte",
        links: [
          { label: "Centro de ayuda", href: "#" },
          { label: "Academia online", href: "#" },
          { label: "Estado del sistema",href: "#" },
          { label: "API / Developers",href: "#" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Términos de uso",      href: "#" },
          { label: "Política de privacidad",href: "#" },
          { label: "Cookies",              href: "#" },
          { label: "Seguridad",            href: "#" }
        ]
      }
    ],
    social: [
      { platform: "facebook",  href: "#", icon: "facebook" },
      { platform: "instagram", href: "#", icon: "instagram" },
      { platform: "linkedin",  href: "#", icon: "linkedin" },
      { platform: "twitter",   href: "#", icon: "twitter" }
    ],
    badges: [
      "En proceso de certificación PSFE con la DGII",
      "Ley 32-23 · Decreto 587-24",
      "e-CF: E31–E47"
    ]
  },

  /* ─────────────────────────── SECTION VISIBILITY / ORDER ───────────── */
  sections: [
    { id: "hero",           visible: true,  order: 1 },
    { id: "devices",        visible: true,  order: 2 },
    { id: "clients",        visible: true,  order: 3 },
    { id: "features",       visible: true,  order: 3 },
    { id: "benefits",       visible: true,  order: 4 },
    { id: "modules",        visible: true,  order: 5 },
    { id: "platform",       visible: true,  order: 6 },
    { id: "stats",          visible: false, order: 7 }, // oculto 2026-10-31: cifras no reales; reactivar cuando lo sean
    { id: "howItWorks",     visible: true,  order: 8 },
    { id: "testimonials",   visible: true,  order: 9 },
    { id: "pricing",        visible: true,  order: 10 },
    { id: "faq",            visible: true,  order: 11 },
    { id: "cta",            visible: true,  order: 12 },
    { id: "contact",        visible: true,  order: 13 }
  ],

  /* ─────────────────────────── TRANSLATIONS (EN) ─────────────────────── */
  translations: {
    en: {
      config: {
        tagline:     "Software that transforms your business",
        description: "Comprehensive business management platform: electronic billing, inventory, accounting and more.",
        marketBadge: { text: "Built for the Dominican Market", textEn: "Built for the Dominican Market" }
      },
      navigation: {
        ctaLabel: "Free Trial",
        items: [
          { label: "Home",          href: "#inicio",          order: 1, visible: true },
          { label: "Features",      href: "#caracteristicas", order: 2, visible: true },
          { label: "Modules",       href: "#modulos",         order: 3, visible: true },
          { label: "Stats",         href: "#estadisticas",    order: 4, visible: false },
          { label: "Pricing",       href: "#precios",         order: 5, visible: true },
          { label: "Testimonials",  href: "#testimonios",     order: 6, visible: true },
          { label: "Contact",       href: "#contacto",        order: 7, visible: true }
        ]
      },
      hero: {
        badge:       "🏛️ <span class=\"badge-blink\">In Progress</span> · PSFE certification with DGII · Law 32-23",
        headline:    "The business software your company needs",
        subheadline: "Electronic billing, real-time inventory, accounting and integrated CRM — all in one intelligent platform.",
        ctaPrimary:   { label: "Start Free — 15 days", href: "#contacto" },
        ctaSecondary: { label: "Watch demo",            href: "#caracteristicas" },
        trustNote:   "No credit card · No commitment contract",
        stats: [
          { value: 5000,    suffix: "+",  label: "Active companies", visible: false }, // temporarily hidden -- flip to true when the number is real
          { value: 10,      suffix: "",   label: "e-CF types (E31–E47)" },
          { value: 15,      suffix: "+",  label: "Years of experience" },
          { value: 24,      suffix: "/7", label: "Support available" }
        ]
      },
      clients: {
        sectionLabel: "Leading companies that trust Easy-IMS"
      },
      features: {
        sectionLabel: "Features",
        headline:    "Everything you need in one platform",
        subheadline: "Discover the tools that grow your business every day.",
        tabs: [
          {
            id: "facturacion", label: "e-CF Billing", icon: "receipt", color: "#4F8EF7",
            headline:    "e-CF: Electronic billing to DGII standards",
            description: "Issue all 10 types of Electronic Tax Receipts (e-CF), validated against DGII's XSD schemas. Compliant with Law 32-23 and Decree 587-24, with contingency mode per DGII's instructions.",
            items: [
              { icon: "file-check", text: "10 e-CF types: E31, E32, E33, E34, E41, E43, E44, E45, E46, E47" },
              { icon: "key",        text: "RSA-SHA256 digital signature with your .p12 certificate, stored encrypted" },
              { icon: "wifi-off",   text: "Queued sending with automatic retries to DGII" },
              { icon: "archive",    text: "Signed XML and PDF of every e-CF, downloadable anytime" },
              { icon: "award",      text: "CerteCF: we guide you through DGII's 15 certification steps" },
              { icon: "shield",     text: "Printed representation with QR code and security code" }
            ]
          },
          {
            id: "inventario", label: "Inventory", icon: "package", color: "#0DCFDA",
            headline:    "Total inventory control in real time",
            description: "Manage stock entries, exits, transfers and low-stock alerts from anywhere.",
            items: [
              { icon: "layers",      text: "Multi-warehouse and multi-branch" },
              { icon: "alert-circle",text: "Minimum stock alerts per warehouse" },
              { icon: "bar-chart-2", text: "Weighted average, last cost or standard cost" },
              { icon: "scan",        text: "Barcode and QR labels; scanner search" },
              { icon: "truck",       text: "Movement history per item and warehouse" },
              { icon: "tag",         text: "Batch and expiration date management" }
            ]
          },
          {
            id: "contabilidad", label: "Accounting", icon: "book-open", color: "#A78BFA",
            headline:    "Automated and integrated accounting",
            description: "Generate automatic journal entries. Real-time financial statements with a single click.",
            items: [
              { icon: "git-branch",  text: "Automatic journal entries" },
              { icon: "trending-up", text: "Balance sheet, P&L and cash flow" },
              { icon: "file-text",   text: "DGII reports 606, 607, 608 and IT-1" },
              { icon: "users",       text: "Accounts receivable and payable" },
              { icon: "dollar-sign", text: "Multi-currency and exchange rates" },
              { icon: "calendar",    text: "Automatic closing entry with preview" }
            ]
          },
          {
            id: "crm", label: "CRM", icon: "users", color: "#34D399", addon: true,
            headline:    "Intelligent customer and sales management",
            description: "Complete sales cycle tracking. Never lose a potential customer again.",
            items: [
              { icon: "user-check",    text: "Visual sales pipeline (drag and drop)" },
              { icon: "message-circle",text: "Activity history per opportunity" },
              { icon: "target",        text: "ERP quotes linked to the opportunity" },
              { icon: "bell",          text: "Tasks and follow-ups with due dates" },
              { icon: "pie-chart",     text: "Conversion rate (won vs. lost)" },
              { icon: "share-2",       text: "Sign in with your ERP user (SSO)" }
            ]
          },
          {
            id: "nomina", label: "Payroll", icon: "briefcase", color: "#FBBF24", addon: true,
            headline:    "Fully automated payroll & HR",
            description: "Salary calculation, statutory deductions, severance benefits and the TSS file from one place.",
            items: [
              { icon: "clock",       text: "Attendance and overtime control" },
              { icon: "percent",     text: "Automatic ISR, AFP and SFS calculation" },
              { icon: "file",        text: "TSS file and IR-3 / IR-13 returns" },
              { icon: "award",       text: "Vacation and benefits management" },
              { icon: "credit-card", text: "Payment file for online banking" },
              { icon: "archive",     text: "Payroll history and contracts" }
            ]
          },
          {
            id: "fixed-assets", label: "Fixed Assets", icon: "box", color: "#F97316", addon: true,
            headline:    "Total control over your fixed assets",
            description: "Register, depreciate and track every asset in the company from a single screen.",
            items: [
              { icon: "box",          text: "Full asset registry by category" },
              { icon: "trending-down",text: "Straight-line depreciation in period runs" },
              { icon: "map-pin",      text: "Depreciation schedule for every asset" },
              { icon: "git-branch",   text: "Direct Accounting integration (automatic journal entries)" },
              { icon: "file-text",    text: "Book value and accumulated depreciation per asset" },
              { icon: "archive",      text: "Asset disposals with posted gain or loss" }
            ]
          }
        ]
      },
      benefits: {
        sectionLabel: "Why Easy-IMS?",
        headline:    "The competitive advantage your business deserves",
        subheadline: "More than 15 years perfecting business management software for the Latin American market.",
        items: [
          { icon: "cloud",       color: "#4F8EF7", title: "100% Cloud-based",         description: "Access from any device, anywhere, with no server installations or maintenance." },
          { icon: "shield",      color: "#34D399", title: "Your data, protected and backed up", description: "Each company in its own database, encrypted connection, signing certificates stored encrypted, every change audited and a daily cloud backup." },
          { icon: "zap",         color: "#0DCFDA", title: "Fast DGII sending",         description: "Each e-CF is signed and sent to DGII from a background queue; in our measurements the end-to-end median is about 7 seconds." },
          { icon: "life-buoy",   color: "#A78BFA", title: "24/7 Support",              description: "Team of experts available via chat, phone and video. Response guaranteed in under 2 hours." },
          { icon: "trending-up", color: "#FBBF24", title: "Grow at your pace",         description: "Add modules, branches and users whenever you need; each module is switched on or off per company." },
          { icon: "cpu",         color: "#F87171", title: "Artificial intelligence",   description: "Optional AI assistant, enabled per company, that answers in natural language about items, balances, invoices and the system help." }
        ]
      },
      devices: {
        sectionLabel: "Multi-platform",
        headline: "Your business, on every device",
        subheadline: "Desktop, tablet or mobile — Easy-IMS adapts perfectly to any screen with nothing to install.",
        stats: [
          { label: "Browser-based",       sublabel: "Nothing to install"    },
          { label: "e-CF processed",      sublabel: "Accumulated to date"   },
          { label: "Active companies",    sublabel: "Across Latin America"   },
          { label: "To get certified",    sublabel: "With CerteCF · DGII", suffix: "Very easy" }
        ]
      },
      ui: {
        pricingMonthly:       "Monthly",
        pricingAnnual:        "Annual",
        pricingPeriod:        "/month",
        requestDemo:          "Request demo",
        footerRights:         "All rights reserved.",
        whatsappMsg:          "Hello, I want more info about Easy-IMS",
        contactResponseTitle: "Response time",
        contactResponseBody:  "A specialist will contact you in less than <strong>2 business hours</strong>.",
        form: {
          nameLbl:    "Full name",           namePH:    "John Smith",
          companyLbl: "Company",             companyPH: "My Company LLC",
          emailLbl:   "Email address",       emailPH:   "john@company.com",
          phoneLbl:   "Phone",               phonePH:   "+1 (809) 000-0000",
          employLbl:  "Number of employees", selectPH:  "Select...",
          messageLbl: "How can we help you?",
          messagePH:  "Tell us about your business and needs..."
        }
      },
      heroFloats: [
        { value: "+38% sales",     label: "vs. last month" },
        { value: "Automatic e-CF", label: "Signed and sent to DGII" },
        { value: "Encrypted backups", label: "In the cloud, 90 days" }
      ],
      mockup: {
        chartLabel: "Sales — last 12 months",
        kpis: [
          { label: "Sales today" },
          { label: "Invoices"    },
          { label: "Inventory",   change: "▲ 3 alerts" }
        ],
        rows: [
          { name: "Invoice #2041", badge: "Paid"    },
          { name: "Invoice #2040", badge: "Pending" },
          { name: "Invoice #2039", badge: "Paid"    }
        ]
      },
      platform: {
        sectionLabel: "Enterprise Platform",
        headline: "Enterprise power. No compromises.",
        subheadline: "Easy-IMS is built on a production-proven architecture with the advanced capabilities that demanding businesses require.",
        items: [
          { title: "Rules & Workflow Engine",       description: "Define business rules that execute automatically based on configurable conditions.",                bullets: ["Conditions: ≤, BETWEEN, ELSE / default", "Automatic escalation by approver role", "Full decision history and audit trail"] },
          { title: "Approval Workflows",            description: "Multi-level system for supplier and customer invoices, supplier payments and credit limits.",           bullets: ["Approval by role and amount, with delegations", "Pending inbox with email alerts", "Automatic approval or rejection per rule"] },
          { title: "AI Business Agent",             description: "Conversational assistant (optional, enabled per company) that looks up items, balances, invoices and reports.", bullets: ["Natural language queries in real time", "Uses your company data only if the administrator allows it", "Gemini by default; Groq, OpenRouter or Ollama (local) optional"] },
          { title: "Multi-Company / Multi-Tenant",  description: "Dedicated, independent database per company: one company's data never shares a database with another's.",                               bullets: ["DB-per-tenant architecture on PostgreSQL", "JWT with automatic per-company routing", "Centralized administration in a single interface"] },
          { title: "Audit & Compliance",            description: "Activity log and field-level audit, protected against changes in the database.",                                     bullets: ["Log: user, IP, device, geolocation", "Field audit: previous vs. new value", "Account lockout after failed access attempts"] },
          { title: "Country-specific Validation",   description: "Configurable rules per country: RNC, CÉDULA, EIN, RFC and any custom format.",                      bullets: ["Configurable regex patterns per field and country", "Configurable error messages", "Required attributes per country"] },
          { title: "Dynamic Modules",               description: "Enable or disable features per company in real time. Feature flag architecture.",                   bullets: ["Module registry with soft dependencies", "Routes and menus hidden automatically", "Per-company activation without system restart"] },
          { title: "Granular Access Control",       description: "Roles, permissions, groups and temporary delegations with automatic expiration.",                   bullets: ["Permissions by module, route and action", "Temporary delegations with expiry date", "Role groups for bulk assignment"] },
          { title: "Financial Intelligence",        description: "P&L, Balance Sheet, Cash Flow and AR/AP Aging in real time.",                                       bullets: ["Aging: current, 1-30, 31-60, 61-90 and 90+ days", "Budget and forecast vs. actual by month", "Top customers and items by sales volume"] }
        ]
      },
      modules: {
        sectionLabel: "Modules",
        headline:    "A complete suite of business tools",
        subheadline: "Each module is powerful on its own. Together they are unbeatable.",
        items: [
          { icon: "receipt",       color: "#4F8EF7", bg: "#EFF6FF", title: "Pro Billing",            description: "e-CF, NCF, recurring invoices and more.",         tag: "Popular" },
          { icon: "package",       color: "#0DCFDA", bg: "#ECFEFF", title: "Inventory 360",          description: "Multi-warehouse, batches and traceability.",       tag: null },
          { icon: "book-open",     color: "#A78BFA", bg: "#F5F3FF", title: "Accounting",             description: "Automatic journal entries and closing with preview.",              tag: "New" },
          { icon: "users",         color: "#34D399", bg: "#ECFDF5", title: "Sales CRM",              description: "Pipeline, quotes and follow-up.",                  tag: "Add-on" },
          { icon: "briefcase",     color: "#FBBF24", bg: "#FFFBEB", title: "Payroll & HR",           description: "TSS, ISR and staff management.",                   tag: "Add-on" },
          { icon: "shopping-cart", color: "#F87171", bg: "#FEF2F2", title: "Point of Sale",          description: "Touch POS for physical stores: registers, shifts and cash count.",         tag: null },
          { icon: "truck",         color: "#60A5FA", bg: "#EFF6FF", title: "Purchasing & Suppliers", description: "Purchase orders, reception and imports.",           tag: null },
          { icon: "bar-chart-2",   color: "#818CF8", bg: "#EEF2FF", title: "Analytics & BI",         description: "Executive dashboards and real-time KPIs.",         tag: "Premium" },
          { icon: "credit-card",   color: "#F59E0B", bg: "#FFFBEB", title: "Payments & Methods",      description: "Cash, card (terminal result: approved, declined or pending), transfers and split payments.", tag: null },
          { icon: "box",           color: "#F97316", bg: "#FFF7ED", title: "Fixed Assets",           description: "Fixed asset tracking and straight-line depreciation.", tag: "Add-on" }
        ]
      },
      stats: {
        headline: "Numbers that back our track record",
        items: [
          { value: 2597,     suffix: "+", label: "Active companies",             icon: "briefcase" },
          { value: 18500000, suffix: "+", label: "e-CF invoices processed",      icon: "receipt"   },
          { value: 10,       suffix: "",  label: "Supported e-CF types (E31–E47)", icon: "server"  },
          { value: 2000,     suffix: "+", label: "Developers in community",      icon: "users"     }
        ]
      },
      howItWorks: {
        sectionLabel: "How it works",
        headline:    "Get started in minutes, not weeks",
        subheadline: "Our onboarding process guides you step by step so you're operational in record time.",
        steps: [
          { number: "01", icon: "user-plus",   title: "Request your trial",     description: "Leave us your details and we create a trial company with demo data for you. No credit card or commitment required." },
          { number: "02", icon: "settings",    title: "Configure your business", description: "Import your products, customers and catalogs with Excel templates." },
          { number: "03", icon: "play-circle", title: "Start operating",         description: "Your team will be ready to invoice, manage inventory and more from day one." },
          { number: "04", icon: "trending-up", title: "Grow without limits",     description: "Add modules, users and branches as your business scales." }
        ]
      },
      testimonials: {
        sectionLabel: "Testimonials",
        headline:    "What our clients say",
        subheadline: "Thousands of companies in Latin America have already transformed their management with Easy-IMS."
      },
      pricing: {
        sectionLabel: "Pricing",
        headline:    "Plans designed for every stage of your business",
        subheadline: "No fine print. No hidden costs. Cancel anytime.",
        billingNote: "Save up to 20% with annual billing",
        plans: [
          {
            id: "starter", name: "Starter", highlighted: false, badge: null, cta: "Start for free",
            description: "Perfect for entrepreneurs and micro-businesses",
            price_monthly: 29, price_annual: 23, currency: "USD",
            features: [
              { text: "Up to 3 users",           included: true  },
              { text: "Electronic billing",        included: true  },
              { text: "Basic inventory",           included: true  },
              { text: "1 branch",                  included: true  },
              { text: "Basic reports",             included: true  },
              { text: "Email support",             included: true  },
              { text: "Accounting",       included: false },
              { text: "CRM and sales",             included: false },
              { text: "Payroll and HR",            included: false },
              { text: "API and webhooks",           included: false }
            ]
          },
          {
            id: "professional", name: "Professional", highlighted: true, badge: "Most popular", cta: "Try 15 days free",
            description: "For growing businesses that need more",
            price_monthly: 79, price_annual: 63, currency: "USD",
            features: [
              { text: "Up to 15 users",                     included: true  },
              { text: "Unlimited electronic billing",        included: true  },
              { text: "Advanced multi-warehouse inventory",  included: true  },
              { text: "Up to 5 branches",                   included: true  },
              { text: "Full accounting",                    included: true  },
              { text: "CRM and sales pipeline",             included: true  },
              { text: "Reports and BI dashboards",          included: true  },
              { text: "24/7 chat and phone support",        included: true  },
              { text: "Payroll and HR",                     included: false },
              { text: "API and webhooks",                   included: false }
            ]
          },
          {
            id: "gateway", name: "e-CF Gateway", highlighted: false, badge: "Per transaction", cta: "Connect my system",
            description: "For companies with their own system that only need DGII electronic invoicing",
            price_monthly: 19, price_annual: 19, currency: "USD",
            price_note: "Includes 300 e-CF a month · US$0.05 per extra e-CF",
            features: [
              { text: "300 accepted e-CF included every month",          included: true },
              { text: "US$0.05 per extra e-CF; rejections are not charged", included: true },
              { text: "Signed with your certificate and sent to DGII",    included: true },
              { text: "Every type E31–E47 and the consumer summary",      included: true },
              { text: "REST API (JSON or XML) from any language",          included: true },
              { text: "Webhooks with DGII's result",                       included: true },
              { text: "Receiving e-CF from your suppliers",                included: true },
              { text: "Receipts portal with two-factor sign-in (MFA)",     included: true }
            ]
          },
          {
            id: "enterprise", visible: false, name: "Enterprise", highlighted: false, badge: "Complete", cta: "Contact sales",
            description: "For large companies with complex needs",
            price_monthly: 149, price_annual: 119, currency: "USD",
            features: [
              { text: "Unlimited users",            included: true },
              { text: "All modules included",       included: true },
              { text: "Unlimited branches",         included: true },
              { text: "Full Payroll & HR",          included: true },
              { text: "REST API and webhooks",      included: true },
              { text: "Custom integrations",        included: true },
              { text: "SLA response < 1 hour",      included: true },
              { text: "Dedicated account manager",  included: true },
              { text: "On-site training",           included: true },
              { text: "Custom implementation",      included: true }
            ]
          }
        ]
      },
      faq: {
        sectionLabel: "Frequently asked questions",
        headline:    "We answer your questions",
        subheadline: "If you can't find the answer you're looking for, our team is available 24/7.",
        items: [
          { question: "Do I need to install any software on my computer?",      answer: "No. Easy-IMS is 100% cloud-based. All you need is a web browser and an internet connection. It works in the browser on Windows, Mac, Linux, iOS and Android." },
          { question: "How does the free trial work?",                          answer: "You get 15 days of full access to all Professional plan modules, with no restrictions and no credit card required. At the end of the period, you decide if you continue." },
          { question: "Can I migrate my data from another system?",             answer: "Yes. Our implementation team helps you import customers, products, inventory and accounting history with Excel templates and our data migration tool." },
          { question: "Does Easy-IMS comply with DGII regulations?",           answer: "Yes. It issues e-CF E31–E47 to DGII's XSD schemas and produces reports 606, 607, 608 and IT-1. We are in the process of certification as a PSFE (Electronic Invoicing Service Provider) with DGII." },
          { question: "What happens to my data if I cancel my subscription?",  answer: "Your data is always yours. Upon cancellation, you can export your full history in standard formats (Excel, PDF, XML) within 90 days after cancellation." },
          { question: "How many users can I have in my account?",              answer: "It depends on the plan. Starter: up to 3 users. Professional: up to 15. You can add more users at any time." },
          { question: "Do you offer training for using the system?",           answer: "Yes. All plans include access to our online academy with more than 200 video tutorials." },
          { question: "How secure is the platform?",                           answer: "Each company has its own database. Connections are encrypted over HTTPS, signing certificates are stored encrypted, every change is audited and backups are kept encrypted in the cloud for 90 days (daily or weekly, per company). The invoice portal uses two-factor authentication (MFA)." }
        ]
      },
      cta: {
        headline:    "Start today. Risk-free.",
        subheadline: "Simplify the management of your business with Easy-IMS.",
        ctaPrimary:   { label: "Try free 15 days",    href: "#contacto" },
        ctaSecondary: { label: "Talk to an expert",   href: "#contacto" },
        trustItems: ["No credit card", "No commitment contract", "Support included", "Encrypted, backed-up data"]
      },
      contact: {
        sectionLabel: "Contact",
        headline:    "Ready to transform your company?",
        subheadline: "Leave us your info and a specialist will contact you in less than 2 hours.",
        submitLabel: "Request free demo",
        successMsg:  "Thank you! One of our specialists will contact you soon."
      },
      footer: {
        description: "Comprehensive business management platform for Latin America. More than 15 years simplifying business management.",
        columns: [
          {
            title: "Products",
            links: [
              { label: "Billing",       href: "#" },
              { label: "Inventory",     href: "#" },
              { label: "Accounting",    href: "#" },
              { label: "CRM",           href: "#" },
              { label: "Payroll",       href: "#" },
              { label: "Point of Sale", href: "#" }
            ]
          },
          {
            title: "Company",
            links: [
              { label: "About us",  href: "#" },
              { label: "Blog",      href: "#" },
              { label: "Press",     href: "#" },
              { label: "Partners",  href: "#" },
              { label: "Careers",   href: "#" }
            ]
          },
          {
            title: "Support",
            links: [
              { label: "Help center",    href: "#" },
              { label: "Online academy", href: "#" },
              { label: "System status",  href: "#" },
              { label: "API / Developers",href: "#"}
            ]
          },
          {
            title: "Legal",
            links: [
              { label: "Terms of use",      href: "#" },
              { label: "Privacy policy",    href: "#" },
              { label: "Cookies",           href: "#" },
              { label: "Security",          href: "#" }
            ]
          }
        ],
        badges: ["PSFE certification with DGII in progress", "Law 32-23 · Decree 587-24", "e-CF: E31–E47"]
      }
    }
  }
};
