export const garageIds = [
  "westBay",
  "lusail",
  "alSadd",
  "pearl",
  "alWaab",
  "msheireb",
] as const

export type GarageId = (typeof garageIds)[number]

type GarageCopy = {
  name: string
  area: string
  note: string
  pickup: string
  services: string[]
}

type Dictionary = {
  metaTitle: string
  metaDescription: string
  brandAlt: string
  langSwitch: string
  footerLine: string
  nav: {
    how: string
    services: string
    garages: string
    partners: string
    find: string
    primary: string
    mobile: string
    footer: string
    openMenu: string
    closeMenu: string
    home: string
  }
  hero: {
    tagline: string
    title1: string
    title2: string
    body: string
    location: string
    placeholder: string
    defaultLocation: string
  }
  pillarsHeading: string
  pillars: {
    car: string
    nearby: string
    book: string
    trusted: string
    pickup: string
  }
  how: { kicker: string; title: string }
  steps: { n: string; title: string; body: string }[]
  workHeading: string
  workItems: { title: string; body: string }[]
  districts: {
    industrial: string
    abuHamour: string
    ainKhaled: string
    alBidda: string
    alAziziya: string
  }
  map: {
    service: string
    origin: string
    all: string
    noPin: string
    approximate: string
    clear: string
    demo: string
    zone: string
    view: string
  }
  garagePage: {
    back: string
    verified: string
    unverified: string
    about: string
    hours: string
    services: string
    origins: string
    location: string
    listing: string
    phone: string
    whatsapp: string
    since: string
    bays: string
    languages: string
    languageValue: string
    payments: string
    paymentValue: string
    visit: string
    address: string
    addressPlain: string
    drive: string
    more: string
  }
  places: { doha: string }
  garages: {
    kicker: string
    around: string
    none: string
    emptyTitle: string
    emptyBody: string
    showDoha: string
  }
  garagesCount_zero: string
  garagesCount_one: string
  garagesCount_two: string
  garagesCount_few: string
  garagesCount_many: string
  garagesCount_other: string
  pickup: { kicker: string; title: string; body: string }
  pickupForm: {
    request: string
    change: string
    meta: string
    sent: string
    name: string
    mobile: string
    confirm: string
    error: string
  }
  partners: {
    kicker: string
    title: string
    body: string
    thanks: string
    garageName: string
    area: string
    areaPlaceholder: string
    email: string
    emailPlaceholder: string
    submit: string
    error: string
  }
  garage: Record<GarageId, GarageCopy>
}

