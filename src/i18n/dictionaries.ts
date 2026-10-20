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
    "Qatar's garage delivery platform. Find a trusted garage in Doha. We pick up your car and bring it back.",
  brandAlt: "Garago",
  langSwitch: "عربي",
  footerLine: "Qatar's garage delivery platform · Doha",
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
    title2: "We'll take it from here.",
    body: "Qatar's garage delivery platform. Tell us where the car is in Doha. A trusted workshop does the work, and we bring it back.",
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
    pickup: "Pick-up & Delivery",
  },
  how: {
    kicker: "How it works",
    title: "From your street to a garage you can trust.",
  },
  steps: [
    {
      n: "01",
      title: "Share where you are",
      body: "Home, the office, or wherever the car is parked in Doha.",
    },
    {
      n: "02",
      title: "Choose a trusted garage",
      body: "See nearby workshops, the work they take, and when they can collect.",
    },
    {
      n: "03",
      title: "We take it from here",
      body: "Pickup, the job, and the drive back. You skip the waiting room.",
    },
  ],
  workHeading: "The work drivers in Doha actually book.",
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
  },
  garagesCount_zero: "No garages",
  garagesCount_one: "{{count}} garage",
  garagesCount_two: "{{count}} garages",
  garagesCount_few: "{{count}} garages",
  garagesCount_many: "{{count}} garages",
  garagesCount_other: "{{count}} garages",
  pickup: {
    kicker: "Pick-up & delivery",
    title: "We come to the car.",
    body: "A Garago van collects it from your door and brings it back when the garage is done. West Bay to Al Waab, the drive is ours.",
  },
  pickupForm: {
    request: "Request pickup",
    change: "Change garage",
    meta: "{{area}} · {{pickup}}",
    sent: "Request sent to {{name}}. They'll confirm a collection window for {{location}}.",
    name: "Your name",
    mobile: "Mobile",
    confirm: "Confirm pickup",
    error: "Enter your name and a mobile number.",
  },
  partners: {
    kicker: "For garages",
    title: "List the workshop. We'll bring the cars.",
    body: "Garago sends drivers who already know what they need. You stay on the tools. We handle pickup and the ride back.",
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
      note: "Pickup along the Corniche and the West Bay towers.",
      pickup: "35 min",
      services: ["Periodic service", "AC", "Brakes"],
    },
    lusail: {
      name: "Lusail Motor Works",
      area: "Lusail",
      note: "Collection across Lusail and Fox Hills.",
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
      note: "Island pickup from Porto Arabia and the towers.",
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
      note: "Downtown collection, returned the same day when the job allows.",
      pickup: "25 min",
      services: ["Inspection", "Periodic service", "AC"],
    },
  },
} satisfies Dictionary

export const ar = {
  metaTitle: "كراجو — سيارتك. كراجاتنا.",
  metaDescription:
    "منصة توصيل الكراجات في قطر. اعثر على كراج موثوق في الدوحة. نستلم سيارتك ونعيدها إليك.",
  brandAlt: "كراجو",
  langSwitch: "EN",
  footerLine: "منصة توصيل الكراجات في قطر · الدوحة",
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
    title2: "والباقي علينا.",
    body: "منصة توصيل الكراجات في قطر. أخبرنا أين السيارة في الدوحة. كراج موثوق ينجز العمل، ونحن نعيدها إليك.",
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
    pickup: "الاستلام والتوصيل",
  },
  how: {
    kicker: "كيف تعمل",
    title: "من شارعك إلى كراج تثق به.",
  },
  steps: [
    {
      n: "٠١",
      title: "أخبرنا أين أنت",
      body: "في البيت، أو المكتب، أو حيث تكون السيارة متوقفة في الدوحة.",
    },
    {
      n: "٠٢",
      title: "اختر كراجاً موثوقاً",
      body: "شاهد الورش القريبة، ما الذي تقبله، ومتى تستطيع الاستلام.",
    },
    {
      n: "٠٣",
      title: "والباقي علينا",
      body: "الاستلام، العمل، ثم إعادة السيارة. بلا غرفة انتظار.",
    },
  ],
  workHeading: "ما يحجزه السائقون في الدوحة فعلاً.",
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
  },
  garagesCount_zero: "لا توجد كراجات",
  garagesCount_one: "كراج واحد",
  garagesCount_two: "كراجان",
  garagesCount_few: "{{count}} كراجات",
  garagesCount_many: "{{count}} كراجاً",
  garagesCount_other: "{{count}} كراج",
  pickup: {
    kicker: "الاستلام والتوصيل",
    title: "نأتي إلى السيارة.",
    body: "فان كراجو يستلمها من بابك ويعيدها عندما ينتهي الكراج. من الخليج الغربي إلى الوعب، المشوار علينا.",
  },
  pickupForm: {
    request: "اطلب الاستلام",
    change: "تغيير الكراج",
    meta: "{{area}} · {{pickup}}",
    sent: "أُرسل الطلب إلى {{name}}. سيؤكدون وقت الاستلام في {{location}}.",
    name: "اسمك",
    mobile: "الجوال",
    confirm: "تأكيد الاستلام",
    error: "أدخل اسمك ورقم الجوال.",
  },
  partners: {
    kicker: "لأصحاب الكراجات",
    title: "سجّل الورشة. ونحن نأتي بالسيارات.",
    body: "كراجو يرسل سائقين يعرفون ما يحتاجونه. أنت تبقى على العمل، ونحن نتولى الاستلام والعودة.",
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
      note: "استلام على الكورنيش وأبراج الخليج الغربي.",
      pickup: "٣٥ دقيقة",
      services: ["صيانة دورية", "تكييف", "فرامل"],
    },
    lusail: {
      name: "ورش لوسيل",
      area: "لوسيل",
      note: "استلام في لوسيل وفوكس هيلز.",
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
      note: "استلام من بورتو أرابيا والأبراج.",
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
      note: "استلام من وسط المدينة، والإعادة في اليوم نفسه حين يسمح العمل.",
      pickup: "٢٥ دقيقة",
      services: ["فحص", "صيانة دورية", "تكييف"],
    },
  },
} satisfies Dictionary
