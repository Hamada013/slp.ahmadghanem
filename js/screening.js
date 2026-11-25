/**
 * Interactive speech, language & hearing screening.
 * Everything runs in the browser; nothing is stored or sent anywhere
 * unless the parent chooses to share the result via WhatsApp.
 */
(function () {
  const DATA = window.SCREENING;
  const L = () => window.I18N.lang;
  const P = (o) => window.I18N.pick(o);
  const ic = (id, cls = "") => `<svg class="icon ${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;

  const UI = {
    introTitle: { ar: "لنبدأ بعمر طفلك", en: "Let's start with your child's age" },
    dobLabel: { ar: "تاريخ ميلاد الطفل", en: "Child's date of birth" },
    or: { ar: "أو اختر الفئة العمرية مباشرة", en: "or choose the age group directly" },
    ageIs: { ar: "عمر الطفل", en: "Child's age" },
    willUse: { ar: "سيتم استخدام أسئلة فئة", en: "Questions will be for" },
    tooOld: {
      ar: "هذا الفحص مخصص للأطفال حتى عمر 5 سنوات. لطفلك الأكبر سناً يُنصح بالتواصل مباشرة لإجراء تقييم مناسب لعمره.",
      en: "This screening covers children up to 5 years. For an older child, please get in touch directly for an age-appropriate assessment.",
    },
    future: { ar: "تاريخ الميلاد غير صحيح.", en: "That date of birth isn't valid." },
    start: { ar: "ابدأ الفحص", en: "Start screening" },
    privacy: { ar: "لا نطلب أي بيانات شخصية، ولا يُحفظ شيء من إجاباتك.", en: "No personal data is requested, and none of your answers are saved." },
    disclaimer: {
      ar: "هذا الفحص أداة مسحية توعوية مبنية على مراحل النمو التي تنشرها ASHA، وهو لا يُعدّ تشخيصاً ولا يغني عن التقييم المتخصص.",
      en: "This is an awareness screening tool based on ASHA's published developmental milestones. It is not a diagnosis and does not replace a professional assessment.",
    },
    question: { ar: "سؤال", en: "Question" },
    of: { ar: "من", en: "of" },
    prompt: { ar: "هل يقوم طفلك بما يلي؟", en: "Does your child do the following?" },
    back: { ar: "السابق", en: "Back" },
    restart: { ar: "البدء من جديد", en: "Start over" },
    resultFor: { ar: "نتيجة فحص فئة", en: "Screening result for" },
    overall: { ar: "المهارات الظاهرة", en: "Skills observed" },
    byArea: { ar: "النتيجة حسب المجال", en: "Results by area" },
    tipsTitle: { ar: "نصائح منزلية تناسب هذا العمر", en: "Home tips for this age" },
    sendWa: { ar: "أرسل النتيجة للاختصاصي عبر واتساب", en: "Send result to the specialist on WhatsApp" },
    print: { ar: "طباعة / حفظ PDF", en: "Print / save PDF" },
    hearingNote: {
      ar: "لاحظنا إجابات متعلقة بالسمع تستحق الانتباه. يُنصح بإجراء فحص سمع لدى اختصاصي سمعيات للتأكد من أن طفلك يسمع جيداً، فالسمع هو أساس تطور الكلام واللغة.",
      en: "Some hearing-related answers deserve attention. A hearing test with an audiologist is recommended to make sure your child hears well, since hearing is the foundation of speech and language.",
    },
    levels: {
      ok: {
        title: { ar: "التطور ضمن المتوقع", en: "Development is on track" },
        text: {
          ar: "تُظهر إجاباتك أن مهارات طفلك تسير ضمن المراحل المتوقعة لعمره. استمر في دعم تواصله باللعب والحديث اليومي، وأعد الفحص بعد بضعة أشهر أو عند انتقاله إلى فئة عمرية جديدة.",
          en: "Your answers show your child's skills are within the expected milestones for their age. Keep supporting their communication through daily play and talk, and repeat the screening in a few months or when they reach a new age group.",
        },
        icon: "i-check-circle",
        badge: "bg-primary-soft text-ok",
      },
      warn: {
        title: { ar: "يُنصح بالمراقبة", en: "Keep an eye on it" },
        text: {
          ar: "بعض المهارات لم تظهر بشكل ثابت بعد. قد يكون ذلك ضمن الفروق الطبيعية بين الأطفال، لكن يُنصح بتطبيق النصائح أدناه وإعادة الفحص خلال 4 إلى 6 أسابيع. وإذا كان لديك أي قلق، فاستشارة مبكرة قد تطمئنك.",
          en: "Some skills aren't consistent yet. This may be within normal differences between children, but we recommend using the tips below and repeating the screening in 4 to 6 weeks. If you're worried, an early consultation can give you peace of mind.",
        },
        icon: "i-eye",
        badge: "bg-sun-soft text-warn",
      },
      alert: {
        title: { ar: "يُنصح بالتقييم المتخصص", en: "A professional assessment is recommended" },
        text: {
          ar: "تشير إجاباتك إلى أن عدة مهارات متوقعة لعمر طفلك لم تظهر بعد. هذا لا يعني بالضرورة وجود اضطراب، لكن التقييم المتخصص المبكر هو أفضل خطوة لمعرفة احتياجات طفلك ودعمه في الوقت المناسب.",
          en: "Your answers suggest several skills expected for your child's age haven't appeared yet. This doesn't necessarily mean there is a disorder, but an early professional assessment is the best step to understand your child's needs and support them in time.",
        },
        icon: "i-alert",
        badge: "bg-accent-soft text-alert",
      },
    },
  };

  const state = { step: "intro", band: null, months: null, dob: "", q: 0, answers: [] };
  let root;

  /* ---------- helpers ---------- */
  function monthsBetween(dob, now = new Date()) {
    let m = (now.getFullYear() - dob.getFullYear()) * 12 + (now.getMonth() - dob.getMonth());
    if (now.getDate() < dob.getDate()) m -= 1;
    return m;
  }

  function bandForMonths(m) {
    return DATA.bands.findIndex((b) => m >= b.min && m <= b.max);
  }

  function formatMonths(m) {
    if (L() === "en") {
      const y = Math.floor(m / 12), r = m % 12;
      if (y === 0) return `${m} month${m === 1 ? "" : "s"}`;
      return `${y} year${y > 1 ? "s" : ""}${r ? ` ${r} month${r > 1 ? "s" : ""}` : ""}`;
    }
    const arMonths = (n) => (n === 1 ? "شهر واحد" : n === 2 ? "شهران" : n <= 10 ? `${n} أشهر` : `${n} شهراً`);
    const arYears = (n) => (n === 1 ? "سنة" : n === 2 ? "سنتان" : n <= 10 ? `${n} سنوات` : `${n} سنة`);
    const y = Math.floor(m / 12), r = m % 12;
    if (y === 0) return m === 0 ? "أقل من شهر" : arMonths(m);
    return r ? `${arYears(y)} و${arMonths(r)}` : arYears(y);
  }

  function todayISO() {
    const d = new Date();
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  }

  /* ---------- scoring ---------- */
  function score() {
    const band = DATA.bands[state.band];
    const byDomain = {};
    let total = 0, noCount = 0, hearingConcern = false;
    band.items.forEach((item, i) => {
      const a = DATA.answers.find((x) => x.id === state.answers[i]);
      const s = a ? a.score : 0;
      total += s;
      if (a?.id === "no") noCount++;
      if (item.d === "hear" && a?.id !== "yes") hearingConcern = true;
      byDomain[item.d] ??= { got: 0, max: 0 };
      byDomain[item.d].got += s;
      byDomain[item.d].max += 2;
    });
    const max = band.items.length * 2;
    const pct = Math.round((total / max) * 100);
    let level = "ok";
    if (pct < 60 || noCount >= 3) level = "alert";
    else if (pct < 85 || noCount >= 1) level = "warn";
    return { pct, level, byDomain, hearingConcern };
  }

  /* ---------- views ---------- */
  function viewIntro() {
    let ageInfo = "";
    if (state.dob) {
      const m = state.months;
      if (m == null || m < 0) {
        ageInfo = `<p class="mt-3 text-sm font-semibold text-alert">${P(UI.future)}</p>`;
      } else if (m > 60) {
        ageInfo = `<div class="mt-4 flex items-start gap-3 rounded-2xl bg-accent-soft p-4 text-sm">${ic("i-info", "mt-0.5 text-accent-strong")}<p>${P(UI.tooOld)}</p></div>`;
      } else {
        ageInfo = `<p class="mt-3 text-sm text-muted">${P(UI.ageIs)}: <strong class="text-ink">${formatMonths(m)}</strong>. ${P(UI.willUse)}: <strong class="text-primary">${P(DATA.bands[state.band].label)}</strong></p>`;
      }
    }

    const pills = DATA.bands
      .map(
        (b, i) => `
        <button type="button" data-band="${i}" aria-pressed="${state.band === i}"
          class="rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition hover:border-primary ${
            state.band === i ? "border-primary bg-primary text-primary-ink" : "border-line bg-surface"
          }">${P(b.label)}</button>`
      )
      .join("");

    return `
      <div class="card anim-pop p-6 sm:p-10">
        <div class="flex items-center gap-4">
          <span class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-[#2b1a10]">${ic("i-calendar", "h-7 w-7")}</span>
          <h3 class="text-2xl font-bold">${P(UI.introTitle)}</h3>
        </div>

        <label class="mt-8 block">
          <span class="mb-2 block font-semibold">${P(UI.dobLabel)}</span>
          <input type="date" id="dob" class="field max-w-xs" max="${todayISO()}" value="${state.dob}" />
        </label>
        ${ageInfo}

        <div class="my-8 flex items-center gap-4 text-sm text-muted">
          <span class="h-px flex-1 bg-line"></span><span>${P(UI.or)}</span><span class="h-px flex-1 bg-line"></span>
        </div>

        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">${pills}</div>

        <button type="button" id="start" class="btn-primary mt-8 w-full text-base sm:w-auto" ${state.band == null ? "disabled" : ""}>
          ${P(UI.start)} ${ic("i-arrow", "flip-rtl")}
        </button>

        <div class="mt-8 space-y-3 border-t border-line pt-6 text-sm text-muted">
          <p class="flex items-start gap-2">${ic("i-lock", "mt-0.5 text-primary")}<span>${P(UI.privacy)}</span></p>
          <p class="flex items-start gap-2">${ic("i-info", "mt-0.5 text-primary")}<span>${P(UI.disclaimer)}</span></p>
        </div>
      </div>`;
  }

  function answerMark(id) {
    if (id === "yes") return `<span class="grid h-8 w-8 place-items-center rounded-full bg-ok text-white dark:text-[#0f2a22]">${ic("i-check", "h-4 w-4")}</span>`;
    if (id === "sometimes") return `<span class="h-8 w-8 rounded-full border-[3px] border-warn bg-[linear-gradient(90deg,var(--warn)_50%,transparent_50%)] rtl:bg-[linear-gradient(270deg,var(--warn)_50%,transparent_50%)]"></span>`;
    return `<span class="h-8 w-8 rounded-full border-[3px] border-muted/50"></span>`;
  }

  function viewQuestion() {
    const band = DATA.bands[state.band];
    const item = band.items[state.q];
    const total = band.items.length;
    const progress = Math.round((state.q / total) * 100);
    const dom = DATA.domains[item.d];

    const answers = DATA.answers
      .map(
        (a, i) => `
        <button type="button" class="answer-btn ${state.answers[state.q] === a.id ? "border-primary bg-primary-soft" : ""}" data-answer="${a.id}" style="animation-delay:${80 + i * 60}ms">
          <span>${P(a)}</span>${answerMark(a.id)}
        </button>`
      )
      .join("");

    return `
      <div class="card p-6 sm:p-10">
        <div class="flex items-center justify-between gap-4 text-sm">
          <span class="font-semibold text-primary">${P(band.label)}</span>
          <span class="text-muted">${P(UI.question)} ${state.q + 1} ${P(UI.of)} ${total}</span>
        </div>
        <div class="mt-3 h-2.5 overflow-hidden rounded-full bg-line" role="progressbar" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
          <div class="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rtl:bg-gradient-to-l" style="width:${progress}%"></div>
        </div>

        <div class="anim-pop mt-8" key="${state.q}">
          <span class="chip gap-2 border-transparent bg-primary-soft text-primary">${ic(dom.icon)} ${P(dom)}</span>
          <p class="mt-4 text-sm text-muted">${P(UI.prompt)}</p>
          <h3 class="mt-2 text-2xl font-bold leading-relaxed sm:text-3xl">${P(item)}</h3>
          <div class="mt-8 grid gap-3">${answers}</div>
        </div>

        <div class="mt-8 flex items-center justify-between">
          <button type="button" id="prev" class="btn px-0 text-muted hover:text-ink" ${state.q === 0 ? 'data-to-intro="1"' : ""}>
            ${ic("i-arrow", "rotate-180 flip-rtl")} ${P(UI.back)}
          </button>
          <button type="button" id="restart" class="btn px-0 text-muted hover:text-ink">${ic("i-refresh")} ${P(UI.restart)}</button>
        </div>
      </div>`;
  }

  function barColor(p) {
    return p >= 85 ? "bg-ok" : p >= 60 ? "bg-warn" : "bg-alert";
  }

  function viewResult() {
    const band = DATA.bands[state.band];
    const r = score();
    const lv = UI.levels[r.level];

    const domains = Object.entries(r.byDomain)
      .map(([d, v]) => {
        const p = Math.round((v.got / v.max) * 100);
        return `
          <li>
            <div class="flex items-center justify-between text-sm">
              <span class="flex items-center gap-2 font-semibold">${ic(DATA.domains[d].icon, "text-muted")} ${P(DATA.domains[d])}</span>
              <span class="text-muted" dir="ltr">${p}%</span>
            </div>
            <div class="mt-2 h-2.5 overflow-hidden rounded-full bg-line">
              <div class="h-full rounded-full ${barColor(p)} transition-all duration-1000" data-w="${p}" style="width:0%"></div>
            </div>
          </li>`;
      })
      .join("");

    const tips = P(band.tips)
      .map((t) => `<li class="flex items-start gap-3"><span class="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">${ic("i-sparkle", "h-3.5 w-3.5")}</span><span>${t}</span></li>`)
      .join("");

    return `
      <div id="result-card" class="card anim-pop p-6 sm:p-10">
        <p class="text-sm font-semibold text-muted">${P(UI.resultFor)}: ${P(band.label)}${state.months != null && state.months <= 60 && state.months >= 0 ? ` · ${formatMonths(state.months)}` : ""}</p>

        <div class="mt-5 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <span class="grid h-20 w-20 shrink-0 place-items-center rounded-3xl ${lv.badge}">${ic(lv.icon, "h-10 w-10")}</span>
          <div>
            <h3 class="text-2xl font-bold sm:text-3xl">${P(lv.title)}</h3>
            <p class="mt-1 text-muted">${P(UI.overall)}: <strong class="text-ink" dir="ltr">${r.pct}%</strong></p>
          </div>
        </div>
        <p class="mt-6 text-lg leading-relaxed">${P(lv.text)}</p>

        ${
          r.hearingConcern
            ? `<div class="mt-6 flex items-start gap-3 rounded-2xl bg-primary-soft p-4 text-primary">${ic("i-ear", "mt-0.5 h-6 w-6")}<p class="font-medium">${P(UI.hearingNote)}</p></div>`
            : ""
        }

        <div class="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h4 class="font-bold">${P(UI.byArea)}</h4>
            <ul class="mt-4 space-y-4">${domains}</ul>
          </div>
          <div>
            <h4 class="font-bold">${P(UI.tipsTitle)}</h4>
            <ul class="mt-4 space-y-3 text-sm leading-relaxed">${tips}</ul>
          </div>
        </div>

        <div class="no-print mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a id="send-wa" href="#" target="_blank" rel="noopener" class="btn-primary">${ic("i-chat")} ${P(UI.sendWa)}</a>
          <button type="button" id="print" class="btn-ghost">${ic("i-printer")} ${P(UI.print)}</button>
          <button type="button" id="restart" class="btn-ghost">${ic("i-refresh")} ${P(UI.restart)}</button>
        </div>

        <p class="mt-8 flex items-start gap-2 border-t border-line pt-6 text-xs text-muted">${ic("i-info", "mt-0.5")}<span>${P(UI.disclaimer)}</span></p>
      </div>`;
  }

  function waMessage() {
    const band = DATA.bands[state.band];
    const r = score();
    const lines = [];
    const en = L() === "en";
    lines.push(en ? "Hello Ahmad, I completed the screening on your website." : "مرحباً أ. أحمد، أجريت الفحص المسحي على موقعك.");
    lines.push(`${en ? "Age group" : "الفئة العمرية"}: ${P(band.label)}`);
    if (state.months != null && state.months >= 0 && state.months <= 60) lines.push(`${en ? "Child's age" : "عمر الطفل"}: ${formatMonths(state.months)}`);
    lines.push(`${en ? "Result" : "النتيجة"}: ${P(UI.levels[r.level].title)} (${r.pct}%)`);
    Object.entries(r.byDomain).forEach(([d, v]) => {
      lines.push(`- ${P(DATA.domains[d])}: ${Math.round((v.got / v.max) * 100)}%`);
    });
    lines.push(en ? "I'd like to ask about an assessment or a session." : "أرغب بالاستفسار عن تقييم أو جلسة.");
    return `https://wa.me/${window.SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  /* ---------- render & events ---------- */
  function render(scroll = false) {
    if (state.step === "intro") root.innerHTML = viewIntro();
    else if (state.step === "q") root.innerHTML = viewQuestion();
    else {
      root.innerHTML = viewResult();
      const wa = root.querySelector("#send-wa");
      if (wa) wa.href = waMessage();
      requestAnimationFrame(() =>
        requestAnimationFrame(() => root.querySelectorAll("[data-w]").forEach((el) => (el.style.width = el.dataset.w + "%")))
      );
    }
    if (scroll) {
      const top = root.getBoundingClientRect().top + window.scrollY - 100;
      if (Math.abs(window.scrollY - top) > 120) window.scrollTo({ top, behavior: "smooth" });
    }
  }

  function onClick(e) {
    const t = e.target.closest("button, a");
    if (!t) return;

    if (t.dataset.band != null) {
      state.band = Number(t.dataset.band);
      state.dob = "";
      state.months = null;
      render();
      return;
    }
    if (t.id === "start" && state.band != null) {
      state.step = "q";
      state.q = 0;
      state.answers = [];
      render(true);
      return;
    }
    if (t.dataset.answer) {
      state.answers[state.q] = t.dataset.answer;
      const total = DATA.bands[state.band].items.length;
      // brief visual confirmation before moving on
      t.classList.add("border-primary", "bg-primary-soft");
      setTimeout(() => {
        if (state.q < total - 1) {
          state.q++;
          render();
        } else {
          state.step = "result";
          render(true);
        }
      }, 220);
      return;
    }
    if (t.id === "prev") {
      if (state.q === 0) state.step = "intro";
      else state.q--;
      render();
      return;
    }
    if (t.id === "restart") {
      Object.assign(state, { step: "intro", band: null, months: null, dob: "", q: 0, answers: [] });
      render(true);
      return;
    }
    if (t.id === "print") {
      document.documentElement.classList.add("print-result");
      window.print();
      setTimeout(() => document.documentElement.classList.remove("print-result"), 500);
    }
  }

  function onChange(e) {
    if (e.target.id !== "dob") return;
    state.dob = e.target.value;
    if (!state.dob) {
      state.months = null;
      render();
      return;
    }
    const dob = new Date(state.dob + "T00:00:00");
    const m = monthsBetween(dob);
    state.months = isNaN(m) || dob > new Date() ? -1 : m;
    const idx = state.months >= 0 ? bandForMonths(state.months) : -1;
    state.band = idx >= 0 ? idx : null;
    render();
  }

  document.addEventListener("DOMContentLoaded", () => {
    root = document.getElementById("screening-app");
    if (!root) return;
    root.addEventListener("click", onClick);
    root.addEventListener("change", onChange);
    document.addEventListener("langchange", () => render());
    window.addEventListener("afterprint", () => document.documentElement.classList.remove("print-result"));
    render();
  });
})();
