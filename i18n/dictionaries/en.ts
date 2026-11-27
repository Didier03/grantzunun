import { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    title: "El Gran T´Zunun - Adventure Awaits | Nature & Eco Park",
    description:
      "Discover adventure and nature at El Gran T´Zunun: panoramic ziplines, recreational experiences, extreme challenges, rustic eco-lodging, Mayan gastronomy, and all-inclusive jungle day passes.",
  },
  navbar: {
    topBarTagline: "Nature Reserve & Eco-Adventure Park · Campeche, México",
    institutionalNavAria: "Institutional navigation",
    parkSectionsAria: "Park sections",
    openMenuAria: "Open menu",
    switchLanguageAria: "Switch language",
    reserveBtn: "Book Now",
    reserveDateBtn: "Book a Date",
    contactWhatsappBtn: "Contact via WhatsApp",
    exploreParkHeading: "Explore the Park",
    parkInfoHeading: "Our Park & Information",
    reserveWhatsappDefaultMsg:
      "Hi! I would like to book a date to visit El Gran T´Zunun.",
    infoWhatsappDefaultMsg:
      "Hi! I would like information about visiting El Gran T´Zunun.",
    mainLinks: {
      extremeActivities: "Extreme & Adventure Activities",
      recreation: "Recreation & Relaxation",
      packages: "Packages",
      experiences: "Experiences",
      lodging: "Lodging",
      gastronomy: "Gastronomy",
    },
    institutionalLinks: {
      history: "History of El Gran T´Zunun",
      rules: "Park Rules",
      certifications: "Certifications",
      alliances: "Alliances & Partnerships",
    },
  },
  hero: {
    tagline: "Jungle Nature & Adventure Park",
    headlinePrefix: "Discover Adventure and Nature at",
    brandName: "El Gran T´Zunun",
    subtitle:
      "Canopy ziplines, adventure courses, authentic regional dining, and an idyllic escape in the heart of the Mayan jungle.",
    planVisitCta: "Plan my visit via WhatsApp",
    planVisitWhatsappMsg:
      "Hi! I would like information to plan my visit to El Gran T´Zunun.",
    viewPackagesCta: "View Rates & Packages",
    slideAriaPrefix: "Go to slide",
    slides: [
      {
        id: "slide-1",
        image: "/images/hero-zipline.svg",
        caption: "Ziplining over the Mayan jungle canopy",
      },
      {
        id: "slide-2",
        image: "/images/senderos-selva.svg",
        caption: "Lush jungle trails and peninsula rivers",
      },
    ],
    trustBadges: [
      {
        metric: "+5,000",
        label: "Happy Adventurers",
      },
      {
        metric: "100% Safe",
        label: "Certified Guides",
      },
      {
        metric: "Fast Reply",
        label: "Via WhatsApp",
      },
    ],
  },
  activitiesSection: {
    eyebrow: "Jungle Adrenaline",
    title: "Extreme & Adventure Activities",
    description:
      "Designed to awaken all your senses. From pure adrenaline high above the treetops to agility challenges and exploration in sacred underground waters.",
    items: [
      {
        id: "tirolesas",
        title: "Ziplines",
        category: "Pure Adrenaline",
        categoryColor: "emerald",
        description:
          "Cross 850 meters of pure adrenaline at over 35 meters high on two continuous ziplines. Enjoy the thrill of flying at full speed with the best panoramic views of nature and 100% safe infrastructure.",
        image: "/images/hero-zipline.svg",
        colSpan: "two-thirds",
        ctaText: "Ask about ziplines",
        whatsappMessage:
          "Hello, I want information about the Ziplines circuit at El Gran T´Zunun.",
      },
      {
        id: "exatlon",
        title: "Exathlon",
        category: "Physical Challenge",
        categoryColor: "secondary",
        description:
          "Test your balance and agility on our two-level hexagonal tower, suitable for kids (from 5 years old) and adults. A 100% secured aerial challenge circuit, perfect for releasing stress and enjoying as a team.",
        iconName: "Zap",
        colSpan: "one-third",
        ctaText: "Check requirements",
        whatsappMessage:
          "Hello, I want information about the Exathlon circuit at El Gran T´Zunun.",
      },
      {
        id: "rapel",
        title: "Rappelling",
        category: "Vertigo",
        categoryColor: "secondary",
        description:
          "Reach the top on a 12-meter wall with challenges for beginners (from 5 years old) and advanced climbers. Test your strength and concentration with certified equipment and total guided security.",
        iconName: "Mountain",
        colSpan: "half",
        ctaText: "Rappelling details",
        whatsappMessage:
          "Hello, I want information about Rappelling at El Gran T´Zunun.",
      },
      {
        id: "senderismo",
        title: "Hiking",
        category: "Natural Connection",
        categoryColor: "tertiary",
        description:
          "Connect with nature on a guided walk through the jungle. Discover the secrets of medicinal and energetic trees while learning to coexist with local fauna on a journey to renew body and mind.",
        iconName: "Leaf",
        colSpan: "half",
        ctaText: "See guided routes",
        whatsappMessage:
          "Hello, I want information about Guided Hiking at El Gran T´Zunun.",
      },
      {
        id: "campismo",
        title: "Camping",
        category: "Immersion",
        categoryColor: "emerald",
        description:
          "Sleep under the stars and reconnect with nature. We offer recreational camping zones with pool access and services, as well as secluded areas for groups and formative or survival camping.",
        iconName: "Tent",
        colSpan: "one-third",
        ctaText: "Book a zone",
        whatsappMessage:
          "Hello, I want to book a Camping zone at El Gran T´Zunun.",
      },
      {
        id: "astronomia",
        title: "Stargazing and Astronomy",
        category: "Night Mysticism",
        categoryColor: "secondary",
        description:
          "Discover the magic of the night sky away from light pollution. A guided astronomical experience to contemplate stars, planets, and constellations in the tranquility and darkness of nature.",
        iconName: "Star",
        colSpan: "two-thirds",
        ctaText: "Check dates",
        whatsappMessage:
          "Hello, I want information about the Stargazing experience at El Gran T´Zunun.",
      },
    ],
  },
  recreationSection: {
    eyebrow: "Natural Peace & Harmony",
    title: "Recreation & Relaxation Activities",
    description:
      "Spaces thoughtfully designed to slow down, enjoy family time, and reconnect with the serenity of the Mayan jungle at your own pace.",
    items: [
      {
        id: "albercas",
        title: "Pools",
        category: "Family Recreation",
        categoryColor: "secondary",
        description:
          "Refresh after the adventure in our two pools designed for the whole family. A clean, comfortable, and safe space with sustainable filtration technology that cares for and optimizes the park's natural resources.",
        image: "/images/cenote-sagrado.svg",
        colSpan: "two-thirds",
        ctaText: "See pool details",
        whatsappMessage:
          "Hello, I want information about the Pools and family areas at El Gran T´Zunun.",
      },
      {
        id: "hospedaje",
        title: "Lodging",
        category: "Total Rest",
        categoryColor: "emerald",
        description:
          "Adventure is not at odds with comfort. After a day in nature, relax in rooms designed for safe, intimate, and regenerative rest, ready to fully renew your energy.",
        iconName: "Bed",
        colSpan: "one-third",
        ctaText: "Check availability",
        whatsappMessage:
          "Hello, I want information and to check Lodging availability at El Gran T´Zunun.",
      },
      {
        id: "restaurante",
        title: "Restaurant",
        category: "Gastronomy",
        categoryColor: "tertiary",
        description:
          "Taste the best of regional gastronomy with fresh ingredients from our own garden. Enjoy authentic dishes and refreshing natural fruit waters harvested at home, straight from the field to your table.",
        iconName: "Utensils",
        colSpan: "one-third",
        ctaText: "See menu",
        whatsappMessage:
          "Hello, I want information about the Restaurant and dining options at El Gran T´Zunun.",
      },
      {
        id: "ceremonias",
        title: "Ancestral Ceremonies",
        category: "Mysticism",
        categoryColor: "secondary",
        description:
          "Reconnect with ancient wisdom in our Mayan holistic space. In an ancient ceremonial center, experience ancestral rituals and ceremonies to heal body, mind, and spirit through the energy of nature.",
        iconName: "Sparkles",
        colSpan: "one-third",
        ctaText: "Schedule ceremony",
        whatsappMessage:
          "Hello, I want information to participate in the Ancestral Ceremonies at El Gran T´Zunun.",
      },
      {
        id: "avistamiento-aves",
        title: "Bird Watching",
        category: "Contemplation",
        categoryColor: "emerald",
        description:
          "Relax with the natural symphony of our birds in a protected environment. A contemplative experience that reduces stress and anxiety, while you discover species that find shelter and food in the park.",
        iconName: "Feather",
        colSpan: "one-third",
        ctaText: "Tour information",
        whatsappMessage:
          "Hello, I want information about the Bird Watching tours at El Gran T´Zunun.",
      },
    ],
  },
  packagesSection: {
    eyebrow: "Transparent Rates",
    title: "Official Rates & Packages",
    description:
      "Explore our official rates for local, Mexican national, and international visitors across day passes, extreme activities, lodging, and camping.",
    visitorTierLabel: "Visitor profile",
    tiers: {
      local: "Locals (Campeche)",
      national: "Nationals (Mexico)",
      foreigner: "Foreigners (USD)",
    },
    tiersShort: {
      local: "Local (Campeche)",
      national: "National (Mexico)",
      foreigner: "Foreigner",
    },
    categoryTabLabel: "Service category",
    categories: {
      daypass: {
        label: "Daypass",
        policyTitle: "Daypass Hours & Policies",
        policyText:
          "Thursday to Sunday from 10:00 AM to 5:00 PM. Open every day on holidays, long weekends, and school vacations. Children under 6 enter free on Daypass. Outside food and beverages are not allowed.",
      },
      extreme: {
        label: "Extreme Activities",
        policyTitle: "Extreme Activities Hours & Policies",
        policyText:
          "General service operates from 10:00 AM to 4:00 PM, subject to suspension due to rain or extreme heat (12:00 PM – 3:00 PM), complemented by daytime shifts (6:00–11:00 AM and 3:00–7:00 PM) and night shifts (8:00 PM – 12:00 AM). Guided routes require a minimum of 10 people and include a first-aid kit, restrooms, and assistance transferring injured visitors.",
      },
      lodging: {
        label: "Lodging",
        policyTitle: "Lodging & Transport Information",
        policyText:
          "Rates for local and Mexican national guests are in Mexican Pesos (MXN); rates for foreign visitors are in US Dollars (USD). Optional round-trip transportation is available for small groups and charter buses.",
      },
      camping: {
        label: "Camping",
        policyTitle: "Camping Options & Policies",
        policyText:
          "Camp with your own tent or rent an equipped tent including a sleeping mat, restroom access, and pools. Special rates available for scouts, schools, and groups of more than 10 people.",
      },
    },
    subcategories: {
      standardTitle: "Standard Room",
      standardSubtitle:
        "Double bed room with hot water and air conditioning",
      suiteTitle: "Suite Room",
      suiteSubtitle:
        "King-size bed with extra comfort for couples and families",
      transportSectionTitle: "Transportation Options",
      lodgingTransportBannerTitle:
        "Additional round-trip transport options:",
      lodgingTransportSmallTemplate:
        "Round-trip transport (1 to 4 people): {price} / person",
      lodgingTransportBusTemplate:
        "Bus for large groups (20 to 50 people): {price} / person",
    },
    units: {
      minor: "minor",
      adult: "adult",
      person: "person",
      room: "room",
      tent: "tent",
    },
    disclaimer:
      "* Official rates subject to date availability. Locals (Campeche) & Nationals (Mexico) in MXN · Foreigners in USD.",
    card: {
      popularBadgeDefault: "Most Popular",
      minorRateBadgeTemplate: "Minors (6–11 yrs): {price}",
      extraMinorNoBreakfastTemplate:
        "Additional children 6–11 years: {price} (breakfast not included)",
      extraMinorIncludedTemplate: "Additional children 6–11 years: {price}",
      reserveBestSeller: "Book Package",
      calculateGroupWithPkg: "Calculate group with this package",
      orderByWhatsapp: "Book Now",
      calculateGroup: "Quote in calculator",
    },
    catalog: {
      "daypass-minors": {
        name: "Daypass Minors",
        audience: "Minors (6–11 yrs)",
        subtitle: "Safe fun in pools & nature",
        features: [
          "Park access (10:00 AM – 5:00 PM)",
          "Family swimming pools & green areas",
          "Clean restrooms & eco-showers",
          "Children under 6 enter free on Daypass",
        ],
      },
      "daypass-adults": {
        name: "Daypass Adults",
        audience: "Adults (12+ yrs)",
        subtitle: "Relaxation & connection with the jungle",
        features: [
          "Park access (10:00 AM – 5:00 PM)",
          "Family swimming pools & nature trails",
          "Rest areas & restroom facilities",
          "Outside food and beverages not allowed",
        ],
      },
      "daypass-lunch-minors": {
        name: "Daypass + Lunch Minors",
        audience: "Minors (6–11 yrs)",
        subtitle: "Full day pass with traditional meal",
        features: [
          "Full Daypass park access",
          "Swimming pools & recreational areas",
          "Traditional lunch included",
          "Restrooms & eco-showers",
        ],
      },
      "daypass-lunch-adults": {
        name: "Daypass + Lunch Adults",
        audience: "Adults (12+ yrs)",
        subtitle: "Worry-free countryside experience",
        highlightBadge: "Most Popular",
        features: [
          "Full Daypass park access",
          "Swimming pools & relaxation areas",
          "Regional lunch included",
          "Ideal for couples, friends & families",
        ],
      },
      "daypass-lunch-transport": {
        name: "Daypass + Lunch + Transport",
        audience: "Min. 4 people",
        subtitle: "Door-to-door round-trip comfort",
        features: [
          "Round-trip transportation included",
          "Full Daypass & swimming pool access",
          "Traditional lunch included",
          "Valid for groups of 4 or more",
        ],
      },
      "extreme-adventure": {
        name: "Zipline + Exathlon + Pool + Lunch",
        audience: "Full Adventure",
        subtitle: "Canopy thrills & regional dining",
        highlightBadge: "Most Popular",
        features: [
          "Panoramic canopy zipline circuit",
          "Exathlon aerial challenge course",
          "Swimming pool & restroom access",
          "Lunch included & certified safety gear",
        ],
      },
      "extreme-cacao": {
        name: "Zipline + Exathlon + Pool + Lunch + Cacao Ceremony",
        audience: "Adventure & Mayan Culture",
        subtitle: "Extreme adrenaline & ancestral ritual",
        features: [
          "Zipline & Exathlon adventure circuits",
          "Mayan Cacao Ceremony included",
          "Swimming pool & restroom access",
          "Regional lunch included",
        ],
      },
      "extreme-transport-daypass": {
        name: "Transport + Daypass + Lunch",
        audience: "Min. 4 people",
        subtitle: "Round-trip transfer & leisure day",
        features: [
          "Round-trip transportation included",
          "Daypass & swimming pool access",
          "Traditional lunch included",
          "Requires minimum of 4 people",
        ],
      },
      "transport-roundtrip-small": {
        name: "Round-Trip Transport (1 to 4 people)",
        audience: "1 to 4 people",
        subtitle: "Convenient round-trip transfer",
        features: [
          "Round-trip transfer to El Gran T´Zunun",
          "Valid for groups of 1 to 4 people",
          "Schedule coordinated via WhatsApp",
        ],
      },
      "transport-bus-large": {
        name: "Bus for Large Groups (20 to 50 people)",
        audience: "20 to 50 people",
        subtitle: "Group, school & corporate logistics",
        features: [
          "Round-trip bus for large groups",
          "Capacity from 20 up to 50 people",
          "Ideal for excursions & guided routes",
        ],
      },
      "lodging-std-breakfast-2": {
        name: "Standard Breakfast (2 people)",
        audience: "2 people",
        subtitle:
          "Double room with hot water, air conditioning, and breakfast included for 2 people.",
        features: [
          "Double bed room for 2 people",
          "Hot water & air conditioning (A/C)",
          "Breakfast included for 2 people",
          "Access to pools & nature areas",
        ],
      },
      "lodging-std-allinc-1": {
        name: "Standard All-Inclusive (1 person)",
        audience: "1 person",
        subtitle:
          "Double room with hot water, air conditioning, breakfast, lunch, and dinner included for 1 person.",
        features: [
          "Double room for 1 guest",
          "Hot water & air conditioning (A/C)",
          "Breakfast, lunch & dinner (1 person)",
          "Access to pools & park facilities",
        ],
      },
      "lodging-std-allinc-2": {
        name: "Standard All-Inclusive (2 people)",
        audience: "2 people",
        subtitle:
          "Double room with hot water, air conditioning, breakfast, lunch, and dinner included for 2 people.",
        features: [
          "Double room for 2 people",
          "Hot water & air conditioning (A/C)",
          "Breakfast, lunch & dinner (2 people)",
          "Worry-free full-board stay",
        ],
      },
      "lodging-std-adventure-2": {
        name: "Standard Adventure All-Inclusive (2 people)",
        audience: "2 people",
        subtitle:
          "Double room with hot water, air conditioning, breakfast, lunch, and dinner, plus Zipline or Exathlon for 2 people.",
        highlightBadge: "Best Value",
        features: [
          "Double bed, hot water & A/C",
          "Breakfast, lunch & dinner (2 people)",
          "Zipline or Exathlon for 2 people",
          "Access to pools & jungle trails",
        ],
      },
      "lodging-suite-breakfast": {
        name: "Suite Breakfast (2 adults & 1 child)",
        audience: "2 adults & 1 child",
        subtitle:
          "King-size bed, hot water, air conditioning, breakfast included for 2 adults and 1 child.",
        features: [
          "King-size bed, hot water & A/C",
          "Breakfast included for 2 adults & 1 child",
          "Access to pools & park areas",
        ],
      },
      "lodging-suite-allinc": {
        name: "Suite All-Inclusive (2 people)",
        audience: "2 people",
        subtitle:
          "King-size bed, hot water, breakfast, lunch, and dinner for 2 adults.",
        highlightBadge: "Suite Comfort",
        features: [
          "King-size bed & hot water",
          "Breakfast, lunch & dinner for 2 adults",
          "Access to pools & relaxation zones",
        ],
      },
      "lodging-suite-adventure": {
        name: "Suite Adventure (2 people)",
        audience: "2 people",
        subtitle:
          "King-size bed, hot water, air conditioning, breakfast included + Zipline or Exathlon for 2 adults.",
        features: [
          "King-size bed, hot water & A/C",
          "Breakfast included for 2 adults",
          "Zipline or Exathlon for 2 adults",
        ],
      },
      "camping-basic": {
        name: "Basic Access (Own Tent)",
        audience: "Bring your own tent",
        subtitle:
          "Park access when the guest brings their own tent and only requires the camping area and restrooms.",
        features: [
          "Camping area spot",
          "Restroom access",
          "Guest brings their own tent",
        ],
      },
      "camping-pool": {
        name: "Access + Pool (Own Tent)",
        audience: "Bring your own tent",
        subtitle:
          "Park access when the guest brings their own tent, including the camping area, restrooms, and pool.",
        features: [
          "Camping area spot",
          "Restroom & swimming pool access",
          "Guest brings their own tent",
        ],
      },
      "camping-tent-2": {
        name: "Tent Rental (2 people)",
        audience: "2 people",
        subtitle:
          "Tent rental for 2 people, includes sleeping mat, access to restrooms, and pools.",
        highlightBadge: "Most Popular",
        features: [
          "Tent rental for 2 people",
          "Includes sleeping mat",
          "Access to restrooms & pools",
        ],
      },
      "camping-tent-3": {
        name: "Tent Rental (3 people)",
        audience: "3 people",
        subtitle:
          "Tent rental for 3 people, includes sleeping mat, access to restrooms, and pools.",
        features: [
          "Tent rental for 3 people",
          "Includes sleeping mat",
          "Access to restrooms & pools",
        ],
      },
      "camping-tent-5": {
        name: "Tent Rental (5 people)",
        audience: "5 people",
        subtitle:
          "Tent rental for 5 people, includes sleeping mat, access to restrooms, and pools.",
        features: [
          "Tent rental for 5 people",
          "Includes sleeping mat",
          "Access to restrooms & pools",
        ],
      },
      "camping-groups": {
        name: "Groups / Scouts / Schools",
        audience: ">10 people · Own tent",
        subtitle:
          "Scouts, schools, and groups of more than 10 people, bringing their own tent, with access to restrooms and pool.",
        features: [
          "Scouts, schools & groups (>10 people)",
          "Bringing their own tent",
          "Access to restrooms & swimming pool",
        ],
      },
    },
    calculatorCombinedPackages: {
      "calc-daypass-general": {
        name: "General Daypass (Park Access)",
        subtitle:
          "Automatically applies Adult (12+), Minor (6–11), and Kids (<6 free) rates.",
      },
      "calc-daypass-lunch": {
        name: "Daypass + Lunch",
        subtitle:
          "Automatically applies Adult (12+) and Minor (6–11) Daypass + Lunch rates.",
      },
    },
    calculator: {
      eyebrow: "Quick Tool",
      title: "Express Quote Calculator for Families & Groups",
      hideBtn: "Hide calculator",
      showBtn: "Calculate my total & send to WhatsApp",
      visitorTierLabel: "Visitor Profile",
      categoryLabel: "Category",
      basePackageLabel: "Package / Option",
      visitorsCountLabel: "Number of Visitors",
      adultsLabel: "Adults (12+)",
      minorsLabel: "Minors (6–11)",
      under6Label: "Kids (<6)",
      freeUnder6Badge: "Free on Daypass",
      dateAndNameLabel: "Tentative Date & Name",
      namePlaceholder: "Your name (optional)",
      transportAddonLabel: "Optional Round-Trip Transport",
      transportIncludedNote:
        "Round-trip transportation is already included in this package.",
      transportNoneOption: "No additional transport",
      transportSmallOptionTemplate:
        "Round-trip transport 1–4 people (+{price} / person)",
      transportBusOptionTemplate:
        "Large group bus 20–50 people (+{price} / person)",
      guidedRouteLabel:
        "Include guided route (min. 10 people, includes first-aid kit & support)",
      optionAgeSplitTemplate: "{name} (Adult {adultPrice} · Minor {minorPrice})",
      optionFlatPriceTemplate: "{name} ({price})",
      breakdownAdultsTemplate: "{count} adult(s) × {price}",
      breakdownMinorsTemplate: "{count} minor(s) (6–11) × {price}",
      breakdownPersonsTemplate: "{count} guest(s) × {price}",
      breakdownUnder6FreeTemplate: "{count} kid(s) (<6 free)",
      breakdownUnder6CountTemplate: "{count} kid(s) (<6)",
      breakdownRoomsTemplate: "{count} room(s) × {price}",
      breakdownExtraMinorsTemplate: "{count} extra child(ren) × {price}",
      breakdownTentsTemplate: "{count} tent(s) × {price}",
      breakdownTransportTemplate: "Transport ({count} × {price})",
      estimatedTotalLabel: "Estimated Total for your visit:",
      subjectToConfirmation: "Subject to date confirmation",
      sendQuoteBtn: "Send quote to WhatsApp",
      validations: {
        minOneGuest:
          "Select at least 1 guest (adult or minor aged 6–11) to calculate your total.",
        minPackagePeopleTemplate:
          "This package requires a minimum of {min} people (currently: {current}).",
        maxPackagePeopleTemplate:
          "This option applies up to a maximum of {max} people (currently: {current}).",
        minTransportPeopleTemplate:
          "The selected transport option requires at least {min} passengers (currently: {current}).",
        maxTransportPeopleTemplate:
          "The selected transport option allows up to {max} passengers (currently: {current}).",
        minGuidedRouteTemplate:
          "Guided routes require a minimum of {min} people (currently: {current}).",
      },
      whatsappLabels: {
        header: "🌿 *Visit Quote - El Gran T´Zunun* 🌿",
        nameLabel: "👤 *Name:*",
        visitorTierLabel: "🌎 *Visitor type:*",
        categoryLabel: "📂 *Category:*",
        packageLabel: "🎟️ *Package:*",
        guestsLabel: "👥 *Guests:*",
        dateLabel: "📅 *Tentative date:*",
        transportLabel: "🚐 *Transport:*",
        guidedRouteLabel: "🧭 *Guided route:*",
        estimatedTotalLabel: "💵 *Estimated total:*",
        notesLabel: "📝 *Notes:*",
        footer:
          "Could you please confirm availability and the booking/payment process? Thank you!",
      },
      whatsappValues: {
        transportIncluded: "Included in package",
        transportSmall: "Round-trip transport (1 to 4 people)",
        transportBus: "Bus for large groups (20 to 50 people)",
        guidedRouteYes: "Requested (min. 10 people)",
      },
    },
  },
  experiencesSection: {
    eyebrow: "Cultural & Sensory Immersion",
    title: "Unique Experiences at El Gran T´Zunun",
    description:
      "Guided experiences led by local masters to discover ancestral secrets, biodiversity, and the nighttime magic of the Mayan territory.",
    bookExperienceCta: "Book experience",
    items: [
      {
        id: "ceremonia-cacao",
        title: "Ancestral Cacao Ceremony",
        subtitle: "Spiritual connection & Mayan tradition",
        description:
          "Take part in traditional stone metate grinding, learn the Mayan worldview behind the sacred seed, and taste a ceremonial infusion facing the cenote.",
        duration: "90 min",
        tag: "Living Culture",
        iconName: "Sparkles",
        whatsappMessage:
          "Hi, I would like information about the Ancestral Cacao Ceremony experience at El Gran T´Zunun.",
      },
      {
        id: "velada-estelar",
        title: "Night of Legends & Starlight Bonfire",
        subtitle: "Mayan astronomy & jungle tales",
        description:
          "As the sun sets, the jungle comes alive. Enjoy traditional Mayan stories around the fire, roasted marshmallows, and stargazing under skies free of light pollution.",
        duration: "2 hours",
        tag: "Night Experience",
        iconName: "Moon",
        whatsappMessage:
          "Hi, I would like information about the Night of Legends & Starlight Bonfire at El Gran T´Zunun.",
      },
      {
        id: "ruta-melipona",
        title: "Melipona Bee Sanctuary",
        subtitle: "Conservation & sacred stingless honey",
        description:
          "Discover the fascinating world of Xunán Kab (the stingless Mayan bee), its ecological importance in the jungle, and enjoy a medicinal honey tasting.",
        duration: "60 min",
        tag: "Biodiversity",
        iconName: "HeartHandshake",
        whatsappMessage:
          "Hi, I would like information about the Melipona Bee Sanctuary experience at El Gran T´Zunun.",
      },
    ],
  },
  lodgingSection: {
    eyebrow: "Rest in the Jungle",
    title: "Eco-Lodging & Camping Zone",
    description:
      "Fall asleep to the whisper of leaves and wake up to the song of endemic birds. Rustic comfort in complete harmony with nature.",
    checkAvailabilityCta: "Check availability on WhatsApp",
    items: [
      {
        id: "cabana-selva",
        title: "Jungle Comfort Cabin",
        badge: "Rustic Cabin",
        badgeType: "rustic",
        description:
          "King-size bed, air conditioning, private bathroom with hot water, and a balcony overlooking wild flora.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBqbB6ew6NH8OP9Az002PLE0OFO_hCsZ8jHzH2-pedcIVe1il2cfUqyGhOO7WxyG3F_-dpb1MBPtLs4tJaLT-twMSsD_3gLQARgYHRxnz8z_9jNTCcM6G7_kwVslv_GbhejZuf95vMh2iUPgo7O9ptNIBMpd_dv8hHrJ0994VWwsMXZ_HwwdLZyD-EKehe_bNWWPaobCdqer5dQtykwYcLo_SseEPuRW6hxwTU63Wok4qMHiSKvtfb3sO_t1CRnnFH4Vg",
        amenities: ["Air Conditioning", "Cabin Wi-Fi", "Private Terrace"],
        whatsappMessage:
          "Hi, I would like a quote for the Jungle Comfort Cabin at El Gran T´Zunun.",
      },
      {
        id: "suite-glamping",
        title: "Glamping Suite & Jacuzzi",
        badge: "Romantic Experience",
        badgeType: "romantic",
        description:
          "The ultimate balance between nature and exclusivity. Private outdoor jacuzzi under the starry sky and breakfast in bed included.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_BRBxS2U8U_Toi_WSGqUfvxRuGWVBnf1Q4P0BjrJgFNxTloMBRLxx73bwLpHfosEzUDvnLqSgtX9NKQjetES4z7YhcWR-jHSEvSz3jWAAWGg2QWXqTzBcHdN1fh247UJjnajXDR6Nj8tm0AuuuHQXTOLvzDkDe_RUWG2h5FOgfEcfb1_45SrC7xjVPmKVdbCO1qqF3pmci5Xrg8Vo_MLkx0hBCz6qHQBNh-PYR0ThHYPEFflRHHr",
        amenities: ["Private Jacuzzi", "Gourmet Breakfast", "Welcome Drink"],
        whatsappMessage:
          "Hi, I would like a quote for the Glamping Suite & Jacuzzi at El Gran T´Zunun.",
      },
      {
        id: "camping-hamacas",
        title: "Camping & Hammock Zone",
        badge: "Eco-Adventure",
        badgeType: "eco",
        description:
          "Dedicated area with 24/7 security, eco-showers, clean restrooms, community bonfire circle, and Mayan hammock pavilion.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA1J09fU08SVyz2FvuLQo3bqARfCZm4qBiu1vVD0DFI_CYUVL-c6US28xue5O1tvwz_0AOtqL-BwHzxB4BH3bnr4SxaFOfW9EF4YfYSwwvb6uwiwfvfMuNpCIuMKw4CAdljHTdxEgXLMeH4Y_L463ZqgZ5fijKMwnFAJRMOHVB7Kbvi00CiJKrduURbusLjltJwuZAhEg81N7BdAFjiSRYHN2xpI7ODYaJwAIkd-oGhCWkafil07qBv",
        amenities: ["24/7 Security", "Restrooms & Showers", "Night Bonfire"],
        whatsappMessage:
          "Hi, I would like information and to reserve a spot in the Camping & Hammock Zone at El Gran T´Zunun.",
      },
    ],
  },
  gastronomySection: {
    imageAlt:
      "Family and friends sharing a countryside meal at El Gran T´Zunun",
    floatingTagTitle: "100% Mayan Flavor",
    floatingTagDesc:
      "Slow-cooked over firewood with fresh local ingredients.",
    eyebrow: "Authentic Gastronomy",
    title: "Traditional Flavors Surrounded by Nature",
    description:
      "Nothing complements a day of adventure better than traditional Yucatecan cuisine. Our cooks from neighboring communities prepare ancestral recipes using freshly nixtamalized corn and pure achiote marinades.",
    ctaText: "Check today's menu via WhatsApp",
    ctaWhatsappMsg:
      "Hi! I would like to see today's restaurant menu and buffet options at El Gran T´Zunun.",
    pillars: [
      {
        title: "Countryside Breakfasts",
        description:
          "Fresh chilaquiles, eggs to order, seasonal fruit, and freshly brewed spiced pot coffee.",
        iconName: "Coffee",
      },
      {
        title: "Regional Buffet",
        description:
          "Slow-roasted cochinita pibil, grilled poc chuc, and traditional pork with black beans.",
        iconName: "Utensils",
      },
      {
        title: "Bonfire Dinners",
        description:
          "Open-air grill, fresh botanical mixology, and artisanal Mayan hot chocolate.",
        iconName: "Flame",
      },
    ],
  },
  conversionBanner: {
    bgAlt: "El Gran T´Zunun Jungle",
    badge: "Reply in under 5 minutes",
    title: "Your adventure begins with a single message!",
    subtitle:
      "Message us directly to answer your questions, reserve your spots, organize school trips, or get custom group package quotes.",
    ctaText: "Message us on WhatsApp now",
    whatsappMsg:
      "Hi! I would like a quote for a family or group package at El Gran T´Zunun.",
  },
  footer: {
    rightsReserved: "All rights reserved.",
    locationTagline:
      "Campeche, Mexico · Nature Reserve & Eco-Adventure Park",
    directContact: "Direct Contact",
    directContactMsg:
      "Hi, I would like contact information and directions to El Gran T´Zunun.",
    location: "Location",
    instagramMsg: "Hi, I would like to follow your news and activities.",
    facebookMsg: "Hi, I saw you on Facebook and would like to know more.",
  },
  floatingWhatsapp: {
    ariaRegion: "Direct WhatsApp contact",
    ariaButton: "Contact El Gran T´Zunun via WhatsApp",
    pillText: "Quote your day here!",
    whatsappMsg:
      "Hi! I would like a quote for my visit to El Gran T´Zunun and to check availability.",
  },
  quickModal: {
    title: "Plan My Visit",
    subtitle: "Book or request a quote with instant reply via WhatsApp",
    closeAria: "Close modal",
    nameLabel: "Your Name",
    namePlaceholder: "E.g. Alex Morgan",
    visitorTierLabel: "Visitor Type",
    categoryLabel: "Category",
    packageLabel: "Experience / Package",
    adultsLabel: "Adults (12+)",
    minorsLabel: "Minors (6–11)",
    under6Label: "Kids (<6)",
    dateLabel: "Tentative Date",
    transportLabel: "Optional Round-Trip Transport",
    notesLabel: "Additional questions or requests (optional)",
    notesPlaceholder:
      "Do you have vegetarian options? Is a deposit required?...",
    estimatedTotalLabel: "Estimated total:",
    submitBtn: "Continue on WhatsApp",
    footerNote:
      "A direct chat will open with our guest service team in Campeche.",
    whatsappTemplate: {
      header: "🌿 *Booking Request - El Gran T´Zunun* 🌿",
      nameLabel: "👤 *Name:*",
      visitorTierLabel: "🌎 *Visitor type:*",
      categoryLabel: "📂 *Category:*",
      packageLabel: "🎟️ *Package:*",
      guestsLabel: "👥 *Guests:*",
      dateLabel: "📅 *Tentative date:*",
      transportLabel: "🚐 *Transport:*",
      guidedRouteLabel: "🧭 *Guided route:*",
      estimatedTotalLabel: "💵 *Estimated total:*",
      notesLabel: "📝 *Notes:*",
      footer: "Could you please confirm availability?",
    },
  },
  pages: {
    common: {
      backToHome: "Back to Home",
    },
    historia: {
      badge: "Mayan Roots & Nature",
      title: "History of El Gran T´Zunun",
      subtitle:
        "A living legacy among ancient cenotes, high rainforest, and the Mayan legend of the hummingbird that gave birth to our nature reserve.",
      legendEyebrow: "The Mayan Legend",
      legendTitle: "Why are we called T´Zunun?",
      legendP1:
        "Ancient Mayan wisdom tells that when the gods created all things on Earth, they assigned a purpose to every animal, tree, and stone. Yet when they finished, they noticed there was no one in charge of carrying thoughts and good wishes from one place to another.",
      legendP2Prefix:
        "So they carved a small jade stone in the shape of an arrow and blew upon it: thus was born",
      legendP2Strong: "T´Zunun (the hummingbird)",
      legendP2Suffix:
        ". Our park honors this messenger of life by protecting its natural habitat and offering every visitor a sanctuary of renewal and joy.",
      missionTitle: "Our Ecological Mission",
      missionDesc:
        "To preserve the biocultural wealth of the Campeche through adventure and relaxation experiences that respect the flora, fauna, and traditions of Mayan communities.",
      statProtectedLabel: "Protected Reserve",
      statBirdSpeciesLabel: "Bird Species",
      timelineEyebrow: "Our Evolution",
      timelineTitle: "From Sacred Trail to Eco-Adventure Park",
      milestones: [
        {
          year: "Ancestral Origins",
          title: "The Sanctuary of the Hummingbird (T´Zunun)",
          description:
            "In the Mayan language, T´Zunun means hummingbird: the sacred messenger of the gods and guardian of good wishes. These lands held ancient trails and waterholes where biodiversity flourished untouched for centuries.",
        },
        {
          year: "Community Conservation",
          title: "Alliance with Guardians of the Jungle",
          description:
            "Local families and herbalist elders united to protect the crystal-clear cenotes and century-old ceiba trees, restoring biological corridors for endemic birds and melipona bees.",
        },
        {
          year: "Birth of the Park",
          title: "Low-Impact Sustainable Adventure",
          description:
            "Panoramic zipline circuits and hanging bridges were respectfully integrated into the natural topography, allowing visitors to admire the green canopy without disrupting its ecological balance.",
        },
        {
          year: "Present & Future",
          title: "Living Heritage of the Peninsula",
          description:
            "Today, El Gran T´Zunun is a benchmark for regenerative ecotourism where adrenaline, family relaxation, and traditional Mayan gastronomy coexist in complete harmony.",
        },
      ],
      ctaTitle: "Be part of our living history",
      ctaDesc:
        "Come walk our trails, swim in sacred waters, and experience the hospitality of El Gran T´Zunun.",
      viewPackagesBtn: "View Packages",
      contactWhatsappBtn: "Contact via WhatsApp",
      whatsappMsg:
        "Hi! I would like to learn more about El Gran T´Zunun and plan my visit.",
    },
    reglamentos: {
      badge: "Safety & Environmental Care",
      title: "Park Rules & Regulations",
      subtitle:
        "To guarantee a 100% safe experience for your family and keep our Mayan ecosystem intact, please follow these guidelines during your visit.",
      categories: [
        {
          title: "Extreme Activities & Zipline Safety",
          rules: [
            "Wearing the helmet, harness, and gloves provided by our certified guides is mandatory throughout the entire circuit.",
            "Maximum weight allowed on ziplines: 115 kg (250 lbs). Minimum recommended age: 6 years old (accompanied by a guardian or guide).",
            "Height activities and Exatlón circuits are not permitted under the influence of alcohol or substances, or for guests with heart conditions, back injuries, or pregnancy.",
            "Long hair must be tied back, and loose objects (cameras without safety straps, keys, or handheld phones) are not allowed.",
          ],
        },
        {
          title: "Cenote & Natural Pools Conservation",
          rules: [
            "Taking a quick rinse at the eco-showers is required before entering the cenote or water mirrors.",
            "The use of sunscreens, tanning oils, chemical repellents, or lotions before entering the water (even biodegradable ones) is strictly prohibited to protect aquifer purity.",
            "Wearing a life jacket is mandatory inside the cenote for all visitors.",
            "Do not touch, step on, or detach stalactites, tree roots, or rock formations.",
          ],
        },
        {
          title: "Flora, Fauna & Community Respect",
          rules: [
            "Respect wildlife (birds, hummingbirds, melipona bees, reptiles): observe them from a distance without feeding or disturbing them.",
            "Removing plants, flowers, stones, or any natural element from the reserve is prohibited.",
            "Single-use plastic-free park (no straws or styrofoam). Please dispose of waste only in the designated sorting bins.",
            "For the safety of local wildlife, pets and loud speakers in rest zones are not permitted.",
          ],
        },
        {
          title: "Park Access, Lodging & Camping Zone",
          rules: [
            "General Daypass hours: Thursday to Sunday from 10:00 AM to 5:00 PM (open every day on holidays, long weekends, and vacations). Room and camping guests enjoy priority access.",
            "Night bonfires are held exclusively in designated fire circles under park staff supervision.",
            "Outside alcoholic beverages and glass containers are not allowed.",
            "After 10:30 PM, moderate quiet is requested in cabin and camping areas to respect guests' rest and the natural sounds of the jungle.",
          ],
        },
      ],
      noticeTitle: "Have questions about any physical or medical requirement?",
      noticeDesc:
        "Our guest care team can guide you before your arrival on which activities are ideal for young children, seniors, or guests with reduced mobility.",
      askGuideBtn: "Ask a Guide",
      whatsappMsg:
        "Hi, I have a question about the park rules and activity requirements at El Gran T´Zunun.",
    },
    certificaciones: {
      badge: "Official Quality & Backing",
      title: "Certifications & Standards",
      subtitle:
        "Your peace of mind and respect for nature are our top priorities. Learn about the technical, environmental, and operational accreditations backing every adventure at El Gran T´Zunun.",
      items: [
        {
          badge: "Official Mexican Standard",
          title: "NOM-09-TUR · Specialized Ecotourism Guides",
          issuer: "Ministry of Tourism (SECTUR)",
          description:
            "All our zipline, interpretive hiking, and water rescue instructors hold valid official accreditation in nature and adventure tourism.",
        },
        {
          badge: "International Standard",
          title: "UIAA & CE Certified Height Equipment",
          issuer: "Structural Inspection & Lifelines",
          description:
            "We use redundant double pulleys, full-body harnesses, helmets, and aircraft-grade steel cables subject to daily preventive maintenance logs and biannual structural inspections.",
        },
        {
          badge: "Sustainability",
          title: "Sustainable Tourism & Conservation Seal",
          issuer: "Responsible Cenote & Jungle Management",
          description:
            "We operate with ecological biodigesters, zero-discharge wastewater treatment, and permanent reforestation and pollinator protection programs.",
        },
        {
          badge: "Health & Hygiene",
          title: "Hygienic Food Handling & First Aid",
          issuer: "Civil Protection & Food Safety",
          description:
            "Our countryside restaurant follows strict food preparation hygiene protocols, and the park maintains a permanent first-aid brigade and immediate response protocols.",
        },
      ],
      ctaTitle:
        "Organizing a school trip, corporate event, or travel agency tour?",
      ctaDesc:
        "We provide schools, companies, and tour operators with our Civil Protection inspection folders, civil liability insurance policies, and safety protocols.",
      requestDossierBtn: "Request Technical Dossier",
      whatsappMsg:
        "Hi, I would like to request certification information and safety protocols for a group visit to El Gran T´Zunun.",
    },
    convenios: {
      badge: "Institutional & Commercial Partnerships",
      title: "Alliances & Partnerships",
      subtitle:
        "We build long-term value relationships with companies, educational institutions, travel agencies, and local communities to multiply the positive impact of ecotourism.",
      requestAgreementBtn: "Request Partnership via WhatsApp",
      programs: [
        {
          title: "Travel Agencies & Tour Operators",
          subtitle: "Commissionable net rates & priority support",
          description:
            "We work hand in hand with receptive agencies, hotels, and concierges across the Yucatán Peninsula. We offer guaranteed allotments, promotional material, and full group logistics.",
          benefits: [
            "Preferential B2B rates & attractive commissions",
            "Complimentary access for certified guides & operators",
            "Instant confirmation & tax invoicing",
          ],
          ctaMessage:
            "Hi, I represent a travel agency/tour operator and would like partnership information with El Gran T´Zunun.",
        },
        {
          title: "Companies, Unions & Team Building",
          subtitle: "Corporate integration & employee benefits",
          description:
            "We design corporate integration days featuring Exatlón-style circuits, collaborative workshops, regional banquets, and permanent Day Pass discounts for your team and their families.",
          benefits: [
            "Discounts with valid corporate ID",
            "Exclusive rental of areas and palapas for events",
            "Guided leadership and teamwork dynamics",
          ],
          ctaMessage:
            "Hi, I am interested in corporate agreements and Team Building packages at El Gran T´Zunun.",
        },
        {
          title: "Schools, Universities & Camps",
          subtitle: "Environmental education & safe field trips",
          description:
            "Educational programs tailored by grade level where students learn about Mayan botany, melipona bee conservation, cenote geology, and community stewardship.",
          benefits: [
            "Complimentary passes for teachers and group coordinators",
            "Guided tours with biological and cultural focus",
            "Packages with transportation and balanced meals",
          ],
          ctaMessage:
            "Hi, I would like a quote for a school field trip or academic agreement at El Gran T´Zunun.",
        },
        {
          title: "Community Alliances & Local Artisans",
          subtitle: "Fair trade & social economy in the region",
          description:
            "Our value chain directly empowers melipona honey producers, traditional cooks, hammock artisans, and neighboring ecotourism cooperatives.",
          benefits: [
            "100% locally sourced gastronomic ingredients",
            "Showcase space for traditional medicine & cacao",
            "Support for dignified employment in Mayan communities",
          ],
          ctaMessage:
            "Hi, I would like to discuss a community or local supplier partnership with El Gran T´Zunun.",
        },
      ],
    },
  },
};
