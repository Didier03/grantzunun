import {
  ParkActivity,
  LodgingOption,
  GastronomyPillar,
  ExperienceItem,
  PackageCategory,
  PackageId,
  PackageTranslationItem,
  PackageUnitKey,
  VisitorTier,
} from "@/types";

export const es = {
  meta: {
    title: "El Gran T´Zunun - La Aventura Te Espera | Parque Natural",
    description:
      "Descubre la aventura y la naturaleza en El Gran T´Zunun: tirolesas panorámicas, experiencias recreativas, actividades extremas, hospedaje rústico, gastronomía maya y pasadías todo incluido en la selva.",
  },
  navbar: {
    topBarTagline: "Reserva Natural & Parque Ecoturístico · Campeche, México",
    institutionalNavAria: "Navegación institucional",
    parkSectionsAria: "Secciones del parque",
    openMenuAria: "Abrir menú",
    switchLanguageAria: "Cambiar idioma",
    reserveBtn: "Reservar",
    reserveDateBtn: "Reservar Fecha",
    contactWhatsappBtn: "Contactar por WhatsApp",
    exploreParkHeading: "Explora el Parque",
    parkInfoHeading: "Nuestro Parque e Información",
    reserveWhatsappDefaultMsg:
      "¡Hola! Quisiera reservar una fecha para visitar El Gran T´Zunun.",
    infoWhatsappDefaultMsg:
      "¡Hola! Quisiera información para visitar El Gran T´Zunun",
    mainLinks: {
      extremeActivities: "Actividades Extremas y Aventura",
      recreation: "Actividades de Recreación y Descanso",
      packages: "Paquetes",
      experiences: "Experiencias",
      lodging: "Hospedaje",
      gastronomy: "Gastronomía",
    },
    institutionalLinks: {
      history: "Historia del Gran T´Zunun",
      rules: "Reglamentos",
      certifications: "Certificaciones",
      alliances: "Convenios y Alianzas",
    },
  },
  hero: {
    tagline: "Parque de Naturaleza y Aventura en la Selva",
    headlinePrefix: "Descubre la Aventura y la Naturaleza en",
    brandName: "El Gran T´Zunun",
    subtitle:
      "Tirolesas sobre el dosel de la selva, circuitos de aventura, gastronomía regional y descanso idílico en el corazón maya de Campeche.",
    planVisitCta: "Planear mi visita por WhatsApp",
    planVisitWhatsappMsg:
      "¡Hola! Quiero información para planear mi visita a El Gran T´Zunun.",
    viewPackagesCta: "Ver Tarifas y Paquetes",
    slideAriaPrefix: "Ir al slide",
    slides: [
      {
        id: "slide-1",
        image: "/images/hero-zipline.svg",
        caption: "Vuelo en tirolesa sobre la selva maya",
      },
      {
        id: "slide-2",
        image: "/images/senderos-selva.svg",
        caption: "Senderos verdes y ríos de la península",
      },
    ],
    trustBadges: [
      {
        metric: "+5,000",
        label: "Aventureros Felices",
      },
      {
        metric: "100% Seguro",
        label: "Guías Certificados",
      },
      {
        metric: "Respuesta Rápida",
        label: "Vía WhatsApp",
      },
    ],
  },
  activitiesSection: {
    eyebrow: "Adrenalina en la Selva",
    title: "Actividades Extremas y Aventura",
    description:
      "Diseñado para despertar todos tus sentidos. Desde la adrenalina pura en lo alto de los árboles hasta retos de destreza y exploración en aguas sagradas subterráneas.",
    items: [
      {
        id: "tirolesas",
        title: "Tirolesas",
        category: "Adrenalina Pura",
        categoryColor: "emerald",
        description:
          "Cruza 850 metros de pura adrenalina a más de 35 metros de altura en dos tirolesas continuas. Disfruta la emoción de volar a toda velocidad con las mejores vistas panorámicas de la naturaleza e infraestructura 100% segura.",
        image: "/images/hero-zipline.svg",
        colSpan: "two-thirds",
        ctaText: "Preguntar por tirolesas",
        whatsappMessage:
          "Hola, quiero información sobre el circuito de Tirolesas en El Gran T´Zunun.",
      },
      {
        id: "exatlon",
        title: "Exatlón",
        category: "Desafío Físico",
        categoryColor: "secondary",
        description:
          "Pon a prueba tu equilibrio y destreza en nuestra torre hexagonal de dos niveles, apta para niños (desde 5 años) y adultos. Un circuito de retos aéreos 100% asegurado, perfecto para liberar estrés y disfrutar en equipo.",
        iconName: "Zap",
        colSpan: "one-third",
        ctaText: "Consultar requerimientos",
        whatsappMessage:
          "Hola, quiero información sobre el circuito Exatlón en El Gran T´Zunun.",
      },
      {
        id: "rapel",
        title: "Rapel",
        category: "Vértigo",
        categoryColor: "secondary",
        description:
          "Alcanza la cima en un muro de 12 metros con retos para novatos (desde los 5 años) y escaladores avanzados. Pon a prueba tu fuerza y concentración con equipo certificado y total seguridad guiada.",
        iconName: "Mountain",
        colSpan: "half",
        ctaText: "Detalles de rapel",
        whatsappMessage:
          "Hola, quiero información sobre el muro de Rapel en El Gran T´Zunun.",
      },
      {
        id: "senderismo",
        title: "Senderismo",
        category: "Conexión Natural",
        categoryColor: "tertiary",
        description:
          "Conéctate con la naturaleza en una caminata guiada por la selva. Descubre los secretos de árboles medicinales y energéticos, mientras aprendes a coexistir con la fauna local en un recorrido para renovar cuerpo y mente.",
        iconName: "Leaf",
        colSpan: "half",
        ctaText: "Ver rutas guiadas",
        whatsappMessage:
          "Hola, quiero información sobre las rutas de Senderismo en El Gran T´Zunun.",
      },
      {
        id: "campismo",
        title: "Campismo",
        category: "Inmersión",
        categoryColor: "emerald",
        description:
          "Duerme bajo las estrellas y reconecta con la naturaleza. Ofrecemos zonas para campismo recreativo con acceso a alberca y servicios, así como áreas apartadas para grupos y campismo formativo o de supervivencia.",
        iconName: "Tent",
        colSpan: "one-third",
        ctaText: "Reservar zona",
        whatsappMessage:
          "Hola, quiero información y reservar zona de Campismo en El Gran T´Zunun.",
      },
      {
        id: "astronomia",
        title: "Observación sideral y astronómica",
        category: "Misticismo Nocturno",
        categoryColor: "secondary",
        description:
          "Descubre la magia del cielo nocturno lejos de la contaminación lumínica. Una experiencia astronómica guiada para contemplar estrellas, planetas y constelaciones en la tranquilidad y oscuridad de la naturaleza.",
        iconName: "Star",
        colSpan: "two-thirds",
        ctaText: "Consultar fechas",
        whatsappMessage:
          "Hola, quiero información sobre las experiencias de Observación Astronómica en El Gran T´Zunun.",
      },
    ] as ParkActivity[],
  },
  recreationSection: {
    eyebrow: "Paz y Armonía Natural",
    title: "Actividades de Recreación y Descanso",
    description:
      "Espacios pensados para bajar el ritmo, convivir en familia y reconectar con la serenidad de la selva maya sin prisas.",
    items: [
      {
        id: "albercas",
        title: "Albercas",
        category: "Recreación Familiar",
        categoryColor: "secondary",
        description:
          "Refréscate tras la aventura en nuestras dos albercas diseñadas para toda la familia. Un espacio limpio, cómodo y seguro con tecnología de filtración sustentable que cuida y optimiza los recursos naturales del parque.",
        image: "/images/cenote-sagrado.svg",
        colSpan: "two-thirds",
        ctaText: "Ver detalles de albercas",
        whatsappMessage:
          "Hola, quiero información sobre las Albercas y áreas familiares en El Gran T´Zunun.",
      },
      {
        id: "hospedaje",
        title: "Hospedaje",
        category: "Descanso Total",
        categoryColor: "emerald",
        description:
          "La aventura no está peleada con la comodidad. Tras un día en la naturaleza, relájate en habitaciones diseñadas para un descanso seguro, íntimo y regenerativo, listas para renovar tu energía al máximo.",
        iconName: "Bed",
        colSpan: "one-third",
        ctaText: "Consultar disponibilidad",
        whatsappMessage:
          "Hola, quiero información y consultar disponibilidad de Hospedaje en El Gran T´Zunun.",
      },
      {
        id: "restaurante",
        title: "Restaurante",
        category: "Gastronomía",
        categoryColor: "tertiary",
        description:
          "Saborea lo mejor de la gastronomía regional con ingredientes frescos de nuestro propio huerto. Disfruta platillos auténticos y refrescantes aguas de frutas naturales cosechadas en casa, del campo directo a tu mesa.",
        iconName: "Utensils",
        colSpan: "one-third",
        ctaText: "Ver menú",
        whatsappMessage:
          "Hola, quiero información sobre el Restaurante y opciones gastronómicas en El Gran T´Zunun.",
      },
      {
        id: "ceremonias",
        title: "Ceremonias Ancestrales",
        category: "Misticismo",
        categoryColor: "secondary",
        description:
          "Reconecta con la sabiduría milenaria en nuestro espacio holístico maya. En un antiguo centro ceremonial, vive rituales y ceremonias ancestrales para sanar cuerpo, mente y espíritu a través de la energía de la naturaleza.",
        iconName: "Sparkles",
        colSpan: "one-third",
        ctaText: "Agendar ceremonia",
        whatsappMessage:
          "Hola, quiero información para participar en las Ceremonias Ancestrales en El Gran T´Zunun.",
      },
      {
        id: "avistamiento-aves",
        title: "Observación de Aves",
        category: "Contemplación",
        categoryColor: "emerald",
        description:
          "Relájate con la sinfonía natural de nuestras aves en un entorno protegido. Una experiencia de contemplación que reduce el estrés y la ansiedad, mientras descubres especies que encuentran refugio y alimento en el parque.",
        iconName: "Feather",
        colSpan: "one-third",
        ctaText: "Información de recorridos",
        whatsappMessage:
          "Hola, quiero información sobre los recorridos de Observación de Aves en El Gran T´Zunun.",
      },
    ] as ParkActivity[],
  },
  packagesSection: {
    eyebrow: "Tarifas Transparentes",
    title: "Tarifas y Paquetes Oficiales",
    description:
      "Consulta nuestras tarifas reales para visitantes locales, nacionales y extranjeros en pasadía, actividades extremas, hospedaje y campismo.",
    visitorTierLabel: "Perfil de visitante",
    tiers: {
      local: "Locales (Campeche)",
      national: "Nacionales (México)",
      foreigner: "Extranjeros (USD)",
    } satisfies Record<VisitorTier, string>,
    tiersShort: {
      local: "Local (Campeche)",
      national: "Nacional (México)",
      foreigner: "Extranjero",
    } satisfies Record<VisitorTier, string>,
    categoryTabLabel: "Categoría de servicio",
    categories: {
      daypass: {
        label: "Pasadía",
        policyTitle: "Horarios y Políticas de Pasadía",
        policyText:
          "De jueves a domingo de 10:00 a 17:00 horas. En días festivos, puentes y vacaciones abrimos todos los días. Niños menores de 6 años no pagan en pasadía. No se permite la entrada con alimentos y bebidas.",
      },
      extreme: {
        label: "Actividades Extremas",
        policyTitle: "Horarios y Políticas de Actividades Extremas",
        policyText:
          "El servicio general opera de 10:00 a 16:00 horas, sujeto a suspensión por lluvias o calor extremo (12:00 a 15:00), complementado por turnos diurnos (6:00–11:00 y 15:00–19:00) y nocturnos (20:00–00:00). Las rutas guiadas requieren mínimo 10 personas e incluyen botiquín, sanitarios y apoyo en traslado de lesionados.",
      },
      lodging: {
        label: "Hospedaje",
        policyTitle: "Información de Hospedaje y Transporte",
        policyText:
          "Tarifas para visitantes locales y nacionales en pesos mexicanos (MXN); tarifas para extranjeros en dólares (USD). Contamos con opciones adicionales de transportación redonda para grupos pequeños y autobuses.",
      },
      camping: {
        label: "Campismo",
        policyTitle: "Modalidades y Políticas de Campismo",
        policyText:
          "Acampa con tu propia casa de campaña o renta casa equipada con colchoneta, acceso a sanitarios y albercas. Tarifas especiales para scouts, escuelas y grupos mayores a 10 personas.",
      },
    } satisfies Record<
      PackageCategory,
      { label: string; policyTitle: string; policyText: string }
    >,
    subcategories: {
      standardTitle: "Habitación Estándar",
      standardSubtitle:
        "Base matrimonial con agua caliente y aire acondicionado",
      suiteTitle: "Habitación Suite",
      suiteSubtitle:
        "Cama King Size con amplitud ideal para parejas y familias",
      transportSectionTitle: "Opciones de Transportación",
      lodgingTransportBannerTitle:
        "Opciones de transporte adicionales disponibles:",
      lodgingTransportSmallTemplate:
        "Transportación redonda (1 a 4 personas): {price} / persona",
      lodgingTransportBusTemplate:
        "Bus para grupos grandes (20 a 50 personas): {price} / persona",
    },
    units: {
      minor: "menor",
      adult: "adulto",
      person: "persona",
      room: "habitación",
      tent: "casa",
    } satisfies Record<PackageUnitKey, string>,
    disclaimer:
      "* Tarifas oficiales sujetas a disponibilidad de fecha. Locales (Campeche) y Nacionales (México) en MXN · Extranjeros en USD.",
    card: {
      popularBadgeDefault: "Más Popular",
      minorRateBadgeTemplate: "Menores (6–11 años): {price}",
      extraMinorNoBreakfastTemplate:
        "Menores adicionales 6 a 11 años: {price} (no incluye desayuno)",
      extraMinorIncludedTemplate: "Menores adicionales 6 a 11 años: {price}",
      reserveBestSeller: "Reservar Paquete",
      calculateGroupWithPkg: "Calcular grupo con este paquete",
      orderByWhatsapp: "Reservar Ahora",
      calculateGroup: "Cotizar en calculadora",
    },
    catalog: {
      "daypass-minors": {
        name: "Pasadía Menores",
        audience: "Menores (6 a 11 años)",
        subtitle: "Diversión segura en albercas y naturaleza",
        features: [
          "Acceso al parque (10:00 a 17:00 h)",
          "Uso de albercas familiares y áreas verdes",
          "Sanitarios y regaderas ecológicas",
          "Niños menores de 6 años no pagan en pasadía",
        ],
      },
      "daypass-adults": {
        name: "Pasadía Adultos",
        audience: "Adultos (12+ años)",
        subtitle: "Descanso y conexión con la selva",
        features: [
          "Acceso al parque (10:00 a 17:00 h)",
          "Uso de albercas familiares y senderos",
          "Áreas de descanso y sanitarios",
          "Ambiente familiar libre de alimentos externos",
        ],
      },
      "daypass-lunch-minors": {
        name: "Pasadía + Almuerzo Menores",
        audience: "Menores (6 a 11 años)",
        subtitle: "Pasadía completo con comida tradicional",
        features: [
          "Acceso completo de pasadía al parque",
          "Uso de albercas y áreas recreativas",
          "Almuerzo tradicional incluido",
          "Sanitarios y regaderas ecológicas",
        ],
      },
      "daypass-lunch-adults": {
        name: "Pasadía + Almuerzo Adultos",
        audience: "Adultos (12+ años)",
        subtitle: "Experiencia campestre sin preocupaciones",
        highlightBadge: "Más Popular",
        features: [
          "Acceso completo de pasadía al parque",
          "Uso de albercas y zonas de descanso",
          "Almuerzo regional incluido",
          "Ideal para disfrutar en pareja o familia",
        ],
      },
      "daypass-lunch-transport": {
        name: "Pasadía + Almuerzo + Transporte",
        audience: "Mínimo 4 personas",
        subtitle: "Comodidad redonda hasta el parque",
        features: [
          "Transportación redonda incluida",
          "Acceso completo de pasadía y albercas",
          "Almuerzo tradicional incluido",
          "Aplica a partir de 4 personas",
        ],
      },
      "extreme-adventure": {
        name: "Tirolesa + Exatlón + Alberca + Almuerzo",
        audience: "Aventura Completa",
        subtitle: "Adrenalina en las alturas y gastronomía",
        highlightBadge: "Más Popular",
        features: [
          "Circuito de tirolesas panorámicas",
          "Retos aéreos en circuito Exatlón",
          "Acceso a alberca y sanitarios",
          "Almuerzo incluido y equipo certificado",
        ],
      },
      "extreme-cacao": {
        name: "Tirolesa + Exatlón + Alberca + Almuerzo + Ceremonia del Cacao",
        audience: "Aventura & Cultura Maya",
        subtitle: "Adrenalina extrema y ritual ancestral",
        features: [
          "Circuito de Tirolesa y Exatlón",
          "Ceremonia del Cacao Maya incluida",
          "Acceso a alberca y sanitarios",
          "Almuerzo regional incluido",
        ],
      },
      "extreme-transport-daypass": {
        name: "Transporte + Pasadía + Almuerzo",
        audience: "Mínimo 4 personas",
        subtitle: "Traslado redondo y día recreativo",
        features: [
          "Transportación redonda incluida",
          "Acceso de pasadía y albercas",
          "Almuerzo tradicional incluido",
          "Requiere mínimo 4 personas",
        ],
      },
      "transport-roundtrip-small": {
        name: "Transportación Redonda (1 a 4 personas)",
        audience: "Grupos de 1 a 4 personas",
        subtitle: "Traslado cómodo ida y vuelta",
        features: [
          "Servicio de transporte redondo al parque",
          "Válido para grupos de 1 a 4 personas",
          "Horarios coordinados vía WhatsApp",
        ],
      },
      "transport-bus-large": {
        name: "Bus para Grupos Grandes (20 a 50 personas)",
        audience: "Más de 20 y hasta 50 personas",
        subtitle: "Logística grupal, escolar o corporativa",
        features: [
          "Autobús redondo para grupos grandes",
          "Capacidad de 20 hasta 50 personas",
          "Ideal para excursiones y rutas guiadas",
        ],
      },
      "lodging-std-breakfast-2": {
        name: "Estándar Desayuno (2 personas)",
        audience: "2 personas",
        subtitle:
          "Base matrimonial, agua caliente, AA, desayuno incluido para 2 personas.",
        features: [
          "Base matrimonial para 2 personas",
          "Agua caliente y aire acondicionado (AA)",
          "Desayuno incluido para 2 personas",
          "Acceso a albercas y áreas naturales",
        ],
      },
      "lodging-std-allinc-1": {
        name: "Estándar Todo Incluido (1 persona)",
        audience: "1 persona",
        subtitle:
          "Base matrimonial, agua caliente, AA, desayuno, almuerzo y cena para 1 persona.",
        features: [
          "Base matrimonial individual",
          "Agua caliente y aire acondicionado (AA)",
          "Desayuno, almuerzo y cena (1 persona)",
          "Acceso a albercas e instalaciones",
        ],
      },
      "lodging-std-allinc-2": {
        name: "Estándar Todo Incluido (2 personas)",
        audience: "2 personas",
        subtitle:
          "Base matrimonial, agua caliente, AA, desayuno, almuerzo y cena para 2 personas.",
        features: [
          "Base matrimonial para 2 personas",
          "Agua caliente y aire acondicionado (AA)",
          "Desayuno, almuerzo y cena (2 personas)",
          "Estancia completa sin preocupaciones",
        ],
      },
      "lodging-std-adventure-2": {
        name: "Estándar Aventura Todo Incluido (2 personas)",
        audience: "2 personas",
        subtitle:
          "Base matrimonial, agua caliente, AA + desayuno, almuerzo y cena + Tirolesa o Exatlón para 2 personas.",
        highlightBadge: "Más Completo",
        features: [
          "Base matrimonial, agua caliente y AA",
          "Desayuno, almuerzo y cena (2 personas)",
          "Tirolesa o Exatlón para 2 personas",
          "Acceso a albercas y senderos",
        ],
      },
      "lodging-suite-breakfast": {
        name: "Suite Desayuno (2 adultos y 1 menor)",
        audience: "2 adultos y 1 menor",
        subtitle:
          "Cama king size, agua caliente, AA, desayuno incluido para 2 personas y un menor.",
        features: [
          "Cama King Size, agua caliente y AA",
          "Desayuno incluido para 2 adultos y 1 menor",
          "Acceso a albercas y áreas del parque",
        ],
      },
      "lodging-suite-allinc": {
        name: "Suite Todo Incluido (2 personas)",
        audience: "2 personas",
        subtitle:
          "Cama king size, agua caliente, desayuno, almuerzo y cena para 2 personas.",
        highlightBadge: "Confort Suite",
        features: [
          "Cama King Size y agua caliente",
          "Desayuno, almuerzo y cena para 2 personas",
          "Acceso a albercas y zonas de descanso",
        ],
      },
      "lodging-suite-adventure": {
        name: "Suite Aventura (2 personas)",
        audience: "2 personas",
        subtitle:
          "Cama king size, agua caliente, AA, desayuno incluido + Tirolesa o Exatlón para 2 personas.",
        features: [
          "Cama King Size, agua caliente y AA",
          "Desayuno incluido para 2 personas",
          "Tirolesa o Exatlón para 2 personas",
        ],
      },
      "camping-basic": {
        name: "Acceso Básico (Casa Propia)",
        audience: "Casa de campaña propia",
        subtitle:
          "Acceso al parque cuando el cliente lleva su propia casa de campaña y solo requiere el área de acampado y sanitarios.",
        features: [
          "Espacio en área de acampado",
          "Acceso a sanitarios",
          "Cliente lleva su propia casa de campaña",
        ],
      },
      "camping-pool": {
        name: "Acceso + Alberca (Casa Propia)",
        audience: "Casa de campaña propia",
        subtitle:
          "Acceso al parque cuando el cliente lleva su casa de campaña y requiere el área de acampado, sanitarios y alberca.",
        features: [
          "Espacio en área de acampado",
          "Acceso a sanitarios y alberca",
          "Cliente lleva su propia casa de campaña",
        ],
      },
      "camping-tent-2": {
        name: "Renta Casa de Campaña (2 personas)",
        audience: "2 personas",
        subtitle:
          "Renta de casa de campaña para 2 personas, incluye colchoneta, acceso a sanitarios y albercas.",
        highlightBadge: "Más Popular",
        features: [
          "Casa de campaña para 2 personas",
          "Incluye colchoneta",
          "Acceso a sanitarios y albercas",
        ],
      },
      "camping-tent-3": {
        name: "Renta Casa de Campaña (3 personas)",
        audience: "3 personas",
        subtitle:
          "Renta de casa de campaña para 3 personas, incluye colchoneta, acceso a sanitarios y albercas.",
        features: [
          "Casa de campaña para 3 personas",
          "Incluye colchoneta",
          "Acceso a sanitarios y albercas",
        ],
      },
      "camping-tent-5": {
        name: "Renta Casa de Campaña (5 personas)",
        audience: "5 personas",
        subtitle:
          "Renta de casa de campaña para 5 personas, incluye colchoneta, acceso a sanitarios y albercas.",
        features: [
          "Casa de campaña para 5 personas",
          "Incluye colchoneta",
          "Acceso a sanitarios y albercas",
        ],
      },
      "camping-groups": {
        name: "Grupos / Scouts / Escuelas",
        audience: ">10 personas · Casa propia",
        subtitle:
          "Scouts, escuelas y grupos mayores a 10 personas, trayendo su casa de campaña, acceso a sanitarios y alberca.",
        features: [
          "Scouts, escuelas y grupos (>10 personas)",
          "Trayendo su casa de campaña",
          "Acceso a sanitarios y alberca",
        ],
      },
    } satisfies Record<PackageId, PackageTranslationItem>,
    calculatorCombinedPackages: {
      "calc-daypass-general": {
        name: "Pasadía General (Acceso al Parque)",
        subtitle:
          "Calcula automáticamente tarifa de Adultos (12+), Menores (6–11) y Niños (<6 gratis).",
      },
      "calc-daypass-lunch": {
        name: "Pasadía + Almuerzo",
        subtitle:
          "Calcula automáticamente tarifa de Adultos (12+) y Menores (6–11) con almuerzo incluido.",
      },
    },
    calculator: {
      eyebrow: "Herramienta Rápida",
      title: "Cotizador Express para Familias y Grupos",
      hideBtn: "Ocultar calculadora",
      showBtn: "Calcular mi total y enviar a WhatsApp",
      visitorTierLabel: "Perfil de Visitante",
      categoryLabel: "Categoría",
      basePackageLabel: "Paquete / Modalidad",
      visitorsCountLabel: "Número de Visitantes",
      adultsLabel: "Adultos (12+)",
      minorsLabel: "Menores (6–11)",
      under6Label: "Niños (<6)",
      freeUnder6Badge: "Gratis en pasadía",
      dateAndNameLabel: "Fecha Tentativa y Nombre",
      namePlaceholder: "Tu nombre (opcional)",
      transportAddonLabel: "Transporte Redondo Opcional",
      transportIncludedNote:
        "Este paquete ya incluye transportación redonda.",
      transportNoneOption: "Sin transporte adicional",
      transportSmallOptionTemplate:
        "Transportación redonda 1–4 personas (+{price} / persona)",
      transportBusOptionTemplate:
        "Bus grupos grandes 20–50 personas (+{price} / persona)",
      guidedRouteLabel:
        "Incluir ruta guiada (mínimo 10 personas, incluye botiquín y apoyo)",
      optionAgeSplitTemplate: "{name} (Adulto {adultPrice} · Menor {minorPrice})",
      optionFlatPriceTemplate: "{name} ({price})",
      breakdownAdultsTemplate: "{count} adulto(s) × {price}",
      breakdownMinorsTemplate: "{count} menor(es) (6–11) × {price}",
      breakdownPersonsTemplate: "{count} persona(s) × {price}",
      breakdownUnder6FreeTemplate: "{count} niño(s) (<6 gratis)",
      breakdownUnder6CountTemplate: "{count} niño(s) (<6)",
      breakdownRoomsTemplate: "{count} habitación(es) × {price}",
      breakdownExtraMinorsTemplate: "{count} menor(es) extra × {price}",
      breakdownTentsTemplate: "{count} casa(s) × {price}",
      breakdownTransportTemplate: "Transporte ({count} × {price})",
      estimatedTotalLabel: "Total Estimado de tu visita:",
      subjectToConfirmation: "Sujeto a confirmación de fecha",
      sendQuoteBtn: "Enviar cotización a WhatsApp",
      validations: {
        minOneGuest:
          "Selecciona al menos 1 visitante (adulto o menor de 6 a 11 años) para calcular tu total.",
        minPackagePeopleTemplate:
          "Este paquete requiere un mínimo de {min} personas (actualmente: {current}).",
        maxPackagePeopleTemplate:
          "Esta modalidad aplica para un máximo de {max} personas (actualmente: {current}).",
        minTransportPeopleTemplate:
          "La opción de transporte seleccionada requiere mínimo {min} pasajeros (actualmente: {current}).",
        maxTransportPeopleTemplate:
          "La opción de transporte seleccionada aplica hasta {max} pasajeros (actualmente: {current}).",
        minGuidedRouteTemplate:
          "Las rutas guiadas requieren un mínimo de {min} personas (actualmente: {current}).",
      },
      whatsappLabels: {
        header: "🌿 *Cotización de Visita - El Gran T´Zunun* 🌿",
        nameLabel: "👤 *Nombre:*",
        visitorTierLabel: "🌎 *Tipo de visitante:*",
        categoryLabel: "📂 *Categoría:*",
        packageLabel: "🎟️ *Paquete:*",
        guestsLabel: "👥 *Personas:*",
        dateLabel: "📅 *Fecha tentativa:*",
        transportLabel: "🚐 *Transporte:*",
        guidedRouteLabel: "🧭 *Ruta guiada:*",
        estimatedTotalLabel: "💵 *Total estimado:*",
        notesLabel: "📝 *Comentarios:*",
        footer:
          "¿Me podrían confirmar disponibilidad y el proceso de pago/reserva? ¡Muchas gracias!",
      },
      whatsappValues: {
        transportIncluded: "Incluido en el paquete",
        transportSmall: "Transportación redonda (1 a 4 personas)",
        transportBus: "Bus para grupos grandes (20 a 50 personas)",
        guidedRouteYes: "Solicitada (mínimo 10 personas)",
      },
    },
  },
  experiencesSection: {
    eyebrow: "Inmersión Cultural y Sensorial",
    title: "Experiencias Únicas en El Gran T´Zunun",
    description:
      "Vivencias guiadas por maestros locales para descubrir los secretos ancestrales, la biodiversidad y la magia nocturna del territorio maya.",
    bookExperienceCta: "Reservar experiencia",
    items: [
      {
        id: "ceremonia-cacao",
        title: "Ceremonia Ancestral del Cacao",
        subtitle: "Conexión espiritual y tradición maya",
        description:
          "Participa en la molienda tradicional en metate, conoce la cosmovisión maya detrás de la semilla sagrada y degusta una infusión ceremonial frente al cenote.",
        duration: "90 min",
        tag: "Cultura Viva",
        iconName: "Sparkles",
        whatsappMessage:
          "Hola, quiero información sobre la experiencia de Ceremonia Ancestral del Cacao en El Gran T´Zunun.",
      },
      {
        id: "velada-estelar",
        title: "Noche de Leyendas & Fogata Estelar",
        subtitle: "Astronomía maya y relatos de la selva",
        description:
          "Al caer el sol, la selva cobra otra vida. Disfruta de relatos tradicionales mayas alrededor del fuego, bombones asados y observación del cielo nocturno libre de contaminación lumínica.",
        duration: "2 horas",
        tag: "Experiencia Nocturna",
        iconName: "Moon",
        whatsappMessage:
          "Hola, quiero información sobre la Noche de Leyendas y Fogata Estelar en El Gran T´Zunun.",
      },
      {
        id: "ruta-melipona",
        title: "Santuario de la Abeja Melipona",
        subtitle: "Conservación y miel sagrada sin aguijón",
        description:
          "Descubre el fascinante mundo de la Xunán Kab (abeja maya sin aguijón), su importancia ecológica en la selva y realiza una cata de su miel medicinal.",
        duration: "60 min",
        tag: "Biodiversidad",
        iconName: "HeartHandshake",
        whatsappMessage:
          "Hola, quiero información sobre la experiencia del Santuario de la Abeja Melipona en El Gran T´Zunun.",
      },
    ] as ExperienceItem[],
  },
  lodgingSection: {
    eyebrow: "Descanso en la Selva",
    title: "Hospedaje & Zona de Camping",
    description:
      "Duerme arrullado por el susurro de las hojas y despierta con el canto de aves endémicas. Confort rústico en total armonía con el entorno.",
    checkAvailabilityCta: "Consultar disponibilidad en WhatsApp",
    items: [
      {
        id: "cabana-selva",
        title: "Habitación Confort Selva",
        badge: "Cabaña Rústica",
        badgeType: "rustic",
        description:
          "Cama King, aire acondicionado, baño privado con agua caliente y balcón con vistas a la flora silvestre.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBqbB6ew6NH8OP9Az002PLE0OFO_hCsZ8jHzH2-pedcIVe1il2cfUqyGhOO7WxyG3F_-dpb1MBPtLs4tJaLT-twMSsD_3gLQARgYHRxnz8z_9jNTCcM6G7_kwVslv_GbhejZuf95vMh2iUPgo7O9ptNIBMpd_dv8hHrJ0994VWwsMXZ_HwwdLZyD-EKehe_bNWWPaobCdqer5dQtykwYcLo_SseEPuRW6hxwTU63Wok4qMHiSKvtfb3sO_t1CRnnFH4Vg",
        amenities: ["Aire Acondicionado", "Wi-Fi en Cabaña", "Terraza Privada"],
        whatsappMessage:
          "Hola, quiero cotizar la Habitación Confort Selva en El Gran T´Zunun.",
      },
      {
        id: "suite-glamping",
        title: "Suite Glamping & Jacuzzi",
        badge: "Experiencia Romántica",
        badgeType: "romantic",
        description:
          "El balance supremo entre naturaleza y exclusividad. Jacuzzi exterior privado bajo el cielo estrellado y desayuno a la cama incluido.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_BRBxS2U8U_Toi_WSGqUfvxRuGWVBnf1Q4P0BjrJgFNxTloMBRLxx73bwLpHfosEzUDvnLqSgtX9NKQjetES4z7YhcWR-jHSEvSz3jWAAWGg2QWXqTzBcHdN1fh247UJjnajXDR6Nj8tm0AuuuHQXTOLvzDkDe_RUWG2h5FOgfEcfb1_45SrC7xjVPmKVdbCO1qqF3pmci5Xrg8Vo_MLkx0hBCz6qHQBNh-PYR0ThHYPEFflRHHr",
        amenities: ["Jacuzzi Privado", "Desayuno Gourmet", "Copa de Bienvenida"],
        whatsappMessage:
          "Hola, quiero cotizar la Suite Glamping & Jacuzzi en El Gran T´Zunun.",
      },
      {
        id: "camping-hamacas",
        title: "Zona de Camping & Hamacas",
        badge: "Eco-Aventura",
        badgeType: "eco",
        description:
          "Espacio delimitado y vigilado 24/7 con regaderas ecológicas, sanitarios limpios, zona de fogata comunitaria y área de hamacas mayas.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA1J09fU08SVyz2FvuLQo3bqARfCZm4qBiu1vVD0DFI_CYUVL-c6US28xue5O1tvwz_0AOtqL-BwHzxB4BH3bnr4SxaFOfW9EF4YfYSwwvb6uwiwfvfMuNpCIuMKw4CAdljHTdxEgXLMeH4Y_L463ZqgZ5fijKMwnFAJRMOHVB7Kbvi00CiJKrduURbusLjltJwuZAhEg81N7BdAFjiSRYHN2xpI7ODYaJwAIkd-oGhCWkafil07qBv",
        amenities: ["Seguridad 24/7", "Baños & Regaderas", "Fogata Nocturna"],
        whatsappMessage:
          "Hola, quiero información y reservar espacio en la Zona de Camping & Hamacas en El Gran T´Zunun.",
      },
    ] as LodgingOption[],
  },
  gastronomySection: {
    imageAlt:
      "Familia y amigos compartiendo una comida campestre en El Gran T´Zunun",
    floatingTagTitle: "Sazón Maya 100%",
    floatingTagDesc:
      "Cocinada a fuego lento con leña e ingredientes locales.",
    eyebrow: "Gastronomía Auténtica",
    title: "Sabores Tradicionales en Medio de la Naturaleza",
    description:
      "Nada complementa mejor un día de aventura que el sazón yucateco tradicional. Nuestras cocineras de comunidades vecinas elaboran recetas ancestrales con maíz recién nixtamalizado y marinados de achiote puro.",
    ctaText: "Consultar menú de hoy vía WhatsApp",
    ctaWhatsappMsg:
      "¡Hola! Quisiera conocer el menú de hoy del restaurante y opciones de buffet en El Gran T´Zunun.",
    pillars: [
      {
        title: "Desayunos Campestres",
        description:
          "Chilaquiles frescos, huevos al gusto, fruta de temporada y café de olla recién colado.",
        iconName: "Coffee",
      },
      {
        title: "Buffet Regional",
        description:
          "Cochinita pibil enterrada, poc chuc a las brasas y frijol con puerco tradicional.",
        iconName: "Utensils",
      },
      {
        title: "Cenas con Fogata",
        description:
          "Parrillada al aire libre, mixología fresca y chocolate caliente artesanal.",
        iconName: "Flame",
      },
    ] as GastronomyPillar[],
  },
  conversionBanner: {
    bgAlt: "Selva de El Gran T´Zunun",
    badge: "Respuesta en menos de 5 minutos",
    title: "¡La aventura comienza con un solo mensaje!",
    subtitle:
      "Escríbenos directamente para resolver dudas, apartar tus lugares, organizar visitas escolares o cotizar paquetes grupales a la medida.",
    ctaText: "Escribir por WhatsApp ahora",
    whatsappMsg:
      "¡Hola! Quiero cotizar un paquete para mi grupo o familia en El Gran T´Zunun.",
  },
  footer: {
    rightsReserved: "Todos los derechos reservados.",
    locationTagline:
      "Campeche, México · Reserva Natural y Parque Ecoturístico",
    directContact: "Contacto Directo",
    directContactMsg:
      "Hola, quisiera información de contacto y cómo llegar a El Gran T´Zunun.",
    location: "Ubicación",
    instagramMsg: "Hola, quiero seguir sus novedades y actividades.",
    facebookMsg: "Hola, los vi en Facebook y quiero saber más.",
  },
  floatingWhatsapp: {
    ariaRegion: "Contacto directo por WhatsApp",
    ariaButton: "Contactar a El Gran T´Zunun por WhatsApp",
    pillText: "¡Cotiza tu día aquí!",
    whatsappMsg:
      "¡Hola! Quisiera cotizar mi visita a El Gran T´Zunun y conocer la disponibilidad.",
  },
  quickModal: {
    title: "Planear mi Visita",
    subtitle: "Reserva o cotiza con respuesta inmediata por WhatsApp",
    closeAria: "Cerrar ventana",
    nameLabel: "Tu Nombre",
    namePlaceholder: "Ej. Carlos Mendoza",
    visitorTierLabel: "Tipo de Visitante",
    categoryLabel: "Categoría",
    packageLabel: "Experiencia / Paquete",
    adultsLabel: "Adultos (12+)",
    minorsLabel: "Menores (6–11)",
    under6Label: "Niños (<6)",
    dateLabel: "Fecha Tentativa",
    transportLabel: "Transporte Redondo Opcional",
    notesLabel: "Preguntas o requerimientos adicionales (opcional)",
    notesPlaceholder:
      "¿Tienen comida vegetariana? ¿Requieren anticipo?...",
    estimatedTotalLabel: "Total estimado:",
    submitBtn: "Continuar en WhatsApp",
    footerNote:
      "Se abrirá un chat directo con nuestro equipo de atención en Campeche.",
    whatsappTemplate: {
      header: "🌿 *Solicitud de Reserva - El Gran T´Zunun* 🌿",
      nameLabel: "👤 *Nombre:*",
      visitorTierLabel: "🌎 *Tipo de visitante:*",
      categoryLabel: "📂 *Categoría:*",
      packageLabel: "🎟️ *Paquete:*",
      guestsLabel: "👥 *Personas:*",
      dateLabel: "📅 *Fecha tentativa:*",
      transportLabel: "🚐 *Transporte:*",
      guidedRouteLabel: "🧭 *Ruta guiada:*",
      estimatedTotalLabel: "💵 *Total estimado:*",
      notesLabel: "📝 *Comentarios:*",
      footer: "¿Me confirman disponibilidad por favor?",
    },
  },
  pages: {
    common: {
      backToHome: "Volver al Inicio",
    },
    historia: {
      badge: "Raíces Mayas y Naturaleza",
      title: "Historia de El Gran T´Zunun",
      subtitle:
        "Un legado vivo entre cenotes milenarios, selva alta y la leyenda maya del colibrí que dio origen a nuestra reserva natural.",
      legendEyebrow: "La Leyenda Maya",
      legendTitle: "¿Por qué nos llamamos T´Zunun?",
      legendP1:
        "Cuenta la antigua sabiduría maya que cuando los dioses crearon todas las cosas en la Tierra, a cada animal, a cada árbol y a cada piedra le asignaron una misión. Pero al terminar, notaron que no había nadie encargado de llevar los pensamientos y buenos deseos de un lugar a otro.",
      legendP2Prefix:
        "Tallaron entonces una pequeña piedra de jade en forma de flecha y soplaron sobre ella: así nació el",
      legendP2Strong: "T´Zunun (colibrí)",
      legendP2Suffix:
        ". Nuestro parque honra a este mensajero de vida protegiendo su hábitat natural y ofreciendo a cada visitante un santuario de renovación y alegría.",
      missionTitle: "Nuestra Misión Ecológica",
      missionDesc:
        "Preservar la riqueza biocultural de Campeche mediante experiencias de aventura y descanso que respetan la flora, la fauna y las tradiciones de las comunidades mayas.",
      statProtectedLabel: "Reserva Protegida",
      statBirdSpeciesLabel: "Especies de Aves",
      timelineEyebrow: "Nuestra Evolución",
      timelineTitle: "De Sendero Sagrado a Parque Ecoturístico",
      milestones: [
        {
          year: "Orígenes Ancestrales",
          title: "El Santuario del Colibrí (T´Zunun)",
          description:
            "En lengua maya, T´Zunun significa colibrí: el mensajero sagrado de los dioses y guardián de los buenos deseos. Estas tierras albergaron antiguos senderos y aguadas donde la biodiversidad floreció intacta durante siglos.",
        },
        {
          year: "Conservación Comunitaria",
          title: "Alianza con Guardianes de la Selva",
          description:
            "Familias locales y sabios herbolarios se unieron para proteger los cenotes cristalinos y las ceibas centenarias, restaurando los corredores biológicos de aves endémicas y abejas meliponas.",
        },
        {
          year: "Nacimiento del Parque",
          title: "Aventura Sostenible de Bajo Impacto",
          description:
            "Se diseñaron circuitos de tirolesas panorámicas y puentes colgantes integrados respetuosamente a la topografía natural, permitiendo admirar la bóveda verde sin alterar su equilibrio ecológico.",
        },
        {
          year: "Presente y Futuro",
          title: "Patrimonio Vivo de la Península",
          description:
            "Hoy, El Gran T´Zunun es un referente de ecoturismo regenerativo donde la adrenalina, el descanso familiar y la gastronomía tradicional maya conviven en plena armonía.",
        },
      ],
      ctaTitle: "Sé parte de nuestra historia viva",
      ctaDesc:
        "Ven a recorrer nuestros senderos, nadar en aguas sagradas y vivir la hospitalidad de El Gran T´Zunun.",
      viewPackagesBtn: "Ver Paquetes",
      contactWhatsappBtn: "Contactar por WhatsApp",
      whatsappMsg:
        "¡Hola! Quiero conocer más sobre El Gran T´Zunun y planear mi visita.",
    },
    reglamentos: {
      badge: "Seguridad y Cuidado Ambiental",
      title: "Reglamentos del Parque",
      subtitle:
        "Para garantizar una experiencia 100% segura para tu familia y preservar intacto nuestro ecosistema maya, te pedimos atender las siguientes normas durante tu visita.",
      categories: [
        {
          title: "Seguridad en Actividades Extremas y Tirolesas",
          rules: [
            "Es obligatorio el uso de casco, arnés y guantes provistos por nuestros guías certificados durante todo el circuito.",
            "Peso máximo permitido en tirolesas: 115 kg (250 lbs). Edad mínima recomendada: 6 años (en compañía de un tutor o guía).",
            "No se permite realizar actividades de altura ni circuitos Exatlón bajo el influjo de alcohol, sustancias o si presenta afecciones cardíacas, lesiones de espalda o embarazo.",
            "El cabello largo debe ir recogido y no se permiten objetos sueltos (cámaras sin correa de seguridad, llaves o teléfonos en mano).",
          ],
        },
        {
          title: "Conservación del Cenote y Albercas Naturales",
          rules: [
            "Es indispensable tomar una ducha rápida en las regaderas ecológicas antes de ingresar al cenote o espejos de agua.",
            "Queda estrictamente prohibido el uso de bloqueadores solares, bronceadores, repelentes químicos o cremas antes de entrar al agua (incluso biodegradables) para proteger la pureza del manto acuífero.",
            "El uso de chaleco salvavidas es obligatorio dentro del cenote para todos los visitantes.",
            "No tocar, pisar ni desprender estalactitas, raíces o formaciones rocosas.",
          ],
        },
        {
          title: "Protección de Flora, Fauna y Convivencia",
          rules: [
            "Respeta a la fauna silvestre (aves, colibríes, abejas meliponas, reptiles): obsérvalos a distancia sin alimentarlos ni molestarlos.",
            "Prohibido extraer plantas, flores, piedras o cualquier elemento natural de la reserva.",
            "Parque libre de plásticos de un solo uso (popotes, unicel). Deposita los residuos únicamente en los contenedores clasificados.",
            "Por seguridad de la fauna local, no se permite el ingreso con mascotas ni el uso de bocinas con volumen alto en zonas de descanso.",
          ],
        },
        {
          title: "Acceso, Hospedaje y Zona de Camping",
          rules: [
            "Horario general de pasadía: jueves a domingo de 10:00 a 17:00 horas (abierto todos los días en festivos, puentes y vacaciones). Huéspedes de habitaciones y camping cuentan con acceso preferente.",
            "Las fogatas nocturnas se realizan exclusivamente en los círculos delimitados y bajo supervisión del personal del parque.",
            "No se permite el ingreso de bebidas alcohólicas externas ni envases de vidrio.",
            "A partir de las 10:30 PM se solicita mantener silencio moderado en las áreas de cabañas y camping para respetar el descanso y los sonidos de la selva.",
          ],
        },
      ],
      noticeTitle: "¿Tienes dudas sobre algún requerimiento físico o médico?",
      noticeDesc:
        "Nuestro equipo de atención puede orientarte antes de tu llegada sobre qué actividades son ideales para niños pequeños, adultos mayores o personas con movilidad reducida.",
      askGuideBtn: "Consultar a un Guía",
      whatsappMsg:
        "Hola, tengo una consulta sobre el reglamento y requerimientos de las actividades en El Gran T´Zunun.",
    },
    certificaciones: {
      badge: "Calidad y Respaldo Oficial",
      title: "Certificaciones y Estándares",
      subtitle:
        "Tu tranquilidad y el respeto por la naturaleza son nuestra prioridad. Conoce las acreditaciones técnicas, ambientales y operativas que respaldan cada aventura en El Gran T´Zunun.",
      items: [
        {
          badge: "Norma Oficial Mexicana",
          title: "NOM-09-TUR · Guías Especializados en Ecoturismo",
          issuer: "Secretaría de Turismo (SECTUR)",
          description:
            "Todos nuestros instructores de tirolesa, senderismo interpretativo y rescate acuático cuentan con acreditación oficial vigente en turismo de naturaleza y aventura.",
        },
        {
          badge: "Estándar Internacional",
          title: "Equipos de Altura Certificados UIAA & CE",
          issuer: "Inspección Estructural y Líneas de Vida",
          description:
            "Utilizamos poleas dobles redundantes, arneses integrales, cascos y cables de acero grado aeronáutico sometidos a bitácoras de mantenimiento preventivo diario y dictámenes estructurales semestrales.",
        },
        {
          badge: "Sustentabilidad",
          title: "Distintivo de Turismo Sustentable y Conservación",
          issuer: "Manejo Responsable de Cenotes y Selva",
          description:
            "Operamos con biodigestores ecológicos, tratamiento de aguas residuales cero descargas al manto freático y programas permanentes de reforestación y protección de polinizadores.",
        },
        {
          badge: "Salud e Higiene",
          title: "Manejo Higiénico de Alimentos y Primeros Auxilios",
          issuer: "Protección Civil & Sanidad Alimentaria",
          description:
            "Nuestro restaurante campestre cumple con rigurosos protocolos de higiene en preparación de alimentos, y el parque dispone de brigada permanente de primeros auxilios y protocolos de atención inmediata.",
        },
      ],
      ctaTitle:
        "¿Organizas una visita escolar, corporativa o de agencia turística?",
      ctaDesc:
        "Ponemos a disposición de escuelas, empresas y operadores turísticos nuestras carpetas de dictámenes de Protección Civil, pólizas de seguro de responsabilidad civil y protocolos de seguridad.",
      requestDossierBtn: "Solicitar Dossier Técnico",
      whatsappMsg:
        "Hola, me gustaría solicitar información de certificaciones y protocolos de seguridad para un grupo en El Gran T´Zunun.",
    },
    convenios: {
      badge: "Vinculación Institucional y Comercial",
      title: "Convenios y Alianzas",
      subtitle:
        "Construimos relaciones de valor a largo plazo con empresas, instituciones educativas, agencias de viajes y comunidades locales para multiplicar el impacto positivo del ecoturismo.",
      requestAgreementBtn: "Solicitar Convenio por WhatsApp",
      programs: [
        {
          title: "Agencias de Viajes y Tour Operadores",
          subtitle: "Tarifas netas comisionables y atención prioritaria",
          description:
            "Trabajamos de la mano con agencias receptivas, hoteles y concierges de la Península de Yucatán. Ofrecemos bloques garantizados, material promocional y logística integral para grupos.",
          benefits: [
            "Tarifas preferenciales B2B y comisiones atractivas",
            "Cortesías para guías y operadores certificados",
            "Confirmación inmediata y facturación fiscal",
          ],
          ctaMessage:
            "Hola, represento a una agencia/operador turístico y quiero información de convenios con El Gran T´Zunun.",
        },
        {
          title: "Empresas, Sindicatos y Team Building",
          subtitle:
            "Integración corporativa y beneficios para colaboradores",
          description:
            "Diseñamos jornadas de integración empresarial con circuitos tipo Exatlón, talleres colaborativos, banquetes regionales y descuentos permanentes en pasadías para tus colaboradores y sus familias.",
          benefits: [
            "Descuentos con credencial corporativa vigente",
            "Renta exclusiva de áreas y palapas para eventos",
            "Dinámicas guiadas de liderazgo y trabajo en equipo",
          ],
          ctaMessage:
            "Hola, me interesa conocer los convenios corporativos y paquetes de Team Building en El Gran T´Zunun.",
        },
        {
          title: "Escuelas, Universidades y Campamentos",
          subtitle: "Educación ambiental y excursiones seguras",
          description:
            "Programas pedagógicos adaptados por nivel educativo donde los estudiantes aprenden sobre botánica maya, conservación de abejas meliponas, geología de cenotes y trabajo comunitario.",
          benefits: [
            "Cortesías para docentes y coordinadores de grupo",
            "Recorridos guiados con enfoque biológico y cultural",
            "Paquetes con transporte y alimentación balanceada",
          ],
          ctaMessage:
            "Hola, quiero cotizar una excursión escolar o convenio académico en El Gran T´Zunun.",
        },
        {
          title: "Alianzas Comunitarias y Artesanos Locales",
          subtitle: "Comercio justo y economía social en la región",
          description:
            "Nuestra cadena de valor impulsa directamente a productores de miel melipona, cocineras tradicionales, artesanos de hamacas y cooperativas ecoturísticas vecinas.",
          benefits: [
            "Insumos gastronómicos 100% de productores locales",
            "Espacio de difusión para medicina tradicional y cacao",
            "Impulso al empleo digno en comunidades mayas",
          ],
          ctaMessage:
            "Hola, me gustaría conversar sobre una alianza comunitaria o de proveedores locales con El Gran T´Zunun.",
        },
      ],
    },
  },
};

export type Dictionary = typeof es;
