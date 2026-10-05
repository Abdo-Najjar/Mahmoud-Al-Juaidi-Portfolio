/**
 * Mahmoud Al-Juaidi - AI Commercials & Performance Ads Portfolio
 * Full Bilingual Engine (AR/EN), 24 Commercial Video Ads, Dynamic Grid, Lightbox Modal & Particles
 */

const WHATSAPP_PHONE = "970598564698";
const WHATSAPP_DISPLAY = "+970 598 564 698";

const translations = {
  ar: {
    // Nav
    "nav.name": "محمود الجعيدي",
    "nav.role": "فيديوهات AI وإعلانات ممولة",
    "nav.home": "الرئيسية",
    "nav.work": "أعمالي",
    "nav.about": "عن محمود",
    "nav.contact": "تواصل معي",
    "nav.talk": "تواصل واتساب",

    // Hero
    "hero.badge": "خريج الجامعة الإسلامية بغزة 2026 • تكنولوجيا معلومات (IT)",
    "hero.title1": "صناعة إعلانات الفيديو بالذكاء الاصطناعي",
    "hero.title2": "وإدارة الحملات الممولة",
    "hero.desc": "أهلاً بك، أنا <strong>محمود الجعيدي</strong>. أجمع بين دراستي البرمجية في تكنولوجيا المعلومات وخبرتي في أدوات الذكاء الاصطناعي التوليدي لإنتاج فيديوهات إعلانية احترافية وإدارة حملاتك الممولة لتحقيق مبيعات حقيقية بأعلى كفاءة.",
    "hero.viewWork": "استعرض الفيديوهات (24 نموذج)",
    "hero.contactBtn": "تواصل معي مباشرة",
    "hero.scrollDown": "استكشف الأعمال",
    "hero.photoRole": "خبير إعلانات AI",

    // Work Section
    "work.title": "معرض الأعمال والفيديوهات (24 نموذج واقعي)",
    "work.desc": "نماذج إعلانية متنوعة تم إنتاجها بالذكاء الاصطناعي بنسبة 9:16 المخصصة للسوشيال ميديا (تيك توك، ريلز، وسناب شات).",
    "filter.all": "الكل (24)",
    "filter.food": "مطاعم وأغذية",
    "filter.sweets": "حلويات",
    "filter.beauty": "تجميل وعناية",
    "filter.fitness": "لياقة وجيم",
    "filter.fashion": "أزياء وموضة",
    "filter.tech": "إلكترونيات وجيمنج",
    "filter.services": "خدمات ومناسبات",
    "work.play": "▶ تشغيل الفيديو",

    // About Section
    "about.degree": "خريج الجامعة الإسلامية بغزة 2026 • تكنولوجيا معلومات (IT)",
    "about.title": "نبذة عن محمود الجعيدي",
    "about.p1": "أنا <strong>محمود الجعيدي</strong>، خريج <strong>الجامعة الإسلامية بغزة (دفعة 2026)</strong> بعد دراسة استمرت 4 سنوات في قسم <strong>تكنولوجيا المعلومات (IT) وتطوير البرمجيات</strong>.",
    "about.p2": "خلال مسيرتي، وظّفت العقلية البرمجية والتحليلية في مجال <strong>صناعة فيديوهات الذكاء الاصطناعي التوليدي</strong> وإدارة <strong>الحملات الإعلانية الممولة (Media Buying)</strong> على منصات فيسبوك، إنستغرام، تيك توك، وسناب شات.",
    "about.p3": "هدفي هو مساعدة المتاجر والأنشطة التجارية على الوصول لعملاء مهتمين ومضاعفة المبيعات بأقل تكلفة ممكنة، من خلال الجمع بين جاذبية الإعلان البصري ودقة الاستهداف الإعلاني.",
    "s1.title": "فيديوهات إعلانية ذكية (AI)",
    "s1.desc": "إنتاج مشاهد بصرية سينمائية مع تعليق صوتي واقعي ومؤثرات مصممة للريلز والتيك توك دون تكاليف تصوير تقليدية باهظة.",
    "s2.title": "إدارة الحملات الممولة",
    "s2.desc": "تخطيط واستهداف دقيق وتحسين معدلات التحويل (CRO) لضمان تحقيق أعلى عائد على الإنفاق الإعلاني (ROAS).",
    "s3.title": "الربط التقني وتتبع البيكسل",
    "s3.desc": "إعداد وتتبع Meta Pixel و CAPI مع ربط دقيق بمتجرك لضمان قياس كل عملية بيع بدقة وبناء جماهير إعادة الاستهداف.",

    // Contact
    "contact.badge": "جاهز للتعاون",
    "contact.title": "هل ترغب بإطلاق إعلان فيديو مميز لمتجرك؟",
    "contact.desc": "تواصل معي مباشرة لمناقشة فكرة مشروعك والبدء بإنتاج فيديوهات إعلانية مخصصة ترفع مبيعاتك.",
    "contact.btnWa": "محادثة فورية على واتساب",
    "contact.formTitle": "أو أرسل تفاصيل مشروعك",
    "f.name": "الاسم / اسم النشاط التجاري",
    "f.phone": "رقم الهاتف / الواتساب",
    "f.service": "الخدمة المطلوبة",
    "f.opt1": "صناعة فيديوهات إعلانية بالذكاء الاصطناعي",
    "f.opt2": "إدارة حملات إعلانية ممولة",
    "f.opt3": "بكج كامل (فيديو + إدارة حملات)",
    "f.msg": "تفاصيل المشروع أو رابط منتجك",
    "f.send": "إرسال التفاصيل عبر واتساب",

    // Modal
    "modal.btn": "طلب إعلان مماثل عبر واتساب",

    // Footer
    "footer.text": "جميع الحقوق محفوظة © 2026"
  },

  en: {
    // Nav
    "nav.name": "Mahmoud Al-Juaidi",
    "nav.role": "AI Video Ads & Paid Media",
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.talk": "Chat on WhatsApp",

    // Hero
    "hero.badge": "Islamic University of Gaza Alum 2026 • IT & Software Development",
    "hero.title1": "High-Converting AI Video Ads",
    "hero.title2": "& Paid Media Management",
    "hero.desc": "Welcome! I'm <strong>Mahmoud Al-Juaidi</strong>. Combining software engineering precision with generative AI tools to craft cinematic video commercials and manage performance paid ads that drive profitable customer acquisition.",
    "hero.viewWork": "Explore Videos (24 Ads)",
    "hero.contactBtn": "Get in Touch",
    "hero.scrollDown": "Explore Portfolio",
    "hero.photoRole": "AI Ads Specialist",

    // Work Section
    "work.title": "Commercial Portfolio (24 Real Ads)",
    "work.desc": "Real-world commercial video ads produced with generative AI in 9:16 vertical format optimized for TikTok, Instagram Reels, and Snapchat.",
    "filter.all": "All (24)",
    "filter.food": "Food & Dining",
    "filter.sweets": "Sweets",
    "filter.beauty": "Beauty & Care",
    "filter.fitness": "Fitness & Gym",
    "filter.fashion": "Fashion",
    "filter.tech": "Tech & Gaming",
    "filter.services": "Services & Events",
    "work.play": "▶ Watch Video",

    // About Section
    "about.degree": "Islamic University of Gaza Graduate 2026 • IT & Software Development",
    "about.title": "About Mahmoud Al-Juaidi",
    "about.p1": "I am <strong>Mahmoud Al-Juaidi</strong>, a 2026 graduate of the <strong>Islamic University of Gaza</strong> with a 4-year degree in <strong>Information Technology (IT) and Software Development</strong>.",
    "about.p2": "Throughout my career, I've leveraged analytical programming thinking in <strong>Generative AI Video Production</strong> and <strong>Performance Media Buying</strong> across Facebook, Instagram, TikTok, and Snapchat.",
    "about.p3": "My mission is helping e-commerce brands and local businesses scale profitably with creative commercial visuals combined with hyper-targeted ad campaigns.",
    "s1.title": "AI Video Production",
    "s1.desc": "Cinema-grade commercial ads customized for TikTok, Reels, and Snapchat with realistic voiceovers and VFX.",
    "s2.title": "Paid Media Buying",
    "s2.desc": "Precision targeting, funnel architecture, and CRO to maximize your Return on Ad Spend (ROAS) on Meta & TikTok.",
    "s3.title": "Technical Tracking & Pixel",
    "s3.desc": "Full Meta Pixel & CAPI server-side tracking setup to measure every conversion accurately and build retargeting audiences.",

    // Contact
    "contact.badge": "Open for Collaborations",
    "contact.title": "Ready to launch high-converting video ads?",
    "contact.desc": "Reach out directly to discuss your brand and start producing bespoke AI video ads that scale your revenue.",
    "contact.btnWa": "Instant WhatsApp Chat",
    "contact.formTitle": "Or Send Project Details",
    "f.name": "Your Name / Brand Name",
    "f.phone": "Phone / WhatsApp Number",
    "f.service": "Required Service",
    "f.opt1": "AI Commercial Video Production",
    "f.opt2": "Paid Ads Management",
    "f.opt3": "Full Package (Video + Paid Ads)",
    "f.msg": "Your Message or Product Details",
    "f.send": "Send Details via WhatsApp",

    // Modal
    "modal.btn": "Request Similar AI Commercial on WhatsApp",

    // Footer
    "footer.text": "All rights reserved © 2026"
  }
};

