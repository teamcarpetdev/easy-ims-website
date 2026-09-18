/**
 * Easy-IMS Database
 * Table-driven data store – edit here or through the Admin Panel.
 * The admin panel saves overrides to localStorage; this file is the default.
 */
window.EIMS_DB = {

  /* ─────────────────────────── SITE CONFIG ─────────────────────────── */
  config: {
    siteName:    "Easy-IMS",
    domain:      "easy-ims.com",
    tagline:     "Software que transforma tu negocio",
    description: "Plataforma integral de gestión empresarial: facturación, inventario, contabilidad y más.",
    phone:       "+1 (809) 563-2073",
    whatsapp:    "18095632073",
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
      { value: 99.9,   suffix: "%",     label: "Uptime garantizado",    sublabel: "12 meses consecutivos",  color: "#34D399", ring: true  },
      { value: 18.5,   suffix: "M+",    label: "e-CF procesados",       sublabel: "Acumulados a la fecha",  color: "#4F8EF7", ring: false },
      { value: 2597,   suffix: "+",     label: "Empresas activas",      sublabel: "En Latinoamérica",       color: "#A78BFA", ring: false },
      { value: 4,      suffix: " pasos",label: "Para certificarte",      sublabel: "Con CerteCF · DGII",    color: "#FBBF24", ring: false }
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
      { value: "99.9%",      label: "Uptime",    labelEn: "Uptime",    color: "purple" }
    ]
  },

  /* ─────────────────────────── HERO FLOATING CARDS ───────────────────── */
  heroFloats: [
    { icon: "trending-up", bg: "rgba(52,211,153,.15)",  value: "+38% ventas",     label: "vs. mes anterior" },
    { icon: "zap",         bg: "rgba(79,142,247,.15)",  value: "Factura en 30s",  label: "CFE automático"   },
    { icon: "shield",      bg: "rgba(167,139,250,.15)", value: "99.9% Uptime",    label: "Garantizado"      }
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
      { label: "Estadísticas",    href: "#estadisticas",    order: 4, visible: true },
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
    badge:       "🏛️ Proveedor Certificado DGII · Ley 32-23 · +18.5M facturas procesadas",
    headline:    "El software empresarial que tu negocio necesita",
    subheadline: "Facturación electrónica, inventario en tiempo real, contabilidad avanzada y CRM integrado — todo en una sola plataforma inteligente.",
    ctaPrimary:  { label: "Comienza Gratis — 15 días", href: "#contacto" },
    ctaSecondary:{ label: "Ver demostración",           href: "#caracteristicas" },
    trustNote:   "Sin tarjeta de crédito · Sin contrato de permanencia",
    stats: [
      { value: 5000,  suffix: "+",  label: "Empresas activas" },
      { value: 99.9,  suffix: "%",  label: "Uptime garantizado" },
      { value: 15,    suffix: "+",  label: "Años en el mercado" },
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
        headline: "e-CF: Facturación electrónica certificada por la DGII",
        description: "Emite los 10 tipos de Comprobantes Fiscales Electrónicos (e-CF) en segundos. Certificados bajo Ley 32-23 y Decreto 587-24. Modo contingencia automático cuando la DGII no está disponible.",
        items: [
          { icon: "file-check",  text: "10 tipos e-CF: E31, E32, E33, E34, E41, E43, E44, E45, E46, E47" },
          { icon: "key",         text: "Firma digital RSA-SHA256 con certificado .P12 (AES-256)" },
          { icon: "wifi-off",    text: "Modo contingencia: firma inmediata + retransmisión automática DGII" },
          { icon: "archive",     text: "Almacenamiento XML/PDF por 10 años (cumplimiento legal)" },
          { icon: "award",       text: "CerteCF: certifícate en 4 pasos (vs. 15 del proceso tradicional)" },
          { icon: "shield",      text: "Compatible con Ley 32-23 y Decreto 587-24 — 99.90% uptime" }
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
          { icon: "alert-circle",text: "Alertas automáticas de stock mínimo" },
          { icon: "bar-chart-2",text: "Valoración PEPS, UEPS y Promedio" },
          { icon: "scan",       text: "Lector de código de barras y QR" },
          { icon: "truck",      text: "Trazabilidad completa de productos" },
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
          { icon: "file-text",   text: "Reportes DGII y 606 automáticos" },
          { icon: "users",       text: "Cuentas por cobrar y por pagar" },
          { icon: "dollar-sign", text: "Multi-moneda y tasas de cambio" },
          { icon: "calendar",    text: "Cierres de período automatizados" }
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
          { icon: "user-check",   text: "Pipeline de ventas visual" },
          { icon: "message-circle",text: "Historial de interacciones completo" },
          { icon: "target",       text: "Metas y cuotas de vendedores" },
          { icon: "bell",         text: "Recordatorios y seguimientos automáticos" },
          { icon: "pie-chart",    text: "Análisis de conversión y ROI" },
          { icon: "share-2",      text: "Integración con redes sociales" }
        ]
      },
      {
        id:    "nomina",
        label: "Nómina",
        icon:  "briefcase",
        color: "#FBBF24",
        addon: true,
        headline: "Nómina y RRHH completamente automatizados",
        description: "Liquidación de salarios, prestaciones y reportes TSS con precisión y en tiempo récord.",
        items: [
          { icon: "clock",      text: "Control de asistencia y horas extras" },
          { icon: "percent",    text: "Cálculo automático ISR y AFP/ARS" },
          { icon: "file",       text: "Reportes TSS y Ministerio de Trabajo" },
          { icon: "award",      text: "Gestión de vacaciones y beneficios" },
          { icon: "credit-card",text: "Pago en banco directo o en efectivo" },
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
          { icon: "trending-down",text: "Depreciación automática (línea recta y otros métodos)" },
          { icon: "map-pin",      text: "Ubicación y responsable asignado por activo" },
          { icon: "git-branch",   text: "Integración directa con Contabilidad (asientos automáticos)" },
          { icon: "file-text",    text: "Reportes de valor en libros y vida útil restante" },
          { icon: "archive",      text: "Historial completo de bajas, traslados y mejoras" }
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
      { icon: "shield",      color: "#34D399", title: "Seguridad bancaria",         description: "Cifrado AES-256, backups automáticos diarios y certificación ISO 27001 para proteger tus datos." },
      { icon: "zap",         color: "#0DCFDA", title: "Velocidad extrema",          description: "Infraestructura de clase mundial con tiempo de respuesta menor a 200ms y 99.9% de uptime garantizado." },
      { icon: "life-buoy",   color: "#A78BFA", title: "Soporte 24/7",               description: "Equipo de expertos disponible por chat, teléfono y video. Respuesta garantizada en menos de 2 horas." },
      { icon: "trending-up", color: "#FBBF24", title: "Escalable sin límites",      description: "Crece desde 1 usuario hasta miles. Agrega módulos, sucursales y usuarios cuando los necesites." },
      { icon: "cpu",         color: "#F87171", title: "Inteligencia artificial",    description: "IA integrada para pronósticos de ventas, detección de anomalías y automatización de tareas repetitivas." }
    ]
  },

  /* ─────────────────────────── MODULES / SERVICES ───────────────────── */
  modules: {
    visible: true,
    sectionLabel: "Módulos",
    headline: "Una suite completa de herramientas empresariales",
    subheadline: "Cada módulo es poderoso por sí solo. Juntos son imbatibles.",
    items: [
      { icon: "receipt",      color: "#4F8EF7",  bg: "#EFF6FF",  title: "Facturación Pro",       description: "CFE, NCF, facturas recurrentes y más.", tag: "Popular" },
      { icon: "package",      color: "#0DCFDA",  bg: "#ECFEFF",  title: "Inventario 360",        description: "Multi-almacén, lotes y trazabilidad.", tag: null },
      { icon: "book-open",    color: "#A78BFA",  bg: "#F5F3FF",  title: "Contabilidad IA",       description: "Cierre contable automatizado con IA.", tag: "Nuevo" },
      { icon: "users",        color: "#34D399",  bg: "#ECFDF5",  title: "CRM Ventas",            description: "Pipeline, cotizaciones y seguimiento.", tag: "Add-on" },
      { icon: "briefcase",    color: "#FBBF24",  bg: "#FFFBEB",  title: "Nómina & RRHH",         description: "TSS, ISR y control de personal.", tag: "Add-on" },
      { icon: "shopping-cart",color: "#F87171",  bg: "#FEF2F2",  title: "Punto de Venta",        description: "POS táctil para tienda física y online.", tag: null },
      { icon: "truck",        color: "#60A5FA",  bg: "#EFF6FF",  title: "Compras & Proveedores", description: "Órdenes de compra, recepción e importaciones.", tag: null },
      { icon: "bar-chart-2",  color: "#818CF8",  bg: "#EEF2FF",  title: "Analítica & BI",        description: "Dashboards ejecutivos y KPIs en tiempo real.", tag: "Premium" },
      { icon: "credit-card",  color: "#F59E0B",  bg: "#FFFBEB",  title: "Gateway de Pagos",      description: "Integración con los principales gateways de pago: tarjetas de crédito/débito, transferencias bancarias y pagos digitales.", tag: "Integrado" },
      { icon: "box",          color: "#F97316",  bg: "#FFF7ED",  title: "Fixed Assets",          description: "Control de activos fijos y depreciación automática.", tag: "Add-on" }
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
        description: "Sistema multinivel para límites de crédito, órdenes de compra y cambios críticos.",
        bullets: ["Aprobación por rol: Gerente, Director, CFO", "Solicitudes pendientes con notificaciones", "Auto-rechazo por tiempo límite configurable"]
      },
      {
        icon: "cpu", color: "#0DCFDA",
        title: "Agente de IA Empresarial",
        description: "Asistente conversacional que analiza inventario, AR, AP y proyecciones en lenguaje natural.",
        bullets: ["Consultas en lenguaje natural en tiempo real", "Proyecciones de cobranza a 30/60/90 días", "Motor LLM local — datos 100% en tus servidores"]
      },
      {
        icon: "building-2", color: "#34D399",
        title: "Multi-empresa / Multi-tenant",
        description: "Base de datos dedicada e independiente por empresa. Cero riesgo de mezcla de datos.",
        bullets: ["Arquitectura DB-per-tenant en PostgreSQL", "JWT con routing automático por empresa", "Administración centralizada en una sola interfaz"]
      },
      {
        icon: "shield-check", color: "#FBBF24",
        title: "Auditoría y Cumplimiento",
        description: "Registro inmutable de toda actividad con trazabilidad a nivel de campo individual.",
        bullets: ["Log: usuario, IP, dispositivo, geolocalización", "Auditoría por campo: valor anterior vs. nuevo", "Bloqueo de cuenta tras intentos fallidos"]
      },
      {
        icon: "globe", color: "#F87171",
        title: "Validación por País",
        description: "Reglas configurables por país: RNC, CÉDULA, EIN, RFC y cualquier formato personalizado.",
        bullets: ["Patrones regex configurables por campo y país", "Mensajes de error personalizados por localización", "Atributos requeridos según tipo de negocio"]
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
        bullets: ["Aging en buckets 0-30, 31-60, 61-90, 90+ días", "Proyecciones de cobranza y pagos por período", "Top clientes y artículos por volumen de ventas"]
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
      { value: 99.9,     suffix: "%",  label: "Uptime garantizado DGII",       icon: "server"    },
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
      { number: "01", icon: "user-plus",   title: "Crea tu cuenta",       description: "Regístrate gratis en menos de 2 minutos. Sin tarjeta de crédito ni compromiso." },
      { number: "02", icon: "settings",    title: "Configura tu empresa",  description: "Importa tus productos, clientes y catálogos con nuestro asistente inteligente." },
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
          { text: "Contabilidad avanzada",          included: false },
          { text: "CRM y ventas",                   included: false },
          { text: "Nómina y RRHH",                  included: false },
          { text: "API y webhooks",                 included: false }
        ]
      },
      {
        id:          "professional",
        name:        "Professional",
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
        id:          "enterprise",
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
      { question: "¿Necesito instalar algún software en mi computadora?",        answer: "No. Easy-IMS es 100% en la nube. Solo necesitas un navegador web y conexión a internet. Funciona en Windows, Mac, Linux, iOS y Android." },
      { question: "¿Cómo funciona el período de prueba gratuita?",               answer: "Tienes 15 días de acceso completo a todos los módulos del plan Professional, sin restricciones y sin necesidad de tarjeta de crédito. Al final del período, decides si continúas." },
      { question: "¿Puedo migrar mis datos desde otro sistema?",                 answer: "Sí. Nuestro equipo de implementación te ayuda a importar clientes, productos, inventario y historial contable desde Excel, CSV o directamente desde tu sistema actual." },
      { question: "¿Easy-IMS cumple con la normativa de la DGII?",              answer: "Totalmente. Somos un proveedor certificado de Comprobantes Fiscales Electrónicos (CFE). Los reportes 606, 607 y 608 se generan automáticamente según las regulaciones vigentes." },
      { question: "¿Qué pasa con mis datos si cancelo la suscripción?",         answer: "Tus datos son siempre tuyos. Al cancelar, puedes exportar todo tu historial en formatos estándar (Excel, PDF, XML) dentro de los 90 días posteriores a la cancelación." },
      { question: "¿Cuántos usuarios puedo tener en mi cuenta?",                answer: "Depende del plan. Starter: hasta 3 usuarios. Professional: hasta 15. Enterprise: usuarios ilimitados. Puedes añadir usuarios adicionales en cualquier momento." },
      { question: "¿Ofrecen capacitación para usar el sistema?",                answer: "Sí. Todos los planes incluyen acceso a nuestra academia online con más de 200 tutoriales en video. El plan Enterprise incluye capacitación presencial por nuestros expertos certificados." },
      { question: "¿Qué tan segura es la plataforma?",                          answer: "Utilizamos cifrado AES-256 para todos los datos en tránsito y reposo. Realizamos backups automáticos cada hora y contamos con infraestructura redundante con 99.9% de uptime garantizado." }
    ]
  },

  /* ─────────────────────────── CTA SECTION ──────────────────────────── */
  cta: {
    visible: true,
    headline: "Comienza hoy. Sin riesgos.",
    subheadline: "Únete a más de 5,000 empresas que ya gestionan su negocio de forma inteligente con Easy-IMS.",
    ctaPrimary:   { label: "Prueba gratis 15 días", href: "#contacto" },
    ctaSecondary: { label: "Hablar con un experto",  href: "#contacto" },
    trustItems: [
      "Sin tarjeta de crédito",
      "Sin contrato de permanencia",
      "Soporte incluido",
      "Datos 100% seguros"
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
      "Proveedor Certificado DGII",
      "Ley 32-23 · Decreto 587-24",
      "e-CF: E31–E47",
      "ISO 27001",
      "SOC 2 Type II"
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
    { id: "stats",          visible: true,  order: 7 },
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
          { label: "Stats",         href: "#estadisticas",    order: 4, visible: true },
          { label: "Pricing",       href: "#precios",         order: 5, visible: true },
          { label: "Testimonials",  href: "#testimonios",     order: 6, visible: true },
          { label: "Contact",       href: "#contacto",        order: 7, visible: true }
        ]
      },
      hero: {
        badge:       "🚀 New version 3.0 available",
        headline:    "The business software your company needs",
        subheadline: "Electronic billing, real-time inventory, advanced accounting and integrated CRM — all in one intelligent platform.",
        ctaPrimary:   { label: "Start Free — 15 days", href: "#contacto" },
        ctaSecondary: { label: "Watch demo",            href: "#caracteristicas" },
        trustNote:   "No credit card · No commitment contract",
        stats: [
          { value: 5000,    suffix: "+",  label: "Active companies" },
          { value: 99.9,    suffix: "%",  label: "Guaranteed uptime" },
          { value: 15,      suffix: "+",  label: "Years in market" },
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
            headline:    "e-CF: Electronic billing certified by DGII",
            description: "Issue all 10 types of Electronic Tax Receipts (e-CF) in seconds. Certified under Law 32-23 and Decree 587-24. Automatic contingency mode when DGII is unavailable.",
            items: [
              { icon: "file-check", text: "10 e-CF types: E31, E32, E33, E34, E41, E43, E44, E45, E46, E47" },
              { icon: "key",        text: "RSA-SHA256 digital signature with .P12 certificate (AES-256)" },
              { icon: "wifi-off",   text: "Contingency mode: immediate signing + automatic DGII retry" },
              { icon: "archive",    text: "10-year XML/PDF storage (legal compliance requirement)" },
              { icon: "award",      text: "CerteCF: get certified in 4 steps (vs. 15 traditional)" },
              { icon: "shield",     text: "Compliant with Law 32-23 & Decree 587-24 — 99.90% uptime" }
            ]
          },
          {
            id: "inventario", label: "Inventory", icon: "package", color: "#0DCFDA",
            headline:    "Total inventory control in real time",
            description: "Manage stock entries, exits, transfers and low-stock alerts from anywhere.",
            items: [
              { icon: "layers",      text: "Multi-warehouse and multi-branch" },
              { icon: "alert-circle",text: "Automatic minimum stock alerts" },
              { icon: "bar-chart-2", text: "FIFO, LIFO and Average valuation" },
              { icon: "scan",        text: "Barcode and QR reader" },
              { icon: "truck",       text: "Full product traceability" },
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
              { icon: "file-text",   text: "Automatic DGII and 606 reports" },
              { icon: "users",       text: "Accounts receivable and payable" },
              { icon: "dollar-sign", text: "Multi-currency and exchange rates" },
              { icon: "calendar",    text: "Automated period closings" }
            ]
          },
          {
            id: "crm", label: "CRM", icon: "users", color: "#34D399", addon: true,
            headline:    "Intelligent customer and sales management",
            description: "Complete sales cycle tracking. Never lose a potential customer again.",
            items: [
              { icon: "user-check",    text: "Visual sales pipeline" },
              { icon: "message-circle",text: "Complete interaction history" },
              { icon: "target",        text: "Sales rep goals and quotas" },
              { icon: "bell",          text: "Automatic reminders and follow-ups" },
              { icon: "pie-chart",     text: "Conversion and ROI analysis" },
              { icon: "share-2",       text: "Social media integration" }
            ]
          },
          {
            id: "nomina", label: "Payroll", icon: "briefcase", color: "#FBBF24", addon: true,
            headline:    "Fully automated payroll & HR",
            description: "Salary liquidation, benefits and TSS reports with precision and in record time.",
            items: [
              { icon: "clock",       text: "Attendance and overtime control" },
              { icon: "percent",     text: "Automatic ISR and AFP/ARS calculation" },
              { icon: "file",        text: "TSS and Labor Ministry reports" },
              { icon: "award",       text: "Vacation and benefits management" },
              { icon: "credit-card", text: "Direct bank or cash payment" },
              { icon: "archive",     text: "Payroll history and contracts" }
            ]
          },
          {
            id: "fixed-assets", label: "Fixed Assets", icon: "box", color: "#F97316", addon: true,
            headline:    "Total control over your fixed assets",
            description: "Register, depreciate and track every asset in the company from a single screen.",
            items: [
              { icon: "box",          text: "Full asset registry by category" },
              { icon: "trending-down",text: "Automatic depreciation (straight-line and other methods)" },
              { icon: "map-pin",      text: "Location and assigned custodian per asset" },
              { icon: "git-branch",   text: "Direct Accounting integration (automatic journal entries)" },
              { icon: "file-text",    text: "Book value and remaining useful-life reports" },
              { icon: "archive",      text: "Full history of disposals, transfers and improvements" }
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
          { icon: "shield",      color: "#34D399", title: "Bank-grade security",       description: "AES-256 encryption, automatic daily backups and ISO 27001 certification to protect your data." },
          { icon: "zap",         color: "#0DCFDA", title: "Extreme speed",             description: "World-class infrastructure with response time under 200ms and 99.9% guaranteed uptime." },
          { icon: "life-buoy",   color: "#A78BFA", title: "24/7 Support",              description: "Team of experts available via chat, phone and video. Response guaranteed in under 2 hours." },
          { icon: "trending-up", color: "#FBBF24", title: "Unlimited scalability",     description: "Grow from 1 user to thousands. Add modules, branches and users whenever you need." },
          { icon: "cpu",         color: "#F87171", title: "Artificial intelligence",   description: "Built-in AI for sales forecasting, anomaly detection and automation of repetitive tasks." }
        ]
      },
      devices: {
        sectionLabel: "Multi-platform",
        headline: "Your business, on every device",
        subheadline: "Desktop, tablet or mobile — Easy-IMS adapts perfectly to any screen with nothing to install.",
        stats: [
          { label: "Guaranteed uptime",   sublabel: "12 consecutive months" },
          { label: "e-CF processed",      sublabel: "Accumulated to date"   },
          { label: "Active companies",    sublabel: "Across Latin America"   },
          { label: "Steps to certify",    sublabel: "With CerteCF · DGII"   }
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
        { value: "Invoice in 30s", label: "Auto CFE"       },
        { value: "99.9% Uptime",   label: "Guaranteed"     }
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
          { title: "Approval Workflows",            description: "Multi-level system for credit limits, purchase orders and critical changes.",                        bullets: ["Approval by role: Manager, Director, CFO", "Pending requests with notifications", "Auto-rejection by configurable time limit"] },
          { title: "AI Business Agent",             description: "Conversational assistant that analyzes inventory, AR, AP and forecasts in natural language.",         bullets: ["Natural language queries in real time", "Collections projections at 30/60/90 days", "Local LLM engine — data stays on your servers"] },
          { title: "Multi-Company / Multi-Tenant",  description: "Dedicated, independent database per company. Zero data mixing risk.",                               bullets: ["DB-per-tenant architecture on PostgreSQL", "JWT with automatic per-company routing", "Centralized administration in a single interface"] },
          { title: "Audit & Compliance",            description: "Immutable record of all activity with field-level traceability.",                                     bullets: ["Log: user, IP, device, geolocation", "Field audit: previous vs. new value", "Account lockout after failed access attempts"] },
          { title: "Country-specific Validation",   description: "Configurable rules per country: RNC, CÉDULA, EIN, RFC and any custom format.",                      bullets: ["Configurable regex patterns per field and country", "Custom error messages by locale", "Required attributes by business type"] },
          { title: "Dynamic Modules",               description: "Enable or disable features per company in real time. Feature flag architecture.",                   bullets: ["Module registry with soft dependencies", "Routes and menus hidden automatically", "Per-company activation without system restart"] },
          { title: "Granular Access Control",       description: "Roles, permissions, groups and temporary delegations with automatic expiration.",                   bullets: ["Permissions by module, route and action", "Temporary delegations with expiry date", "Role groups for bulk assignment"] },
          { title: "Financial Intelligence",        description: "P&L, Balance Sheet, Cash Flow and AR/AP Aging in real time.",                                       bullets: ["Aging in 0-30, 31-60, 61-90, 90+ day buckets", "Collections and payment projections by period", "Top customers and items by sales volume"] }
        ]
      },
      modules: {
        sectionLabel: "Modules",
        headline:    "A complete suite of business tools",
        subheadline: "Each module is powerful on its own. Together they are unbeatable.",
        items: [
          { icon: "receipt",       color: "#4F8EF7", bg: "#EFF6FF", title: "Pro Billing",            description: "CFE, NCF, recurring invoices and more.",         tag: "Popular" },
          { icon: "package",       color: "#0DCFDA", bg: "#ECFEFF", title: "Inventory 360",          description: "Multi-warehouse, batches and traceability.",       tag: null },
          { icon: "book-open",     color: "#A78BFA", bg: "#F5F3FF", title: "AI Accounting",          description: "Automated accounting close with AI.",              tag: "New" },
          { icon: "users",         color: "#34D399", bg: "#ECFDF5", title: "Sales CRM",              description: "Pipeline, quotes and follow-up.",                  tag: "Add-on" },
          { icon: "briefcase",     color: "#FBBF24", bg: "#FFFBEB", title: "Payroll & HR",           description: "TSS, ISR and staff management.",                   tag: "Add-on" },
          { icon: "shopping-cart", color: "#F87171", bg: "#FEF2F2", title: "Point of Sale",          description: "Touch POS for physical and online stores.",         tag: null },
          { icon: "truck",         color: "#60A5FA", bg: "#EFF6FF", title: "Purchasing & Suppliers", description: "Purchase orders, reception and imports.",           tag: null },
          { icon: "bar-chart-2",   color: "#818CF8", bg: "#EEF2FF", title: "Analytics & BI",         description: "Executive dashboards and real-time KPIs.",         tag: "Premium" },
          { icon: "credit-card",   color: "#F59E0B", bg: "#FFFBEB", title: "Payment Gateway",         description: "Integration with major payment gateways: credit/debit cards, bank transfers and digital payments.", tag: "Integrated" },
          { icon: "box",           color: "#F97316", bg: "#FFF7ED", title: "Fixed Assets",           description: "Fixed asset tracking and automatic depreciation.", tag: "Add-on" }
        ]
      },
      stats: {
        headline: "Numbers that back our track record",
        items: [
          { value: 2597,     suffix: "+", label: "Active companies",             icon: "briefcase" },
          { value: 18500000, suffix: "+", label: "e-CF invoices processed",      icon: "receipt"   },
          { value: 99.9,     suffix: "%", label: "Guaranteed DGII uptime",       icon: "server"    },
          { value: 2000,     suffix: "+", label: "Developers in community",      icon: "users"     }
        ]
      },
      howItWorks: {
        sectionLabel: "How it works",
        headline:    "Get started in minutes, not weeks",
        subheadline: "Our onboarding process guides you step by step so you're operational in record time.",
        steps: [
          { number: "01", icon: "user-plus",   title: "Create your account",    description: "Register for free in less than 2 minutes. No credit card or commitment required." },
          { number: "02", icon: "settings",    title: "Configure your business", description: "Import your products, customers and catalogs with our intelligent assistant." },
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
              { text: "Advanced accounting",       included: false },
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
            id: "enterprise", name: "Enterprise", highlighted: false, badge: "Complete", cta: "Contact sales",
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
          { question: "Do I need to install any software on my computer?",      answer: "No. Easy-IMS is 100% cloud-based. All you need is a web browser and an internet connection. It works on Windows, Mac, Linux, iOS and Android." },
          { question: "How does the free trial work?",                          answer: "You get 15 days of full access to all Professional plan modules, with no restrictions and no credit card required. At the end of the period, you decide if you continue." },
          { question: "Can I migrate my data from another system?",             answer: "Yes. Our implementation team helps you import customers, products, inventory and accounting history from Excel, CSV or directly from your current system." },
          { question: "Does Easy-IMS comply with DGII regulations?",           answer: "Absolutely. We are a certified Electronic Tax Receipt (CFE) provider. Reports 606, 607 and 608 are generated automatically according to current regulations." },
          { question: "What happens to my data if I cancel my subscription?",  answer: "Your data is always yours. Upon cancellation, you can export your full history in standard formats (Excel, PDF, XML) within 90 days after cancellation." },
          { question: "How many users can I have in my account?",              answer: "It depends on the plan. Starter: up to 3 users. Professional: up to 15. Enterprise: unlimited users. You can add more users at any time." },
          { question: "Do you offer training for using the system?",           answer: "Yes. All plans include access to our online academy with more than 200 video tutorials. The Enterprise plan includes in-person training by our certified experts." },
          { question: "How secure is the platform?",                           answer: "We use AES-256 encryption for all data in transit and at rest. We perform automatic hourly backups and have redundant infrastructure with 99.9% guaranteed uptime." }
        ]
      },
      cta: {
        headline:    "Start today. Risk-free.",
        subheadline: "Join more than 5,000 companies that already manage their business intelligently with Easy-IMS.",
        ctaPrimary:   { label: "Try free 15 days",    href: "#contacto" },
        ctaSecondary: { label: "Talk to an expert",   href: "#contacto" },
        trustItems: ["No credit card", "No commitment contract", "Support included", "100% secure data"]
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
        badges: ["Certified DGII Provider", "ISO 27001", "SOC 2 Type II"]
      }
    }
  }
};
