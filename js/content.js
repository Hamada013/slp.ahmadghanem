/**
 * Bilingual content for repeating sections.
 * Edit text here; Arabic (ar) and English (en) side by side.
 */
window.CONTENT = {
  /* ---------------- Services ---------------- */
  services: [
    {
      id: "hearing",
      featured: true,
      icon: "i-ear",
      title: { ar: "تأهيل ضعف السمع وزراعة القوقعة", en: "Hearing Loss & Cochlear Implant Rehabilitation" },
      short: {
        ar: "تخصصي الأساسي: برامج سمعية لفظية تساعد الطفل على الاستفادة القصوى من السماعة أو زراعة القوقعة.",
        en: "My core specialty: auditory-verbal programs that help children get the most from hearing aids or cochlear implants.",
      },
      points: {
        ar: [
          "تدريب سمعي متدرّج من اكتشاف الصوت إلى فهم الكلام",
          "تطوير الكلام واللغة لدى أطفال السماعات وزراعة القوقعة",
          "متابعة ما بعد الزراعة باستخدام أدوات MED-EL المعتمدة",
          "تدريب الأهل على خلق بيئة سمعية غنية في المنزل",
        ],
        en: [
          "Step-by-step auditory training, from detecting sound to understanding speech",
          "Speech and language development for children with hearing aids or implants",
          "Post-implant follow-up using established MED-EL rehabilitation tools",
          "Coaching parents to build a rich listening environment at home",
        ],
      },
    },
    {
      id: "delay",
      icon: "i-message",
      title: { ar: "تأخر الكلام واللغة", en: "Speech & Language Delay" },
      short: {
        ar: "للأطفال الذين يتأخرون في الكلام أو يجدون صعوبة في فهم اللغة أو التعبير بها.",
        en: "For children who are late to talk or find it hard to understand or use language.",
      },
      points: {
        ar: [
          "زيادة المفردات وبناء الجمل",
          "تطوير الفهم واتباع التعليمات",
          "أنشطة لعب هادفة تناسب عمر الطفل واهتماماته",
        ],
        en: [
          "Growing vocabulary and building sentences",
          "Improving understanding and following directions",
          "Purposeful play activities matched to the child's age and interests",
        ],
      },
    },
    {
      id: "articulation",
      icon: "i-smile",
      title: { ar: "اضطرابات النطق والأصوات", en: "Articulation & Speech Sound Disorders" },
      short: {
        ar: "علاج صعوبات نطق الأصوات واللثغات لجعل كلام الطفل أوضح وأسهل فهماً.",
        en: "Treating sound errors and lisps so your child's speech becomes clearer and easier to understand.",
      },
      points: {
        ar: [
          "تقييم دقيق للأصوات الصعبة لدى الطفل",
          "علاج اضطرابات النطق الحركية ومنها أبراكسيا الكلام (DTTC)",
          "تمارين ممتعة يمكن تطبيقها يومياً في المنزل",
        ],
        en: [
          "Detailed assessment of the sounds your child finds difficult",
          "Motor speech treatment, including childhood apraxia of speech (DTTC)",
          "Fun practice routines you can use daily at home",
        ],
      },
    },
    {
      id: "fluency",
      icon: "i-wave",
      title: { ar: "التأتأة", en: "Stuttering" },
      short: {
        ar: "مساعدة الطفل على الكلام بطلاقة وثقة، وتقليل التوتر المرتبط بالكلام.",
        en: "Helping children speak more fluently and confidently, and reducing speech-related tension.",
      },
      points: {
        ar: [
          "تقييم شدة التأتأة باستخدام مقياس SSI-4",
          "استراتيجيات للكلام السلس تناسب عمر الطفل",
          "إرشاد الأهل للتعامل الصحيح مع التأتأة في المنزل",
        ],
        en: [
          "Measuring stuttering severity with the SSI-4",
          "Age-appropriate strategies for smoother speech",
          "Guiding parents on how to respond to stuttering at home",
        ],
      },
    },
    {
      id: "autism",
      icon: "i-puzzle",
      title: { ar: "التواصل لدى أطفال طيف التوحد", en: "Communication in Autism" },
      short: {
        ar: "تنمية مهارات التواصل والتفاعل الاجتماعي واللعب لدى أطفال طيف التوحد.",
        en: "Building communication, social interaction and play skills for autistic children.",
      },
      points: {
        ar: [
          "تطوير الانتباه المشترك والتقليد وتبادل الأدوار",
          "بناء التواصل الوظيفي للتعبير عن الحاجات",
          "تنمية مهارات اللعب والتفاعل مع الآخرين",
        ],
        en: [
          "Developing joint attention, imitation and turn-taking",
          "Building functional communication to express needs",
          "Growing play skills and interaction with others",
        ],
      },
    },
    {
      id: "voice",
      icon: "i-mic",
      title: { ar: "اضطرابات الصوت", en: "Voice Disorders" },
      short: {
        ar: "علاج بحّة الصوت ومشكلات طبقة الصوت وشدته وجودته.",
        en: "Treating hoarseness and problems with pitch, loudness and voice quality.",
      },
      points: {
        ar: [
          "تحليل صوتي باستخدام برامج متخصصة مثل PRAAT",
          "تمارين صوتية وتنفسية مدروسة",
          "إرشادات للعناية بالصوت والوقاية من إجهاده",
        ],
        en: [
          "Acoustic voice analysis with specialized software such as PRAAT",
          "Structured voice and breathing exercises",
          "Vocal hygiene guidance to prevent strain",
        ],
      },
    },
    {
      id: "aac",
      icon: "i-grid",
      title: { ar: "التواصل البديل والمعزز", en: "Augmentative & Alternative Communication (AAC)" },
      short: {
        ar: "وسائل تواصل بالصور والأجهزة للأطفال الذين لا يستطيعون الاعتماد على الكلام وحده.",
        en: "Picture-based and device-based communication for children who can't rely on speech alone.",
      },
      points: {
        ar: [
          "اختيار وسيلة التواصل الأنسب لقدرات الطفل",
          "بناء لوحات تواصل مخصصة باللهجة السورية",
          "تدريب الطفل والأهل على استخدامها في الحياة اليومية",
        ],
        en: [
          "Choosing the communication system that best fits the child",
          "Building custom communication boards in Syrian Arabic",
          "Training the child and family to use it in daily life",
        ],
      },
    },
    {
      id: "parents",
      icon: "i-users",
      title: { ar: "إرشاد الأهل وتدريبهم", en: "Parent Coaching" },
      short: {
        ar: "جلسات تمنحكم الأدوات العملية لدعم تواصل طفلكم كل يوم.",
        en: "Sessions that give you practical tools to support your child's communication every day.",
      },
      points: {
        ar: [
          "استراتيجيات تحفيز اللغة خلال الروتين اليومي",
          "خطة منزلية واضحة بين الجلسات",
          "إجابة أسئلتكم ومتابعة تقدّم الطفل معاً",
        ],
        en: [
          "Language-boosting strategies for everyday routines",
          "A clear home plan between sessions",
          "Answering your questions and tracking progress together",
        ],
      },
    },
    {
      id: "assessment",
      icon: "i-clipboard",
      title: { ar: "التقييم والتشخيص الشامل", en: "Comprehensive Assessment" },
      short: {
        ar: "تقييم دقيق لمهارات الطفل التواصلية وتقرير واضح بالأهداف والخطة العلاجية.",
        en: "A thorough evaluation of your child's communication skills, with a clear report, goals and plan.",
      },
      points: {
        ar: [
          "استخدام اختبارات مقننة مثل PLS-4 وGoldman-Fristoe",
          "تقييم الفهم والتعبير والنطق والطلاقة والصوت",
          "تقرير مكتوب وتوصيات عملية للأهل",
        ],
        en: [
          "Standardized tests such as the PLS-4 and Goldman-Fristoe",
          "Assessing understanding, expression, speech sounds, fluency and voice",
          "A written report with practical recommendations for parents",
        ],
      },
    },
  ],

  /* ---------------- Timeline ---------------- */
  timeline: [
    {
      date: { ar: "2026 - الآن", en: "2026 - Present" },
      title: { ar: "رئيس قسم النطق واللغة", en: "Head of Speech & Language Department" },
      place: { ar: "المركز السوري للسمع", en: "Syrian Hearing Center" },
      text: {
        ar: "إدارة القسم، وقيادة التقييمات التشخيصية، وبرامج التأهيل السمعي اللفظي لضعف السمع.",
        en: "Leading the department, diagnostic evaluations, and auditory-verbal programs for hearing loss.",
      },
      icon: "i-briefcase",
    },
    {
      date: { ar: "2026", en: "2026" },
      title: { ar: "اختصاصي كلام ولغة", en: "Speech-Language Pathologist" },
      place: { ar: "المركز الاستشاري المتخصص", en: "Specialized Counseling Center" },
      text: {
        ar: "متابعة الحالات من التقييم الأولي حتى العلاج، وإرشاد الأسر ضمن فريق متعدد الاختصاصات.",
        en: "Managing cases from initial assessment to intervention and counseling families within a multidisciplinary team.",
      },
      icon: "i-briefcase",
    },
    {
      date: { ar: "2022 - 2026", en: "2022 - 2026" },
      title: { ar: "اختصاصي كلام ولغة", en: "Speech-Language Pathologist" },
      place: { ar: "المنظمة السورية للأشخاص ذوي الإعاقة - آمال", en: "Syrian Organization for Persons with Disabilities - Aamal" },
      text: {
        ar: "تقييم وعلاج أكثر من 50 حالة، والتخصص في تأهيل زراعة القوقعة، وقيادة تكييف دروس التأهيل إلى اللهجة السورية.",
        en: "Evaluated and treated 50+ patients, specialized in cochlear implant rehabilitation, and led adapting rehab lessons into Syrian Arabic.",
      },
      icon: "i-briefcase",
    },
    {
      date: { ar: "2020 - 2022", en: "2020 - 2022" },
      title: { ar: "ماجستير في علاج النطق واللغة", en: "M.Sc. Speech-Language Pathology" },
      place: { ar: "جامعة حلب", en: "Aleppo University" },
      text: {
        ar: "سنتان بدوام كامل وأكثر من 300 ساعة تدريب سريري تحت الإشراف.",
        en: "Two years full-time with 300+ hours of supervised clinical training.",
      },
      icon: "i-cap",
    },
    {
      date: { ar: "2021 - 2022", en: "2021 - 2022" },
      title: { ar: "متطوع في الفحص المسحي لاضطرابات الكلام", en: "Volunteer, Speech Disorder Screening" },
      place: { ar: "فريق جامعة حلب", en: "University of Aleppo team" },
      text: {
        ar: "فحوصات في المدارس والمراكز الصحية ومستشفى حلب الجامعي، وتوعية الأهل بالتدخل المبكر.",
        en: "Screenings in schools, health centers and Aleppo University Hospital, and raising parent awareness of early intervention.",
      },
      icon: "i-heart",
    },
    {
      date: { ar: "2015 - 2020", en: "2015 - 2020" },
      title: { ar: "مدرّب فن متطوع للأطفال", en: "Volunteer Art Instructor for Children" },
      place: { ar: "جمعية ارسم حلمي", en: "Draw My Dream Association" },
      text: {
        ar: "ورشات فنية علاجية لدعم التعبير العاطفي لدى الأطفال المتأثرين بالأزمة.",
        en: "Therapeutic art workshops supporting emotional expression for children affected by the crisis.",
      },
      icon: "i-heart",
    },
  ],

  /* ---------------- Training ---------------- */
  training: [
    { title: "Cochlear Implant: From Candidacy to Aural Rehab", org: "Damascus University", year: "2024" },
    { title: "Diagnosis & Treatment of CAS Using DTTC", org: "Once Upon a Time Foundation", year: "2024" },
    { title: "Lovaas Program for Autism", org: "Tanami Training & Consulting", year: "2024" },
    { title: "Evidence-Based Practice in Disability Evaluations", org: "LEADERSproject", year: "2023" },
    { title: "Cleft Palate Speech Therapy: Evaluation & Treatment", org: "LEADERSproject", year: "2023" },
    { title: "11 Perspectives of Rehabilitation", org: "MED-EL", year: "2023" },
    { title: "Theory of Mind (ToM)", org: "MED-EL", year: "2023" },
    { title: "Musical EARS®", org: "MED-EL", year: "2023" },
    { title: "LittleEARS® Auditory Questionnaire", org: "MED-EL", year: "2023" },
  ],

  tools: [
    "PLS-4",
    "Goldman-Fristoe",
    "SSI-4",
    "WAB",
    "PRAAT",
    "CSL",
    "Nasometer",
    "EMST",
    "MED-EL Rehab Kits",
    "Hearing Intervention A to Z",
  ],

  /* ---------------- FAQ ---------------- */
  faq: [
    {
      q: { ar: "متى يجب أن أقلق بشأن كلام طفلي؟", en: "When should I worry about my child's speech?" },
      a: {
        ar: "إذا لم يثرثر الطفل بحلول عمر 12 شهراً، أو لم يقل كلمات مفردة بحلول 18 شهراً، أو لم يجمع كلمتين معاً بحلول عمر السنتين، أو كان كلامه غير مفهوم للغرباء بعد عمر 4 سنوات، فمن الأفضل استشارة اختصاصي. ويمكنك البدء بالفحص المسحي المجاني على هذا الموقع.",
        en: "If your child isn't babbling by 12 months, has no single words by 18 months, isn't combining two words by age 2, or is hard for strangers to understand after age 4, it's a good idea to consult a specialist. You can start with the free screening on this site.",
      },
    },
    {
      q: { ar: "هل تنفع جلسات النطق أونلاين فعلاً للأطفال؟", en: "Does online speech therapy really work for children?" },
      a: {
        ar: "نعم. تُظهر الأبحاث أن العلاج عن بُعد فعّال لكثير من اضطرابات الكلام واللغة عند تقديمه بشكل منظم. وميزته الكبرى أن الأهل يكونون حاضرين ومشاركين في كل جلسة، فيتعلمون الاستراتيجيات ويطبقونها في المنزل مباشرة.",
        en: "Yes. Research shows that teletherapy is effective for many speech and language disorders when delivered in a structured way. A big advantage is that parents attend and take part in every session, so they learn the strategies and use them at home right away.",
      },
    },
    {
      q: { ar: "طفلي يستخدم سماعة أو زراعة قوقعة، هل يمكن متابعته أونلاين؟", en: "My child uses hearing aids or a cochlear implant. Can we work online?" },
      a: {
        ar: "نعم، وهذا من صميم تخصصي. يعتمد التأهيل السمعي اللفظي بدرجة كبيرة على تدريب الأهل، لذلك تناسبه الجلسات أونلاين جيداً. أرشدكم خطوة بخطوة إلى الأنشطة السمعية المناسبة لمرحلة طفلك.",
        en: "Yes, this is my core specialty. Auditory-verbal rehabilitation relies heavily on parent coaching, which makes it a good fit for online sessions. I'll guide you step by step through listening activities suited to your child's stage.",
      },
    },
    {
      q: { ar: "هل تسبب ثنائية اللغة تأخراً في الكلام؟", en: "Does being bilingual cause speech delay?" },
      a: {
        ar: "لا. لا تسبب ثنائية اللغة تأخراً في الكلام أو اضطراباً في اللغة. قد يخلط الطفل بين اللغتين أحياناً وهذا طبيعي. وإذا كان هناك تأخر حقيقي فسيظهر في اللغتين معاً، وعندها يُنصح بالتقييم.",
        en: "No. Bilingualism does not cause speech delay or language disorders. Mixing the two languages is normal. If there is a true delay it will show in both languages, and then an assessment is recommended.",
      },
    },
    {
      q: { ar: "كم يستغرق العلاج؟", en: "How long does therapy take?" },
      a: {
        ar: "يختلف ذلك حسب نوع الصعوبة وشدتها وعمر الطفل ومدى التزام الأسرة بالتمارين المنزلية. بعد التقييم أضع لكم خطة بأهداف واضحة ومدة تقريبية، ونراجع التقدّم بشكل دوري.",
        en: "It depends on the type and severity of the difficulty, the child's age, and how consistently the family practices at home. After the assessment I'll share a plan with clear goals and an estimated timeline, and we review progress regularly.",
      },
    },
    {
      q: { ar: "ما دوري كأهل خلال العلاج؟", en: "What is my role as a parent during therapy?" },
      a: {
        ar: "دوركم أساسي. الجلسة ساعة في الأسبوع، أما بقية الوقت فيقضيه الطفل معكم. ستتعلمون استراتيجيات بسيطة تدمجونها في اللعب والطعام والاستحمام والقصص، وهذا ما يصنع الفرق الأكبر.",
        en: "Your role is central. A session is an hour a week; the rest of the time your child is with you. You'll learn simple strategies to weave into play, meals, bath time and stories, and that is what makes the biggest difference.",
      },
    },
    {
      q: { ar: "هل يغني الفحص المسحي على الموقع عن التقييم؟", en: "Does the online screening replace an assessment?" },
      a: {
        ar: "لا. الفحص المسحي أداة توعوية تساعدك على معرفة ما إذا كان من المفيد استشارة اختصاصي، لكنه ليس تشخيصاً. التقييم المتخصص وحده يحدد طبيعة الصعوبة والخطة المناسبة.",
        en: "No. The screening is an awareness tool to help you decide whether to consult a specialist, but it is not a diagnosis. Only a professional assessment can identify the difficulty and the right plan.",
      },
    },
    {
      q: { ar: "كيف أحجز الجلسة الأولى؟", en: "How do I book the first session?" },
      a: {
        ar: "راسلني عبر واتساب أو املأ نموذج التواصل في أسفل الصفحة، واذكر عمر الطفل وما يقلقك باختصار. سأرد عليك لتحديد موعد مناسب وشرح خطوات البدء.",
        en: "Message me on WhatsApp or fill in the contact form at the bottom of the page, with your child's age and a short description of your concern. I'll reply to set a suitable time and explain how we'll start.",
      },
    },
  ],
};