const videoList = [
  {
    id: 1,
    titleAr: "OmarPhone | هواتف وإلكترونيات ذكية",
    titleEn: "OmarPhone | Smart Devices & Tech",
    catAr: "إلكترونيات",
    catEn: "Tech & Electronics",
    categoryKey: "tech",
    src: "./assets/videos/video_1.mp4",
    poster: "./assets/thumbnails/thumb_1.jpg",
    descAr: "إعلان سينمائي واقعي للأجهزة الذكية مع إضاءة استوديو ديناميكية وإبراز تفاصيل الهواتف لزيادة المبيعات.",
    descEn: "Photorealistic AI commercial for smartphones and devices with dynamic studio lighting to boost sales."
  },
  {
    id: 2,
    titleAr: "Angus Beef | مشاوي وستيك فاخر",
    titleEn: "Angus Beef | Premium Steaks & Grill",
    catAr: "مطاعم وأغذية",
    catEn: "Food & Dining",
    categoryKey: "food",
    src: "./assets/videos/video_2.mp4",
    poster: "./assets/thumbnails/thumb_2.jpg",
    descAr: "إعلان يثير حواس التذوق ويجمع بين تقطيع اللحوم الطازجة واللهب المتصاعد على الجريل لرفع حجوزات المطاعم.",
    descEn: "Sensory-rich food commercial with marbled beef cuts and flame grill flare-ups to maximize reservations."
  },
  {
    id: 3,
    titleAr: "حلويات لبيبة | أصالة المعمول والتمر",
    titleEn: "Labiba Sweets | Traditional Ma'amoul",
    catAr: "حلويات",
    catEn: "Sweets & Pastry",
    categoryKey: "sweets",
    src: "./assets/videos/video_3.mp4",
    poster: "./assets/thumbnails/thumb_3.jpg",
    descAr: "إعلان تراثي دافئ وفاخر يعكس كرم الضيافة وأصالة معمول التمر والحلويات، مناسب جداً لمواسم الأعياد.",
    descEn: "Warm, heritage commercial celebrating authentic ma'amoul, date cookies, and oriental pastries."
  },
  {
    id: 4,
    titleAr: "كلاسيك سنتر | بدل رجالية فخمة",
    titleEn: "Classic Center | Luxury Men's Suits",
    catAr: "أزياء وموضة",
    catEn: "Fashion & Apparel",
    categoryKey: "fashion",
    src: "./assets/videos/video_4.mp4",
    poster: "./assets/thumbnails/thumb_4.jpg",
    descAr: "إعلان يعتمد على تقنية الانتقال السحري الفوري إلى بدلة السهرة الأنيقة في ثانية واحدة لإبهار المشاهد.",
    descEn: "High-tempo commercial featuring an instant magic VFX transformation into a luxury tuxedo suit."
  },
  {
    id: 5,
    titleAr: "ماسال | عروض العناية بالبشرة 50%",
    titleEn: "Masal | 50% Off Skincare Routine",
    catAr: "تجميل وعناية",
    catEn: "Beauty & Care",
    categoryKey: "beauty",
    src: "./assets/videos/video_5.mp4",
    poster: "./assets/thumbnails/thumb_5.jpg",
    descAr: "إعلان ترويجي لعروض العناية بالبشرة مع حركة ثلاثية الأبعاد للمنتجات وفقاعات ماء عائمة وألوان ناعمة.",
    descEn: "Beauty promo for skincare routine with floating 3D water spheres, pastel pink tones, and smooth motion."
  },
  {
    id: 6,
    titleAr: "Mr. Crispy | برجر ودجاج مقرمش",
    titleEn: "Mr. Crispy | Fried Chicken & Burgers",
    catAr: "مطاعم وأغذية",
    catEn: "Food & Dining",
    categoryKey: "food",
    src: "./assets/videos/video_6.mp4",
    poster: "./assets/thumbnails/thumb_6.jpg",
    descAr: "إعلان حركي سريع لقطع الدجاج المقرمش المتطاير وساندوتشات التورتيلا وصوصات التغميس الشهية.",
    descEn: "Dynamic fast-paced commercial featuring flying crispy chicken tenders, loaded wraps, and tasty dips."
  },
  {
    id: 7,
    titleAr: "Mr. Crispy Mukbang | تجربة وتذوق الوجبات",
    titleEn: "Mr. Crispy | Mukbang & Taste Test",
    catAr: "مطاعم وأغذية",
    catEn: "Food & Dining",
    categoryKey: "food",
    src: "./assets/videos/video_7.mp4",
    poster: "./assets/thumbnails/thumb_7.jpg",
    descAr: "إعلان أسلوب حياة وتجربة واقعية لتناول والاستمتاع بوجبة كريسبي ضخمة بطريقة تزيد شهية المشاهد وتدفعه للطلب.",
    descEn: "Engaging lifestyle tasting ad showing genuine satisfaction eating a massive loaded crispy meal."
  },
  {
    id: 8,
    titleAr: "MA Makeup | روتين المكياج والجمال",
    titleEn: "MA Makeup | Glam Beauty Routine",
    catAr: "تجميل وعناية",
    catEn: "Beauty & Care",
    categoryKey: "beauty",
    src: "./assets/videos/video_8.mp4",
    poster: "./assets/thumbnails/thumb_8.jpg",
    descAr: "إعلان تسويقي فاخر لمستحضرات التجميل وفرش الميك أب أمام المرآة المضيئة في غرفة الملابس العصرية.",
    descEn: "Glamorous beauty commercial featuring makeup palettes and brushes in a modern illuminated vanity setting."
  },
  {
    id: 9,
    titleAr: "MA Luxury Boutique | بوتيك العطور والمكياج",
    titleEn: "MA Luxury Boutique | Perfumes & Glam",
    catAr: "تجميل وعناية",
    catEn: "Beauty & Care",
    categoryKey: "beauty",
    src: "./assets/videos/video_9.mp4",
    poster: "./assets/thumbnails/thumb_9.jpg",
    descAr: "إعلان بوتيك خيالي ساحر باللون الوردي والذهبي يعرض العطور وأحمر الشفاه الفاخر بتأثيرات بصرية مبهرة.",
    descEn: "Dreamy pink-and-gold boutique commercial showcasing luxury perfumes and cosmetics in an upscale aesthetic."
  },
  {
    id: 10,
    titleAr: "حلويات حبيبة | كنافة نابلسية وقشطة",
    titleEn: "Habiba Sweets | Authentic Kunafa",
    catAr: "حلويات",
    catEn: "Sweets & Pastry",
    categoryKey: "sweets",
    src: "./assets/videos/video_10.mp4",
    poster: "./assets/thumbnails/thumb_10.jpg",
    descAr: "إعلان يبرز تفاصيل الكنافة الذهبية المقرمشة بالفستق الحلبي وطبقات القشطة الطازجة لجذب عشاق الحلويات.",
    descEn: "Mouth-watering commercial showcasing golden crunchy kunafa loaded with pistachios and fresh cream."
  },
  {
    id: 11,
    titleAr: "تطبيق طلباتك | دليفري وتوصيل سريع",
    titleEn: "Talabatk App | Fast Food Delivery",
    catAr: "خدمات ومناسبات",
    catEn: "Services & Events",
    categoryKey: "services",
    src: "./assets/videos/video_11.mp4",
    poster: "./assets/thumbnails/thumb_11.jpg",
    descAr: "إعلان قصة واقعية لطلب الطعام أثناء العمل والدراسة ووصوله ساخناً وسريعاً لباب المنزل مع كابتن التوصيل.",
    descEn: "Relatable storytelling ad showing fast food delivery to the doorstep for busy students and professionals."
  },
  {
    id: 12,
    titleAr: "الأمير | كمبيوترات وجيمنج احترافي",
    titleEn: "El-Ameer | Pro Gaming & PC Setups",
    catAr: "إلكترونيات",
    catEn: "Tech & Electronics",
    categoryKey: "tech",
    src: "./assets/videos/video_12.mp4",
    poster: "./assets/thumbnails/thumb_12.jpg",
    descAr: "إعلان ترويجي لأجهزة الجيمنج ولابتوبات TUF وشاشات الألعاب والكيبوردات المضيئة RGB للاعبين وصناع المحتوى.",
    descEn: "High-octane tech commercial featuring pro RGB gaming rigs, TUF laptops, and ultra-wide battle stations."
  },
  {
    id: 13,
    titleAr: "SF Fitness | لياقة وتمارين نسائية",
    titleEn: "SF Fitness | Women's Gym & Training",
    catAr: "لياقة وجيم",
    catEn: "Fitness & Gym",
    categoryKey: "fitness",
    src: "./assets/videos/video_13.mp4",
    poster: "./assets/thumbnails/thumb_13.jpg",
    descAr: "إعلان حيوي لصالات الجيم النسائية والمدربات الخاصات مع التركيز على النشاط وبناء الجسم الرشيق والصحي.",
    descEn: "Energetic women's fitness commercial focusing on personalized coaching, strength, and healthy lifestyle."
  },
  {
    id: 14,
    titleAr: "Junior Trend | أزياء وملابس أطفال",
    titleEn: "Junior Trend | Trendy Kids Fashion",
    catAr: "أزياء وموضة",
    catEn: "Fashion & Apparel",
    categoryKey: "fashion",
    src: "./assets/videos/video_14.mp4",
    poster: "./assets/thumbnails/thumb_14.jpg",
    descAr: "إعلان ممتع وعصري لأطفال يستعرضون ملابس وموديلات الصيف والأعياد داخل متجر أزياء متكامل.",
    descEn: "Charming fashion commercial featuring kids rocking stylish summer and holiday outfits inside a boutique."
  },
  {
    id: 15,
    titleAr: "FS Crossfit | تمارين الكروس فت والقوة",
    titleEn: "FS Crossfit | Functional Fitness & Power",
    catAr: "لياقة وجيم",
    catEn: "Fitness & Gym",
    categoryKey: "fitness",
    src: "./assets/videos/video_15.mp4",
    poster: "./assets/thumbnails/thumb_15.jpg",
    descAr: "إعلان تحفيزي قوي بأسلوب رياضي سينمائي مع حبال المقاومة والتمارين المكثفة لزيادة اشتراكات الجيم.",
    descEn: "Inspiring sports commercial highlighting intense battle ropes, endurance training, and gym memberships."
  },
  {
    id: 16,
    titleAr: "MGYM | كمال أجسام وتمارين حديد",
    titleEn: "MGYM | Heavy Bodybuilding & Iron",
    catAr: "لياقة وجيم",
    catEn: "Fitness & Gym",
    categoryKey: "fitness",
    src: "./assets/videos/video_16.mp4",
    poster: "./assets/thumbnails/thumb_16.jpg",
    descAr: "إعلان رياضي رجالي يبرز روح الانضباط ورفع الأثقال والأوزان الثقيلة في استوديو جيم ذو إضاءة احترافية.",
    descEn: "Powerful men's bodybuilding ad showcasing heavy lifting, discipline, and dark aesthetic gym atmosphere."
  },
  {
    id: 17,
    titleAr: "ديرما ثيرابي | عيادة ليزر وعناية بالبشرة",
    titleEn: "Derma Therapy | Laser & Skincare Clinic",
    catAr: "تجميل وعناية",
    catEn: "Beauty & Care",
    categoryKey: "beauty",
    src: "./assets/videos/video_17.mp4",
    poster: "./assets/thumbnails/thumb_17.jpg",
    descAr: "إعلان طبي تجميلي هادئ وراقي لجلسات إزالة الشعر بالليزر وتنظيف البشرة العميق والهيدرافيشل.",
    descEn: "Serene aesthetic medical commercial for advanced laser hair removal and rejuvenating hydrafacial treatments."
  },
  {
    id: 18,
    titleAr: "لبيبة بوكس الضيافة | كعك وبرازق العيد",
    titleEn: "Labiba Sweets | Heritage Hospitality Box",
    catAr: "حلويات",
    catEn: "Sweets & Pastry",
    categoryKey: "sweets",
    src: "./assets/videos/video_18.mp4",
    poster: "./assets/thumbnails/thumb_18.jpg",
    descAr: "إعلان يعرض صناديق الضيافة الفاخرة وشاي الكرم وحلويات البرازق وكعك العيد المغطى بالسمسم الذهبي.",
    descEn: "Delectable hospitality commercial highlighting luxury cookie gift boxes paired with authentic tea."
  },
  {
    id: 19,
    titleAr: "مجموعة الكيراتين | عناية فائقة بالشعر",
    titleEn: "Keratin Therapy | Luxury Hair Care",
    catAr: "تجميل وعناية",
    catEn: "Beauty & Care",
    categoryKey: "beauty",
    src: "./assets/videos/video_19.mp4",
    poster: "./assets/thumbnails/thumb_19.jpg",
    descAr: "إعلان مستحضرات علاج الشعر بالكيراتين والزيوت الطبيعية مع إظهار النعومة واللمعان الحريري للشعر.",
    descEn: "Salon-grade haircare commercial demonstrating the transformative smoothness and silk shine of keratin treatments."
  },
  {
    id: 20,
    titleAr: "د. رولا الحاج | ابتسامة هوليوود وتجميل الأسنان",
    titleEn: "Dr. Rula Elhaj | Hollywood Smile Clinic",
    catAr: "تجميل وعناية",
    catEn: "Beauty & Care",
    categoryKey: "beauty",
    src: "./assets/videos/video_20.mp4",
    poster: "./assets/thumbnails/thumb_20.jpg",
    descAr: "إعلان عيادة أسنان يركز على استعادة الثقة بالابتسامة الناصعة البيضاء وتفاصيل الفحص والعلاج الدقيق.",
    descEn: "Confident dental clinic commercial featuring cosmetic dentistry, teeth whitening, and bright smiles."
  },
  {
    id: 21,
    titleAr: "NH Events | قاعات أفراح ومناسبات ملكية",
    titleEn: "NH Events | Royal Wedding & Banquet Hall",
    catAr: "خدمات ومناسبات",
    catEn: "Services & Events",
    categoryKey: "services",
    src: "./assets/videos/video_21.mp4",
    poster: "./assets/thumbnails/thumb_21.jpg",
    descAr: "إعلان لقاعات الأعراس الملكية بالثريات الكريستالية وتنسيقات البالونات وطاولات الضيافة الفخمة.",
    descEn: "Majestic wedding venue commercial showcasing sparkling chandeliers, floral arches, and banquet setups."
  },
  {
    id: 22,
    titleAr: "أوتو سيرفس | صيانة سيارات وخدمة الطريق",
    titleEn: "Auto Service | Roadside Assistance & Care",
    catAr: "خدمات ومناسبات",
    catEn: "Services & Events",
    categoryKey: "services",
    src: "./assets/videos/video_22.mp4",
    poster: "./assets/thumbnails/thumb_22.jpg",
    descAr: "إعلان قصة عطل مفاجئ للسيارة والحل الفوري عبر خدمات الصيانة وقطع الغيار وخدمة الطريق السريعة.",
    descEn: "Dynamic automotive service commercial highlighting prompt roadside assistance and expert mechanics."
  },
  {
    id: 23,
    titleAr: "D Clinic | نحت القوام والتجميل غير الجراحي",
    titleEn: "D Clinic | Body Sculpting & Aesthetics",
    catAr: "تجميل وعناية",
    catEn: "Beauty & Care",
    categoryKey: "beauty",
    src: "./assets/videos/video_23.mp4",
    poster: "./assets/thumbnails/thumb_23.jpg",
    descAr: "إعلان عيادة تجميل ونحت قوام وفيلر مع طاقم طبي متخصص وأحدث الأجهزة الطبية المعتمدة.",
    descEn: "Medical aesthetics commercial showcasing advanced body contouring, sculpting, and anti-aging treatments."
  },
  {
    id: 24,
    titleAr: "MG Gym | تدريب كارديو وقوة بدنية",
    titleEn: "MG Gym | Endurance & Power Workouts",
    catAr: "لياقة وجيم",
    catEn: "Fitness & Gym",
    categoryKey: "fitness",
    src: "./assets/videos/video_24.mp4",
    poster: "./assets/thumbnails/thumb_24.jpg",
    descAr: "إعلان حماسي سريع يجمع بين تمارين السلم الرياضي والكارديو ورفع الأثقال لتحفيز الشباب على الاشتراك.",
    descEn: "High-intensity athletic gym commercial combining stairmaster cardio, sprints, and deadlift power."
  }
];

