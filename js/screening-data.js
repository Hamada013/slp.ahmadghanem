/**
 * Screening items, paraphrased and adapted from ASHA's developmental milestones
 * ("How Does Your Child Hear and Talk?"). Each item describes a skill that most
 * children show by the END of the age band.
 *
 * Domains: hear = hearing & understanding, talk = talking & expression,
 *          social = social communication, fluency = smooth speech
 */
window.SCREENING = {
  domains: {
    hear: { ar: "السمع والفهم", en: "Hearing & understanding", icon: "i-ear" },
    talk: { ar: "الكلام والتعبير", en: "Talking & expression", icon: "i-message" },
    social: { ar: "التفاعل والتواصل", en: "Social communication", icon: "i-users" },
    fluency: { ar: "الطلاقة", en: "Fluency", icon: "i-wave" },
  },

  bands: [
    {
      id: "0-3m",
      min: 0, max: 3, // months, inclusive
      label: { ar: "من الولادة حتى 3 أشهر", en: "Birth to 3 months" },
      items: [
        { d: "hear", ar: "يُفزَع أو يرمش أو يتحرك عند سماع صوت عالٍ ومفاجئ", en: "Startles, blinks or moves when hearing a sudden loud sound" },
        { d: "hear", ar: "يهدأ أو يبتسم عندما تتحدث إليه", en: "Quiets down or smiles when you talk to them" },
        { d: "hear", ar: "يبدو أنه يميّز صوتك ويهدأ عند سماعه وهو يبكي", en: "Seems to recognize your voice and calms when crying" },
        { d: "hear", ar: "يغيّر طريقة رضاعته (يتوقف أو يسرع) عند سماع صوت ما", en: "Changes sucking (stops or speeds up) in response to a sound" },
        { d: "talk", ar: "يصدر أصوات هديل لطيفة مثل (آآ، أوو)", en: "Makes cooing sounds such as \"aah\" and \"ooh\"" },
        { d: "talk", ar: "يختلف بكاؤه باختلاف حاجته (جوع، ألم، انزعاج)", en: "Cries differently for different needs (hunger, pain, discomfort)" },
        { d: "social", ar: "ينظر إلى وجهك ويتابعه عندما تتحدث إليه", en: "Looks at and watches your face when you talk" },
        { d: "social", ar: "يبتسم لك عندما يراك", en: "Smiles when they see you" },
      ],
      tips: {
        ar: [
          "تحدّث مع طفلك كثيراً بصوت هادئ ووجه قريب منه خلال الرضاعة وتغيير الحفاض.",
          "قلّد أصواته عندما يهدل، وانتظر قليلاً ليرد عليك كأنكما تتحادثان.",
          "تأكد من إجراء فحص السمع لحديثي الولادة إن لم يُجرَ بعد.",
        ],
        en: [
          "Talk to your baby often, close to their face, during feeding and changing.",
          "Copy their coos and pause so they can \"answer\" you like a conversation.",
          "Make sure your baby's newborn hearing screening has been done.",
        ],
      },
    },
    {
      id: "4-6m",
      min: 4, max: 6,
      label: { ar: "من 4 إلى 6 أشهر", en: "4 to 6 months" },
      items: [
        { d: "hear", ar: "يحرك عينيه أو رأسه باتجاه مصدر الصوت", en: "Moves eyes or head toward sounds" },
        { d: "hear", ar: "يستجيب لتغيّر نبرة صوتك (الفرح، الحزم)", en: "Responds to changes in your tone of voice (happy, firm)" },
        { d: "hear", ar: "ينتبه للألعاب التي تصدر أصواتاً", en: "Notices toys that make sounds" },
        { d: "hear", ar: "ينتبه للموسيقى والأغاني", en: "Pays attention to music and songs" },
        { d: "talk", ar: "يناغي بأصوات تشبه الكلام فيها أصوات شفوية مثل (ب، م، پ)", en: "Babbles speech-like sounds including lip sounds like p, b and m" },
        { d: "talk", ar: "يضحك بصوت مسموع", en: "Laughs out loud" },
        { d: "talk", ar: "يصدر أصواتاً مختلفة عندما يكون مسروراً أو منزعجاً", en: "Makes different sounds when happy or upset" },
        { d: "social", ar: "يتبادل الأصوات معك (تتكلم أنت ثم يرد هو)", en: "Takes turns making sounds with you (you talk, then they reply)" },
      ],
      tips: {
        ar: [
          "غنِّ لطفلك أغاني بسيطة متكررة، واستخدم ألعاباً تصدر أصواتاً من جهات مختلفة.",
          "سمِّ الأشياء التي ينظر إليها: (هذه طابة! طابة حمراء).",
          "العب ألعاب تبادل الأصوات وانتظر دوره بصبر.",
        ],
        en: [
          "Sing simple, repetitive songs and use sound toys from different directions.",
          "Name what your baby looks at: \"That's a ball! A red ball.\"",
          "Play sound turn-taking games and wait patiently for their turn.",
        ],
      },
    },
    {
      id: "7-12m",
      min: 7, max: 11,
      label: { ar: "من 7 أشهر حتى سنة", en: "7 months to 1 year" },
      items: [
        { d: "hear", ar: "يلتفت وينظر باتجاه الأصوات، ويستجيب عند مناداته باسمه", en: "Turns toward sounds and responds when called by name" },
        { d: "hear", ar: "يفهم كلمات لأشياء مألوفة مثل (كاسة، صباط، ماما)", en: "Understands words for familiar things like \"cup\", \"shoe\", \"mama\"" },
        { d: "hear", ar: "يستجيب لطلبات بسيطة مثل (تعال) أو (لا)", en: "Responds to simple requests like \"come here\" or \"no\"" },
        { d: "hear", ar: "يستمتع بألعاب مثل (بيكابو) والتصفيق", en: "Enjoys games like peek-a-boo and pat-a-cake" },
        { d: "talk", ar: "يثرثر بمقاطع طويلة ومتكررة مثل (بابابا، مامامام)", en: "Babbles long strings of sounds like \"bababa\" or \"mamama\"" },
        { d: "talk", ar: "يستخدم أصواته وإيماءاته لجذب الانتباه بدلاً من البكاء", en: "Uses sounds and gestures to get attention instead of crying" },
        { d: "talk", ar: "يقلد أصواتاً كلامية مختلفة، وقد يقول كلمة أو كلمتين (ماما، بابا)", en: "Imitates different speech sounds and may say 1 or 2 words (mama, dada)" },
        { d: "social", ar: "يستخدم إيماءات مثل التلويح ومدّ يديه ليُحمَل", en: "Uses gestures like waving and holding arms up to be picked up" },
        { d: "social", ar: "يشير بإصبعه إلى الأشياء ليريك إياها أو ليطلبها", en: "Points to things to show you or to ask for them" },
      ],
      tips: {
        ar: [
          "اقرأ معه كتباً مصورة وسمِّ الصور واطلب منه أن يشير إليها.",
          "علّق على ما يفعله أثناء اليوم بجمل قصيرة وواضحة.",
          "عندما يشير إلى شيء، سمِّه له ثم أعطه إياه.",
        ],
        en: [
          "Look at picture books together, name the pictures and ask them to point.",
          "Narrate what they're doing during the day in short, clear phrases.",
          "When they point at something, name it, then hand it to them.",
        ],
      },
    },
    {
      id: "1-2y",
      min: 12, max: 23,
      label: { ar: "من سنة إلى سنتين", en: "1 to 2 years" },
      items: [
        { d: "hear", ar: "يشير إلى بعض أجزاء الجسم عندما تطلب منه", en: "Points to a few body parts when asked" },
        { d: "hear", ar: "ينفذ أوامر بسيطة مثل (جيب الطابة) ويفهم أسئلة بسيطة مثل (وين البسة؟)", en: "Follows simple commands like \"bring the ball\" and understands simple questions like \"where's the cat?\"" },
        { d: "hear", ar: "يشير إلى الصور في الكتاب عندما تسميها", en: "Points to pictures in a book when you name them" },
        { d: "hear", ar: "يستمع للقصص القصيرة والأغاني ويستمتع بها", en: "Listens to and enjoys short stories and songs" },
        { d: "talk", ar: "يتعلم كلمات جديدة باستمرار", en: "Learns new words regularly" },
        { d: "talk", ar: "يستخدم أسئلة من كلمة أو كلمتين مثل (وين بابا؟)", en: "Asks 1- to 2-word questions like \"where daddy?\"" },
        { d: "talk", ar: "يجمع كلمتين معاً مثل (بدي مي) أو (ماما تعي)", en: "Puts two words together like \"more milk\" or \"mama come\"" },
        { d: "talk", ar: "يستخدم أصواتاً متنوعة في بداية الكلمات", en: "Uses many different consonant sounds at the beginning of words" },
        { d: "social", ar: "يقلد الأفعال والكلمات التي يراها ويسمعها", en: "Imitates actions and words they see and hear" },
      ],
      tips: {
        ar: [
          "وسّع كلامه: إذا قال (مي) قل له (بدك مي؟ مي باردة).",
          "أعطه خيارين بدلاً من سؤال نعم/لا: (بدك تفاحة ولا موزة؟).",
          "قلل وقت الشاشات وزِد وقت اللعب والكلام وجهاً لوجه.",
        ],
        en: [
          "Expand their words: if they say \"water\", say \"You want water? Cold water.\"",
          "Offer two choices instead of yes/no: \"Apple or banana?\"",
          "Reduce screen time and increase face-to-face play and talk.",
        ],
      },
    },
    {
      id: "2-3y",
      min: 24, max: 35,
      label: { ar: "من سنتين إلى 3 سنوات", en: "2 to 3 years" },
      items: [
        { d: "hear", ar: "يفهم مفاهيم متضادة مثل (كبير/صغير، فوق/تحت)", en: "Understands opposites like big/little and up/down" },
        { d: "hear", ar: "ينفذ تعليمات من خطوتين مثل (خود الكتاب وحطه عالطاولة)", en: "Follows two-step directions like \"pick up the book and put it on the table\"" },
        { d: "talk", ar: "لديه كلمة لمعظم الأشياء المألوفة من حوله", en: "Has a word for almost everything familiar around them" },
        { d: "talk", ar: "يتكلم بجمل من كلمتين أو ثلاث كلمات", en: "Talks in 2- to 3-word phrases" },
        { d: "talk", ar: "يفهم كلامه أفراد العائلة والأشخاص المقربون في أغلب الأحيان", en: "Family and close friends understand their speech most of the time" },
        { d: "talk", ar: "يسمّي الأشياء ليطلبها أو ليلفت انتباهك إليها", en: "Names objects to ask for them or to direct your attention" },
        { d: "social", ar: "يبادر بالكلام مع الآخرين ويلعب ألعاباً تخيلية بسيطة", en: "Starts conversations with others and plays simple pretend games" },
        { d: "fluency", ar: "يتكلم غالباً دون توقفات أو تكرارات مصحوبة بشد أو توتر في الوجه أو الجسم", en: "Mostly speaks without blocks or repetitions that come with tension in the face or body" },
      ],
      tips: {
        ar: [
          "العب معه لعباً تخيلياً (مطبخ، طبيب، سيارات) وتحدث عما تفعلانه.",
          "اطرح أسئلة مفتوحة مثل (شو عم تعمل الدبدوبة؟).",
          "أعطه وقتاً كافياً للكلام ولا تكمل الجملة عنه.",
        ],
        en: [
          "Play pretend (kitchen, doctor, cars) and talk about what you're doing.",
          "Ask open questions like \"What is teddy doing?\"",
          "Give them plenty of time to talk and don't finish their sentences.",
        ],
      },
    },
    {
      id: "3-4y",
      min: 36, max: 47,
      label: { ar: "من 3 إلى 4 سنوات", en: "3 to 4 years" },
      items: [
        { d: "hear", ar: "يسمعك عندما تناديه من غرفة أخرى", en: "Hears you when you call from another room" },
        { d: "hear", ar: "يسمع التلفاز بمستوى الصوت نفسه المناسب لباقي أفراد العائلة", en: "Hears the TV at the same volume as other family members" },
        { d: "hear", ar: "يجيب عن أسئلة بسيطة مثل (مين؟ شو؟ وين؟ ليش؟)", en: "Answers simple who, what, where and why questions" },
        { d: "talk", ar: "يتحدث عما فعله في الروضة أو عند الأصدقاء", en: "Talks about activities at preschool or friends' homes" },
        { d: "talk", ar: "يفهم كلامه الأشخاص من خارج العائلة في أغلب الأحيان", en: "People outside the family usually understand their speech" },
        { d: "talk", ar: "يستخدم جملاً من أربع كلمات أو أكثر", en: "Uses sentences of four or more words" },
        { d: "social", ar: "يلعب مع أطفال آخرين ويتبادل معهم الأدوار في الحديث", en: "Plays with other children and takes turns talking with them" },
        { d: "fluency", ar: "يتكلم بسهولة دون تكرار المقاطع أو الكلمات بشكل لافت", en: "Speaks easily without noticeably repeating syllables or words" },
      ],
      tips: {
        ar: [
          "اقرأ له قصصاً واطلب منه أن يعيد سردها بكلماته.",
          "تحدثا عن يومه: ماذا فعل؟ مع من لعب؟ ماذا أكل؟",
          "العبا ألعاب التصنيف: (خلينا نلاقي كل الأشياء اللي بتنوكل).",
        ],
        en: [
          "Read stories and ask them to retell them in their own words.",
          "Talk about their day: what they did, who they played with, what they ate.",
          "Play sorting games: \"Let's find all the things we can eat.\"",
        ],
      },
    },
    {
      id: "4-5y",
      min: 48, max: 60,
      label: { ar: "من 4 إلى 5 سنوات", en: "4 to 5 years" },
      items: [
        { d: "hear", ar: "ينتبه لقصة قصيرة ويجيب عن أسئلة بسيطة حولها", en: "Pays attention to a short story and answers simple questions about it" },
        { d: "hear", ar: "يسمع ويفهم معظم ما يقال في البيت والروضة", en: "Hears and understands most of what is said at home and preschool" },
        { d: "talk", ar: "يستخدم جملاً تحتوي على تفاصيل كثيرة", en: "Uses sentences that include lots of details" },
        { d: "talk", ar: "يحكي قصصاً ويلتزم بالموضوع", en: "Tells stories that stay on topic" },
        { d: "talk", ar: "ينطق معظم الأصوات بوضوح (قد يخطئ في أصوات صعبة مثل ر، ش، س، ج)", en: "Says most sounds correctly (may still miss harder ones like r, sh, s, j)" },
        { d: "talk", ar: "يستخدم قواعد الكلام نفسها التي يستخدمها باقي أفراد العائلة", en: "Uses the same grammar as the rest of the family" },
        { d: "talk", ar: "يسمّي بعض الحروف والأرقام ويستمتع بالكلمات المتشابهة في القافية", en: "Names some letters and numbers and enjoys rhyming words" },
        { d: "social", ar: "يتواصل بسهولة مع الأطفال والكبار", en: "Communicates easily with other children and adults" },
        { d: "fluency", ar: "يتكلم بطلاقة دون توقفات متكررة أو شد واضح أثناء الكلام", en: "Speaks fluently without frequent blocks or visible tension" },
      ],
      tips: {
        ar: [
          "العبا ألعاب القافية والأصوات: (شو بيبدأ بصوت ب؟).",
          "شجعه على وصف الصور بالتفصيل وطرح أسئلة (ليش؟ كيف؟).",
          "إذا أخطأ في نطق كلمة، أعدها بشكل صحيح دون أن تطلب منه التكرار.",
        ],
        en: [
          "Play rhyming and sound games: \"What starts with the b sound?\"",
          "Encourage detailed picture descriptions and why/how questions.",
          "If they mispronounce a word, repeat it correctly without asking them to say it again.",
        ],
      },
    },
  ],

  // Answer scores
  answers: [
    { id: "yes", score: 2, ar: "نعم", en: "Yes" },
    { id: "sometimes", score: 1, ar: "أحياناً", en: "Sometimes" },
    { id: "no", score: 0, ar: "لا", en: "Not yet" },
  ],
};
