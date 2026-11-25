/**
 * Bilingual support (Arabic default, English secondary).
 * Arabic text lives directly in index.html; English translations live here,
 * keyed by the element's data-i18n attribute.
 * Attributes: data-i18n-attr="placeholder:key;aria-label:key2"
 */
window.I18N = (function () {
  const en = {
    skip: "Skip to content",
    "brand.name": "Ahmad Ghanem",
    "brand.title": "Speech-Language Pathologist",

    "nav.about": "About",
    "nav.services": "Services",
    "nav.screening": "Screening",
    "nav.media": "Media",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.book": "Book a consultation",

    "a11y.lang": "التبديل إلى العربية",
    "a11y.theme": "Toggle dark mode",
    "a11y.menu": "Menu",
    "a11y.close": "Close",

    "hero.eyebrow": "Speech-Language Pathologist · Online sessions",
    "hero.title": 'Every voice deserves to be <span class="text-gradient">heard</span> and <span class="text-gradient">understood</span>',
    "hero.text": "I help your child discover their voice and express themselves with confidence, through online speech and language therapy that is evidence-based, play-based, and built on a real partnership with you as parents.",
    "hero.cta1": "Start the free screening",
    "hero.cta2": "Get in touch",
    "hero.trust1": "M.Sc. Speech-Language Pathology",
    "hero.trust2": "Hearing-loss rehabilitation specialist",
    "hero.trust3": "Online sessions from anywhere",

    "about.photoAlt": "Ahmad Ghanem, Speech-Language Pathologist",
    "about.badgeTitle": "Head of Speech & Language Department",
    "about.badgeSub": "Syrian Hearing Center",
    "about.eyebrow": "About me",
    "about.title": "Hello, I'm Ahmad Ghanem",
    "about.p1": "I'm a speech-language pathologist with a Master's degree in Speech-Language Pathology from Aleppo University. I currently lead the Speech and Language Department at the Syrian Hearing Center, and I have more than four years of experience assessing and treating communication disorders in children, specializing in hearing-loss and cochlear-implant rehabilitation.",
    "about.p2": "I believe parents are the most important partners in therapy. That's why my online sessions are play-based and evidence-based, and I coach you to turn everyday routines into opportunities for communication. I also combine my clinical expertise with software development skills to build interactive digital tools that make learning fun for children.",
    "about.quote": "“Every voice should be heard and understood.”",
    "about.journey": "Career & education",
    "about.training": "Specialized training",
    "about.tools": "Assessment & therapy tools",

    "stats.years": "Years of experience",
    "stats.kids": "Children supported",
    "stats.sessions": "Therapy sessions",
    "stats.courses": "Specialized courses",

    "services.eyebrow": "Services",
    "services.title": "How can I help your child?",
    "services.text": "All sessions are online, and every child gets a plan tailored to their needs. Tap any service to learn more.",

    "screening.eyebrow": "Free tool for parents",
    "screening.title": "Hearing, speech & language screening",
    "screening.text": "Simple questions based on the developmental milestones published by the American Speech-Language-Hearing Association (ASHA), for children from birth to 5 years. Takes about 3 minutes with an instant result.",

    "media.eyebrow": "Media",
    "media.title": "From sessions & workshops",
    "media.text": "Photos and clips from working with children and families, plus awareness videos.",

    "nav.tele": "Online sessions",
    "tp.eyebrow": "Online sessions",
    "tp.title": "What happens in an online session?",
    "tp.lead": "A live video session on a screen we share: speech and language games I designed myself, assessments and reports kept for your child, and short home practice between sessions.",
    "tp.book": "Book an introductory session",
    "tp.how": "How a session goes",
    "tp.heroAlt": "Example online session: a game on the shared screen with the therapist and the child",
    "tp.live": "Live session",
    "tp.you": "Ahmad",
    "tp.stepsEyebrow": "Step by step",
    "tp.stepsTitle": "From the first meeting to practice at home",
    "tp.s1": "Before the session",
    "tp.s1t": "Case history and an online assessment, so we know where to start.",
    "tp.s2": "In the session",
    "tp.s2t": "We play together on a shared screen while I listen and correct right away.",
    "tp.s3": "After the session",
    "tp.s3t": "A clear report with goals and percentages, updated after every session.",
    "tp.s4": "At home",
    "tp.s4t": "Short practice for parents between sessions, with the child's name and number.",
    "tp.aTitle": "Case history and assessment",
    "tp.aText": "We fill in the case history together, then run the articulation or language test that fits your child's age. The results build the intervention plan straight away.",
    "tp.a1": "An interview with parents about development, hearing and speech",
    "tp.a2": "A picture articulation test: every sound at the start, middle and end of a word",
    "tp.a3": "A summary of the sounds that need practice",
    "tp.aAlt": "Example: Adam's file and articulation test result",
    "tp.file": "Child's file",
    "tp.name": "Name",
    "tp.age": "Age",
    "tp.ageV": "5 years",
    "tp.lang": "Language",
    "tp.langV": "Arabic",
    "tp.concern": "Reason for referral",
    "tp.concernV": "Difficulty with «س» and «ر»",
    "tp.testTitle": "Articulation test: start · middle · end of the word",
    "tp.gTitle": "Games on the shared screen",
    "tp.gText": "Apps I built for sessions: the child plays and speaks while I listen and score every word at the same time.",
    "tp.g1": "The syllable train",
    "tp.g1t": "A sound with a vowel, syllable by syllable",
    "tp.g2": "The word house",
    "tp.g2t": "Find the pictures and say their names",
    "tp.g3": "The phrase tower",
    "tp.g3t": "Hear the phrase, then say it",
    "tp.rTitle": "Reports and progress you can see",
    "tp.rText": "Each child has a plan with short, clear goals. The app calculates percentages from the sessions, and I rate them at 20, 40, 60 and 80%. A goal is achieved at 80%.",
    "tp.r1": "A PDF report you can save and share",
    "tp.r2": "Every sound and its level: syllables, words, phrases, sentences, stories",
    "tp.rAlt": "Example: Adam's progress report",
    "tp.report": "Adam's report",
    "tp.weeks": "Last 4 weeks",
    "tp.l1": "Syllables",
    "tp.l2": "Words",
    "tp.l3": "Phrases",
    "tp.l4": "Sentences",
    "tp.goals": "Intervention plan goals",
    "tp.goal1": "Says «س» correctly in words",
    "tp.goal2": "Says «ر» correctly in syllables",
    "tp.goal3": "Says «س» correctly in phrases",
    "tp.done": "Achieved 80%",
    "tp.hTitle": "Short practice with parents between sessions",
    "tp.hText": "I send you a name and a number, and the app opens for your child only. Five minutes a day, marking each word: “right” or “once more”.",
    "tp.appName": "Articulation practice",
    "tp.enter": "Enter",
    "tp.album": "Sticker album",
    "tp.newSticker": "A new sticker after each practice",
    "tp.p1": "1. Name and number from the therapist",
    "tp.p2": "2. “Right” or “once more” after each word",
    "tp.p3": "3. A sticker in the album after each practice",
    "tp.needEyebrow": "Before the first session",
    "tp.needTitle": "What you need at home",
    "tp.n1": "A computer or tablet with a large screen",
    "tp.n2": "Headphones with a microphone",
    "tp.n3": "A stable internet connection",
    "tp.n4": "A quiet, well-lit corner",
    "tp.n5": "A parent close to the child",
    "tp.n6": "A fixed time every week",
    "tp.demoNote": "The pictures and names on this page are illustrative examples, not a real child.",
    "tele.fab": "Online sessions",
    "tele.fabLabel": "Online sessions: what we do",

    "faq.eyebrow": "FAQ",
    "faq.title": "Questions parents often ask",
    "faq.text": "Didn't find your answer? Message me directly and I'll be happy to help.",
    "faq.cta": "Ask me on WhatsApp",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's start your child's journey together",
    "contact.text": "Fill in the form and WhatsApp will open with a ready message, or reach me directly through the channels below.",
    "contact.whatsapp": "WhatsApp",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.online": "All sessions are delivered online, so you can follow along from home wherever you are.",

    "form.name": "Parent's name",
    "form.namePh": "Name",
    "form.age": "Child's age",
    "form.agePh": "e.g. 2 years 4 months",
    "form.service": "Inquiry about",
    "form.message": "Briefly describe your concern",
    "form.messagePh": "e.g. My child understands us but only says a few words...",
    "form.error": "Please enter the parent's name and the child's age.",
    "form.submit": "Send via WhatsApp",
    "form.privacy": "Nothing is stored on this site. Your message goes directly through WhatsApp.",

    "footer.about": "Every voice deserves to be heard and understood. Online speech and language therapy for children and their families.",
    "footer.links": "Quick links",
    "footer.contact": "Contact info",
    "footer.rights": "All rights reserved.",
    "footer.note": "Information on this site is for awareness and does not replace a professional assessment.",

    "meta.title": "Ahmad Ghanem | Speech-Language Pathologist",
  };

  const ar = {};
  const arAttrs = new Map();
  let lang = "ar";
  let captured = false;

  function capture() {
    if (captured) return;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.dataset.i18n;
      if (!(k in ar)) ar[k] = el.innerHTML.trim();
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const saved = {};
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr] = pair.split(":");
        saved[attr.trim()] = el.getAttribute(attr.trim()) || "";
      });
      arAttrs.set(el, saved);
    });
    ar["meta.title"] = document.title;
    captured = true;
  }

  function t(key) {
    if (lang === "en" && key in en) return en[key];
    return ar[key] ?? en[key] ?? key;
  }

  /** Pick the current-language value from an {ar, en} object */
  function pick(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] ?? obj.ar ?? "";
  }

  function set(next) {
    capture();
    lang = next === "en" ? "en" : "ar";
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        const value = lang === "en" ? en[key] : arAttrs.get(el)?.[attr];
        if (value != null) el.setAttribute(attr, value);
      });
    });
    document.title = t("meta.title");

    const btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = lang === "ar" ? "EN" : "ع";

    try { localStorage.setItem("lang", lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function init() {
    capture();
    let saved = "ar";
    try { saved = localStorage.getItem("lang") || "ar"; } catch (e) {}
    set(saved);
  }

  return {
    init,
    set,
    t,
    pick,
    get lang() { return lang; },
    toggle() { set(lang === "ar" ? "en" : "ar"); },
  };
})();