let currentLang = localStorage.getItem("mahmoud_lang") || "ar";
let currentFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  renderVideoCards(currentFilter);
  initFilters();
  initContactForm();
  initMobileMenu();
  initBackToTop();
  initScrollSpy();
  initStudioParticles();
  initMouseGlow();
  initScrollReveal();
});

// Render Video Cards into Grid
function renderVideoCards(filter = "all") {
  const container = document.getElementById("videosContainer");
  if (!container) return;
  const isEn = currentLang === "en";

  const list = filter === "all"
    ? videoList
    : videoList.filter(v => v.categoryKey === filter);

  container.innerHTML = list.map((v, i) => `
    <div class="video-card bg-[#101726]/85 backdrop-blur-md border border-slate-800 rounded-xl p-2.5 flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg group/card" data-category="${v.categoryKey}" data-id="${v.id}">
      <div>
        <div class="relative w-full aspect-[9/16] rounded-lg overflow-hidden bg-black cursor-pointer group video-thumb-box">
          <video class="w-full h-full object-cover card-video" src="${v.src}" poster="${v.poster}" muted playsinline loop preload="none"></video>
          <div class="absolute inset-0 bg-black/35 group-hover:bg-transparent transition-colors flex items-center justify-center pointer-events-none">
            <div class="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
              <svg class="w-4 h-4 fill-current ps-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <span class="absolute top-2 start-2 px-2 py-0.5 bg-black/75 backdrop-blur-sm text-[10px] rounded text-emerald-400 font-medium">${isEn ? v.catEn : v.catAr}</span>
        </div>
        <h3 class="text-xs font-bold text-white mt-3 mb-1 line-clamp-1 group-hover/card:text-emerald-400 transition-colors">${isEn ? v.titleEn : v.titleAr}</h3>
        <p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">${isEn ? v.descEn : v.descAr}</p>
      </div>
      <button class="open-modal-btn w-full mt-3 py-1.5 bg-slate-800/80 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5" data-id="${v.id}">
        <svg class="w-3 h-3 fill-current ps-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        <span>${isEn ? "Watch Video" : "تشغيل الفيديو"}</span>
      </button>
    </div>
  `).join("");

  bindVideoEvents();
}

