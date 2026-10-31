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
    phone:       "+1 (809) 870-8940",
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
      { value: 90,     suffix: "días",  label: "Respaldo diario en la nube", sublabel: "Verificado, conservado 90 días", color: "#34D399", ring: true  },
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
      { value: "✓",          label: "Respaldo diario",   labelEn: "Daily backup", color: "purple" }
    ]
  },

  /* ─────────────────────────── HERO FLOATING CARDS ───────────────────── */
  heroFloats: [
    { icon: "trending-up", bg: "rgba(52,211,153,.15)",  value: "+38% ventas",     label: "vs. mes anterior" },
    { icon: "zap",         bg: "rgba(79,142,247,.15)",  value: "Factura en 30s",  label: "CFE automático"   },
    { icon: "shield",      bg: "rgba(167,139,250,.15)", value: "Respaldo diario", label: "Verificado, en la nube" }
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
      { label: "Gateway",         href: "#gateway",         order: 4, visible: true },
      { label: "Seguridad",       href: "#seguridad",       order: 4.5, visible: true },
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
    badge:       "🏛️ <span class=\"badge-blink\">En Proceso</span> · Proveedor Certificado DGII · Ley 32-23",
    headline:    "El software empresarial que tu negocio necesita",
    subheadline: "Facturación electrónica, inventario en tiempo real, contabilidad avanzada y CRM integrado — todo en una sola plataforma inteligente.",
    ctaPrimary:  { label: "Comienza Gratis — 15 días", href: "#contacto" },
    ctaSecondary:{ label: "Ver demostración",           href: "#caracteristicas" },
    trustNote:   "Sin tarjeta de crédito · Sin contrato de permanencia",
    stats: [
      { value: 5000,  suffix: "+",  label: "Empresas activas", visible: false }, // oculto temporalmente -- reactivar cuando el número sea real, solo cambiar a true
      { value: 90,    suffix: " días", label: "De respaldos en la nube" },
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
        headline: "e-CF: Facturación electrónica certificada por la DGII",
        description: "Emite los 10 tipos de Comprobantes Fiscales Electrónicos (e-CF) en segundos. Certificados bajo Ley 32-23 y Decreto 587-24. Modo contingencia automático cuando la DGII no está disponible.",
        items: [
          { icon: "file-check",  text: "10 tipos e-CF: E31, E32, E33, E34, E41, E43, E44, E45, E46, E47" },
          { icon: "key",         text: "Firma digital RSA-SHA256 con tu certificado .P12, guardado cifrado" },
          { icon: "wifi-off",    text: "Modo contingencia: firma inmediata + retransmisión automática DGII" },
          { icon: "archive",     text: "Almacenamiento XML/PDF por 10 años (cumplimiento legal)" },
          { icon: "award",       text: "CerteCF: certifícate en 4 pasos (vs. 15 del proceso tradicional)" },
          { icon: "qr-code",     text: "Recibo con código de seguridad y QR al instante (firma al recibir)" }
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
          { icon: "bar-chart-2",text: "Costo promedio ponderado, último costo o costo estándar" },
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
      { icon: "shield",      color: "#34D399", title: "Seguridad de tus datos",     description: "Cada empresa en su propia base de datos, respaldo diario verificado en la nube (conservado 90 días), conexión cifrada HTTPS/TLS y auditoría de cada cambio." },
      { icon: "qr-code",     color: "#0DCFDA", title: "Factura con QR al instante", description: "Nuestro Easy-IMS Gateway firma el e-CF al recibirlo: el recibo sale con su código de seguridad y QR sin esperar a la DGII, y el envío se reintenta solo." },
      { icon: "life-buoy",   color: "#A78BFA", title: "Soporte 24/7",               description: "Equipo de expertos disponible por chat, teléfono y video. Respuesta garantizada en menos de 2 horas." },
      { icon: "trending-up", color: "#FBBF24", title: "Escalable sin límites",      description: "Crece desde 1 usuario hasta miles. Agrega módulos, sucursales y usuarios cuando los necesites." },
      { icon: "cpu",         color: "#F87171", title: "Inteligencia artificial",    description: "IA integrada para pronósticos de ventas, detección de anomalías y automatización de tareas repetitivas." }
    ]
  },

  /* ─────────────────────────── MODULES / SERVICES ───────────────────── */
  /* Cada área lista funciones reales del ERP (fuente: easyims core, menú navItems.ts y docs/AI_HANDOFF.md, 2026-10-31). */
  modules: {
    visible: true,
    sectionLabel: "Módulos",
    headline: "Todo el ERP, área por área",
    subheadline: "Ventas, DGII, inventario, compras, contabilidad, manufactura y servicios en un solo sistema. Activa solo los módulos que tu empresa usa.",
    items: [
      { icon: "receipt",       color: "#4F8EF7", bg: "#EFF6FF", title: "Ventas y Facturación",        description: "Del presupuesto a la factura, sin volver a digitar.", tag: "Popular",
        features: ["Cotizaciones que se convierten en factura", "Facturas recurrentes, por contrato y por proyecto", "Notas de crédito, notas de débito y devoluciones", "Vendedor en cada factura y lista de facturas configurable", "Envío de facturas por WhatsApp y correo"] },
      { icon: "file-check",    color: "#0DCFDA", bg: "#ECFEFF", title: "Facturación Electrónica DGII", description: "e-CF a través de nuestro propio Easy-IMS Gateway.", tag: "e-CF",
        features: ["Comprobantes E31, E32, E33, E34, E41, E43, E44, E45, E46 y E47", "Recibo con código de seguridad y QR al instante", "Reportes 606, 607, 608, IT-1, IR-17 e IR-2", "ITBIS de construcción (Norma General 07-2007) y retenciones en alquileres", "Alertas de secuencias e-NCF por agotarse o vencer", "e-CF recibidos de tus suplidores"] },
      { icon: "shopping-cart", color: "#F87171", bg: "#FEF2F2", title: "Punto de Venta y Caja",        description: "Vende rápido y cuadra la caja con control.", tag: null,
        features: ["Punto de venta táctil", "Cajas, sesiones y turnos (tandas)", "Diferencias de caja aprobadas por un supervisor, nunca el mismo cajero", "Cierre por caja, por día y por sucursal", "Depósitos bancarios y tesorería"] },
      { icon: "users",         color: "#34D399", bg: "#ECFDF5", title: "Clientes y Cobros",            description: "Sabe quién te debe, cuánto y desde cuándo.", tag: null,
        features: ["Consulta financiera del cliente (vista 360)", "Reportes ejecutivos: mejores compradores (Pareto/ABC), riesgo y cobranza", "Antigüedad de saldos y estados de cuenta", "Recibos de cobro, créditos de cliente y límite de crédito", "Recordatorios de pago y grupos de clientes"] },
      { icon: "package",       color: "#0EA5E9", bg: "#F0F9FF", title: "Inventario y Almacenes",       description: "Existencias reales en cada sucursal y almacén.", tag: null,
        features: ["Multi-sucursal y multi-almacén", "Mínimos, máximos y reorden por almacén, con alerta de stock bajo", "Lotes y fechas de vencimiento", "Transferencias, ajustes y consumo interno", "Despachos y rutas de entrega", "Costo promedio, último costo o costo estándar, con reporte de valuación"] },
      { icon: "tags",          color: "#818CF8", bg: "#EEF2FF", title: "Catálogo de Artículos",        description: "Encuentra la pieza correcta, aunque tenga otro código.", tag: null,
        features: ["Tipos de artículo con atributos técnicos y búsqueda por atributo", "Compatibilidad con vehículos: marca, modelo, año y motor", "Equivalencias entre SKU y referencias OEM y de proveedor", "Marcas, fabricantes y fotos por artículo", "Importación y exportación en Excel, también por tipo de artículo"] },
      { icon: "truck",         color: "#60A5FA", bg: "#EFF6FF", title: "Compras y Cuentas por Pagar",  description: "Del pedido al suplidor hasta el pago.", tag: null,
        features: ["Órdenes de compra y recepción con o sin orden", "Catálogo de cada suplidor con su código y costo", "Facturas de suplidor y pagos", "Importaciones con costo de aterrizaje (landed cost)", "Autorización de pagos antes de pagar"] },
      { icon: "book-open",     color: "#A78BFA", bg: "#F5F3FF", title: "Contabilidad y Finanzas",      description: "Los asientos salen solos de cada operación.", tag: null,
        features: ["Catálogo de cuentas, mayor general y asientos automáticos", "Balance, Estado de Resultados, Flujo de Efectivo, Cambios en el Patrimonio y Notas", "Conciliación bancaria y cierre de período", "Multimoneda y revaluación cambiaria", "Presupuestos, dimensiones analíticas y Anexos DGII A y B-1", "O modo «solo operaciones», sin contabilidad"] },
      { icon: "factory",       color: "#F97316", bg: "#FFF7ED", title: "Manufactura",                  description: "Produce con recetas y controla el material.", tag: null,
        features: ["Recetas y lista de materiales (BOM)", "Órdenes de trabajo que consumen el material al completarse", "Inventario separado para venta y para producción", "Corte de planchas con retazos reutilizables", "Registro de merma"] },
      { icon: "wrench",        color: "#14B8A6", bg: "#F0FDFA", title: "Servicios y Reparaciones",     description: "Para negocios que venden horas, viajes o reparaciones.", tag: "Easy-Repair",
        features: ["Catálogo de servicios listo por industria", "Unidades de servicio: hora, viaje, km, mes y más", "Agenda de servicios y técnicos", "Órdenes de reparación con equipo del cliente, bitácora y garantía", "Horas trabajadas y proyectos"] },
      { icon: "check-square",  color: "#4F8EF7", bg: "#EFF6FF", title: "Aprobaciones",                 description: "Un solo motor de aprobación para toda la empresa.", tag: null,
        features: ["Facturas de suplidor, facturas de cliente y pagos", "Aprobación por departamento, en paralelo", "Reglas por monto, descuento, margen y límite de crédito", "Delegaciones por fecha y matriz de aprobaciones", "Aviso por correo a cada aprobador"] },
      { icon: "building-2",    color: "#34D399", bg: "#ECFDF5", title: "Multi-empresa y Accesos",      description: "Varias empresas y sucursales, cada una en su lugar.", tag: null,
        features: ["Cada empresa con su propia base de datos", "Grupos de empresas con sus propios administradores", "Usuarios limitados a sus sucursales", "Roles y permisos por pantalla", "Módulos que se activan por empresa", "Auditoría de cada cambio de campo"] },
      { icon: "store",         color: "#F59E0B", bg: "#FFFBEB", title: "Restaurante y Colmado",        description: "Pantallas hechas para el negocio de barrio y la cocina.", tag: "Vertical",
        features: ["Restaurante: órdenes, cocina, modificadores y recetas", "Colmado: venta rápida, fiados y precios por caja", "Pedidos entrantes y delivery con cuadre de repartidores", "Combos y pedido sugerido al suplidor"] },
      { icon: "briefcase",     color: "#FBBF24", bg: "#FFFBEB", title: "Nómina, RRHH y Activos Fijos", description: "Módulos adicionales conectados a la contabilidad.", tag: "Add-on",
        features: ["Empleados, organigrama, asistencia y vacaciones", "Conceptos de pago y deducciones recurrentes", "Prestaciones laborales y su provisión", "Archivo de pago para el banco", "Activos fijos con depreciación"] },
      { icon: "cpu",           color: "#F87171", bg: "#FEF2F2", title: "Plataforma",                   description: "Pensada para trabajar cómodo, en cualquier lugar.", tag: null,
        features: ["Funciona en teléfono, tablet y computadora", "Español e inglés, y zoom de pantalla del 50 % al 130 %", "Asistente de IA opcional para preguntas en lenguaje natural", "Telemetría: tiempos del sistema y de la DGII en vivo", "Centro de ayuda integrado"] }
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

  /* ─────────────────────────── EASY-IMS GATEWAY ─────────────────────── */
  /* Fuente: repo del gateway (README, ARCHITECTURE, ECF_JSON_API, app/routers/ecf.py, fe.py, latency.py). Sin cifras de rendimiento ni "certificado". */
  gateway: {
    visible: true,
    sectionLabel: "Easy-IMS Gateway",
    headline: "Nuestro propio puente con la DGII",
    subheadline: "Easy-IMS no depende de un tercero para la facturación electrónica: el Easy-IMS Gateway es nuestro. Valida, firma, envía, reintenta y recibe e-CF por ti — y cualquier software puede usarlo.",
    flows: [
      { title: "Emitir", steps: [
        { icon: "monitor",      label: "Tu sistema",         sub: "Easy-IMS u otro software" },
        { icon: "shield-check", label: "Easy-IMS Gateway",   sub: "Valida, firma y encola" },
        { icon: "landmark",     label: "DGII",               sub: "Recibe y responde" } ] },
      { title: "Recibir", steps: [
        { icon: "landmark",     label: "DGII y proveedores", sub: "Te envían e-CF" },
        { icon: "shield-check", label: "Easy-IMS Gateway",   sub: "Acuse de recibo y aprobación comercial" },
        { icon: "monitor",      label: "Tu sistema",         sub: "Comprobantes recibidos" } ] }
    ],
    items: [
      { icon: "qr-code",      color: "#34D399", title: "Recibo con QR al instante",   description: "El gateway firma cada e-CF con el certificado de tu empresa en el momento en que lo recibe y devuelve el código de seguridad de inmediato. El recibo sale impreso con su QR sin esperar a la DGII." },
      { icon: "refresh-cw",   color: "#4F8EF7", title: "Tus ventas no se detienen",   description: "Una cola y un proceso de envío que reintenta hasta que la DGII responde. Si la DGII está lenta, sigues facturando. Para caídas mayores, el modo contingencia imprime la leyenda que exige la DGII durante su ventana de 72 horas." },
      { icon: "file-check",   color: "#0DCFDA", title: "Todos los tipos de e-CF",     description: "E31, E32, E33, E34, E41, E43, E44, E45, E46 y E47, más el Resumen de Factura de Consumo (RFCE) para facturas de consumo menores de RD$250,000." },
      { icon: "inbox",        color: "#A78BFA", title: "Recepción de e-CF",           description: "Recibe los comprobantes de tus proveedores, con acuse de recibo y aprobación comercial, en portal.easy-ims.com: la dirección que la DGII validó." },
      { icon: "search-check", color: "#FBBF24", title: "Validación antes de enviar",  description: "Cada comprobante se revisa contra los esquemas XSD de la DGII y sus reglas por tipo antes de salir, para atrapar los errores antes de que la DGII lo rechace." },
      { icon: "lock",         color: "#F87171", title: "Datos aislados y cifrados",   description: "Los certificados se guardan cifrados y cada empresa está aislada con seguridad a nivel de fila (row-level security) en la base de datos del gateway." },
      { icon: "user-check",   color: "#60A5FA", title: "Portal de comprobantes",      description: "Tus clientes y tu equipo consultan sus comprobantes electrónicos en un portal con verificación en dos pasos (MFA)." },
      { icon: "activity",     color: "#14B8A6", title: "Telemetría en vivo",          description: "Mide el tiempo de cada envío y mira el tráfico con la DGII en tiempo real desde Easy-IMS." }
    ],
    mapping: {
      title: "Conectamos tu sistema actual sin reprogramarlo",
      subtitle: "¿Tu punto de venta o ERP ya genera su propio JSON? El gateway lo mapea a nuestro formato canónico de e-CF y de ahí al XML de la DGII, firmado y validado contra el XSD. Tu sistema sigue igual.",
      colIn: "Tu JSON (sistema actual)", colMap: "Mapeo → formato canónico", colOut: "XML e-CF para la DGII",
      note: "Datos de ejemplo. Cada mapeo se guarda como plantilla y se valida con muestras antes de usarse.",
      badges: ["Firmado", "Válido contra XSD"],
      rows: [
        { src: "doc.numero_fiscal",   val: "\"E310000000001\"",   canon: "e_ncf",             xml: "eNCF" },
        { src: "doc.fecha",           val: "\"31/10/2026\"",      canon: "fecha_emision",     xml: "FechaEmision" },
        { src: "cliente.rnc",         val: "\"000000000\"",       canon: "buyer.rnc",         xml: "RNCComprador" },
        { src: "cliente.nombre",      val: "\"Cliente Ejemplo\"", canon: "buyer.name",        xml: "RazonSocialComprador" },
        { src: "items[0].precio",     val: "100.00",                canon: "lines[0].unit_price", xml: "PrecioUnitarioItem" },
        { src: "impuestos.itbis",     val: "18.00",                 canon: "totals.total_tax",  xml: "TotalITBIS" },
        { src: "total_general",       val: "118.00",                canon: "totals.total",      xml: "MontoTotal" }
      ],
    },
    cert: {
      icon: "badge-alert", title: "Tu certificado de firma nunca te toma por sorpresa",
      description: "Easy-IMS muestra el certificado (.p12) que realmente firma tus e-CF y cuántos días le quedan, con color según la urgencia. El gateway además envía avisos por correo al acercarse el vencimiento: semanales primero y diarios en la última semana.",
      levels: [
        { color: "#F87171", label: "Vencido" },
        { color: "#FB923C", label: "30 días o menos" },
        { color: "#FBBF24", label: "60 días o menos" },
        { color: "#34D399", label: "Vigente" }
      ]
    },
    api: {
      title: "API abierta: cualquier software puede emitir e-CF con el gateway",
      subtitle: "Envía tu comprobante en JSON y el gateway hace el resto: arma el XML, firma, envía a la DGII y te informa el resultado (consulta o webhook). Un mismo e-NCF nunca se envía dos veces.",
      baseUrl: "https://portal.easy-ims.com",
      authNote: "Cada llamada lleva el encabezado Authorization: Bearer TOKEN. Guarda el token en tu servidor, nunca en el navegador.",
      endpointsTitle: "Endpoints públicos",
      colMethod: "Método", colPath: "Ruta", colPurpose: "Para qué sirve",
      endpoints: [
        { method: "POST", path: "/v1/ecf",                         purpose: "Envía un e-CF (JSON o XML). Responde 202 con el número de envío, el e-NCF y el código de seguridad." },
        { method: "GET",  path: "/v1/ecf/{id}",                    purpose: "Estado del envío y respuesta de la DGII (Aceptado, Condicional o Rechazado)." },
        { method: "GET",  path: "/v1/ecf",                         purpose: "Lista tus comprobantes enviados, con filtros." },
        { method: "GET",  path: "/v1/ecf/{id}/events",             purpose: "Historial de pasos del envío." },
        { method: "GET",  path: "/v1/ecf/{id}/xml",                purpose: "XML firmado del comprobante." },
        { method: "GET",  path: "/v1/ecf/{id}/pdf",                purpose: "Representación impresa en PDF, con su QR." },
        { method: "GET",  path: "/v1/next-encf",                   purpose: "Próximo e-NCF sugerido según tu historial." },
        { method: "GET",  path: "/v1/contingencia",                purpose: "Consulta (GET) o cambia (POST) el modo contingencia de tu empresa." },
        { method: "GET",  path: "/v1/status",                      purpose: "Comprueba la conexión y la IP que ve el gateway." },
        { method: "POST", path: "/v1/auth/token",                  purpose: "Opcional: cambia tu token por uno temporal de 1 hora." },
        { method: "GET",  path: "/v1/latency",                     purpose: "Tiempos de tus e-CF (también /v1/latency/live y /v1/latency/traffic)." },
        { method: "POST", path: "/fe/recepcion/api/ecf",           purpose: "Receptor: aquí llegan los e-CF que te envían otros emisores." },
        { method: "POST", path: "/fe/aprobacioncomercial/api/ecf", purpose: "Receptor: aprobaciones comerciales de tus comprobantes." },
        { method: "GET",  path: "/fe/autenticacion/api/semilla",   purpose: "Receptor: autenticación de quien te envía (semilla y validación de certificado)." }
      ],
      samplesTitle: "Intégralo en tu lenguaje",
      samplesNote: "Ejemplos con valores de prueba (TOKEN, RNC 000000000, e-NCF E310000000001). El archivo ecf.json contiene el comprobante en el formato JSON del gateway.",
      responseTitle: "Respuesta inmediata (202)",
      response: "{\n  \"submission_id\": 123,\n  \"status\": \"RECEIVED\",\n  \"e_ncf\": \"E310000000001\",\n  \"security_code\": \"AbC123\",\n  \"fecha_firma\": \"31-10-2026 10:15:00\"\n}",
      samples: [
        {
          "id": "json",
          "label": "ecf.json",
          "code": "{\n  \"ecf_type\": \"31\",\n  \"e_ncf\": \"E310000000001\",\n  \"fecha_emision\": \"31-10-2026\",\n  \"fecha_vencimiento_secuencia\": \"31-12-2028\",\n  \"tipo_pago\": \"1\",\n  \"tipo_ingresos\": \"01\",\n  \"issuer\": { \"rnc\": \"000000000\", \"name\": \"MI EMPRESA SRL\", \"address\": \"CALLE EJEMPLO 1\" },\n  \"buyer\":  { \"rnc\": \"000000000\", \"name\": \"CLIENTE EJEMPLO SRL\" },\n  \"formas_pago\": [ { \"forma\": \"1\", \"monto\": 118.00 } ],\n  \"lines\": [\n    { \"line\": 1, \"description\": \"PRODUCTO DE EJEMPLO\", \"qty\": 1, \"unit_price\": 100.00,\n      \"line_total\": 100.00, \"indicador\": 1, \"indicador_bien_servicio\": \"1\" }\n  ],\n  \"tax_tiers\": [ { \"indicador\": 1, \"rate\": 0.18, \"base\": 100.00, \"tax\": 18.00 } ],\n  \"totals\": { \"subtotal\": 100.00, \"total_tax\": 18.00, \"total\": 118.00 }\n}"
        },
        {
          "id": "curl",
          "label": "cURL",
          "code": "jq -n --rawfile doc ecf.json '{file_type: \"JSON\", content: $doc}' |\ncurl -X POST \"https://portal.easy-ims.com/v1/ecf\" \\\n  -H \"Authorization: Bearer TOKEN\" \\\n  -H \"Content-Type: application/json\" \\\n  --data @-"
        },
        {
          "id": "python",
          "label": "Python",
          "code": "import requests\n\nwith open(\"ecf.json\", encoding=\"utf-8\") as f:\n    documento = f.read()\n\nr = requests.post(\n    \"https://portal.easy-ims.com/v1/ecf\",\n    headers={\"Authorization\": \"Bearer TOKEN\"},\n    json={\"file_type\": \"JSON\", \"content\": documento},\n)\nprint(r.status_code, r.json())   # submission_id, e_ncf, security_code"
        },
        {
          "id": "csharp",
          "label": "C# / .NET",
          "code": "using System.Net.Http.Headers;\nusing System.Text;\nusing System.Text.Json;\n\nvar client = new HttpClient();\nclient.DefaultRequestHeaders.Authorization =\n    new AuthenticationHeaderValue(\"Bearer\", \"TOKEN\");\n\nvar documento = File.ReadAllText(\"ecf.json\");\nvar body = JsonSerializer.Serialize(new { file_type = \"JSON\", content = documento });\nvar r = await client.PostAsync(\"https://portal.easy-ims.com/v1/ecf\",\n    new StringContent(body, Encoding.UTF8, \"application/json\"));\nConsole.WriteLine(await r.Content.ReadAsStringAsync());"
        },
        {
          "id": "java",
          "label": "Java",
          "code": "import java.net.URI;\nimport java.net.http.*;\nimport java.nio.file.*;\n\nString doc = Files.readString(Path.of(\"ecf.json\"))\n    .replace(\"\\\\\", \"\\\\\\\\\").replace(\"\\\"\", \"\\\\\\\"\")\n    .replace(\"\\r\", \"\").replace(\"\\n\", \"\\\\n\");\nString body = \"{\\\"file_type\\\":\\\"JSON\\\",\\\"content\\\":\\\"\" + doc + \"\\\"}\";\n\nHttpRequest req = HttpRequest.newBuilder(URI.create(\"https://portal.easy-ims.com/v1/ecf\"))\n    .header(\"Authorization\", \"Bearer TOKEN\")\n    .header(\"Content-Type\", \"application/json\")\n    .POST(HttpRequest.BodyPublishers.ofString(body))\n    .build();\nHttpResponse<String> r = HttpClient.newHttpClient()\n    .send(req, HttpResponse.BodyHandlers.ofString());\nSystem.out.println(r.statusCode() + \" \" + r.body());"
        },
        {
          "id": "node",
          "label": "JavaScript / Node",
          "code": "import { readFileSync } from \"node:fs\";\n\nconst documento = readFileSync(\"ecf.json\", \"utf8\");\nconst r = await fetch(\"https://portal.easy-ims.com/v1/ecf\", {\n  method: \"POST\",\n  headers: { Authorization: \"Bearer TOKEN\", \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ file_type: \"JSON\", content: documento }),\n});\nconsole.log(r.status, await r.json());"
        },
        {
          "id": "php",
          "label": "PHP",
          "code": "<?php\n$body = json_encode([\n    \"file_type\" => \"JSON\",\n    \"content\"   => file_get_contents(\"ecf.json\"),\n]);\n$ch = curl_init(\"https://portal.easy-ims.com/v1/ecf\");\ncurl_setopt_array($ch, [\n    CURLOPT_POST           => true,\n    CURLOPT_POSTFIELDS     => $body,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER     => [\"Authorization: Bearer TOKEN\",\n                               \"Content-Type: application/json\"],\n]);\n$data = json_decode(curl_exec($ch), true);\nprint_r($data);"
        },
        {
          "id": "foxpro",
          "label": "Visual FoxPro",
          "code": "LOCAL lcDoc, lcBody, loHttp\nlcDoc = CHRTRAN(FILETOSTR(\"ecf.json\"), CHR(13) + CHR(10), \"\")\nlcDoc = STRTRAN(STRTRAN(lcDoc, \"\\\", \"\\\\\"), CHR(34), \"\\\" + CHR(34))\nlcBody = '{\"file_type\":\"JSON\",\"content\":\"' + lcDoc + '\"}'\n\nloHttp = CREATEOBJECT(\"WinHttp.WinHttpRequest.5.1\")\nloHttp.Open(\"POST\", \"https://portal.easy-ims.com/v1/ecf\", .F.)\nloHttp.SetRequestHeader(\"Authorization\", \"Bearer TOKEN\")\nloHttp.SetRequestHeader(\"Content-Type\", \"application/json\")\nloHttp.Send(lcBody)\n? loHttp.Status, loHttp.ResponseText"
        }
      ]
    }
  },

  /* ─────────────────────────── SECURITY ─────────────────────────────── */
  /* Solo afirmaciones verificadas (2026-10-31). No agregar certificaciones ni cifras sin evidencia. */
  security: {
    visible: true,
    sectionLabel: "Seguridad",
    headline: "Tus datos, protegidos y respaldados cada día",
    subheadline: "Cada empresa en su propia base de datos, una copia diaria verificada fuera del servidor y en la nube, y control de quién ve y cambia qué.",
    flowTitle: "Así se respalda tu información, todos los días",
    flow: [
      { icon: "building-2",   title: "Tu empresa",              text: "Su propia base de datos, aislada" },
      { icon: "shield-check", title: "Copia diaria verificada", text: "Automática, y a demanda con un botón" },
      { icon: "cloud",        title: "Nube",                    text: "Backblaze B2 · centro de datos separado · cifrada · 90 días" }
    ],
    items: [
      { icon: "database",     color: "#34D399", title: "Una base de datos por empresa",        description: "Cada empresa tiene su propia base de datos. Aislamiento total: ninguna otra empresa puede ver tus datos." },
      { icon: "cloud-upload", color: "#4F8EF7", title: "Respaldo diario en la nube",           description: "Respaldo automático cada día, verificado y guardado fuera del servidor, en la nube (Backblaze B2, en un centro de datos separado, cifrado en reposo). Se conserva 90 días, y puedes sacar una copia en el momento con un botón." },
      { icon: "lock",         color: "#0DCFDA", title: "Conexión cifrada",                     description: "Todo viaja por HTTPS/TLS, con certificado de Google Trust Services." },
      { icon: "key-round",    color: "#A78BFA", title: "Certificados de firma protegidos",     description: "Tu certificado de firma digital se guarda cifrado y nunca sale del servidor." },
      { icon: "user-cog",     color: "#FBBF24", title: "Permisos y verificación en dos pasos", description: "Permisos por rol, por sucursal y por usuario. Verificación en dos pasos (MFA) en el portal de comprobantes." },
      { icon: "history",      color: "#F87171", title: "Auditoría completa",                   description: "Cada cambio de campo queda registrado con quién y cuándo. Los comprobantes fiscales nunca se borran: se anulan con nota de crédito." },
      { icon: "user-x",       color: "#60A5FA", title: "Bloqueo ante intentos fallidos",       description: "El usuario se bloquea tras varios intentos fallidos de acceso." }
    ]
  },

  /* ─────────────────────────── STATISTICS ───────────────────────────── */
  stats: {
    visible: true,
    headline: "Números que respaldan nuestra trayectoria",
    items: [
      { value: 2597,     suffix: "+",  label: "Empresas activas",              icon: "briefcase" },
      { value: 18500000, suffix: "+",  label: "e-CF procesados",               icon: "receipt"   },
      { value: 90,       suffix: " días", label: "De respaldos en la nube",          icon: "cloud"     },
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
      { question: "¿Qué tan segura es la plataforma?",                          answer: "Cada empresa tiene su propia base de datos: ninguna otra empresa puede ver tus datos. Hacemos un respaldo automático diario, verificado y guardado fuera del servidor en la nube (Backblaze B2, centro de datos separado, cifrado en reposo), que se conserva 90 días; también puedes sacar una copia en el momento con un botón. Toda la conexión va cifrada por HTTPS/TLS, los certificados de firma se guardan cifrados y nunca salen del servidor, los permisos se asignan por rol, sucursal y usuario, cada cambio queda auditado con quién y cuándo, y el usuario se bloquea tras intentos fallidos de acceso." }
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
      "Respaldo diario en la nube"
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
          { label: "Seguridad",            href: "#seguridad" }
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
      "e-CF: E31–E47"
    ]
  },

  /* ─────────────────────────── SECTION VISIBILITY / ORDER ───────────── */
  sections: [
    { id: "hero",           visible: true,  order: 1 },
    { id: "devices",        visible: true,  order: 2 },
    { id: "clients",        visible: false, order: 3 }, // sección completa oculta 2026-09-18 -- reactivar cuando haya clientes reales que citar (ver backup-2026-09-18)
    { id: "features",       visible: true,  order: 3 },
    { id: "benefits",       visible: true,  order: 4 },
    { id: "modules",        visible: true,  order: 5 },
    { id: "platform",       visible: true,  order: 6 },
    { id: "gateway",        visible: true,  order: 6.3 },
    { id: "security",       visible: true,  order: 6.6 },
    { id: "stats",          visible: false, order: 7 }, // sección completa oculta 2026-09-18 -- reactivar cuando los números sean reales (ver backup-2026-09-18)
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
          { label: "Gateway",       href: "#gateway",         order: 4, visible: true },
          { label: "Security",      href: "#seguridad",       order: 4.5, visible: true },
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
          { value: 5000,    suffix: "+",  label: "Active companies", visible: false }, // temporarily hidden -- flip to true when the number is real
          { value: 90,      suffix: " days", label: "Of cloud backups kept" },
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
            headline:    "e-CF: Electronic billing certified by DGII",
            description: "Issue all 10 types of Electronic Tax Receipts (e-CF) in seconds. Certified under Law 32-23 and Decree 587-24. Automatic contingency mode when DGII is unavailable.",
            items: [
              { icon: "file-check", text: "10 e-CF types: E31, E32, E33, E34, E41, E43, E44, E45, E46, E47" },
              { icon: "key",        text: "RSA-SHA256 digital signature with your .P12 certificate, stored encrypted" },
              { icon: "wifi-off",   text: "Contingency mode: immediate signing + automatic DGII retry" },
              { icon: "archive",    text: "10-year XML/PDF storage (legal compliance requirement)" },
              { icon: "award",      text: "CerteCF: get certified in 4 steps (vs. 15 traditional)" },
              { icon: "qr-code",    text: "Receipt with security code and QR right away (signed at intake)" }
            ]
          },
          {
            id: "inventario", label: "Inventory", icon: "package", color: "#0DCFDA",
            headline:    "Total inventory control in real time",
            description: "Manage stock entries, exits, transfers and low-stock alerts from anywhere.",
            items: [
              { icon: "layers",      text: "Multi-warehouse and multi-branch" },
              { icon: "alert-circle",text: "Automatic minimum stock alerts" },
              { icon: "bar-chart-2", text: "Weighted average, last cost or standard cost" },
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
          { icon: "shield",      color: "#34D399", title: "Your data, secured",        description: "Each company in its own database, a verified daily cloud backup (kept 90 days), encrypted HTTPS/TLS connections and an audit of every change." },
          { icon: "qr-code",     color: "#0DCFDA", title: "Invoice with QR right away", description: "Our Easy-IMS Gateway signs the e-CF at intake: the receipt prints with its security code and QR without waiting for the DGII, and the submission retries by itself." },
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
          { label: "Daily cloud backup",  sublabel: "Verified, kept 90 days", suffix: "days" },
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
        { value: "Daily backup",   label: "Verified, in the cloud" }
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
        headline:    "The whole ERP, area by area",
        subheadline: "Sales, DGII, inventory, purchasing, accounting, manufacturing and services in one system. Turn on only the modules your company uses.",
        items: [
          { title: "Sales & Invoicing",           description: "From quote to invoice without retyping.", tag: "Popular",
            features: ["Quotes that turn into invoices", "Recurring, contract and project invoices", "Credit notes, debit notes and returns", "Salesperson on every invoice and a configurable invoice list", "Send invoices by WhatsApp and email"] },
          { title: "DGII Electronic Invoicing",   description: "e-CF through our own Easy-IMS Gateway.", tag: "e-CF",
            features: ["E31, E32, E33, E34, E41, E43, E44, E45, E46 and E47 receipts", "Receipt with security code and QR right away", "606, 607, 608, IT-1, IR-17 and IR-2 reports", "Construction ITBIS (Norma General 07-2007) and rental withholdings", "Alerts when e-NCF sequences run low or expire", "e-CF received from your suppliers"] },
          { title: "Point of Sale & Cash",        description: "Sell fast and balance the drawer under control.", tag: null,
            features: ["Touch point of sale", "Registers, sessions and shifts", "Cash differences approved by a supervisor, never the same cashier", "Close per register, per day and per branch", "Bank deposits and treasury"] },
          { title: "Customers & Collections",     description: "Know who owes you, how much and since when.", tag: null,
            features: ["Customer financial inquiry (360 view)", "Executive reports: top buyers (Pareto/ABC), risk and collections", "Receivables aging and statements", "Payment receipts, customer credits and credit limits", "Payment reminders and customer groups"] },
          { title: "Inventory & Warehouses",      description: "Real stock in every branch and warehouse.", tag: null,
            features: ["Multi-branch and multi-warehouse", "Min, max and reorder per warehouse, with low-stock alerts", "Lots and expiration dates", "Transfers, adjustments and internal consumption", "Dispatches and delivery routes", "Weighted average, last cost or standard cost, with a valuation report"] },
          { title: "Item Catalog",                description: "Find the right part, even under another code.", tag: null,
            features: ["Item types with technical attributes and search by attribute", "Vehicle compatibility: make, model, year and engine", "SKU equivalences and OEM and supplier references", "Brands, manufacturers and pictures per item", "Excel import and export, also per item type"] },
          { title: "Purchasing & Payables",       description: "From the supplier order to the payment.", tag: null,
            features: ["Purchase orders and receipts with or without an order", "Each supplier's catalog with their code and cost", "Supplier bills and payments", "Imports with landed cost", "Payment authorization before paying"] },
          { title: "Accounting & Finance",        description: "Journal entries come from every operation.", tag: null,
            features: ["Chart of accounts, general ledger and automatic entries", "Balance Sheet, Income Statement, Cash Flow, Changes in Equity and Notes", "Bank reconciliation and period close", "Multi-currency and FX revaluation", "Budgets, analytic dimensions and DGII Annexes A and B-1", "Or an operations-only mode, without accounting"] },
          { title: "Manufacturing",               description: "Produce with recipes and control the material.", tag: null,
            features: ["Recipes and bill of materials (BOM)", "Work orders that consume the material when completed", "Stock set aside for sale and for production", "Sheet cutting with reusable remnants", "Waste tracking"] },
          { title: "Services & Repairs",          description: "For businesses that sell hours, trips or repairs.", tag: "Easy-Repair",
            features: ["Ready-made service catalog per industry", "Service units: hour, trip, km, month and more", "Service schedule and technicians", "Repair orders with the customer's device, work log and warranty", "Time entries and projects"] },
          { title: "Approvals",                   description: "One approval engine for the whole company.", tag: null,
            features: ["Supplier bills, customer invoices and payments", "Approval by department, in parallel", "Rules by amount, discount, margin and credit limit", "Date-based delegations and an approval matrix", "Email notice to each approver"] },
          { title: "Multi-company & Access",      description: "Several companies and branches, each in its place.", tag: null,
            features: ["Each company with its own database", "Company groups with their own administrators", "Users limited to their branches", "Roles and permissions per screen", "Modules switched on per company", "Audit of every field change"] },
          { title: "Restaurant & Corner Store",   description: "Screens built for the neighborhood store and the kitchen.", tag: "Vertical",
            features: ["Restaurant: orders, kitchen, modifiers and recipes", "Corner store (colmado): quick sale, store credit and case prices", "Incoming orders and delivery with rider settlements", "Combos and suggested supplier orders"] },
          { title: "Payroll, HR & Fixed Assets",  description: "Add-on modules connected to accounting.", tag: "Add-on",
            features: ["Employees, org chart, attendance and vacations", "Pay concepts and recurring deductions", "Labor benefits and their provision", "Bank payment file", "Fixed assets with depreciation"] },
          { title: "Platform",                    description: "Built to work comfortably, anywhere.", tag: null,
            features: ["Works on phone, tablet and computer", "Spanish and English, and screen zoom from 50% to 130%", "Optional AI assistant for plain-language questions", "Telemetry: system and DGII timings, live", "Built-in help center"] }
        ]
      },
      gateway: {
        sectionLabel: "Easy-IMS Gateway",
        headline: "Our own bridge to the DGII",
        subheadline: "Easy-IMS does not depend on a third party for electronic invoicing: the Easy-IMS Gateway is ours. It validates, signs, sends, retries and receives e-CF for you — and any software can use it.",
        flows: [
          { title: "Issue", steps: [
            { label: "Your system",       sub: "Easy-IMS or other software" },
            { label: "Easy-IMS Gateway",  sub: "Validates, signs and queues" },
            { label: "DGII",              sub: "Receives and answers" } ] },
          { title: "Receive", steps: [
            { label: "DGII & suppliers",  sub: "Send you e-CF" },
            { label: "Easy-IMS Gateway",  sub: "Receipt acknowledgment and commercial approval" },
            { label: "Your system",       sub: "Received receipts" } ] }
        ],
        items: [
          { title: "Receipt with QR right away",   description: "The gateway signs each e-CF with your company's certificate the moment it receives it and returns the security code immediately. The receipt prints with its QR without waiting for the DGII." },
          { title: "Your sales never stop",        description: "A queue and a sending process that retries until the DGII answers. If the DGII is slow, you keep invoicing. For bigger outages, contingency mode prints the legend the DGII requires during its 72-hour window." },
          { title: "Every e-CF type",              description: "E31, E32, E33, E34, E41, E43, E44, E45, E46 and E47, plus the Consumer Invoice Summary (RFCE) for consumer invoices under RD$250,000." },
          { title: "e-CF reception",               description: "Receive your suppliers' receipts, with acknowledgment and commercial approval, at portal.easy-ims.com: the address the DGII validated." },
          { title: "Validation before sending",    description: "Each receipt is checked against the DGII's XSD schemas and its per-type rules before it leaves, catching errors before the DGII rejects it." },
          { title: "Isolated, encrypted data",     description: "Certificates are stored encrypted and each company is isolated with row-level security in the gateway's database." },
          { title: "Receipts portal",              description: "Your customers and your team look up their electronic receipts in a portal with two-step verification (MFA)." },
          { title: "Live telemetry",               description: "Measure the time of every submission and watch the traffic with the DGII in real time from Easy-IMS." }
        ],
        mapping: {
          title: "We connect your current system without reprogramming it",
          subtitle: "Does your POS or ERP already produce its own JSON? The gateway maps it to our canonical e-CF format and from there to the DGII's XML, signed and validated against the XSD. Your system stays as it is.",
          colIn: "Your JSON (current system)", colMap: "Mapping → canonical format", colOut: "e-CF XML for the DGII",
          note: "Sample data. Each mapping is saved as a template and validated with samples before it is used.",
          badges: ["Signed", "XSD-valid"]
        },
        cert: {
          title: "Your signing certificate never catches you off guard",
          description: "Easy-IMS shows the certificate (.p12) that really signs your e-CF and how many days it has left, colored by urgency. The gateway also emails reminders as the expiry date approaches: weekly at first and daily in the last week.",
          levels: [ { label: "Expired" }, { label: "30 days or less" }, { label: "60 days or less" }, { label: "Valid" } ]
        },
        api: {
          title: "Open API: any software can issue e-CF through the gateway",
          subtitle: "Send your receipt as JSON and the gateway does the rest: builds the XML, signs, sends to the DGII and reports the result (polling or webhook). The same e-NCF is never sent twice.",
          authNote: "Every call carries the header Authorization: Bearer TOKEN. Keep the token on your server, never in the browser.",
          endpointsTitle: "Public endpoints",
          colMethod: "Method", colPath: "Path", colPurpose: "What it does",
          endpoints: [
            { purpose: "Sends an e-CF (JSON or XML). Answers 202 with the submission number, the e-NCF and the security code." },
            { purpose: "Submission status and the DGII's answer (Accepted, Conditional or Rejected)." },
            { purpose: "Lists the receipts you sent, with filters." },
            { purpose: "Step history of the submission." },
            { purpose: "Signed XML of the receipt." },
            { purpose: "Printed representation as PDF, with its QR." },
            { purpose: "Next suggested e-NCF based on your history." },
            { purpose: "Reads (GET) or changes (POST) your company's contingency mode." },
            { purpose: "Checks the connection and the IP the gateway sees." },
            { purpose: "Optional: trades your token for a temporary 1-hour token." },
            { purpose: "Timings of your e-CF (also /v1/latency/live and /v1/latency/traffic)." },
            { purpose: "Receiver: e-CF sent to you by other issuers arrive here." },
            { purpose: "Receiver: commercial approvals of your receipts." },
            { purpose: "Receiver: authentication of the sender (seed and certificate validation)." }
          ],
          samplesTitle: "Integrate it in your language",
          samplesNote: "Examples with test values (TOKEN, RNC 000000000, e-NCF E310000000001). The ecf.json file holds the receipt in the gateway's JSON format.",
          responseTitle: "Immediate response (202)"
        }
      },
      security: {
        sectionLabel: "Security",
        headline: "Your data, protected and backed up every day",
        subheadline: "Each company in its own database, a verified daily copy off the server and in the cloud, and control over who sees and changes what.",
        flowTitle: "This is how your information is backed up, every day",
        flow: [
          { title: "Your company",          text: "Its own isolated database" },
          { title: "Verified daily copy",   text: "Automatic, and on demand with one button" },
          { title: "Cloud",                 text: "Backblaze B2 · separate data center · encrypted · 90 days" }
        ],
        items: [
          { title: "One database per company",          description: "Each company has its own database. Total isolation: no other company can see your data." },
          { title: "Daily cloud backup",                description: "Automatic backup every day, verified and stored off the server, in the cloud (Backblaze B2, in a separate data center, encrypted at rest). Kept for 90 days, and you can take a copy on the spot with one button." },
          { title: "Encrypted connection",              description: "Everything travels over HTTPS/TLS, with a Google Trust Services certificate." },
          { title: "Protected signing certificates",    description: "Your digital signing certificate is stored encrypted and never leaves the server." },
          { title: "Permissions and two-step verification", description: "Permissions by role, by branch and by user. Two-step verification (MFA) on the receipts portal." },
          { title: "Full audit trail",                  description: "Every field change is recorded with who and when. Tax receipts are never deleted: they are voided with a credit note." },
          { title: "Lockout after failed attempts",     description: "A user is locked after several failed sign-in attempts." }
        ]
      },
      stats: {
        headline: "Numbers that back our track record",
        items: [
          { value: 2597,     suffix: "+", label: "Active companies",             icon: "briefcase" },
          { value: 18500000, suffix: "+", label: "e-CF invoices processed",      icon: "receipt"   },
          { value: 90,       suffix: " days", label: "Of cloud backups kept",       icon: "cloud"     },
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
          { question: "How secure is the platform?",                           answer: "Each company has its own database: no other company can see your data. We take an automatic daily backup, verified and stored off the server in the cloud (Backblaze B2, separate data center, encrypted at rest), kept for 90 days; you can also take a copy on the spot with one button. All connections are encrypted over HTTPS/TLS, signing certificates are stored encrypted and never leave the server, permissions are set by role, branch and user, every change is audited with who and when, and a user is locked after failed sign-in attempts." }
        ]
      },
      cta: {
        headline:    "Start today. Risk-free.",
        subheadline: "Join more than 5,000 companies that already manage their business intelligently with Easy-IMS.",
        ctaPrimary:   { label: "Try free 15 days",    href: "#contacto" },
        ctaSecondary: { label: "Talk to an expert",   href: "#contacto" },
        trustItems: ["No credit card", "No commitment contract", "Support included", "Daily cloud backup"]
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
              { label: "Security",          href: "#seguridad" }
            ]
          }
        ],
        badges: ["Certified DGII Provider"]
      }
    }
  }
};
