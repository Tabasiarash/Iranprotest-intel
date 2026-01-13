import { IntelEvent, EventCategory, SourceType } from '../types';

export const INITIAL_EVENTS: IntelEvent[] = [
  {
    "id": "fc2755ae-560a-44a6-ba14-3cc9b3eaab18",
    "title": "تجمع اعتراضی در هفت‌حوض تهران",
    "summary": "جمعی از شهروندان در پاسخ به فراخوان شاهزاده رضا پهلوی در منطقه هفت‌حوض تهران گرد هم آمدند و شعارهایی علیه علی خامنه‌ای سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Tehran, Tehran Province, Iran",
    "lat": 35.7348,
    "lng": 51.4811,
    "reliabilityScore": 9,
    "reliabilityReason": "گزارش مستند به ویدیوی دریافتی با جزئیات مکانی مشخص.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "protestorCount": 4500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 12,
      "detained": 5
    }
  },
  {
    "id": "290b9059-ab19-413e-8c5a-65ed3f78043a",
    "title": "آتش زدن فرمانداری گرگان",
    "summary": "در جریان اعتراضات گسترده سراسری، گزارش‌ها و ویدیوها نشان‌دهنده به آتش کشیده شدن ساختمان فرمانداری در شهر گرگان است.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Gorgan, Golestan Province, Iran",
    "lat": 36.8433,
    "lng": 54.4403,
    "reliabilityScore": 8,
    "reliabilityReason": "گزارش درگیری‌های شدید و هدف قرار دادن ساختمان‌های دولتی.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "protestorCount": 2000,
    "validationScore": 1,
    "casualties": {
      "dead": 1,
      "injured": 30,
      "detained": 15
    }
  },
  {
    "id": "50e85da8-dccf-4e24-a8c1-c9757fb7f38b",
    "title": "اعتراضات شبانه و شعار جاوید شاه در ساری",
    "summary": "مردم در شهر ساری با حضور در خیابان‌ها شعار «جاوید شاه» سر دادند. محمد تقوی، بازیکن پیشین تیم ملی، این ویدیو را بازنشر کرده است.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Sari, Mazandaran Province, Iran",
    "lat": 36.5633,
    "lng": 53.0601,
    "reliabilityScore": 95,
    "reliabilityReason": "تایید شده توسط شاهدان عینی و ویدیوهای متعدد.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "protestorCount": 1200,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    }
  },
  {
    "id": "9d6f360b-42c5-4e2d-a7cb-b44950f15aa9",
    "title": "آتش زدن موتورسیکلت‌های نیروهای سرکوب در صادقیه",
    "summary": "در محله آریاشهر (صادقیه) تهران، چند دستگاه موتورسیکلت متعلق به نیروهای امنیتی توسط معترضان به آتش کشیده شد.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Sadeghiyeh, Tehran, Iran",
    "lat": 35.7222,
    "lng": 51.3322,
    "reliabilityScore": 9,
    "reliabilityReason": "گزارش ویدیوئی و تایید شاهدان عینی از محل درگیری.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "protestorCount": 3000,
    "validationScore": 1,
    "securityCasualties": {
      "dead": 0,
      "injured": 5
    }
  },
  {
    "id": "1ee73f8b-bb5d-45ab-b54e-79a0bd18348f",
    "title": "شعار جاوید شاه در صادقیه تهران",
    "summary": "معترضان در منطقه صادقیه تهران با تجمع در خیابان‌ها شعار «جاوید شاه» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Sadeghiyeh, Tehran, Iran",
    "lat": 35.7223,
    "lng": 51.3323,
    "reliabilityScore": 9,
    "reliabilityReason": "مستند به ویدیوهای ارسالی شهروندان.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 1500
  },
  {
    "id": "03b7ab28-01d9-4a5d-ba2c-ab9ea3ed2a03",
    "title": "راهپیمایی در بلوار امامت مشهد",
    "summary": "معترضان در بلوار امامت مشهد اقدام به راهپیمایی کرده و شعار «این آخرین نبرده، پهلوی برمی‌گرده» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Mashhad, Razavi Khorasan Province, Iran",
    "lat": 36.3214,
    "lng": 59.5312,
    "reliabilityScore": 9,
    "reliabilityReason": "گزارش ویدیوئی از راهپیمایی در یک بلوار مشخص.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 5500
  },
  {
    "id": "7cd7476d-cb86-417b-a052-8f5a755833ea",
    "title": "درخواست کمک معترض مشهدی از ترامپ و نتانیاهو",
    "summary": "ویدیویی از مشهد نشان می‌دهد یک معترض به زبان انگلیسی از دونالد ترامپ و بنیامین نتانیاهو برای توقف کشتار مردم توسط حکومت درخواست کمک می‌کند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Mashhad, Razavi Khorasan Province, Iran",
    "lat": 36.2972,
    "lng": 59.6067,
    "reliabilityScore": 8,
    "reliabilityReason": "ویدیو انفرادی ضبط شده در محیط شهری مشهد.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 100
  },
  {
    "id": "a14beb9b-9609-47cc-b13a-57f34b28808b",
    "title": "اعتراضات در نظرآباد کرج",
    "summary": "معترضان در شهر نظرآباد کرج در حمایت از فراخوان به خیابان آمدند و شعار «امسال سال خونه، سیدعلی سرنگونه» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Nazarabad, Alborz Province, Iran",
    "lat": 35.9525,
    "lng": 50.6067,
    "reliabilityScore": 8,
    "reliabilityReason": "مستند به ویدیوهای ارسالی از شهروندان در نظرآباد.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 800
  },
  {
    "id": "0f40a34b-4320-46e1-b503-70072f97e02e",
    "title": "مراسم ششمین سالگرد پرواز PS752 در محل سقوط",
    "summary": "خانواده‌های جان‌باختگان هواپیمای اوکراینی ششمین سالگرد سرنگونی این پرواز توسط موشک‌های سپاه را در محل سقوط هواپیما برگزار کردند.",
    "category": "Other",
    "date": "2026-01-08",
    "locationName": "Shahedshahr, Tehran Province, Iran",
    "lat": 35.5333,
    "lng": 51.1167,
    "reliabilityScore": 10,
    "reliabilityReason": "رویداد سالانه و تایید شده توسط خانواده‌های جان‌باختگان.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 400
  },
  {
    "id": "192209bd-05b9-4562-890a-df9b66f56536",
    "title": "شعار مرگ بر دیکتاتور در تبریز",
    "summary": "ویدیوهای منتشر شده نشان می‌دهد معترضان در تبریز به خیابان‌ها آمده و شعار «مرگ بر دیکتاتور» سر می‌دهند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Tabriz, East Azerbaijan Province, Iran",
    "lat": 38.0962,
    "lng": 46.2731,
    "reliabilityScore": 8,
    "reliabilityReason": "گزارش تصویری از حضور خیابانی در تبریز.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 3500
  },
  {
    "id": "c83a0342-a1fe-4c00-a687-53a0d706875c",
    "title": "شلیک به معترضان در مسجدسلیمان",
    "summary": "نیروهای امنیتی در مسجدسلیمان به سوی معترضان تیراندازی کردند. معترضان در واکنش شعار «نترسید، ما همه با هم هستیم» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Masjed Soleyman, Khuzestan Province, Iran",
    "lat": 31.9364,
    "lng": 49.3031,
    "reliabilityScore": 9,
    "reliabilityReason": "ویدیو حاوی صدای شلیک و شعارهای جمعی معترضان.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "protestorCount": 900,
    "validationScore": 1,
    "casualties": {
      "dead": 2,
      "injured": 8,
      "detained": 0
    }
  },
  {
    "id": "eeda2276-fa72-45f4-902e-7a5f8a79859b",
    "title": "قتل حکومتی امیرعلی حیدری کودک ۱۷ ساله در کرمانشاه",
    "summary": "امیرعلی حیدری در ۱۸ دی با شلیک مستقیم در کرمانشاه کشته شد. حکومت برای تحویل پیکر وی ۱ میلیارد تومان مطالبه کرده و خانواده را برای اعلام علت مرگ کذب تحت فشار گذاشته است.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Kermanshah, Kermanshah Province, Iran",
    "lat": 34.3277,
    "lng": 47.0778,
    "reliabilityScore": 100,
    "reliabilityReason": "گزارش ویدیویی از تجمع شهری.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "protestorCount": 4200,
    "validationScore": 1,
    "casualties": {
      "dead": 7,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    }
  },
  {
    "id": "01071cc9-f5aa-4c2c-aec3-16c65e570adc",
    "title": "شعارهای طرفداری از پهلوی در خمین",
    "summary": "معترضان در شهر خمین شعارهای «جاوید شاه» و «این آخرین نبرده، پهلوی برمی‌گرده» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Khomein, Markazi Province, Iran",
    "lat": 33.6421,
    "lng": 50.0789,
    "reliabilityScore": 8,
    "reliabilityReason": "ویدیوهای رسیده به رسانه.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 600
  },
  {
    "id": "d05b2400-3546-4fa6-aa9c-b8bf53c35933",
    "title": "شعارهای استادیومی در نارمک تهران",
    "summary": "در دوازدهمین شب خیزش ملی، مردم در محله نارمک تهران به سبک شعارهای استادیومی فریاد «ایران، ایران» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Narmak, Tehran, Iran",
    "lat": 35.7483,
    "lng": 51.4883,
    "reliabilityScore": 9,
    "reliabilityReason": "تصاویر منتشر شده از محله نارمک در دوازدهمین شب اعتراضات.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 2200
  },
  {
    "id": "4154c107-142c-417a-b5de-713121d2b4f1",
    "title": "اعتراضات در تبریز، محله شهناز",
    "summary": "معترضان در تبریز در پاسخ به فراخوان شاهزاده رضا پهلوی به خیابان‌ها آمدند و شعارهایی از جمله «جاوید شاه»، «مرگ بر دیکتاتور» و «امسال سال خونه، سیدعلی سرنگونه» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Tabriz, East Azerbaijan, Iran",
    "lat": 38.0734,
    "lng": 46.2898,
    "reliabilityScore": 8,
    "reliabilityReason": "گزارش‌های متعدد همراه با ویدیوهای ارسالی از محله‌های مشخص (شهناز) در تبریز.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 2800
  },
  {
    "id": "4c2e0ffe-79c3-4a54-91fe-93c71393f0ce",
    "title": "فریاد آزادی در بلوار کاشانی تهران",
    "summary": "معترضان در شامگاه پنج‌شنبه در بلوار کاشانی تهران تجمع کرده و فریاد آزادی سر دادند. همچنین گزارش شده که معترضان در اطراف یک پل در حال سوختن تجمع کردند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Kashani Boulevard, Tehran, Tehran Province, Iran",
    "lat": 35.7285,
    "lng": 51.3041,
    "reliabilityScore": 8,
    "reliabilityReason": "ویدیوهای متعدد ارسالی که تجمعات و آتش‌سوزی در این نقطه خاص از تهران را تایید می‌کند.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 3100
  },
  {
    "id": "12def119-c324-466f-8235-379f5447256a",
    "title": "اعتراضات شبانه در زاهدان",
    "summary": "شهروندان در زاهدان در شامگاه ۱۸ دی‌ماه به موج جدید اعتراضات سراسری پیوستند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Zahedan, Sistan and Baluchestan, Iran",
    "lat": 29.4963,
    "lng": 60.8629,
    "reliabilityScore": 7,
    "reliabilityReason": "ویدیوهای دریافتی از حضور مردم در خیابان‌های زاهدان.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 6000
  },
  {
    "id": "01a0d360-a5a2-49da-8003-9a238b8b5b98",
    "title": "شعار علیه رهبر جمهوری اسلامی در کرج",
    "summary": "معترضان در کرج با حضور در خیابان‌ها شعار «خامنه‌ای قاتل، زهی خیال باطل» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Karaj, Alborz Province, Iran",
    "lat": 35.8327,
    "lng": 50.9915,
    "reliabilityScore": 7,
    "reliabilityReason": "گزارش‌های تصویری ارسالی از شعارهای شبانه معترضان در کرج.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 4800
  },
  {
    "id": "10bf1a61-d287-4da2-93da-9d80852192ac",
    "title": "آتش زدن بیلبورد قاسم سلیمانی در قیطریه تهران",
    "summary": "در میان جمعیت انبوهی از معترضان در منطقه قیطریه تهران، بیلبورد قاسم سلیمانی به آتش کشیده شد.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Qeytariyeh, Tehran, Tehran Province, Iran",
    "lat": 35.7946,
    "lng": 51.4503,
    "reliabilityScore": 8,
    "reliabilityReason": "ویدیوی مستقیم از لحظه سوختن بیلبورد در میان جمعیت معترض.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 2500
  },
  {
    "id": "eef406e6-86bc-4b39-a075-2754d2a41e21",
    "title": "شعار جاوید شاه در شادآباد تهران",
    "summary": "جمعیت گسترده‌ای از معترضان در منطقه شادآباد تهران تجمع کرده و شعارهای سلطنت‌طلبانه سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Shadabad, Tehran, Tehran Province, Iran",
    "lat": 35.6661,
    "lng": 51.2931,
    "reliabilityScore": 7,
    "reliabilityReason": "ویدیوهای رسیده به رسانه ایران اینترنشنال.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 1800
  },
  {
    "id": "0f6b8a14-d315-4a15-b05e-5c0092caf173",
    "title": "آتش زدن خودروی نیروهای سرکوب در پل ستارخان",
    "summary": "معترضان در پل ستارخان تهران، خودرویی را که در حال رساندن مواد غذایی به نیروهای امنیتی و سرکوب‌گر بود، به آتش کشیدند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Sattarkhan Bridge, Tehran, Tehran Province, Iran",
    "lat": 35.7191,
    "lng": 51.3533,
    "reliabilityScore": 8,
    "reliabilityReason": "گزارش ویدیویی از اقدام تهاجمی علیه خودروی تدارکاتی نیروهای امنیتی.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 2100
  },
  {
    "id": "ad87359e-47d5-40fa-9622-9c773799ac8b",
    "title": "ادامه اعتراضات شبانه در گنبد کاووس",
    "summary": "ویدیوهای منتشر شده حاکی از تداوم اعتراضات مردم در خیابان‌های گنبد کاووس در شامگاه ۱۸ دی است.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Gonbad-e Kavus, Golestan Province, Iran",
    "lat": 37.2501,
    "lng": 55.1672,
    "reliabilityScore": 7,
    "reliabilityReason": "ویدیوهای تایید کننده حضور معترضان در شمال کشور.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 850
  },
  {
    "id": "c0f60b69-010c-4039-befe-5e627636bd9c",
    "title": "تجمع اعتراضی در رامسر",
    "summary": "معترضان در شهر رامسر به خیابان آمده و شعار «جاوید شاه» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Ramsar, Mazandaran Province, Iran",
    "lat": 36.9248,
    "lng": 50.6406,
    "reliabilityScore": 7,
    "reliabilityReason": "ویدیوهای دریافتی از شعاردهی معترضان در رامسر.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 450
  },
  {
    "id": "80ee20cc-9492-4fa0-95ec-93a4219e6d4f",
    "title": "به آتش کشیدن ساختمان فرمانداری در گرگان",
    "summary": "معترضان در شهر گرگان به ساختمان فرمانداری حمله کرده و آن را به آتش کشیدند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Gorgan, Golestan Province, Iran",
    "lat": 36.8456,
    "lng": 54.4393,
    "reliabilityScore": 9,
    "reliabilityReason": "گزارش مستقیم از حمله به یک مرکز دولتی در جریان خیزش سراسری.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 2500
  },
  {
    "id": "c3edc996-12d3-4267-b291-3f72a5640a16",
    "title": "اعتراضات در ماهشهر",
    "summary": "معترضان در ماهشهر در پاسخ به فراخوان شاهزاده رضا پهلوی به خیابان‌ها آمدند و شعارهای ضد حکومتی از جمله «این آخرین نبرده پهلوی برمی‌گرده» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Mahshahr, Khuzestan, Iran",
    "lat": 30.5589,
    "lng": 49.1981,
    "reliabilityScore": 9,
    "reliabilityReason": "فیلم‌های تایید شده توسط شبکه‌های خبری و گزارش‌های مردمی.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 1600
  },
  {
    "id": "eae8c0d8-be49-4700-9217-cd724c1c1ba5",
    "title": "تجمع و درگیری در شهرک دره‌دراز کرمانشاه",
    "summary": "معترضان در محله دره‌دراز کرمانشاه به خیابان آمدند. گزارش‌های تایید نشده و ویدیوهای ارسالی حاکی از کشته شدن دو نفر در جریان این اعتراضات است.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Kermanshah, Kermanshah, Iran",
    "lat": 34.3411,
    "lng": 47.0246,
    "reliabilityScore": 8,
    "reliabilityReason": "ویدیوهای ارسالی از صحنه درگیری و گزارش‌های شاهدان عینی.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "protestorCount": 1100,
    "validationScore": 1,
    "casualties": {
      "dead": 2,
      "injured": 10,
      "detained": 5
    }
  },
  {
    "id": "e9a3622c-effe-4e17-a422-df5815cd354a",
    "title": "شعار «جاوید شاه» در دزفول",
    "summary": "شامگاه پنج‌شنبه ۱۸ دی‌ماه، شهروندان در دزفول به خیابان‌ها آمده و در حمایت از نظام پادشاهی شعار «جاوید شاه» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Dezful, Khuzestan, Iran",
    "lat": 32.3811,
    "lng": 48.4058,
    "reliabilityScore": 9,
    "reliabilityReason": "ویدیوهای منتشر شده از حضور مردم در خیابان.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 1300
  },
  {
    "id": "4aa8bfde-8e4a-47cb-9cd6-bb5248ac5c72",
    "title": "تظاهرات در محدوده نادری اهواز",
    "summary": "معترضان در منطقه نادری اهواز با سر دادن شعارهای «مرگ بر خامنه‌ای» و «جاوید شاه» اعتراض خود را نشان دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Ahvaz, Khuzestan, Iran",
    "lat": 31.3207,
    "lng": 48.6759,
    "reliabilityScore": 9,
    "reliabilityReason": "گزارش‌های متعدد از مرکز شهر اهواز.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 6500
  },
  {
    "id": "4f2f9480-4734-4966-8901-45a1cb725cc3",
    "title": "راهپیمایی معترضان در شهرک آزادی تهران",
    "summary": "صفی از معترضان در شهرک آزادی تهران راهپیمایی کرده و شعار «جاوید شاه» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Tehran, Tehran, Iran",
    "lat": 35.7119,
    "lng": 51.2562,
    "reliabilityScore": 9,
    "reliabilityReason": "مستندات ویدیویی از راهپیمایی شبانه.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 900
  },
  {
    "id": "7cf5bc3f-fbfc-451f-b124-bafb7251995c",
    "title": "تجمع گسترده در گرگان",
    "summary": "جمعیت زیادی از شهروندان در گرگان در پاسخ به فراخوان‌های منتشر شده در خیابان‌های این شهر حاضر شدند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Gorgan, Golestan, Iran",
    "lat": 36.8425,
    "lng": 54.4326,
    "reliabilityScore": 9,
    "reliabilityReason": "فیلم‌های دریافتی از حضور گسترده جمعیت.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 3200
  },
  {
    "id": "53c3d606-127a-4360-ab13-a2dd0f3babc5",
    "title": "راهپیمایی از میدان آزادی به سمت عظیمیه کرج",
    "summary": "معترضان در کرج با شعار «پهلوی بر می‌گرده» از میدان آزادی به سمت منطقه عظیمیه حرکت کردند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Karaj, Alborz, Iran",
    "lat": 35.8347,
    "lng": 51.0101,
    "reliabilityScore": 9,
    "reliabilityReason": "گزارش‌های تصویری از مسیر راهپیمایی.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 4100
  },
  {
    "id": "8714201c-7b49-4c6f-9f7d-0033f35f62df",
    "title": "اعتراضات در هفت‌حوض تهران",
    "summary": "مردم در محله هفت‌حوض تهران به خیابان آمده و شعار «مرگ بر جمهوری اسلامی» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Tehran, Tehran, Iran",
    "lat": 35.7295,
    "lng": 51.4939,
    "reliabilityScore": 9,
    "reliabilityReason": "ویدیوهای ارسالی شهروندان از شرق تهران.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 3300
  },
  {
    "id": "599a6af0-12ea-4790-8e3b-08072c02db5e",
    "title": "تجمع اعتراضی در اسلامشهر",
    "summary": "گروه بزرگی از معترضان در اسلامشهر تجمع کرده و شعار «جاوید شاه» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Eslamshahr, Tehran, Iran",
    "lat": 35.5473,
    "lng": 51.2338,
    "reliabilityScore": 9,
    "reliabilityReason": "ویدیوهای تایید شده از تجمع معترضان.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 2700
  },
  {
    "id": "1b7f6763-b3c2-4fa2-8dba-14239e642655",
    "title": "درگیری مقابل فرمانداری دامغان",
    "summary": "نیروهای حکومتی با شهروندانی که برای اعتراض مقابل فرمانداری دامغان تجمع کرده بودند، درگیر شدند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Damghan, Semnan, Iran",
    "lat": 36.1683,
    "lng": 54.3481,
    "reliabilityScore": 8,
    "reliabilityReason": "گزارش درگیری‌های مستقیم مقابل اماکن سیاسی.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 750
  },
  {
    "id": "f94daaa5-5dab-4b52-96d1-5161ef6270f6",
    "title": "حمله نیروهای امنیتی به معترضان در تاکستان",
    "summary": "در جریان تجمع مقابل فرمانداری تاکستان، نیروهای حکومت به سمت مردم معترض حمله‌ور شدند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Takestan, Qazvin, Iran",
    "lat": 36.0721,
    "lng": 49.7013,
    "reliabilityScore": 8,
    "reliabilityReason": "گزارش‌های میدانی از سرکوب اعتراضات.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 950
  },
  {
    "id": "202c80b6-3490-43ff-88b3-db051d695f6d",
    "title": "تظاهرات و درگیری در آشخانه",
    "summary": "مردم آشخانه در مقابل فرمانداری شعارهای ضد حکومتی سر دادند که منجر به درگیری با ماموران شد.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Ashkhaneh, North Khorasan, Iran",
    "lat": 37.5544,
    "lng": 56.9267,
    "reliabilityScore": 8,
    "reliabilityReason": "گزارش‌های خبری مبنی بر تقابل معترضان و نیروهای امنیتی.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 350
  },
  {
    "id": "15e7d191-26fd-400c-b48e-59ae0f322097",
    "title": "سیل مردم معترض در ونک تهران",
    "summary": "جمعیت بسیار زیادی از معترضان در شامگاه ۱۸ دی در محله ونک تهران اقدام به راهپیمایی کردند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Tehran, Tehran, Iran",
    "lat": 35.7575,
    "lng": 51.41,
    "reliabilityScore": 9,
    "reliabilityReason": "ویدیوهای هوایی و زمینی از تراکم جمعیت.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 8000
  },
  {
    "id": "4c162f95-3f57-4838-b522-8bb455e7e6b6",
    "title": "فریاد آزادی در خیابان کاشانی تهران",
    "summary": "شهروندان معترض در بلوار آیت‌الله کاشانی تهران تجمع کرده و فریاد آزادی سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Tehran, Tehran, Iran",
    "lat": 35.7247,
    "lng": 51.3051,
    "reliabilityScore": 9,
    "reliabilityReason": "ویدیوهای ضبط شده توسط ساکنان محله.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 2400
  },
  {
    "id": "ef2b8ee2-ecc4-48d1-8a20-8afe8562fc33",
    "title": "پیوستن مردم زاهدان به اعتراضات شبانه",
    "summary": "شهروندان زاهدانی در شامگاه پنجشنبه به اعتراضات سراسری پیوسته و در خیابان‌ها حاضر شدند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Zahedan, Sistan and Baluchestan, Iran",
    "lat": 29.4963,
    "lng": 60.8629,
    "reliabilityScore": 9,
    "reliabilityReason": "گزارش‌های تصویری از اعتراضات در سیستان و بلوچستان.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 7000
  },
  {
    "id": "dbc7179d-3273-4b1e-94cf-d5785c0fd6d7",
    "title": "تجمع در ستارخان تهران",
    "summary": "جمعیتی از مردم در محله ستارخان تهران شعار «این آخرین نبرده، پهلوی برمی‌گرده» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Tehran, Tehran, Iran",
    "lat": 35.7153,
    "lng": 51.3644,
    "reliabilityScore": 9,
    "reliabilityReason": "ویدیوهای دریافتی از معترضان در غرب تهران.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 3500
  },
  {
    "id": "357c4fc2-a3f1-41ed-b965-13ee1068efdc",
    "title": "اعتراضات در ملکشاهی",
    "summary": "جوانان و شهروندان در ملکشاهی در حمایت از خیزش ملی و در پاسخ به فراخوان‌ها به خیابان آمدند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Melkshahi, Ilam, Iran",
    "lat": 33.3611,
    "lng": 46.4022,
    "reliabilityScore": 7,
    "reliabilityReason": "ذکر نام شهر توسط ورزشکاران ملی به عنوان کانون درگیری و اعتراض.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 400
  },
  {
    "id": "8fcc0fc1-38e4-4b31-897b-17d30a5eb280",
    "title": "خیزش مردمی در آبدانان",
    "summary": "گزارش‌ها حاکی از حضور جوانان آبدانانی در خیابان‌ها و تداوم اعتراضات علیه جمهوری اسلامی است.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Abdanan, Ilam, Iran",
    "lat": 32.9926,
    "lng": 47.4198,
    "reliabilityScore": 7,
    "reliabilityReason": "گزارش‌های تایید کننده حضور میدانی مردم در شهرهای استان ایلام.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 600
  },
  {
    "id": "32733c26-feb9-4582-9774-31a1524c5618",
    "title": "توقف فعالیت باشگاه برق شیراز در فضای مجازی",
    "summary": "صفحه اینستاگرام باشگاه برق شیراز، یکی از قدیمی‌ترین باشگاه‌های فوتبال ایران، در حمایت از خیزش ملی و در همدلی با وضعیت معیشتی مردم، توقف فعالیت‌های خود را در فضای مجازی اعلام کرد.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Shiraz, Fars, Iran",
    "lat": 29.591768,
    "lng": 52.583698,
    "reliabilityScore": 9,
    "reliabilityReason": "گزارش مستقیم از بیانیه رسمی منتشر شده در صفحه اینستاگرام باشگاه.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 0
  },
  {
    "id": "ff3897e0-1f30-4d05-bd81-a5a6875c50d2",
    "title": "اعتراضات خیابانی در الیگودرز",
    "summary": "گروهی از معترضان در الیگودرز استان لرستان عصر پنجشنبه ۱۸ دی‌ماه برای برپایی اعتراضات در خیابان حضور یافتند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Aligudarz, Lorestan, Iran",
    "lat": 33.400556,
    "lng": 49.695,
    "reliabilityScore": 8,
    "reliabilityReason": "استناد به ویدیوهای ارسالی به رسانه‌های خبری.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 700
  },
  {
    "id": "12110867-e476-4ef3-958a-f409b792ff9e",
    "title": "تجمع اعتراضی در پره‌سر گیلان",
    "summary": "شماری از شهروندان در پره‌سر گیلان به خیابان آمدند و شعارهایی از جمله «جاوید شاه» و «پهلوی برمی‌گرده» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Pareh Sar, Gilan, Iran",
    "lat": 37.603014,
    "lng": 49.067316,
    "reliabilityScore": 8,
    "reliabilityReason": "گزارش مبتنی بر ویدیوهای مستند از شعارهای معترضان.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 200
  },
  {
    "id": "dd922f95-6dcb-4895-b323-347b2a9c3ae5",
    "title": "تظاهرات در منطقه شریعتی تهران",
    "summary": "گروهی از معترضان در خیابان شریعتی تهران در واکنش به فراخوان شاهزاده رضا پهلوی به خیابان آمدند و شعارهای حمایتی سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Shariati Street, Tehran, Iran",
    "lat": 35.7533,
    "lng": 51.4428,
    "reliabilityScore": 8,
    "reliabilityReason": "ویدیوهای تایید شده از حضور میدانی معترضان در پایتخت.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 2600
  },
  {
    "id": "2caa58f2-a322-495e-a807-f670dfba0f62",
    "title": "حضور معترضان در خیابان‌های رباط‌کریم",
    "summary": "ویدیوهای رسیده نشان می‌دهد که شامگاه پنج‌شنبه شهروندان معترض در رباط‌کریم به خیابان آمدند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Robat Karim, Tehran, Iran",
    "lat": 35.4846,
    "lng": 51.0829,
    "reliabilityScore": 7,
    "reliabilityReason": "گزارش‌های تصویری از تجمعات شامگاهی.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 900
  },
  {
    "id": "28eae7d1-4642-43be-9180-f25b474ec041",
    "title": "اعتراضات در گوهردشت کرج",
    "summary": "شماری از شهروندان در گوهردشت کرج در پاسخ به فراخوان‌های منتشر شده عصر پنجشنبه به خیابان‌ها آمدند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Gohardasht, Alborz, Iran",
    "lat": 35.845,
    "lng": 50.9791,
    "reliabilityScore": 8,
    "reliabilityReason": "ویدیوهای متعدد از حضور جمعیت در کرج.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 3800
  },
  {
    "id": "2734f0fc-a6e3-4ebd-800a-42e0988e8dbc",
    "title": "سیل عظیم معترضان در رشت",
    "summary": "در پی فراخوان سراسری، جمعیت بزرگی از معترضان شامگاه پنج‌شنبه در رشت به خیابان‌ها آمده و با بستن مسیرها شعار «مرگ بر دیکتاتور» سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Rasht, Gilan, Iran",
    "lat": 37.280834,
    "lng": 49.583057,
    "reliabilityScore": 9,
    "reliabilityReason": "گزارش‌های مکرر و ویدیوهای نشان‌دهنده جمعیت چشمگیر.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 6200
  },
  {
    "id": "17fb038b-e92d-4bc1-9095-796a82f192c6",
    "title": "تجمع اعتراضی در منطقه قلهک تهران",
    "summary": "گروهی از معترضان در منطقه قلهک تهران با شعار «پهلوی برمی‌گرده» به خیابان آمدند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Gholhak, Tehran, Iran",
    "lat": 35.7725,
    "lng": 51.4397,
    "reliabilityScore": 8,
    "reliabilityReason": "شواهد ویدیویی از محله‌های شمال تهران.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 1400
  },
  {
    "id": "53a1225c-aa7a-45f2-b281-ceed7751394a",
    "title": "شعارهای شبانه از خانه‌ها در کرمانشاه",
    "summary": "شهروندان در کرمانشاه شامگاه پنجشنبه از داخل خانه‌های خود شعارهایی علیه حکومت سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Kermanshah, Kermanshah, Iran",
    "lat": 34.3142,
    "lng": 47.065,
    "reliabilityScore": 7,
    "reliabilityReason": "ویدیوهای ضبط شده از طنین شعارها در فضای شهر.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 0
  },
  {
    "id": "1f9c119b-8a4c-4d95-975b-bffe43896938",
    "title": "اعتراضات مردم دامغان",
    "summary": "معترضان در دامغان با سر دادن شعار «این آخرین نبرده، پهلوی برمی‌گرده» در خیابان‌ها تجمع کردند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Damghan, Semnan, Iran",
    "lat": 36.1646,
    "lng": 54.3576,
    "reliabilityScore": 8,
    "reliabilityReason": "گزارش مستند ویدیویی از شعارهای سیاسی در شهر.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 500
  },
  {
    "id": "889784ac-b210-4b1b-aa07-293a0d4d8ab2",
    "title": "حضور گسترده در بلوار وکیل‌آباد مشهد",
    "summary": "شهروندان مشهدی از عصر پنجشنبه ۱۸ دی‌ماه در واکنش به فراخوان‌ها حضور گسترده‌ای در بلوار وکیل‌آباد داشتند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Vakilabad Boulevard, Mashhad, Iran",
    "lat": 36.33,
    "lng": 59.48,
    "reliabilityScore": 8,
    "reliabilityReason": "ویدیوهای ارسالی حاکی از تمرکز معترضان در این بلوار اصلی.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 6000
  },
  {
    "id": "544bf563-4036-44c5-878a-0ea79127e625",
    "title": "تیراندازی نیروهای سرکوبگر در دره‌دراز کرمانشاه",
    "summary": "معترضان در شهرک دره‌دراز کرمانشاه به خیابان آمدند. در ویدیوهای منتشر شده صدای تیراندازی نیروهای حکومتی شنیده می‌شود.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Darreh Deraz, Kermanshah, Iran",
    "lat": 34.308159,
    "lng": 47.05732,
    "reliabilityScore": 8,
    "reliabilityReason": "شواهد ویدیویی حاوی صدای درگیری و تیراندازی.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "protestorCount": 800,
    "validationScore": 1,
    "casualties": {
      "dead": 1,
      "injured": 5,
      "detained": 2
    }
  },
  {
    "id": "4b4a3c9c-805b-4c34-b3b4-6ce9489b0715",
    "title": "مسدود کردن چهارراه طالقانی تهران",
    "summary": "معترضان شامگاه ۱۸ دی‌ماه چهارراه طالقانی تهران را بسته و شعارهای تندی علیه رهبر جمهوری اسلامی سر دادند.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Taleghani Crossroads, Tehran, Iran",
    "lat": 35.7036,
    "lng": 51.4116,
    "reliabilityScore": 8,
    "reliabilityReason": "گزارش مستقیم از بستن معابر اصلی پایتخت.",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "validationScore": 1,
    "protestorCount": 2800
  },
  {
    "id": "f0d49eba-eb41-4cd5-83f5-c16f60dbee96",
    "title": "Netanyahu on Iranian Internal Developments",
    "summary": "Israeli Prime Minister Benjamin Netanyahu stated Israel does not intend to intervene in Iran's internal developments, while criticizing the Republic for spending billions on proxies instead of its people's needs.",
    "category": "Political",
    "date": "2026-01-10",
    "locationName": "Israel",
    "lat": 31.0461,
    "lng": 34.8516,
    "reliabilityScore": 8,
    "sourceId": "315388",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "caca3eab-6c77-4e77-90fc-1f646452a81d",
    "title": "Nationwide Internet Shutdown and Civil Unrest",
    "summary": "گزارش‌ها حاکی از کشته شدن دست‌کم ۱۲ هزار نفر در جریان اعتراضات و انقلاب ملی ایرانیان علیه جمهوری اسلامی است که عمدتاً در شب‌های ۱۸ و ۱۹ دی‌ماه رخ داده است. رضا قاسمی، المپین ایرانی، این وقایع را جنایت علیه بشریت توصیف کرده است.\n[AI VISION VERIFICATION]: تصویر یک طرح گرافیکی خبری است که رضا قاسمی، دونده ایرانی، را در نمای نزدیک نشان می‌دهد. او یک پیراهن یقه‌دار (پلوشرت) تیره به تن دارد و کوله‌پشتی بر دوش انداخته است. در پس‌زمینه، حدود ۳ نفر دیگر به صورت محو دیده می‌شوند که به نظر می‌رسد در یک محیط ورزشی حضور دارند. هیچ‌گونه سلاح، لباس فرم نظامی یا تجهیزات ضدشورش در تصویر مشاهده نمی‌شود. این تصویر صحنه‌ای از اعتراضات خیابانی نیست، بلکه یک عکس آرشیوی از ورزشکار است که روی آن متنی اعتراضی درج شده است.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Iran",
    "lat": 32.4279,
    "lng": 53.688,
    "reliabilityScore": 85,
    "sourceId": "315390",
    "protestorCount": 2000000,
    "validationScore": 1,
    "casualties": {
      "dead": 12000,
      "injured": 0,
      "detained": 100
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "isCrowdResult": true
  },
  {
    "id": "fc157a2f-d1d2-4e93-b0be-970a52c40615",
    "title": "خیزش سراسری و اعتراضات میلیونی در پاسخ به فراخوان شاهزاده رضا پهلوی",
    "summary": "میلیون‌ها نفر از مردم در تهران و بسیاری از شهرهای کشور برای دومین شب متوالی به خیابان‌ها آمده و شعارهایی علیه حکومت و در حمایت از شاهزاده رضا پهلوی سر دادند. گزارش‌ها حاکی از حضور گسترده‌تر جمعیت نسبت به شب اول است.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Ponek, Tehran, Iran",
    "lat": 35.76,
    "lng": 51.34,
    "reliabilityScore": 95,
    "sourceId": "315391",
    "protestorCount": 1000000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "8851fd1e-9c78-4a21-9d35-efc050dc92c2",
    "title": "Arson Attack on Basij Base in Gisha",
    "summary": "Protesters reportedly set fire to a Basij paramilitary base located within a mosque in the Gisha neighborhood of Tehran.",
    "category": "Civil Unrest",
    "date": "2026-01-10",
    "locationName": "Gisha, Tehran, Iran",
    "lat": 35.726,
    "lng": 51.378,
    "reliabilityScore": 8,
    "sourceId": "315392",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "711c41fc-b5cf-4daf-9d2c-81b6ab9e768a",
    "title": "Clashes and Fires in Pol-e Rumi",
    "summary": "Protest-related fires and smoke were observed in the Pol-e Rumi area of Tehran as citizens continued to occupy streets on Friday night.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Pol-e Rumi, Tehran, Iran",
    "lat": 35.783,
    "lng": 51.442,
    "reliabilityScore": 8,
    "sourceId": "315393",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "f3d03b2e-3bba-431e-960d-5f416af8f763",
    "title": "Solidarity Protest in Brussels",
    "summary": "Iranian residents of Brussels gathered in front of the Islamic Republic embassy to show support for the ongoing national revolution in Iran.",
    "category": "Civil Unrest",
    "date": "2026-01-10",
    "locationName": "Brussels, Belgium",
    "lat": 50.8503,
    "lng": 4.3517,
    "reliabilityScore": 9,
    "sourceId": "315395",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "f223031c-fe8a-4223-be2a-f237f6a94634",
    "title": "Solidarity Protest in Berlin",
    "summary": "Yulia Klöckner, President of the German Parliament, condemned the Iranian government for killing protesters and restricting internet access, stating that the people deserve support for their fight for basic rights.",
    "category": "Political",
    "date": "2026-01-10",
    "locationName": "Berlin, Germany",
    "lat": 52.52,
    "lng": 13.405,
    "reliabilityScore": 9,
    "sourceId": "315401",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "232f3d1e-51e3-4b81-9f6a-84599d64955e",
    "title": "Reported Killing of Protesters and Call for General Strike",
    "summary": "UK Foreign Secretary Yvette Cooper and the foreign ministers of Australia and Canada issued statements condemning the killing of Iranian protesters and supporting the right to peaceful protest.",
    "category": "Political",
    "date": "2026-01-10",
    "locationName": "London, UK",
    "lat": 51.5074,
    "lng": -0.1278,
    "reliabilityScore": 9,
    "sourceId": "315405",
    "protestorCount": 5000,
    "validationScore": 1,
    "casualties": {
      "dead": 1,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "13af0a76-3a50-4eec-b8e8-0656ff069367",
    "title": "Solidarity Protest in Stockholm",
    "summary": "Protests were held in Stockholm by the Iranian community to reflect the ongoing civil unrest and strikes occurring within Iran.",
    "category": "Civil Unrest",
    "date": "2026-01-10",
    "locationName": "Stockholm, Sweden",
    "lat": 59.3293,
    "lng": 18.0686,
    "reliabilityScore": 9,
    "sourceId": "315404",
    "protestorCount": 800,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "acebaacf-4869-421f-9e50-a458b856d1f4",
    "title": "Solidarity Protest in Cologne",
    "summary": "A gathering was organized by Iranians in Cologne, Germany, in support of the 'National Revolution' and against government violence in Iran.",
    "category": "Civil Unrest",
    "date": "2026-01-10",
    "locationName": "Cologne, Germany",
    "lat": 50.9375,
    "lng": 6.9603,
    "reliabilityScore": 9,
    "sourceId": "315406",
    "protestorCount": 600,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "f3858198-5411-4c4c-8390-7a7b72a9206d",
    "title": "Nationwide Internet Shutdown in Iran",
    "summary": "Citizens in various cities have begun systematically destroying and removing Islamic Republic symbols from public spaces as part of the ongoing uprising.",
    "category": "Civil Unrest",
    "date": "2026-01-10",
    "locationName": "Iran",
    "lat": 32.4279,
    "lng": 53.688,
    "reliabilityScore": 10,
    "sourceId": "315397",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "c31aea68-df18-49fd-a3c2-329db22b7820",
    "title": "Protest in Heravi Square, Tehran",
    "summary": "People gathered in Heravi Square, Tehran, on Friday night, chanting 'Javid Shah' (Long Live the King).",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Heravi Square, Tehran, Iran",
    "lat": 35.7592,
    "lng": 51.4811,
    "reliabilityScore": 8,
    "sourceId": "315367",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "75524ade-77bb-498a-9444-2b7a89a93765",
    "title": "Shopkeeper Strike in Shiraz",
    "summary": "Business owners in Shiraz continued their strike with shops remaining closed on Saturday.",
    "category": "Civil Unrest",
    "date": "2026-01-10",
    "locationName": "Shiraz, Iran",
    "lat": 29.5918,
    "lng": 52.5837,
    "reliabilityScore": 8,
    "sourceId": "315368",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "8a41911c-bb91-41ef-8222-8b64986714cf",
    "title": "State Media Threats Against Athletes and Clubs",
    "summary": "Fars News Agency, linked to the IRGC, called for harsh action against athlete Voria Ghafuri, boxer Ali Habibinezhad, and the Bargh Shiraz club for supporting the national protest call.",
    "category": "Civil Unrest",
    "date": "2026-01-10",
    "locationName": "Tehran, Iran",
    "lat": 35.6892,
    "lng": 51.389,
    "reliabilityScore": 9,
    "sourceId": "315370",
    "protestorCount": 50,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "9cd4642d-98ab-4408-94eb-0508070a3a89",
    "title": "Massive Protest in Sattarkhan, Tehran",
    "summary": "A large crowd gathered in the Sattarkhan neighborhood of Tehran on Friday night, chanting 'Javid Shah'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Sattarkhan, Tehran, Iran",
    "lat": 35.7144,
    "lng": 51.3614,
    "reliabilityScore": 9,
    "sourceId": "315376",
    "protestorCount": 4000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "29db8389-b236-475b-bfc9-3f6f1f79152f",
    "title": "Protest in Yazd",
    "summary": "Protesters in Yazd gathered on Friday evening, chanting slogans against the Supreme Leader including 'This is the year of blood, Seyyed Ali [Khamenei] will be overthrown.'",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Yazd, Iran",
    "lat": 31.8974,
    "lng": 54.3569,
    "reliabilityScore": 8,
    "sourceId": "315377",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "a9b4888d-a687-4e43-b6bb-e00daa8c423d",
    "title": "Clashes in Nezamabad, Tehran",
    "summary": "Protestors in the Nezamabad area of Tehran resisted security forces who were opening fire on Friday night.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Nezamabad, Tehran, Iran",
    "lat": 35.717,
    "lng": 51.46,
    "reliabilityScore": 9,
    "sourceId": "315379",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "2ae9f813-983e-4aec-beba-c9b53e9dd6bc",
    "title": "Protest in Dezashib, Tehran",
    "summary": "Protestors in Dezashib, Tehran, gathered on Friday night shouting 'Freedom'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Dezashib, Tehran, Iran",
    "lat": 35.8071,
    "lng": 51.4402,
    "reliabilityScore": 8,
    "sourceId": "315383",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "3fc47adc-f38f-401a-ae9e-99b005815ae5",
    "title": "Street Protest in Mahdasht, Alborz",
    "summary": "Protestors in Mahdasht lit fires in the streets and chanted slogans predicting the return of the Pahlavi family.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Mahdasht, Alborz, Iran",
    "lat": 35.7317,
    "lng": 50.8122,
    "reliabilityScore": 8,
    "sourceId": "315385",
    "protestorCount": 200,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "d1931042-f78d-44ed-89f1-07f4bdc26849",
    "title": "Protest in Golbarg, Tehran",
    "summary": "Protesters gathered in the Golbarg neighborhood of Tehran on Friday evening, chanting slogans in support of the Pahlavi family and calling it 'the last battle'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Golbarg, Tehran, Iran",
    "lat": 35.733,
    "lng": 51.503,
    "reliabilityScore": 7,
    "sourceId": "315346",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "7cf0afcb-4978-4485-ad7d-b8970d5d1650",
    "title": "Protests in Mashhad",
    "summary": "Large crowds in Mashhad took to the streets, lighting fires and chanting for national unity. Protesters reportedly confronted security forces, shouting 'Dishonorable' at them.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Mashhad, Iran",
    "lat": 36.297,
    "lng": 59.606,
    "reliabilityScore": 8,
    "sourceId": "315347",
    "protestorCount": 4000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 1,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "83430127-478f-4c35-bae8-2b16ef7a0b66",
    "title": "Political Speech by Rahim-Pour Azghadi",
    "summary": "Hassan Rahim-Pour Azghadi, a member of the Supreme Council of the Cultural Revolution, made inflammatory remarks in Mashhad regarding Donald Trump and the Islamic Republic's foreign policy stance.",
    "category": "Political",
    "date": "2026-01-09",
    "locationName": "Mashhad, Iran",
    "lat": 36.297,
    "lng": 59.606,
    "reliabilityScore": 7,
    "sourceId": "315348",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "d52579bd-984a-444f-8139-2b990c6381e8",
    "title": "Protest in Shahr-e Babak",
    "summary": "Protesters in Shahr-e Babak, Kerman province, lit fires in the streets and chanted slogans calling for the overthrow of Ali Khamenei.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Shahr-e Babak, Kerman, Iran",
    "lat": 30.116,
    "lng": 55.118,
    "reliabilityScore": 7,
    "sourceId": "315349",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "2ade189e-f082-48d7-83ce-a1d622ac23dd",
    "title": "Protest in Karaj",
    "summary": "Protesters gathered in Karaj and Eram Boulevard chanting pro-monarchy slogans such as 'The Pahlavi will return' and 'Reza Reza Pahlavi'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Karaj, Iran",
    "lat": 35.832,
    "lng": 50.991,
    "reliabilityScore": 8,
    "sourceId": "315350",
    "protestorCount": 4000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "ae23ffd3-f911-45d7-9fac-20e28c771190",
    "title": "Ali Larijani Reacts to Media Coverage",
    "summary": "The leaders of Germany, France, and the UK issued a joint statement condemning the violence of the Islamic Republic against protesters and expressed concern over the killing of demonstrators.",
    "category": "Military",
    "date": "2026-01-09",
    "locationName": "Tehran, Iran",
    "lat": 35.689,
    "lng": 51.389,
    "reliabilityScore": 10,
    "sourceId": "315351",
    "protestorCount": 2000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 10,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "a3295987-b543-4229-ba5d-96a0de771b49",
    "title": "Protest in Lamerd",
    "summary": "Protesters in Lamerd, Fars province, gathered on Friday evening chanting 'Death to the dictator'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Lamerd, Fars, Iran",
    "lat": 27.334,
    "lng": 53.178,
    "reliabilityScore": 7,
    "sourceId": "315355",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "0b631d72-79a9-4690-82b5-13cfbd758887",
    "title": "Protest Graffiti in Chalous",
    "summary": "Protesters in Chalous used wall graffiti to write 'Javid Shah' (Long Live the King) during the Friday evening protests.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Chalous, Mazandaran, Iran",
    "lat": 36.655,
    "lng": 51.42,
    "reliabilityScore": 7,
    "sourceId": "315356",
    "protestorCount": 50,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "2b24f90b-66c0-408f-b056-9a7189eb3218",
    "title": "Arson Attack on Commercial Building in Amol",
    "summary": "A large crowd in Amol took to the streets on Friday evening, chanting 'Death to the dictator' as part of the nationwide demonstrations.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Amol, Mazandaran, Iran",
    "lat": 36.467,
    "lng": 52.35,
    "reliabilityScore": 8,
    "sourceId": "315362",
    "protestorCount": 3000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "31961127-f19b-4bca-abaf-bc8629794641",
    "title": "Protest in Dolat Neighborhood, Tehran",
    "summary": "Citizens in the Dolat neighborhood of Tehran gathered on Friday night to chant for 'Freedom'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Dolat, Tehran, Iran",
    "lat": 35.772,
    "lng": 51.442,
    "reliabilityScore": 7,
    "sourceId": "315364",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "19b1021a-d8b7-4395-a912-b2b6cf197fbe",
    "title": "Protest on Keshavarz Boulevard, Tehran",
    "summary": "Protesters on Keshavarz Boulevard in Tehran chanted anti-regime slogans, including 'This is the year of blood, Seyyed Ali will be overthrown'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Keshavarz Boulevard, Tehran, Iran",
    "lat": 35.71,
    "lng": 51.398,
    "reliabilityScore": 7,
    "sourceId": "315366",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "067e496c-0736-4f9d-8af2-0d973d0cb0da",
    "title": "Massive Protest in Punak, Tehran",
    "summary": "A massive crowd of citizens gathered in the Punak district of Tehran, lighting fires and chanting pro-monarchy slogans including 'This is the last battle, Pahlavi returns.'",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Punak, Tehran, Iran",
    "lat": 35.7631,
    "lng": 51.3414,
    "reliabilityScore": 8,
    "sourceId": "315324",
    "protestorCount": 4000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "9ba281a5-9495-4c42-abbe-3e0c232f5da7",
    "title": "Anti-Government Demonstration in Valiasr, Tabriz",
    "summary": "Large numbers of citizens in Tabriz gathered on Valiasr Street, lighting fires and chanting 'Death to the dictator' and slogans against the Supreme Leader.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Valiasr Street, Tabriz, Iran",
    "lat": 38.0772,
    "lng": 46.3351,
    "reliabilityScore": 8,
    "sourceId": "315325",
    "protestorCount": 4000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "2678ccf0-4705-4145-bdf2-dc9ec9b380d8",
    "title": "Protest at Haft-e Howz Square",
    "summary": "Protesters in the Madaen area of Tehran chanted 'Long Live the King' and slogans supporting the return of the Pahlavi dynasty.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Madaen, Tehran, Iran",
    "lat": 35.7322,
    "lng": 51.4828,
    "reliabilityScore": 9,
    "sourceId": "315326",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "be521fdd-3abf-4cb2-9edc-0e9a3b624f2b",
    "title": "Large Scale Protest in Vakilabad, Mashhad",
    "summary": "A massive flood of protesters filled Vakilabad Boulevard following a call by Reza Pahlavi, chanting anti-clerical slogans such as 'Until the mullah is not shrouded, this homeland will not be a homeland.'",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Vakilabad Boulevard, Mashhad, Iran",
    "lat": 36.3267,
    "lng": 59.4891,
    "reliabilityScore": 9,
    "sourceId": "315345",
    "protestorCount": 5000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "585036ee-6fd7-4859-9a9d-2d4d13c4b88b",
    "title": "Violent Suppression of Protests in Islamshahr",
    "summary": "Security forces used tear gas and direct fire to disperse crowds gathered in Islamshahr who were chanting pro-Pahlavi slogans.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Islamshahr, Iran",
    "lat": 35.5562,
    "lng": 51.2295,
    "reliabilityScore": 8,
    "sourceId": "315330",
    "protestorCount": 1000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 5,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "d54097aa-1a00-4d10-8911-1b5d8e5dd44d",
    "title": "Protest in Shiraz",
    "summary": "Protesters gathered in Shiraz chanting 'This is the last battle'; subsequent reports showed injured protesters being treated in a local medical facility.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Shiraz, Iran",
    "lat": 29.5918,
    "lng": 52.5837,
    "reliabilityScore": 9,
    "sourceId": "315331",
    "protestorCount": 4000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 10,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "2cc56197-5078-41a0-9f2d-c81c0c44bdeb",
    "title": "Anti-Government Protest in Haft-Hoz, Tehran",
    "summary": "Citizens gathered in the Haft-Hoz neighborhood of Tehran to shout 'Death to Khamenei' during evening protests.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Haft-Hoz, Tehran, Iran",
    "lat": 35.735,
    "lng": 51.484,
    "reliabilityScore": 8,
    "sourceId": "315337",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "569d6258-5f40-4891-9e13-454778642471",
    "title": "Pro-Monarchy Gathering in Sattarkhan, Tehran",
    "summary": "People gathered on Sattarkhan Street in Tehran, chanting 'Long Live the King' as part of the nationwide evening unrest.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Sattarkhan Street, Tehran, Iran",
    "lat": 35.7144,
    "lng": 51.3551,
    "reliabilityScore": 8,
    "sourceId": "315343",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "59f360ff-f4fe-4fc5-85e7-868ff6e6ce44",
    "title": "Large Protest in Isfahan",
    "summary": "A significant group of protesters gathered on Ayneh-khaneh Boulevard in Isfahan, chanting 'Khamenei is a murderer, his government is invalid' and pro-monarchy slogans.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Ayneh-khaneh Boulevard, Isfahan, Iran",
    "lat": 32.6373,
    "lng": 51.6749,
    "reliabilityScore": 9,
    "sourceId": "315306",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "8e84f90e-27a1-4f35-b5e2-090b4edc298f",
    "title": "Protests on Kashani Boulevard",
    "summary": "Citizens in the Kashani Boulevard area of Tehran took to the streets on Friday night, chanting pro-monarchy slogans such as 'Long Live the Shah.'",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Kashani Boulevard, Tehran, Iran",
    "lat": 35.7248,
    "lng": 51.2952,
    "reliabilityScore": 9,
    "sourceId": "315307",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "e703f599-4891-43c4-9358-6c767a8bff10",
    "title": "Evening Protests in Golbarg",
    "summary": "A number of citizens gathered in the Golbarg area of Tehran on Friday night, chanting slogans supporting the return of the Pahlavi family.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Golbarg, Tehran, Iran",
    "lat": 35.7369,
    "lng": 51.4883,
    "reliabilityScore": 8,
    "sourceId": "315308",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "fc6483a9-efed-4ba4-8f15-9f2f242f4949",
    "title": "Protests in Narmak District",
    "summary": "Protesters in the Narmak area of Tehran chanted 'Death to the Dictator' and 'Pahlavi will return' during Friday night demonstrations.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Narmak, Tehran, Iran",
    "lat": 35.7483,
    "lng": 51.4939,
    "reliabilityScore": 8,
    "sourceId": "315310",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "55f9e3e3-5002-41c2-957a-da3eb18f2ec3",
    "title": "Protests in Pounak and Aria Shahr",
    "summary": "A huge crowd of Tehran residents gathered in the Punak district on Friday night, lighting fires and dancing while chanting 'This is the last battle, Pahlavi will return.'",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Punak, Tehran, Iran",
    "lat": 35.7663,
    "lng": 51.3323,
    "reliabilityScore": 9,
    "sourceId": "315315",
    "protestorCount": 4000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "bdea14dd-e3e1-44cd-9b53-b2448e804121",
    "title": "Road Blockade in Shiraz",
    "summary": "Protesters blocked the Shiraz bypass entrance to Shahrak-e Farhangian on Friday night, chanting 'Death to Khamenei.'",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Shahrak-e Farhangian, Shiraz, Iran",
    "lat": 29.62,
    "lng": 52.48,
    "reliabilityScore": 8,
    "sourceId": "315320",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "415fd138-6689-4c02-b384-21acefbf4771",
    "title": "Gunfire and Arson on Qeshm Island",
    "summary": "Reports and videos from Qeshm indicate the sound of gunfire as protesters fled security forces. A police station (Kalantari) was reportedly set on fire during the unrest.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Qeshm Island, Iran",
    "lat": 26.9392,
    "lng": 56.1031,
    "reliabilityScore": 9,
    "sourceId": "315322",
    "protestorCount": 1000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "936220cb-20f5-4819-ad39-791deb21d918",
    "title": "Protests and Shooting in Poonak, Tehran",
    "summary": "Protesters in the Poonak district of Tehran lit fires and chanted anti-regime and pro-monarchy slogans. Security forces reportedly opened fire on the crowd, prompting protesters to chant 'Dishonorable'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Pounak, Tehran, Iran",
    "lat": 35.7667,
    "lng": 51.3408,
    "reliabilityScore": 9,
    "sourceId": "315282",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "014de2f2-cd81-47c6-b882-83511dc3caa5",
    "title": "Night Protests and Fires in Saveh",
    "summary": "Protesters in Saveh lit fires in the streets and chanted 'Death to Khamenei' and slogans supporting the return of the Pahlavi family.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Saveh, Markazi, Iran",
    "lat": 35.0238,
    "lng": 50.3571,
    "reliabilityScore": 7,
    "sourceId": "315288",
    "protestorCount": 300,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "03d4af89-43a4-4b15-b2e4-8ad818f32888",
    "title": "Evening Protests in Ekbatan Complex",
    "summary": "Residents and protesters in the Ekbatan district of Tehran chanted 'Death to the Dictator' and 'Death to Khamenei' during the evening.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Ekbatan, Tehran, Iran",
    "lat": 35.7077,
    "lng": 51.3115,
    "reliabilityScore": 8,
    "sourceId": "315295",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "62ec91f3-4847-4bdc-add4-9b906d74eaea",
    "title": "Extended Unrest and Gunfire in Chabahar",
    "summary": "Protests that began at noon on Friday continued into the night near Quds Boulevard. Multiple reports and videos indicate the sound of heavy gunfire in the area.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Chabahar, Sistan and Baluchestan, Iran",
    "lat": 25.2861,
    "lng": 60.643,
    "reliabilityScore": 8,
    "sourceId": "315297",
    "protestorCount": 1000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 5,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "43460ead-1720-4dcc-82ff-25dc26a0f013",
    "title": "Protests in Qods Square, Tehran",
    "summary": "Protesters took to the streets in Qods Square, Tehran, specifically targeting the Supreme Leader in their slogans.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Tajrish, Tehran, Iran",
    "lat": 35.805,
    "lng": 51.432,
    "reliabilityScore": 7,
    "sourceId": "315299",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "23d61208-d378-426c-b8e6-9062a69f8f3e",
    "title": "Protest in Tabriz",
    "summary": "Protesters in Tabriz continued their gathering into Friday night, lighting fires. Reports and videos documented the sound of gunfire from government forces.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Tabriz, East Azerbaijan, Iran",
    "lat": 38.0962,
    "lng": 46.2731,
    "reliabilityScore": 8,
    "sourceId": "315300",
    "protestorCount": 600,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 5,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "e686d503-3cdf-4a4f-b96f-2c73f7709655",
    "title": "Government Building Set on Fire in Sa'adat Abad",
    "summary": "Protesters in the Sa'adat Abad neighborhood of Tehran targeted and set fire to a government building during Friday evening protests.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Sa'adat Abad, Tehran, Iran",
    "lat": 35.7825,
    "lng": 51.3725,
    "reliabilityScore": 7,
    "sourceId": "315302",
    "protestorCount": 150,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "ad6da225-ea44-4786-bab3-71c25a04b92e",
    "title": "Protests in Ahvaz",
    "summary": "Protesters in Ahvaz lit fires in the streets and chanted for the downfall of Ali Khamenei.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Ahvaz, Iran",
    "lat": 31.3183,
    "lng": 48.6706,
    "reliabilityScore": 7,
    "sourceId": "315264",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "7bf92b96-0abd-4b3f-b683-4500f2c9201b",
    "title": "Large Gathering in Sohrevardi, Tehran",
    "summary": "A large number of people gathered in the Sohrevardi area of Tehran, chanting pro-monarchy slogans and 'this is the year of blood'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Sohrevardi, Tehran, Iran",
    "lat": 35.7334,
    "lng": 51.4447,
    "reliabilityScore": 8,
    "sourceId": "315268, 315270",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "0e2e4d03-57e1-405c-8022-e1d8d1197e94",
    "title": "Vali-e-Asr Square Demonstration",
    "summary": "Protesters took to the streets at Vali-e-Asr Square in Tehran chanting 'Death to the dictator'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Vali-e-Asr Square, Tehran, Iran",
    "lat": 35.7117,
    "lng": 51.407,
    "reliabilityScore": 7,
    "sourceId": "315265",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "e6dadbf9-3f68-467a-b74a-edafa1bacc24",
    "title": "Ekbatan District Protests",
    "summary": "Protesters in the Ekbatan residential complex in Tehran chanted 'Javid Shah' and 'Death to Khamenei' on Friday evening.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Ekbatan, Tehran, Iran",
    "lat": 35.7077,
    "lng": 51.3065,
    "reliabilityScore": 8,
    "sourceId": "315276, 315281",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "9bbe108b-4a08-4eec-8025-20042c6db274",
    "title": "Andisheh Phase 1 Protests",
    "summary": "Residents of Andisheh, Phase 1, marched in the streets chanting slogans against the Supreme Leader.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Andisheh, Tehran, Iran",
    "lat": 35.6983,
    "lng": 51.0188,
    "reliabilityScore": 8,
    "sourceId": "315280",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "8cbb61c3-a33a-4646-9192-9a7beddaf6b6",
    "title": "Rooftop Chanting in Rasht",
    "summary": "Protesters in Rasht chanted anti-regime slogans from their homes and windows.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Rasht, Iran",
    "lat": 37.2808,
    "lng": 49.5832,
    "reliabilityScore": 7,
    "sourceId": "315277",
    "protestorCount": 75,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "c26d7d81-0c41-411d-a03d-364cd1fc6893",
    "title": "Large Scale Protest in Sa'adat Abad, Tehran",
    "summary": "Massive crowds gathered in Sa'adat Abad, Tehran, lighting fires and chanting slogans including 'This is the last battle, Pahlavi returns' and 'This year is the year of blood, Ali [Khamenei] will be overthrown.' Protesters displayed the Lion and Sun flag and images of Prince Reza Pahlavi.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Sa'adat Abad, Tehran, Iran",
    "lat": 35.7792,
    "lng": 51.3789,
    "reliabilityScore": 8,
    "sourceId": "315257",
    "protestorCount": 4000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "d5b263e2-2fe4-4c8a-850c-2f1ad7665d94",
    "title": "Pasdaran District Protests",
    "summary": "A large presence of people in the Pasdaran district of Tehran was reported, with protesters chanting against the clergy.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Pasdaran, Tehran, Iran",
    "lat": 35.7664,
    "lng": 51.4646,
    "reliabilityScore": 8,
    "sourceId": "315258",
    "protestorCount": 1000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "de37a82e-5f5e-4758-b504-d8d01a340ea7",
    "title": "Street Protest in Sattarkhan",
    "summary": "Residents in the Sattarkhan area of Tehran joined protests on Friday evening, chanting 'Death to the dictator.'",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Sattarkhan, Tehran, Iran",
    "lat": 35.7197,
    "lng": 51.3653,
    "reliabilityScore": 8,
    "sourceId": "315244",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "83f28858-f5c3-4765-8504-ea0d5f651c11",
    "title": "Andarzgoo Protests",
    "summary": "Protesters in Tehran's Andarzgoo neighborhood chanted slogans directly targeting the Supreme Leader and the government.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Andarzgoo, Tehran, Iran",
    "lat": 35.7963,
    "lng": 51.4619,
    "reliabilityScore": 8,
    "sourceId": "315245",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "ee521ac0-1530-4621-8f77-2589ed47bf90",
    "title": "Mehrshahr Unrest and Smoke",
    "summary": "Protests in Mehrshahr, Karaj, were marked by smoke in the streets and chants supporting the Pahlavi dynasty.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Mehrshahr, Karaj, Iran",
    "lat": 35.8115,
    "lng": 50.9073,
    "reliabilityScore": 8,
    "sourceId": "315246",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "8c85547b-ae70-40b2-b5de-94b09589567d",
    "title": "Protest in Astara",
    "summary": "Protesters in Astara gathered on Friday night chanting slogans for the return of the Pahlavi dynasty.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Astara, Iran",
    "lat": 38.4206,
    "lng": 48.8719,
    "reliabilityScore": 8,
    "sourceId": "315249",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "283baff3-be0e-43ed-93e5-cf94b7d28865",
    "title": "Large Protest in Saadat Abad",
    "summary": "A large group of people took to the streets in the Saadat Abad district of Tehran on Friday night.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Saadat Abad, Tehran, Iran",
    "lat": 35.7905,
    "lng": 51.3731,
    "reliabilityScore": 7,
    "sourceId": "315222",
    "protestorCount": 1000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "25c843ff-0096-413a-9541-4a3c686fc03f",
    "title": "Protest in Niauran",
    "summary": "Protesters in the Niauran area of Tehran chanted pro-monarchy and anti-dictatorship slogans.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Niauran, Tehran, Iran",
    "lat": 35.8118,
    "lng": 51.4725,
    "reliabilityScore": 7,
    "sourceId": "315223",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "290bbbad-56ad-45ac-9f18-332f21f96030",
    "title": "Protest in Abhar",
    "summary": "Citizens in Abhar took to the streets on Friday night chanting slogans in support of the Pahlavi family.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Abhar, Iran",
    "lat": 36.1462,
    "lng": 49.2178,
    "reliabilityScore": 7,
    "sourceId": "315224",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "0c1ae748-6f97-4513-a98d-e4971a4074f9",
    "title": "Massive Protest in Pasdaran",
    "summary": "A massive presence of protesters was reported in the Pasdaran area of Tehran, chanting against foreign intervention and for Iran.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Pasdaran, Tehran, Iran",
    "lat": 35.7725,
    "lng": 51.4619,
    "reliabilityScore": 7,
    "sourceId": "315226",
    "protestorCount": 3000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "f6740f41-3c7f-42f4-9802-e403d12e4b19",
    "title": "Protest in Mehrshahr",
    "summary": "Protesters in Mehrshahr, Karaj, joined the national demonstrations on Friday night.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Mehrshahr, Karaj, Iran",
    "lat": 35.8078,
    "lng": 50.9161,
    "reliabilityScore": 7,
    "sourceId": "315227",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "0d85a15e-40aa-46b9-aa4e-767cf09baa00",
    "title": "Protest in Chitger",
    "summary": "People in the Chitger area of Tehran chanted slogans calling for the return of the Prince.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Chitger, Tehran, Iran",
    "lat": 35.7333,
    "lng": 51.2167,
    "reliabilityScore": 7,
    "sourceId": "315228",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "ac3292ed-ec67-490a-9c0d-09c10fd666cd",
    "title": "Protest in Bushehr",
    "summary": "People in Bushehr responded to the call by Prince Reza Pahlavi and took to the streets on January 9.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Bushehr, Iran",
    "lat": 28.9234,
    "lng": 50.8203,
    "reliabilityScore": 7,
    "sourceId": "315229",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "855889be-1dab-4c6c-8c79-59019550e151",
    "title": "Protest in Rah-ahan Town",
    "summary": "Protesters in the Rah-ahan (Railway) Town of Tehran chanted for the overthrow of the Supreme Leader.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Shahrak-e Rah-ahan, Tehran, Iran",
    "lat": 35.737,
    "lng": 51.2483,
    "reliabilityScore": 7,
    "sourceId": "315230",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "4f955b57-a5e6-4d87-a36c-0925c5097b63",
    "title": "Protest in Khalij-e Fars Neighborhood",
    "summary": "Protesters in the Persian Gulf (Khalij-e Fars) area of Tehran supported the Prince's call and praised Reza Shah.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Khalij-e Fars, Tehran, Iran",
    "lat": 35.6565,
    "lng": 51.2464,
    "reliabilityScore": 7,
    "sourceId": "315234",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "b26fecc6-c331-47e1-beb2-3f79864295cf",
    "title": "Clashes on Moqaddas Ardebili Street",
    "summary": "Government forces fired tear gas at protesters on Moqaddas Ardebili Street in Tehran; citizens continued to regroup and protest.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Moqaddas Ardebili St, Tehran, Iran",
    "lat": 35.8,
    "lng": 51.413,
    "reliabilityScore": 8,
    "sourceId": "315237",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "e5f0f540-7d5f-41d9-a506-261121cd5303",
    "title": "Protest in Gorgan",
    "summary": "People in Gorgan returned to the streets on Friday evening chanting 'Death to the Dictator'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Gorgan, Iran",
    "lat": 36.8425,
    "lng": 54.4328,
    "reliabilityScore": 7,
    "sourceId": "315239",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "30ff04b3-f7e6-4afa-b3ba-160fad56dd10",
    "title": "Protests in Pounak, Tehran",
    "summary": "Protesters gathered in the Pounak district of Tehran for the second night of calls by Reza Pahlavi, chanting anti-clerical slogans.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Pounak, Tehran, Iran",
    "lat": 35.763,
    "lng": 51.332,
    "reliabilityScore": 7,
    "sourceId": "315203",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "10acd62d-b6cb-4293-92f1-312fb47a78cf",
    "title": "Protests in Zanbilabad, Qom",
    "summary": "Protesters in the Zanbilabad area of Qom took to the streets on the evening of January 9, chanting 'Death to the Dictator'.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Zanbilabad, Qom, Iran",
    "lat": 34.615,
    "lng": 50.865,
    "reliabilityScore": 7,
    "sourceId": "315208",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "689c99c7-370d-451a-b6a5-adf041cab78c",
    "title": "Fatalities in Fardis, Karaj",
    "summary": "Video evidence from protests on January 8 shows at least 7 individuals lying on the ground in Fardis, Karaj, with reports indicating they were killed by security forces.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Fardis, Karaj, Iran",
    "lat": 35.725,
    "lng": 50.985,
    "reliabilityScore": 8,
    "sourceId": "315209",
    "protestorCount": 1000,
    "validationScore": 1,
    "casualties": {
      "dead": 7,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "d8482396-f6c8-45a4-8498-3e353e8d800c",
    "title": "Protests on Ashrafi Esfahani Expressway",
    "summary": "Demonstrators gathered on Ashrafi Esfahani Expressway in Tehran, chanting slogans supporting the return of the Pahlavi dynasty.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Ashrafi Esfahani, Tehran, Iran",
    "lat": 35.745,
    "lng": 51.325,
    "reliabilityScore": 7,
    "sourceId": "315212",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "bf96e5fa-d6d8-41da-b697-05bb254d003d",
    "title": "Casualties at Ghadir Hospital",
    "summary": "Bodies of several protesters killed by security forces during the January 8 demonstrations were reportedly seen at Ghadir Hospital in Tehran.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "Ghadir Hospital, Tehran, Iran",
    "lat": 35.7761,
    "lng": 51.4422,
    "reliabilityScore": 8,
    "sourceId": "315213",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 5,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "9fd50eaa-88b4-4bd9-ab7f-953806382a7b",
    "title": "Protests in Seyyed Khandan, Tehran",
    "summary": "A large crowd gathered in the Seyyed Khandan area of Tehran on Friday night, chanting for the end of the current regime.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Seyyed Khandan, Tehran, Iran",
    "lat": 35.742,
    "lng": 51.447,
    "reliabilityScore": 7,
    "sourceId": "315217",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "24feda1a-1daf-4396-a40c-ed60404031af",
    "title": "Protests in Ferdous Boulevard, Tehran",
    "summary": "Crowds of protesters in West Tehran's Ferdous Boulevard chanted slogans calling for the overthrow of Ali Khamenei.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Ferdous Boulevard, Tehran, Iran",
    "lat": 35.725,
    "lng": 51.31,
    "reliabilityScore": 7,
    "sourceId": "315219",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "id": "840231c0-4075-4c4c-b694-21fc7e44083d",
    "title": "Protests in Tabriz",
    "summary": "Concurrent with other Iranian cities, the people of Tabriz held protest rallies on the night of January 9.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "Tabriz, Iran",
    "lat": 38.08,
    "lng": 46.2919,
    "reliabilityScore": 7,
    "sourceId": "315220",
    "protestorCount": 750,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "title": "حضور سنگین نیروهای امنیتی و اختلال در زیرساخت‌های تهران",
    "summary": "ریبین مرادی، نوجوان ۱۷ ساله و فوتبالیست اهل ثلاث‌باباجانی، در اعتراضات تهران با شلیک مستقیم کشته شد. خانواده وی پس از چهار روز بی‌خبری مطلع شدند.\n[AI VISION VERIFICATION]: این تصویر یک پوستر گرافیکی شامل دو عکس پرتره از یک نوجوان (ریبین مرادی) است. در تصویر سمت چپ، فرد یک پیراهن ورزشی نارنجی رنگ با پرچم جمهوری اسلامی ایران و لوگوی باشگاه سایپا به تن دارد. در تصویر هیچ سلاح، نیروی نظامی یا یونیفرمی دیده نمی‌شود و تنها چهره قربانی نمایش داده شده است. متن روی تصویر به کشته شدن او با شلیک مستقیم نیروهای حکومتی اشاره دارد و لوگوی سازمان حقوق بشری هه‌نگاو در گوشه تصویر قرار دارد.",
    "category": "Civil Unrest",
    "date": "2026-01-13",
    "locationName": "تهران، ایران",
    "lat": 35.6892,
    "lng": 51.389,
    "reliabilityScore": 70,
    "sourceId": "1298",
    "protestorCount": 1,
    "validationScore": 1,
    "casualties": {
      "dead": 1,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "e2b64566-97e4-4e8f-8b5d-9d06e7be2f38",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio",
    "isCrowdResult": true
  },
  {
    "title": "آتش زدن مغازه مخبر و انسداد بانک‌ها در حاجی‌آباد",
    "summary": "گزارش‌های محلی از به آتش کشیدن مغازه یک مخبر حکومتی در حاجی‌آباد فارس و اقدام امنیتی بانک‌های صادرات و کشاورزی برای جوش دادن درب‌ها و پنجره‌ها جهت جلوگیری از تخریب خبر می‌دهند.",
    "category": "Kinetic Clashes",
    "date": "2026-01-12",
    "locationName": "حاجی‌آباد، فارس، ایران",
    "lat": 28.3584,
    "lng": 54.4233,
    "reliabilityScore": 75,
    "sourceId": "1275",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "835f5fec-7954-4c4e-a894-45a80689dc26",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio"
  },
  {
    "title": "خروج دیپلمات‌های خارجی و هشدارهای مسافرتی بین‌المللی",
    "summary": "سفارت آمریکا در پیامی به شهروندان خود توصیه کرد از مرزهای زمینی ارمنستان یا ترکیه خارج شوند. همزمان فرانسه کادر غیرضروری خود را خارج کرده و سوئد از شهروندانش خواست فوراً ایران را ترک کنند.",
    "category": "Political",
    "date": "2026-01-12",
    "locationName": "ایران",
    "lat": 32.4279,
    "lng": 53.688,
    "reliabilityScore": 5,
    "sourceId": "1277, 1271, 1265",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "0f6860ce-cc0d-4dc2-a183-25c5536cc64b",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio"
  },
  {
    "title": "آماده‌باش نظامی ایالات متحده در خاورمیانه",
    "summary": "گزارش‌ها حاکی از آن است که نیروهای آمریکایی در خاورمیانه برای عملیات‌های احتمالی علیه جمهوری اسلامی در وضعیت آماده‌باش پیشرفته قرار گرفته‌اند و گزینه‌های نظامی توسط پنتاگون در حال بررسی است.",
    "category": "Military",
    "date": "2026-01-12",
    "locationName": "خلیج فارس",
    "lat": 26,
    "lng": 52,
    "reliabilityScore": 4,
    "sourceId": "1262",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "39183ef8-931b-4a7e-8143-e790dc55cccf",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio"
  },
  {
    "title": "ممنوعیت ورود دیپلمات‌های جمهوری اسلامی به پارلمان اروپا",
    "summary": "رییس پارلمان اروپا ورود تمامی کارکنان دیپلماتیک و نمایندگان جمهوری اسلامی به ساختمان‌های این نهاد را ممنوع کرد. وی تاکید کرد که این اقدام برای جلوگیری از مشروعیت‌بخشی به حکومتی است که با شکنجه و سرکوب بقای خود را حفظ کرده است.",
    "category": "Political",
    "date": "2026-01-12",
    "locationName": "بروکسل، بلژیک",
    "lat": 50.8503,
    "lng": 4.3517,
    "reliabilityScore": 100,
    "sourceId": "1251",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "3661aab8-c9f8-4cd3-83eb-b4abf225a5b8",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio"
  },
  {
    "title": "گزارش‌های پراکنده از تلفات در جریان قیام ملی",
    "summary": "اشاره به کشته شدن معترضان بی‌گناه در جریان خاموشی اینترنت و سرکوب‌های اخیر در شهرهای مختلف ایران در پیام‌های سیاسی و گزارش‌های مردمی.",
    "category": "Humanitarian",
    "date": "2026-01-13",
    "locationName": "ایران",
    "lat": 35,
    "lng": 51,
    "reliabilityScore": 3,
    "sourceId": "1285",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 5,
      "injured": 10,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "6699e77d-e560-4d2b-9230-acf91e344ded",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio"
  },
  {
    "title": "سرکوب سراسری اعتراضات و فراخوان مستندسازی عفو بین‌الملل",
    "summary": "دیار پورچهریق، شهروند اهل سلماس، در جریان اعتراضات تهران با شلیک مستقیم نیروهای حکومتی جان باخت.\n[AI VISION VERIFICATION]: در این تصویر تنها یک فرد جوان (دیار پورچهریق) با لباس شخصی شامل تیشرت مشکی و شلوار جین مشاهده می‌شود که به دیواری آجری تکیه داده است. هیچ‌گونه سلاح، نیروی نظامی با یونیفرم، یا صحنه‌ای از درگیری و اعتراض در خود عکس وجود ندارد. متن روی تصویر، گزارشی از سازمان حقوق بشری هه‌نگاو درباره جان‌باختن این فرد است.",
    "category": "Civil Unrest",
    "date": "2026-01-12",
    "locationName": "تهران، ایران",
    "lat": 35.6892,
    "lng": 51.389,
    "reliabilityScore": 100,
    "sourceId": "1250, 1230, 1228",
    "protestorCount": 1000,
    "validationScore": 1,
    "casualties": {
      "dead": 600,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "f23bb90d-20fd-4b46-9abb-bd6224cca509",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio",
    "isCrowdResult": true
  },
  {
    "title": "آمادگی دولت ترامپ برای حملات سایبری علیه ایران",
    "summary": "روزنامه تلگراف گزارش داد که دولت دونالد ترامپ در حال آماده‌سازی حملات سایبری علیه اهداف نظامی و غیرنظامی در ایران به عنوان مجازات برای سرکوب معترضان است.",
    "category": "Cyber",
    "date": "2026-01-12",
    "locationName": "ایران",
    "lat": 32.4279,
    "lng": 53.688,
    "reliabilityScore": 85,
    "sourceId": "1242",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "40071bb5-be6d-4b17-860f-298a8d1b4140",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio"
  },
  {
    "title": "کشته شدن دو مامور اطلاعات در استان فارس",
    "summary": "روابط عمومی اداره کل اطلاعات استان فارس از کشته شدن دو تن از ماموران خود در شامگاه ۲۰ دی‌ماه در جریان درگیری با مردم خبر داد.\n[AI VISION VERIFICATION]: تصویر جمعیتی متشکل از مردان با لباس‌های شخصی (اغلب تیره و زمستانی) را نشان می‌دهد که در وسط یک خیابان تجمع کرده‌اند. چندین خودروی سواری در حاشیه خیابان پارک شده‌اند. با وجود متن روی تصویر که به حادثه امنیتی اشاره دارد، در این نمای دور و با این کیفیت، سلاح یا یونیفرم نظامی مشخصی به وضوح قابل تشخیص نیست. محیط شامل ساختمان‌های مسکونی دو طبقه و تیرهای برق چوبی است.",
    "category": "Kinetic Clashes",
    "date": "2026-01-10",
    "locationName": "استان فارس، ایران",
    "lat": 29.5918,
    "lng": 52.5837,
    "reliabilityScore": 10,
    "sourceId": "1235",
    "protestorCount": 50,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 2,
      "injured": 0
    },
    "id": "ef581d3c-e239-408d-83a3-214272dc1137",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio",
    "isCrowdResult": true
  },
  {
    "title": "کشته شدن رئیس پلیس مواد مخدر مشهد",
    "summary": "سردار جواد جهانشیری، جانشین فرمانده انتظامی خراسان رضوی و رئیس پلیس مواد مخدر مشهد، در جریان درگیری‌های خیابانی در بلوار صیاد شیرازی مشهد کشته شد.\n[AI VISION VERIFICATION]: تصویر یک نفر را نشان می‌دهد که لباس فرم نیروی انتظامی با درجه سرهنگی بر تن دارد و در دفتر کار خود نشسته است. در پس‌زمینه قفسه‌هایی حاوی لوح‌های تقدیر و ظروف تزئینی دیده می‌شود. پرچم جمهوری اسلامی ایران و پرچم سازمانی نیروی انتظامی در گوشه تصویر قرار دارند. متن زیرنویس آبی رنگ حاوی خبری در مورد مرگ این مقام انتظامی است.",
    "category": "Kinetic Clashes",
    "date": "2026-01-11",
    "locationName": "مشهد، بلوار صیاد شیرازی، ایران",
    "lat": 36.3156,
    "lng": 59.5161,
    "reliabilityScore": 10,
    "sourceId": "1232",
    "protestorCount": 1,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 1,
      "injured": 0
    },
    "id": "949bac5d-858e-4ec2-85e8-36482b1b381d",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio",
    "isCrowdResult": true
  },
  {
    "title": "کشته شدن دادستان و نیروهای بسیجی در اسفراین",
    "summary": "در جریان اعتراضات ۱۹ دی در اسفراین، علی‌اکبر حسین‌زاده دادستان این شهر و چهار نیروی بسیجی در درگیری با مردم کشته شدند. همچنین مسجد جامع و یک مرکز دولتی به آتش کشیده شد.\n[AI VISION VERIFICATION]: تصویر شبانه گروهی متراکم از افراد (عمدتاً مردان با لباس‌های تیره شخصی) را نشان می‌دهد که در خیابانی مملو از قلوه‌سنگ و آوار ایستاده‌اند. در پس‌زمینه، آتش‌سوزی‌های مهیبی چندین ساختمان را در بر گرفته و آسمان را به رنگ نارنجی درآورده است. هیچ سلاح گرم یا یونیفرم نظامی مشخصی در میان جمعیت حاضر در پیش‌زمینه قابل تشخیص نیست، اما وجود سنگ‌ها نشان‌دهنده درگیری است. یک ساختمان چندطبقه در سمت راست با خطوط نوری زرد دیده می‌شود. متن روی تصویر ادعا می‌کند که این صحنه مربوط به اسفراین و آتش زدن اماکن مذهبی و کشته شدن مقامات است.",
    "category": "Kinetic Clashes",
    "date": "2026-01-09",
    "locationName": "اسفراین، خراسان شمالی، ایران",
    "lat": 37.0765,
    "lng": 57.5101,
    "reliabilityScore": 10,
    "sourceId": "1231",
    "protestorCount": 120,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 5,
      "injured": 0
    },
    "id": "0dd2359d-ba05-44f6-9035-0759c36ad757",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio",
    "isCrowdResult": true
  },
  {
    "title": "کشته شدن درجه‌دار فراجا در کیش",
    "summary": "امیر ترکاشوند، درجه‌دار فراجا اهل کرمانشاه، در جریان اعتراضات در جزیره کیش کشته شد. مراسم تشییع وی تحت تدابیر شدید امنیتی برگزار شد.\n[AI VISION VERIFICATION]: تصویر تشییع جنازه‌ای را نشان می‌دهد که تابوتی پوشیده با پرچم جمهوری اسلامی ایران توسط پرسنل نظامی با لباس فرم استتار شهری (آبی و سفید، احتمالا مربوط به یگان‌های فراجا یا راهور) حمل می‌شود. نکته برجسته تصویر حضور یک نیروی امنیتی با لباس استتار خاکی، جلیقه تاکتیکی و صورت پوشیده (با نقاب) است که یک قبضه سلاح تهاجمی (کلاشینکف) را به سمت پایین در دست دارد. در پس‌زمینه تعدادی غیرنظامی و افراد دیگری با لباس شخصی دیده می‌شوند. زیرنویس تصویر متنی انتقادی با لوگوی DEJ است.",
    "category": "Kinetic Clashes",
    "date": "2026-01-12",
    "locationName": "جزیره کیش، ایران",
    "lat": 26.5325,
    "lng": 53.9747,
    "reliabilityScore": 10,
    "sourceId": "1229",
    "protestorCount": 20,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 1,
      "injured": 0
    },
    "id": "0ffe08e5-78e7-4d03-ad12-5420aa58b208",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/DEJradio",
    "isCrowdResult": true
  },
  {
    "title": "مسدود شدن دامنه‌های خبرگزاری تسنیم توسط دولت آمریکا",
    "summary": "طبق گزارش نت‌بلاکس، اینترنت در ایران به مدت ۹۶ ساعت به‌طور کامل قطع شده است. این اقدام برای خفه کردن صدای معترضان و پنهان کردن ابعاد کشتارها صورت گرفته و دسترسی به دامنه‌های بین‌المللی برخی رسانه‌ها از جمله تسنیم نیز مسدود شده است.",
    "category": "Cyber",
    "date": "2026-01-12",
    "locationName": "ایران",
    "lat": 35.6892,
    "lng": 51.389,
    "reliabilityScore": 90,
    "sourceId": "315896",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "92e96ed5-c128-49f1-a815-e788c2506c25",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "title": "فراخوان خروج شهروندان سوئد و کارکنان سفارت فرانسه",
    "summary": "سفارت مجازی آمریکا در ایران با اشاره به وخامت اوضاع و تشدید اعتراضات در سراسر کشور، از شهروندان خود خواست فوراً از طریق مرزهای زمینی ارمنستان یا ترکیه ایران را ترک کنند.",
    "category": "Humanitarian",
    "date": "2026-01-12",
    "locationName": "ایران",
    "lat": 35.7006,
    "lng": 51.401,
    "reliabilityScore": 95,
    "sourceId": "315871",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "de81b140-0a98-4a09-9fb1-82194500ac99",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "title": "اعلام تعرفه ۲۵ درصدی آمریکا علیه شرکای تجاری جمهوری اسلامی",
    "summary": "دونالد ترامپ دستور داد هر کشوری که با جمهوری اسلامی تجارت کند، مشمول تعرفه ۲۵ درصدی بر معاملات تجاری خود با آمریکا خواهد شد. این اقدام واکنشی به سرکوب معترضان و تامین مالی تروریسم توسط رژیم ایران است.",
    "category": "Strikes/Economic",
    "date": "2026-01-12",
    "locationName": "واشینگتن، آمریکا",
    "lat": 38.8951,
    "lng": -77.0364,
    "reliabilityScore": 100,
    "sourceId": "315861",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "0ce98065-e841-4f98-805f-f21581398152",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "title": "بررسی گزینه‌های نظامی آمریکا علیه جمهوری اسلامی",
    "summary": "پنتاگون مجموعه‌ای از ابزارهای نظامی، حملات سایبری و عملیات روانی را به دونالد ترامپ ارائه داده است. مقامات آمریکا هشدار داده‌اند که در صورت ادامه کشتار معترضان، اقدام نظامی محتمل است.",
    "category": "Military",
    "date": "2026-01-13",
    "locationName": "خلیج فارس / ایران",
    "lat": 27,
    "lng": 53,
    "reliabilityScore": 4,
    "sourceId": "315889",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "248f0b11-5c15-4675-bda0-94ad960286fa",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "title": "امتناع نیروهای امنیتی از مشارکت در سرکوب",
    "summary": "شاهزاده رضا پهلوی اعلام کرد که هزاران نفر از نیروهای انتظامی و نظامی به دلیل عدم تمایل به مشارکت در سرکوب معترضان، از حضور در محل خدمت خودداری کرده‌اند.",
    "category": "Political",
    "date": "2026-01-13",
    "locationName": "ایران",
    "lat": 32.4279,
    "lng": 53.688,
    "reliabilityScore": 70,
    "sourceId": "315882",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "8fe60386-d5ec-4bf7-929c-c2012eb89bf9",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "title": "درخواست همبستگی جهانی کیهان کلهر با معترضان ایران",
    "summary": "کیهان کلهر، موسیقی‌دان برجسته ایرانی، از جامعه جهانی موسیقی خواست تا صدای جوانان معترض ایران در برابر خشونت‌های رژیم باشند. او به کشته شدن حدود ۲۰۰۰ نفر اشاره کرد.\n[AI VISION VERIFICATION]: در این تصویر تنها کیهان کلهر، نوازنده ایرانی، در حال نواختن ساز کمانچه مشاهده می‌شود. هیچ‌گونه سلاح، نیروی نظامی، پلیس یا جمعیت معترضی در کادر وجود ندارد. تصویر دارای متن‌هایی به زبان فارسی با مضمون «انقلاب ملی ایرانیان» و درخواست همبستگی جهانی است.",
    "category": "Civil Unrest",
    "date": "2026-01-12",
    "locationName": "ایران",
    "lat": 32.4279,
    "lng": 53.688,
    "reliabilityScore": 95,
    "sourceId": "315819, 315796, 315798",
    "protestorCount": 1000,
    "validationScore": 1,
    "casualties": {
      "dead": 2000,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "6932a630-bf39-41fa-8bdb-e538d13689a4",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV",
    "isCrowdResult": true
  },
  {
    "title": "هشدار عراقچی به بریتانیا درباره امنیت اماکن دیپلماتیک",
    "summary": "عباس عراقچی، وزیر خارجه ایران، به بریتانیا هشدار داد که در صورت عدم تامین امنیت اماکن دیپلماتیک، ایران کارکنان خود را از لندن تخلیه خواهد کرد.",
    "category": "Political",
    "date": "2026-01-12",
    "locationName": "لندن، بریتانیا",
    "lat": 51.5074,
    "lng": -0.1278,
    "reliabilityScore": 100,
    "sourceId": "315829",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "c73b057b-4a27-48d2-85e2-3a2ce213525f",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "title": "توصیه سفارت مجازی آمریکا به خروج شهروندان از ایران",
    "summary": "سفارت مجازی آمریکا به دلیل اعتراضات سراسری و قطع اینترنت، به شهروندان خود توصیه کرد که خروج از ایران از طریق مرزهای زمینی ارمنستان یا ترکیه را مدنظر قرار دهند.",
    "category": "Political",
    "date": "2026-01-12",
    "locationName": "تهران، ایران",
    "lat": 35.6892,
    "lng": 51.389,
    "reliabilityScore": 100,
    "sourceId": "315826",
    "protestorCount": 1000,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "16f3a728-3960-49ba-b125-530328ef63fe",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/IranintlTV"
  },
  {
    "title": "حمله به فرمانده اطلاعات سپاه در شهرستان گلشن",
    "summary": "یاسر نوشیروانی، یکی از فرماندهان بومی اطلاعات سپاه پاسداران و سرتیم جوخه‌های ترور، به همراه دو تن از محافظانش در جریان یک حمله مسلحانه در منطقه بچه‌راهی شهرستان گلشن کشته شدند. مهاجمان پس از عملیات، سلاح‌ها و خودروی آن‌ها را ضبط کردند.",
    "category": "Kinetic Clashes",
    "date": "2026-01-12",
    "locationName": "منطقه بچه‌راهی، شهرستان گلشن، سیستان و بلوچستان",
    "lat": 27.2008,
    "lng": 62.6953,
    "reliabilityScore": 90,
    "sourceId": "32955",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 3,
      "injured": 0
    },
    "id": "ed15e2e6-fe6f-4b9b-bd03-33d2581517ea",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/haalvsh"
  },
  {
    "title": "کشته شدن سه شهروند در اعتراضات کرمانشاه",
    "summary": "سجاد فیضی، محمد جعفری و عرفان جامه‌شورانی، سه شهروند کورد در جریان اعتراضات کرمانشاه با شلیک مستقیم نیروهای حکومتی کشته شدند.\n[AI VISION VERIFICATION]: تصویر شبانه جمعیتی انبوه و متراکم از معترضان را نشان می‌دهد که خیابانی عریض را پر کرده‌اند. شرکت‌کنندگان لباس‌های زمستانی و تیره به تن دارند و بسیاری چهره‌های خود را پوشانده‌اند. تعدادی از افراد دستان خود را به نشانه اعتراض یا پیروزی بالا برده‌اند. در عمق تصویر، شعله‌های آتش در وسط خیابان دیده می‌شود. هیچ سلاح گرم یا یونیفرم نظامی مشخصی در میان جمعیت حاضر در پیش‌زمینه دیده نمی‌شود. لوگوی سازمان حقوق بشری هه‌نگاو در گوشه تصویر و متن فارسی روی عکس به کشته‌شدگان اشاره دارد.",
    "category": "Civil Unrest",
    "date": "2026-01-13",
    "locationName": "کرمانشاه",
    "lat": 34.3277,
    "lng": 47.0778,
    "reliabilityScore": 10,
    "sourceId": "27952",
    "protestorCount": 1200,
    "validationScore": 1,
    "casualties": {
      "dead": 3,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "0e0a73b7-4d76-45c1-88d7-6b2005f27d05",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org",
    "isCrowdResult": true
  },
  {
    "title": "زخمی شدن سوگل هاشمی و بازداشت پدرش در ساری",
    "summary": "سوگل هاشمی با شلیک نیروهای حکومتی در ساری زخمی شد و پدرش، امیر هاشمی، توسط اطلاعات سپاه بازداشت و به مکان نامعلومی منتقل شد.",
    "category": "Civil Unrest",
    "date": "2026-01-13",
    "locationName": "ساری",
    "lat": 36.5633,
    "lng": 53.0601,
    "reliabilityScore": 100,
    "sourceId": "27949",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 1,
      "detained": 1
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "38b8c00d-8d63-4174-b704-070c144c2d3a",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "کشته شدن مبین فیلی در ایوان",
    "summary": "مبین فیلی، شهروند کورد اهل زرنه، در جریان اعتراضات با شلیک مستقیم نیروهای حکومتی در شهرستان ایوان کشته شد.\n[AI VISION VERIFICATION]: در تصویر تنها یک نفر (سوژه اصلی، مبین فیلی) مشاهده می‌شود. او لباس شخصی مشکی زیپ‌دار و یک سربند سنتی (چفیه) قرمز و سفید پوشیده است. هیچ سلاح یا یونیفرم نظامی‌ای در تصویر دیده نمی‌شود. در سمت راست کادر، بخشی از سر یک اسب قهوه‌ای رنگ وجود دارد. متن روی تصویر گزارش می‌دهد که او با شلیک مستقیم نیروهای حکومتی در ایوان کشته شده است.",
    "category": "Civil Unrest",
    "date": "2026-01-13",
    "locationName": "ایوان، ایلام",
    "lat": 33.8291,
    "lng": 46.3051,
    "reliabilityScore": 10,
    "sourceId": "27948",
    "protestorCount": 1,
    "validationScore": 1,
    "casualties": {
      "dead": 1,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "213d0f0a-8006-427d-9d51-29f74c7eafa7",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org",
    "isCrowdResult": true
  },
  {
    "title": "کشته شدن هلاکو ایوانی در اسلام‌آباد غرب",
    "summary": "هلاکو ایوانی، ورزشکار کورد، در جریان اعتراضات اسلام‌آباد غرب با شلیک نیروهای حکومتی کشته شد.",
    "category": "Civil Unrest",
    "date": "2026-01-12",
    "locationName": "اسلام‌آباد غرب",
    "lat": 34.1089,
    "lng": 46.5269,
    "reliabilityScore": 100,
    "sourceId": "27944",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 1,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "3ae04729-2b90-4b6f-b172-ef2829a66f81",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "بازداشت مهسا شفیعی در یاسوج",
    "summary": "مهسا شفیعی، خواهر نیما شفیعی (از جانباختگان قبلی)، توسط نیروهای حکومتی بازداشت شد و سرنوشت وی نامعلوم است.",
    "category": "Political",
    "date": "2026-01-07",
    "locationName": "یاسوج",
    "lat": 30.6683,
    "lng": 51.5875,
    "reliabilityScore": 100,
    "sourceId": "27943",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 1
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "7d2e760e-3de2-4817-8b7c-f87072ab338d",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "خطر اعدام عرفان سلطانی در کرج",
    "summary": "عرفان سلطانی، جوان ۲۶ ساله بازداشتی در فردیس کرج، در یک روند شتاب‌زده به اعدام محکوم شده و حکم وی قرار است روز چهارشنبه اجرا شود.",
    "category": "Political",
    "date": "2026-01-12",
    "locationName": "فردیس، کرج",
    "lat": 35.7537,
    "lng": 50.9856,
    "reliabilityScore": 100,
    "sourceId": "27940",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 1
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "643c09c6-2f52-4d84-8388-bc5407493b35",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "کشته شدن مهدی سلحشور هنرمند مجسمه‌ساز در مشهد",
    "summary": "مهدی سلحشور در جریان اعتراضات مشهد با شلیک مستقیم گلوله جنگی نیروهای حکومتی کشته شد.",
    "category": "Civil Unrest",
    "date": "2026-01-12",
    "locationName": "مشهد",
    "lat": 36.2972,
    "lng": 59.6067,
    "reliabilityScore": 100,
    "sourceId": "27938",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 1,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "619a50bb-269d-4bd5-b4f6-5bfea141b968",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "بازداشت گروهی ۹ شهروند در قصرشیرین",
    "summary": "نه شهروند کورد به نام‌های فرید مردانی، فردین مردانی، متین فتاحی، آرش مرادی، سجاد مرادی، میلاد مرادیان، احسان کرمی، سینا گوهری و وحید شادمان بازداشت شدند.",
    "category": "Political",
    "date": "2026-01-12",
    "locationName": "قصرشیرین",
    "lat": 34.5147,
    "lng": 45.5794,
    "reliabilityScore": 100,
    "sourceId": "27937",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 9
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "eb58c073-b146-4b69-81b0-a447c2cfa7bd",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "کشته شدن جواد گنجی کارگردان سینما در تهران",
    "summary": "علیرضا صیدی، برهاین سیدی، سلام میرانی، ابراهیم احمدپوریان و محمد زمانی در جریان اعتراضات تهران با شلیک مستقیم کشته شدند.",
    "category": "Civil Unrest",
    "date": "2026-01-11",
    "locationName": "تهران",
    "lat": 35.6892,
    "lng": 51.389,
    "reliabilityScore": 100,
    "sourceId": "27934",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 5,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "d9592678-33be-4dbd-a0f0-c0b718e96fa3",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "کشته شدن دو شهروند در قشم",
    "summary": "محمود موسوی و آکو محمدی (اهل ثلاث‌باباجانی) در اعتراضات قشم با شلیک مستقیم کشته شدند. برای تحویل پیکر آکو محمدی ۱ میلیارد تومان مطالبه شده است.",
    "category": "Civil Unrest",
    "date": "2026-01-11",
    "locationName": "قشم",
    "lat": 26.939,
    "lng": 56.276,
    "reliabilityScore": 100,
    "sourceId": "27928",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 2,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "6b0b6486-3134-4fdb-b417-536a3a72a571",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "کشته شدن دو نفر در بندرعباس",
    "summary": "خالد ملایی (دانشجو) و محمد محمدلو در جریان اعتراضات بندرعباس با شلیک مستقیم نیروهای حکومتی کشته شدند.",
    "category": "Civil Unrest",
    "date": "2026-01-11",
    "locationName": "بندرعباس",
    "lat": 27.1833,
    "lng": 56.2667,
    "reliabilityScore": 100,
    "sourceId": "27924",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 2,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "d585a382-2378-4798-85f1-ea364aae63a7",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "کشته شدن سه شهروند در رشت",
    "summary": "مجتبی قربانی، بهرام زاهدی و مهدی (مسعود) ذات‌پرور (قهرمان پرورش اندام) در جریان اعتراضات رشت با شلیک مستقیم کشته شدند.",
    "category": "Civil Unrest",
    "date": "2026-01-11",
    "locationName": "رشت",
    "lat": 37.2808,
    "lng": 49.5831,
    "reliabilityScore": 100,
    "sourceId": "27921",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 3,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "6237f9fc-858c-413e-a794-6f7d31197907",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "پلمب کافه وریا غفوری در تهران",
    "summary": "مجموعه کافه‌های وریا غفوری در تهران به دلیل همراهی با اعتصابات سراسری کردستان پلمب شد.",
    "category": "Strikes/Economic",
    "date": "2026-01-11",
    "locationName": "تهران",
    "lat": 35.6892,
    "lng": 51.389,
    "reliabilityScore": 100,
    "sourceId": "27920",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "e33ec207-4dfe-44e0-90a2-e1aadadd793e",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "کشته شدن ابراهیم یوسفی در کرمانشاه",
    "summary": "ابراهیم یوسفی در منطقه دولت‌آباد کرمانشاه با شلیک مستقیم نیروهای حکومتی کشته شد.",
    "category": "Civil Unrest",
    "date": "2026-01-10",
    "locationName": "دولت‌آباد، کرمانشاه",
    "lat": 34.3277,
    "lng": 47.0778,
    "reliabilityScore": 100,
    "sourceId": "27913",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 1,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "7ed30d43-3b2d-4cc1-873d-d0a8c08b8f4e",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "بازداشت گروهی در گیلانغرب، جوانرود و سنندج",
    "summary": "ده شهروند از جمله یک کودک (بردیا عزیزی) و سه زخمی بازداشت شدند. اسامی: علی‌اشرف پیشگام، سینا کرمی، بردیا درویشی، علیشاه شیرمحمدپور، سهند شیرمحمدپور، سجاد پروازی، مهدی احمدی، سینا احمدی، آسو کیخسروی و بهنام فاتحی.",
    "category": "Political",
    "date": "2026-01-10",
    "locationName": "گیلانغرب",
    "lat": 34.1421,
    "lng": 45.9203,
    "reliabilityScore": 100,
    "sourceId": "27907",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 10
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "2c849adc-a015-4dad-9a25-b5dc038cce1d",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "کشته شدن اکرم پیرگزی در نیشابور",
    "summary": "اکرم پیرگزی در اعتراضات نیشابور با شلیک مستقیم کشته شد. وی نخستین زن جان‌باخته در اعتراضات دی‌ماه است.",
    "category": "Civil Unrest",
    "date": "2026-01-10",
    "locationName": "نیشابور",
    "lat": 36.2133,
    "lng": 58.7958,
    "reliabilityScore": 100,
    "sourceId": "27906",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 1,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "200c5372-c18b-442a-91bf-aebfc74e17a3",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "بازداشت آروین نیک‌پی در مریوان",
    "summary": "آروین نیک‌پی جهت اجرای حکم ۳ سال حبس تعزیری بازداشت و به زندان مریوان منتقل شد.",
    "category": "Political",
    "date": "2026-01-10",
    "locationName": "مریوان",
    "lat": 35.5269,
    "lng": 46.1761,
    "reliabilityScore": 100,
    "sourceId": "27904",
    "protestorCount": null,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 1
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "84487c59-5ede-4278-a1f8-9ce8d92b9186",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "بازداشت آسو کیخسروی در جوانرود",
    "summary": "آسو کیخسروی، کودک ۱۷ ساله، توسط نیروهای حکومتی در جوانرود بازداشت شد.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "جوانرود",
    "lat": 34.8066,
    "lng": 46.4883,
    "reliabilityScore": 85,
    "sourceId": "27903",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 1
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "b6932b43-4557-4602-aa56-783b49b2fdd7",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "بازداشت بهنام فاتحی در سنندج",
    "summary": "بهنام فاتحی، شهروند کورد، توسط نیروهای حکومتی در شهر سنندج بازداشت شد.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "سنندج",
    "lat": 35.3113,
    "lng": 46.996,
    "reliabilityScore": 85,
    "sourceId": "27901",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 1
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "68c2c764-923f-48f8-ba65-32466714b51d",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "بازداشت نوید نجفی در گیلانغرب",
    "summary": "نوید نجفی، شهروند کورد، در جریان موج بازداشت‌ها در گیلانغرب توسط نیروهای حکومتی دستگیر شد.",
    "category": "Civil Unrest",
    "date": "2026-01-08",
    "locationName": "گیلانغرب",
    "lat": 34.1422,
    "lng": 45.9204,
    "reliabilityScore": 85,
    "sourceId": "27898",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 1
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "7d416b2b-e8ef-4827-a34f-5ba25f4025a7",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "حمله نیروهای امنیتی به معترضان در چندین شهر",
    "summary": "در جریان اعتراضات در محله دره‌دریژ (شهرک مهدیه) کرمانشاه، نیروهای سپاه نبی‌اکرم با سلاح‌های سنگین (دوشکا) به سوی مردم شلیک کردند که منجر به کشته شدن چندین شهروند از جمله سامان نظری و کشته شدن تعدادی از نیروهای حکومتی شد.",
    "category": "Kinetic Clashes",
    "date": "2026-01-08",
    "locationName": "دره‌دریژ، کرمانشاه",
    "lat": 34.3277,
    "lng": 47.0778,
    "reliabilityScore": 90,
    "sourceId": "27896, 27895, 27894, 27891, 27871",
    "protestorCount": 500,
    "validationScore": 1,
    "casualties": {
      "dead": 5,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 10,
      "injured": 0
    },
    "id": "9d4d2c8a-2851-411b-ac7d-fe5b5b0ae990",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "درگیری شدید و عقب‌نشینی نیروها در اسلام‌آباد غرب",
    "summary": "درگیری‌های شدیدی در اسلام‌آباد غرب رخ داد که منجر به کشته شدن دست‌کم یک شهروند و سه عضو سپاه شد. نیروهای حکومتی ناچار به عقب‌نشینی مقطعی شدند.",
    "category": "Kinetic Clashes",
    "date": "2026-01-08",
    "locationName": "اسلام‌آباد غرب",
    "lat": 34.1083,
    "lng": 46.5244,
    "reliabilityScore": 80,
    "sourceId": "27893",
    "protestorCount": 300,
    "validationScore": 1,
    "casualties": {
      "dead": 1,
      "injured": 5,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 3,
      "injured": 0
    },
    "id": "be63c8e2-1292-43ff-bccb-31cf5854367c",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "موج بازداشت ۱۸ شهروند در مناطق مختلف کوردنشین",
    "summary": "بازداشت دست‌کم ۱۸ شهروند در شهرهای ملکشاهی، گیلان‌غرب، آبدانان، قصرشیرین، دره‌شهر، دیواندره، سبزوار و سنقر توسط نیروهای امنیتی.",
    "category": "Civil Unrest",
    "date": "2026-01-09",
    "locationName": "ایلام و کردستان",
    "lat": 33.6374,
    "lng": 46.4227,
    "reliabilityScore": 90,
    "sourceId": "27892",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 18
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "99e2ff41-6774-4271-9f42-bd5c02751b11",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "قطع سراسری اینترنت در ایران",
    "summary": "اینترنت در بخش‌های وسیعی از ایران به منظور سرکوب اعتراضات و قطع ارتباطات به طور کامل قطع شد.",
    "category": "Cyber",
    "date": "2026-01-08",
    "locationName": "ایران",
    "lat": 32.4279,
    "lng": 53.688,
    "reliabilityScore": 95,
    "sourceId": "27875, 27858",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "a3e2dbb6-45ba-4937-915c-20beb862e158",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "کشته شدن رضا رحمتی در ملارد",
    "summary": "رضا رحمتی در جریان اعتراضات مردمی در ملارد با شلیک مستقیم نیروهای حکومتی جان باخت.",
    "category": "Kinetic Clashes",
    "date": "2026-01-09",
    "locationName": "ملارد",
    "lat": 35.6658,
    "lng": 50.9767,
    "reliabilityScore": 90,
    "sourceId": "27887",
    "protestorCount": 100,
    "validationScore": 1,
    "casualties": {
      "dead": 1,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "76d361ad-4dea-4f7c-812f-c63501715311",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "بازداشت کادر درمان در دهلران",
    "summary": "چهار پرستار بیمارستان دهلران به دلیل مداوای مجروحان اعتراضات توسط نیروهای امنیتی بازداشت شدند.",
    "category": "Humanitarian",
    "date": "2026-01-09",
    "locationName": "دهلران",
    "lat": 32.6941,
    "lng": 47.2679,
    "reliabilityScore": 90,
    "sourceId": "27886",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 0,
      "injured": 0,
      "detained": 4
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "e182bfc6-c59c-44b4-b28a-fdc7f1f747cb",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "اعدام ۱۳ زندانی در چندین شهر",
    "summary": "حکم اعدام ۱۳ زندانی با اتهامات مختلف در زندان‌های یزد، کرج، کرمان، دزفول، اهواز و کاشمر اجرا شد.",
    "category": "Political",
    "date": "2026-01-09",
    "locationName": "یزد، کرج، کرمان، دزفول، اهواز، کاشمر",
    "lat": 31.8974,
    "lng": 54.3569,
    "reliabilityScore": 90,
    "sourceId": "27885",
    "protestorCount": 0,
    "validationScore": 1,
    "casualties": {
      "dead": 13,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "495c476c-5503-4938-a4fc-65b94b96b1ae",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "کشته شدن ۷ شهروند در لردگان",
    "summary": "در جریان اعتراضات لردگان، ۷ شهروند لُر با شلیک مستقیم نیروهای حکومتی کشته شدند.",
    "category": "Kinetic Clashes",
    "date": "2026-01-09",
    "locationName": "لردگان",
    "lat": 31.5103,
    "lng": 50.8222,
    "reliabilityScore": 90,
    "sourceId": "27883",
    "protestorCount": 200,
    "validationScore": 1,
    "casualties": {
      "dead": 7,
      "injured": 0,
      "detained": 0
    },
    "securityCasualties": {
      "dead": 0,
      "injured": 0
    },
    "id": "8da68e0d-04fd-455d-9b16-4f241964c1ed",
    "sourceType": "Telegram",
    "sourceUrl": "https://t.me/Hengaw_Org"
  },
  {
    "title": "کشته شدن معترضان در چناران",
    "summary": "دست‌کم ۵ شهروند کورد در چناران از جمله مرتضی جهانبخش و روح‌الله ستاره مشتری با شلیک مستقیم نیروهای حکومتی کشته شدند.",
    "category": "Kinetic Clashes",
    "date": "2026-01-07",
    "locationName": "چناران",
    "lat": 36.6456,
    "lng": 59.1212,
    "reliabilityScore": 90,
    "sourceId": "27874, 27854, 27853, 27846",
    "protestorCount": 200,
    "validationScore": 1,
    "casualties": {
      "dead": 5,
      "injured": 0,
      "detained": 0