// Bind Hover Preview & Modal Click
function bindVideoEvents() {
  const cards = document.querySelectorAll(".video-card");
  const modal = document.getElementById("videoModal");
  const modalBox = document.getElementById("modalBox");
  const closeBtn = document.getElementById("modalCloseBtn");
  const modalVideo = document.getElementById("modalVideo");
  const modalTitle = document.getElementById("modalTitle");
  const modalCat = document.getElementById("modalCat");
  const modalDesc = document.getElementById("modalDesc");
  const modalWaBtn = document.getElementById("modalWaBtn");

  cards.forEach(card => {
    const video = card.querySelector(".card-video");
    if (!video) return;

    // Hover Preview
    card.addEventListener("mouseenter", () => {
      video.muted = true;
      video.play().catch(() => {});
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    // Open Modal on Card Click or Button Click
    const openBtn = card.querySelector(".open-modal-btn");
    const thumbBox = card.querySelector(".video-thumb-box");

    const openHandler = () => {
      const id = parseInt(card.getAttribute("data-id"), 10);
      const data = videoList.find(v => v.id === id);
      if (!data) return;

      const isEn = currentLang === "en";
      modalVideo.src = data.src;
      modalVideo.poster = data.poster;
      modalTitle.textContent = isEn ? data.titleEn : data.titleAr;
      modalCat.textContent = isEn ? data.catEn : data.catAr;
      modalDesc.textContent = isEn ? data.descEn : data.descAr;

      const waMsg = isEn 
        ? `Hello Mahmoud! I saw your AI commercial "${data.titleEn}" and I'd like to produce a similar video ad for my business.`
        : `مرحباً محمود، شاهدت نموذج إعلان "${data.titleAr}" وأرغب في إنتاج فيديو إعلاني مماثل بالذكاء الاصطناعي لمتجري.`;

      modalWaBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMsg)}`;

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        if (modalBox) {
          modalBox.classList.remove("scale-95");
          modalBox.classList.add("scale-100");
        }
      }, 10);

      modalVideo.muted = false;
      modalVideo.play().catch(() => {
        modalVideo.muted = true;
        modalVideo.play();
      });
    };

    if (openBtn) openBtn.addEventListener("click", openHandler);
    if (thumbBox) thumbBox.addEventListener("click", openHandler);
  });

  function closeModal() {
    if (modalBox) {
      modalBox.classList.remove("scale-100");
      modalBox.classList.add("scale-95");
    }
    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
      modalVideo.pause();
      modalVideo.src = "";
    }, 150);
  }

  if (closeBtn) closeBtn.onclick = closeModal;
  if (modal) {
    modal.onclick = e => {
      if (e.target === modal) closeModal();
    };
  }

  document.onkeydown = e => {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeModal();
    }
  };
}

// Category Filter Logic
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active", "bg-emerald-500", "text-slate-950");
        b.classList.add("bg-slate-800/80", "text-slate-300");
      });
      btn.classList.add("active", "bg-emerald-500", "text-slate-950");
      btn.classList.remove("bg-slate-800/80", "text-slate-300");

      currentFilter = btn.getAttribute("data-filter");
      renderVideoCards(currentFilter);
    });
  });
}

// Language Switcher Logic
function initLanguage() {
  const toggleBtn = document.getElementById("langToggleBtn");

  applyLang(currentLang);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "ar" ? "en" : "ar";
      localStorage.setItem("mahmoud_lang", currentLang);
      applyLang(currentLang);
      renderVideoCards(currentFilter);
    });
  }
}

function applyLang(lang) {
  const isEn = lang === "en";
  document.documentElement.lang = isEn ? "en" : "ar";
  document.documentElement.dir = isEn ? "ltr" : "rtl";

  const langText = document.getElementById("langText");
  if (langText) {
    langText.textContent = isEn ? "العربية" : "English";
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.title = isEn 
    ? "Mahmoud Al-Juaidi | AI Video Ads & Paid Media Specialist"
    : "محمود الجعيدي | صناعة إعلانات الفيديو بالذكاء الاصطناعي والحملات الممولة";
}

// ScrollSpy Navigation
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    navItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${currentId}`) {
        item.classList.add("active");
      }
    });
  }, { passive: true });
}