export const en = {
  metaTitle: "Garago — Your Car. Our Garages.",
  metaDescription:
    "Find a trusted garage in Doha. Garago links you to the workshop. You take the car there.",
  brandAlt: "Garago",
  langSwitch: "عربي",
  footerLine: "Garages in Doha, linked directly",
  nav: {
    how: "How it works",
    services: "Services",
    garages: "Garages",
    partners: "For garages",
    find: "Find Garages",
    primary: "Primary",
    mobile: "Mobile",
    footer: "Footer",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Garago home",
  },
  hero: {
    tagline: "Your Car. Our Garages.",
    title1: "Find a garage.",
    title2: "We'll link you there.",
    body: "Tell us where you are in Doha. Garago shows trusted workshops and puts you in touch. You take the car there.",
    location: "Your location",
    placeholder: "Doha, Qatar",
    defaultLocation: "Doha, Qatar",
  },
  pillarsHeading: "What Garago does",
  pillars: {
    car: "Car Services",
    nearby: "Nearby Garages",
    book: "Book Appointment",
    trusted: "Trusted Garages",
    pickup: "Direct link",
  },
  how: {
    kicker: "How it works",
    title: "From your search to a garage you can trust.",
  },
  steps: [
    {
      n: "01",
      title: "Share where you are",
      body: "Home, the office, or the part of Doha you want a garage near.",
    },
    {
      n: "02",
      title: "Choose a trusted garage",
      body: "See nearby workshops, the work they do, and how to reach them.",
    },
    {
      n: "03",
      title: "We link you",
      body: "Send your name and number. The garage contacts you. You drive the car there.",
    },
  ],
  workHeading: "The work Doha garages actually do.",
  workItems: [
    {
      title: "Periodic service",
      body: "Oil, filters, and the checks that keep a daily car honest.",
    },
    {
      title: "Air conditioning",
      body: "Cooling that has to work when Doha does not let up.",
    },
    {
      title: "Brakes",
      body: "Pads, discs, and a stop you can trust in traffic.",
    },
    {
      title: "Tires",
      body: "Punctures, replacements, and alignment before a long drive.",
    },
    {
      title: "Battery",
      body: "A dead start, handled without a tow-truck morning.",
    },
    {
      title: "Inspection",
      body: "A clear look at the car before a trip or a sale.",
    },
  ],
  districts: {
    industrial: "Industrial Area",
    abuHamour: "Abu Hamour",
    ainKhaled: "Ain Khaled",
    alBidda: "Al Bidda",
    alAziziya: "Al Aziziya",
  },
  places: { doha: "Doha" },
  garages: {
    kicker: "Nearby garages",
    around: "Garages around {{place}}",
    none: "No garages match that search",
    emptyTitle: "Nothing in “{{area}}” yet.",
    emptyBody: "Try Industrial Area, Abu Hamour, Ain Khaled, or a service.",
    showDoha: "Show Doha garages",
  },
  map: {
    service: "Service",
    origin: "Cars",
    all: "All",
    noPin: "No map pin yet",
    approximate: "Area pin",
    clear: "Clear filters",
    demo: "Demo garages in Doha",
    zone: "Zone {{zone}}",
    view: "View garage",
  },
  garagePage: {
    back: "All garages",
    verified: "Garago verified",
    unverified: "Not verified yet",
    about: "About this garage",
    hours: "Hours",
    services: "Services",
    origins: "Cars they take",
    location: "Location",
    listing: "Public listing",
    phone: "Phone",
    whatsapp: "WhatsApp",
    since: "Since",
    bays: "Work bays",
    languages: "Languages",
    languageValue: "Arabic and English",
    payments: "Payment",
    paymentValue: "Cash, card, transfer",
    visit: "Before you go",
    address: "Zone {{zone}}, {{area}}, Doha",
    addressPlain: "{{area}}, Doha",
    drive:
      "You drive the car to the garage. Garago only makes the introduction.",
    more: "A {{bays}}-bay workshop in {{area}}, working since {{year}}. Ask them about {{services}}, then drive the car over.",
  },
  garagesCount_zero: "No garages",
  garagesCount_one: "{{count}} garage",
  garagesCount_two: "{{count}} garages",
  garagesCount_few: "{{count}} garages",
  garagesCount_many: "{{count}} garages",
  garagesCount_other: "{{count}} garages",
  pickup: {
    kicker: "A direct link",
    title: "We link you to the garage.",
    body: "Garago introduces you to the workshop. You drive the car there, and the garage does the work.",
  },
  pickupForm: {
    request: "Contact this garage",
    change: "Choose another",
    meta: "{{area}} · {{pickup}}",
    sent: "Your details went to {{name}}. They'll contact you. You take the car to them.",
    name: "Your name",
    mobile: "Mobile",
    confirm: "Send to garage",
    error: "Enter your name and a mobile number.",
  },
  partners: {
    kicker: "For garages",
    title: "List the workshop. We'll send people your way.",
    body: "Drivers looking for a garage in Doha find you here and contact you directly. You stay on the tools.",
    thanks: "Thanks. We'll write to {{email}} about listing {{garage}}.",
    garageName: "Garage name",
    area: "Area in Qatar",
    areaPlaceholder: "Al Sadd",
    email: "Email",
    emailPlaceholder: "workshop@garage.qa",
    submit: "List your garage",
    error: "Add the garage name, area, and a real email.",
  },
  garage: {
    westBay: {
      name: "West Bay Auto Care",
      area: "West Bay",
      note: "Workshops along the Corniche and the West Bay towers.",
      pickup: "35 min",
      services: ["Periodic service", "AC", "Brakes"],
    },
    lusail: {
      name: "Lusail Motor Works",
      area: "Lusail",
      note: "Workshops across Lusail and Fox Hills.",
      pickup: "50 min",
      services: ["Tires", "Periodic service", "Battery"],
    },
    alSadd: {
      name: "Al Sadd Garage",
      area: "Al Sadd",
      note: "A short hop from central Doha.",
      pickup: "30 min",
      services: ["Brakes", "Inspection", "AC"],
    },
    pearl: {
      name: "Pearl Service Hub",
      area: "The Pearl",
      note: "Workshops at Porto Arabia and the towers.",
      pickup: "40 min",
      services: ["AC", "Periodic service", "Detailing"],
    },
    alWaab: {
      name: "Al Waab Motors",
      area: "Al Waab",
      note: "Workshop lane just off Al Waab Street.",
      pickup: "45 min",
      services: ["Tires", "Brakes", "Battery"],
    },
    msheireb: {
      name: "Msheireb Workshop",
      area: "Msheireb",
      note: "A downtown workshop for a same-day look when the job allows.",
      pickup: "25 min",
      services: ["Inspection", "Periodic service", "AC"],
    },
  },
} satisfies Dictionary