// Back to Top Button
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      btn.classList.remove("opacity-0", "pointer-events-none");
      btn.classList.add("opacity-100", "pointer-events-auto");
    } else {
      btn.classList.add("opacity-0", "pointer-events-none");
      btn.classList.remove("opacity-100", "pointer-events-auto");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Contact Form to WhatsApp Generator
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("formName").value.trim();
    const contact = document.getElementById("formContact").value.trim();
    const service = document.getElementById("formService").value;
    const msg = document.getElementById("formMsg").value.trim();

    const isEn = currentLang === "en";
    let text = "";

    if (isEn) {
      text = `*New Inquiry via Portfolio*\n\n` +
             `👤 *Name:* ${name}\n` +
             `📞 *Contact:* ${contact}\n` +
             `🎯 *Service:* ${service}\n` +
             `📝 *Message:* ${msg || 'Direct inquiry'}\n\n` +
             `Looking forward to collaborating with Mahmoud Al-Juaidi!`;
    } else {
      text = `*طلب مشروع إعلاني جديد*\n\n` +
             `👤 *الاسم / المتجر:* ${name}\n` +
             `📞 *رقم التواصل:* ${contact}\n` +
             `🎯 *الخدمة المطلوبة:* ${service}\n` +
             `📝 *التفاصيل:* ${msg || 'تواصل مباشر'}\n\n` +
             `أتطلع للعمل معك يا محمود!`;
    }

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });
}

// Mobile Menu Drawer
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const drawer = document.getElementById("mobileDrawer");
  const links = document.querySelectorAll(".mobile-link");

  if (!btn || !drawer) return;

  btn.addEventListener("click", () => {
    drawer.classList.toggle("hidden");
  });

  links.forEach(l => {
    l.addEventListener("click", () => {
      drawer.classList.add("hidden");
    });
  });
}

// Ambient Cinema Studio Dust & Luminescent Embers
function initStudioParticles() {
  const canvas = document.getElementById("studioParticles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle color palette: Emerald, Cyan, Teal, Gold Amber
  const palette = [
    { r: 16, g: 185, b: 129 }, // Emerald
    { r: 6, g: 182, b: 212 },  // Cyan
    { r: 20, g: 184, b: 166 }, // Teal
    { r: 245, g: 158, b: 11 }  // Warm tungsten ember
  ];

  const particleCount = Math.min(45, Math.max(25, Math.floor(width / 35)));
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const col = palette[Math.floor(Math.random() * palette.length)];
    const z = Math.random(); // 0 (far) to 1 (near)
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: z * 2.2 + 0.8,
      r: col.r,
      g: col.g,
      b: col.b,
      baseAlpha: z * 0.40 + 0.25,
      alpha: 0.25,
      phase: Math.random() * Math.PI * 2,
      speedY: -((1 - z * 0.4) * 0.35 + 0.1),
      speedX: (Math.random() - 0.5) * 0.25,
      z: z
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += p.speedY;
      p.x += p.speedX;
      p.phase += 0.018;

      p.alpha = p.baseAlpha * (0.65 + 0.35 * Math.sin(p.phase));

      if (p.y < -20) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;

      // Draw soft glowing ember halo
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.5);
      grad.addColorStop(0, `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha})`);
      grad.addColorStop(0.35, `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha * 0.55})`);
      grad.addColorStop(1, `rgba(${p.r}, ${p.g}, ${p.b}, 0)`);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Sharp central luminous core for closer embers
      if (p.z > 0.45) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.75})`;
        ctx.fill();
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// Gentle Scroll Reveal for on-screen animations
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  // Immediate activation for older browsers or if IntersectionObserver not supported
  if (!("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px"
  });

  reveals.forEach(el => {
    // If element is already in viewport or in hero, activate immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("active");
    } else {
      observer.observe(el);
    }
  });
}

// Interactive Ambient Cursor Spotlight & Living Studio Lighting
function initMouseGlow() {
  const glow = document.getElementById("mouseGlow");
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 3;
  let currentX = mouseX;
  let currentY = mouseY;
  let isIdle = true;
  let idleTimer = null;
  let idleAngle = 0;

  window.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isIdle = false;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { isIdle = true; }, 2500);
  }, { passive: true });

  window.addEventListener("touchmove", e => {
    if (e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
      isIdle = false;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { isIdle = true; }, 3000);
    }
  }, { passive: true });

  function animate() {
    if (isIdle) {
      idleAngle += 0.012;
      // Gentle breathing orbit across upper studio stage
      const targetX = window.innerWidth / 2 + Math.sin(idleAngle) * (window.innerWidth * 0.22);
      const targetY = window.innerHeight * 0.32 + Math.cos(idleAngle * 0.7) * (window.innerHeight * 0.12);
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
    } else {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
    }
    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;
    glow.style.transform = `translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }
  animate();
}