export const ar = {
  metaTitle: "كراجو — سيارتك. كراجاتنا.",
  metaDescription:
    "اعثر على كراج موثوق في الدوحة. كراجو توصلك بالورشة، وأنت تأخذ السيارة إليها.",
  brandAlt: "كراجو",
  langSwitch: "EN",
  footerLine: "كراجات الدوحة، بوصل مباشر",
  nav: {
    how: "كيف تعمل",
    services: "الخدمات",
    garages: "الكراجات",
    partners: "لأصحاب الكراجات",
    find: "ابحث عن كراج",
    primary: "الرئيسية",
    mobile: "الجوال",
    footer: "التذييل",
    openMenu: "افتح القائمة",
    closeMenu: "أغلق القائمة",
    home: "كراجو، الصفحة الرئيسية",
  },
  hero: {
    tagline: "سيارتك. كراجاتنا.",
    title1: "اعثر على كراج.",
    title2: "ونوصلك إليه.",
    body: "أخبرنا أين أنت في الدوحة. كراجو تعرض الورش الموثوقة وتوصلك بها. أنت تأخذ السيارة إلى هناك.",
    location: "موقعك",
    placeholder: "الدوحة، قطر",
    defaultLocation: "الدوحة، قطر",
  },
  pillarsHeading: "ماذا تقدم كراجو",
  pillars: {
    car: "خدمات السيارة",
    nearby: "كراجات قريبة",
    book: "حجز موعد",
    trusted: "كراجات موثوقة",
    pickup: "وصل مباشر",
  },
  how: {
    kicker: "كيف تعمل",
    title: "من بحثك إلى كراج تثق به.",
  },
  steps: [
    {
      n: "٠١",
      title: "أخبرنا أين أنت",
      body: "في البيت، أو المكتب، أو المنطقة التي تريد كراجاً قريباً منها.",
    },
    {
      n: "٠٢",
      title: "اختر كراجاً موثوقاً",
      body: "شاهد الورش القريبة، ما الذي تعمله، وكيف تتواصل معها.",
    },
    {
      n: "٠٣",
      title: "نوصلك بالكراج",
      body: "أرسل اسمك ورقمك. الكراج يتواصل معك، وأنت تأخذ السيارة إليه.",
    },
  ],
  workHeading: "ما تعمله كراجات الدوحة فعلاً.",
  workItems: [
    {
      title: "صيانة دورية",
      body: "الزيت والفلاتر والفحوصات التي تبقي السيارة اليومية على حالها.",
    },
    {
      title: "التكييف",
      body: "تبريد يصمد حين لا تهدأ الدوحة.",
    },
    {
      title: "الفرامل",
      body: "فحمات وأقراص ووقفة تثق بها في الزحام.",
    },
    {
      title: "الإطارات",
      body: "بنشر، تبديل، وترصيص قبل مشوار طويل.",
    },
    {
      title: "البطارية",
      body: "تشغيل متعثر، بلا صباح انتظار.",
    },
    {
      title: "الفحص",
      body: "نظرة واضحة على السيارة قبل سفر أو بيع.",
    },
  ],
  districts: {
    industrial: "المنطقة الصناعية",
    abuHamour: "أبو هامور",
    ainKhaled: "عين خالد",
    alBidda: "البدع",
    alAziziya: "العزيزية",
  },
  places: { doha: "الدوحة" },
  garages: {
    kicker: "كراجات قريبة",
    around: "كراجات حول {{place}}",
    none: "لا توجد كراجات تطابق هذا البحث",
    emptyTitle: "لا شيء في «{{area}}» بعد.",
    emptyBody:
      "جرّب المنطقة الصناعية، أو أبو هامور، أو عين خالد، أو نوع الخدمة.",
    showDoha: "عرض كراجات الدوحة",
  },
  map: {
    service: "الخدمة",
    origin: "السيارات",
    all: "الكل",
    noPin: "لا يوجد موقع على الخريطة بعد",
    approximate: "موقع المنطقة",
    clear: "مسح التصفية",
    demo: "كراجات تجريبية في الدوحة",
    zone: "منطقة {{zone}}",
    view: "عرض الكراج",
  },
  garagePage: {
    back: "كل الكراجات",
    verified: "موثّق من كراجو",
    unverified: "غير موثّق بعد",
    about: "عن هذا الكراج",
    hours: "ساعات العمل",
    services: "الخدمات",
    origins: "السيارات التي يستقبلها",
    location: "الموقع",
    listing: "الصفحة العامة",
    phone: "الهاتف",
    whatsapp: "واتساب",
    since: "منذ",
    bays: "مسارات العمل",
    languages: "اللغات",
    languageValue: "العربية والإنجليزية",
    payments: "الدفع",
    paymentValue: "نقداً، بطاقة، تحويل",
    visit: "قبل الزيارة",
    address: "منطقة {{zone}}، {{area}}، الدوحة",
    addressPlain: "{{area}}، الدوحة",
    drive: "أنت تقود السيارة إلى الكراج. كراجو تقتصر على التعريف.",
    more: "ورشة من {{bays}} مسارات في {{area}}، تعمل منذ {{year}}. اسألهم عن {{services}}، ثم خذ السيارة إليهم.",
  },
  garagesCount_zero: "لا توجد كراجات",
  garagesCount_one: "كراج واحد",
  garagesCount_two: "كراجان",
  garagesCount_few: "{{count}} كراجات",
  garagesCount_many: "{{count}} كراجاً",
  garagesCount_other: "{{count}} كراج",
  pickup: {
    kicker: "وصل مباشر",
    title: "نوصلك بالكراج.",
    body: "كراجو تعرّفك بالورشة. أنت تقود السيارة إليها، والكراج ينجز العمل.",
  },
  pickupForm: {
    request: "تواصل مع الكراج",
    change: "اختر كراجاً آخر",
    meta: "{{area}} · {{pickup}}",
    sent: "أُرسلت بياناتك إلى {{name}}. سيتواصلون معك، وأنت تأخذ السيارة إليهم.",
    name: "اسمك",
    mobile: "الجوال",
    confirm: "إرسال إلى الكراج",
    error: "أدخل اسمك ورقم الجوال.",
  },
  partners: {
    kicker: "لأصحاب الكراجات",
    title: "سجّل الورشة. ونوصل إليك الناس.",
    body: "من يبحث عن كراج في الدوحة يجدك هنا ويتواصل معك مباشرة. أنت تبقى على العمل.",
    thanks: "شكراً. سنراسل {{email}} بخصوص إدراج {{garage}}.",
    garageName: "اسم الكراج",
    area: "المنطقة في قطر",
    areaPlaceholder: "السد",
    email: "البريد",
    emailPlaceholder: "workshop@garage.qa",
    submit: "سجّل كراجك",
    error: "أضف اسم الكراج والمنطقة وبريداً صحيحاً.",
  },
  garage: {
    westBay: {
      name: "عناية الخليج الغربي",
      area: "الخليج الغربي",
      note: "ورش على الكورنيش وأبراج الخليج الغربي.",
      pickup: "٣٥ دقيقة",
      services: ["صيانة دورية", "تكييف", "فرامل"],
    },
    lusail: {
      name: "ورش لوسيل",
      area: "لوسيل",
      note: "ورش في لوسيل وفوكس هيلز.",
      pickup: "٥٠ دقيقة",
      services: ["إطارات", "صيانة دورية", "بطارية"],
    },
    alSadd: {
      name: "كراج السد",
      area: "السد",
      note: "مسافة قصيرة من وسط الدوحة.",
      pickup: "٣٠ دقيقة",
      services: ["فرامل", "فحص", "تكييف"],
    },
    pearl: {
      name: "مركز خدمة اللؤلؤة",
      area: "اللؤلؤة",
      note: "ورش في بورتو أرابيا والأبراج.",
      pickup: "٤٠ دقيقة",
      services: ["تكييف", "صيانة دورية", "تلميع"],
    },
    alWaab: {
      name: "الوعب موتورز",
      area: "الوعب",
      note: "ورشة على شارع الوعب.",
      pickup: "٤٥ دقيقة",
      services: ["إطارات", "فرامل", "بطارية"],
    },
    msheireb: {
      name: "ورشة مشيرب",
      area: "مشيرب",
      note: "ورشة في وسط المدينة، بنظرة في اليوم نفسه حين يسمح العمل.",
      pickup: "٢٥ دقيقة",
      services: ["فحص", "صيانة دورية", "تكييف"],
    },
  },
} satisfies Dictionary
