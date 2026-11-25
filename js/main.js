(function () {
  const SITE = window.SITE;
  const C = window.CONTENT;
  const P = (o) => window.I18N.pick(o);
  const ic = (id, cls = "") => `<svg class="icon ${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const waLink = (text) =>
    `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

  const T = {
    waDefault: { ar: "مرحباً أ. أحمد، أود الاستفسار عن جلسات النطق واللغة.", en: "Hello Ahmad, I'd like to ask about speech and language sessions." },
    waService: { ar: "مرحباً أ. أحمد، أود الاستفسار عن خدمة: ", en: "Hello Ahmad, I'd like to ask about: " },
    ask: { ar: "تواصل للاستفسار", en: "Ask about this service" },
    more: { ar: "اعرف المزيد", en: "Learn more" },
    featured: { ar: "التخصص الأساسي", en: "Core specialty" },
    general: { ar: "استفسار عام", en: "General inquiry" },
    soon: { ar: "قريباً", en: "Coming soon" },
    soonImg: { ar: "مساحة لصورة", en: "Photo slot" },
    soonVid: { ar: "مساحة لفيديو", en: "Video slot" },
    form: {
      hello: { ar: "مرحباً أ. أحمد،", en: "Hello Ahmad," },
      name: { ar: "الاسم", en: "Name" },
      age: { ar: "عمر الطفل", en: "Child's age" },
      service: { ar: "الاستفسار", en: "Inquiry" },
      message: { ar: "التفاصيل", en: "Details" },
    },
  };

  /* ---------------- Theme ---------------- */
  function initTheme() {
    const btn = document.getElementById("theme-toggle");
    const meta = () => document.querySelectorAll('meta[name="theme-color"]');
    btn?.addEventListener("click", () => {
      const dark = document.documentElement.classList.toggle("dark");
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
      meta().forEach((m) => m.setAttribute("content", dark ? "#17120f" : "#fff9f2"));
    });
  }

  /* ---------------- Contact links ---------------- */
  function applyLinks() {
    document.querySelectorAll("[data-wa]").forEach((a) => (a.href = waLink(P(T.waDefault))));
    document.querySelectorAll("[data-tel]").forEach((a) => (a.href = `tel:${SITE.phone}`));
    document.querySelectorAll("[data-mail]").forEach((a) => (a.href = `mailto:${SITE.email}`));
    document.querySelectorAll("[data-linkedin]").forEach((a) => (a.href = SITE.linkedin));
    document.querySelectorAll("[data-site]").forEach((el) => (el.textContent = SITE[el.dataset.site] || ""));
  }

  function renderSocial() {
    const box = document.getElementById("social-links");
    if (!box) return;
    const icons = { facebook: "i-facebook", instagram: "i-instagram", youtube: "i-youtube", telegram: "i-send", tiktok: "i-music" };
    const items = [["linkedin", SITE.linkedin, "i-linkedin"]].concat(
      Object.entries(SITE.social || {}).filter(([, url]) => url).map(([k, url]) => [k, url, icons[k] || "i-sparkle"])
    );
    box.innerHTML = items
      .map(
        ([k, url, icon]) =>
          `<a href="${url}" target="_blank" rel="noopener" aria-label="${k}" class="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20">${ic(icon)}</a>`
      )
      .join("");
  }

  /* ---------------- Mobile menu ---------------- */
  function initMenu() {
    const btn = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");
    if (!btn || !menu) return;
    const set = (open) => {
      btn.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("hidden", !open);
      btn.querySelector("[data-open-icon]").classList.toggle("hidden", open);
      btn.querySelector("[data-close-icon]").classList.toggle("hidden", !open);
    };
    btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
    window.addEventListener("resize", () => { if (window.innerWidth >= 1024) set(false); });
  }

  /* ---------------- Header + active link + timeline ---------------- */
  function initScroll() {
    const header = document.getElementById("site-header");
    const links = [...document.querySelectorAll(".nav-link")];
    // Only in-page links (#about); other pages link back with index.html#about.
    const sections = links.filter((l) => l.getAttribute("href").startsWith("#")).map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean);
    const timeline = document.getElementById("timeline");
    const progress = timeline?.querySelector(".timeline-progress");

    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 20);

      let current = null;
      for (const s of sections) if (s.getBoundingClientRect().top < window.innerHeight * 0.35) current = s.id;
      links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${current}`));

      if (progress) {
        const r = timeline.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (window.innerHeight * 0.7 - r.top) / r.height));
        progress.style.setProperty("--p", p.toFixed(3));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- Reveal on scroll ---------------- */
  let revealObserver;
  function observeReveals(scope = document) {
    const els = scope.querySelectorAll(".reveal:not(.in), .reveal-scale:not(.in)");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    revealObserver ??= new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            revealObserver.unobserve(en.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => revealObserver.observe(el));
  }

  /* ---------------- Counters ---------------- */
  function initCounters() {
    const els = document.querySelectorAll("[data-count]");
    const run = (el) => {
      const target = Number(el.dataset.count);
      if (reduceMotion) { el.textContent = target.toLocaleString("en"); return; }
      const dur = 1600;
      const t0 = performance.now();
      const step = (t) => {
        const k = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(target * eased).toLocaleString("en");
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!("IntersectionObserver" in window)) return els.forEach(run);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }),
      { threshold: 0.6 }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------------- Accordions (services + FAQ) ---------------- */
  function initAccordions() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-acc]");
      if (!btn) return;
      const open = btn.getAttribute("aria-expanded") !== "true";
      const group = btn.dataset.acc;
      if (group === "faq" && open) {
        document.querySelectorAll('[data-acc="faq"][aria-expanded="true"]').forEach((b) => b.setAttribute("aria-expanded", "false"));
      }
      btn.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---------------- Render: services ---------------- */
  function renderServices() {
    const grid = document.getElementById("services-grid");
    if (!grid) return;
    const openIds = new Set([...grid.querySelectorAll('[aria-expanded="true"]')].map((b) => b.dataset.id));
    grid.innerHTML = C.services
      .map((s, i) => {
        const open = openIds.has(s.id);
        const featured = s.featured;
        return `
        <article class="card reveal group relative overflow-hidden p-0 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${featured ? "md:col-span-2 lg:col-span-1 border-primary/40 bg-gradient-to-br from-primary-soft to-surface" : ""}" style="--d:${(i % 3) * 90}ms">
          ${featured ? `<span class="absolute top-5 end-5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-ink">${P(T.featured)}</span>` : ""}
          <button type="button" data-acc="svc" data-id="${s.id}" aria-expanded="${open}" aria-controls="svc-${s.id}" class="block w-full p-6 text-start">
            <span class="grid h-14 w-14 place-items-center rounded-2xl ${i % 2 ? "bg-accent-soft text-accent-strong" : "bg-primary-soft text-primary"} transition duration-300 group-hover:scale-110 group-hover:-rotate-6">${ic(s.icon, "h-7 w-7")}</span>
            <h3 class="mt-5 text-xl font-bold">${P(s.title)}</h3>
            <p class="mt-2 leading-relaxed text-muted">${P(s.short)}</p>
            <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">${P(T.more)} ${ic("i-chevron", "acc-chevron transition-transform duration-300")}</span>
          </button>
          <div class="acc-panel" id="svc-${s.id}">
            <div>
              <div class="mx-6 border-t border-line pb-6 pt-5">
                <ul class="space-y-2.5">
                  ${P(s.points).map((p) => `<li class="flex items-start gap-2.5 text-sm leading-relaxed">${ic("i-check", "mt-0.5 text-primary")}<span>${p}</span></li>`).join("")}
                </ul>
                <a href="${waLink(P(T.waService) + P(s.title))}" target="_blank" rel="noopener" class="btn-accent mt-5 w-full py-2.5 text-sm">${ic("i-chat")} ${P(T.ask)}</a>
              </div>
            </div>
          </div>
        </article>`;
      })
      .join("");
    observeReveals(grid);
  }

  /* ---------------- Render: timeline / training / tools ---------------- */
  function renderAbout() {
    const tl = document.getElementById("timeline");
    if (tl) {
      tl.querySelectorAll("li").forEach((li) => li.remove());
      tl.insertAdjacentHTML(
        "beforeend",
        C.timeline
          .map(
            (t, i) => `
          <li class="reveal relative" style="--d:${i * 70}ms">
            <span class="absolute -start-10 top-0 grid h-8 w-8 place-items-center rounded-full border-2 border-primary bg-surface text-primary shadow-sm">${ic(t.icon, "h-4 w-4")}</span>
            <p class="text-sm font-semibold text-accent-strong">${P(t.date)}</p>
            <h4 class="mt-1 text-lg font-bold">${P(t.title)}</h4>
            <p class="text-sm font-medium text-primary">${P(t.place)}</p>
            <p class="mt-2 text-sm leading-relaxed text-muted">${P(t.text)}</p>
          </li>`
          )
          .join("")
      );
      observeReveals(tl);
    }

    const tr = document.getElementById("training-list");
    if (tr && !tr.children.length) {
      tr.innerHTML = C.training
        .map(
          (t) => `
          <li class="flex items-start gap-3" dir="ltr">
            <span class="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-strong">${ic("i-check", "h-3.5 w-3.5")}</span>
            <span class="text-sm leading-relaxed"><span class="font-semibold">${t.title}</span><span class="block text-muted">${t.org} · ${t.year}</span></span>
          </li>`
        )
        .join("");
    }

    const tools = document.getElementById("tools-list");
    if (tools && !tools.children.length) {
      tools.innerHTML = C.tools.map((t) => `<li class="chip transition hover:-translate-y-0.5 hover:border-primary hover:text-primary">${t}</li>`).join("");
    }
  }

  /* ---------------- Render: FAQ ---------------- */
  function renderFaq() {
    const list = document.getElementById("faq-list");
    if (!list) return;
    const openIdx = [...list.querySelectorAll('[aria-expanded="true"]')].map((b) => b.dataset.idx);
    list.innerHTML = C.faq
      .map(
        (f, i) => `
        <div class="card reveal p-0" style="--d:${i * 50}ms">
          <button type="button" data-acc="faq" data-idx="${i}" aria-expanded="${openIdx.includes(String(i))}" aria-controls="faq-${i}" class="flex w-full items-center justify-between gap-4 p-5 text-start sm:p-6">
            <span class="flex items-center gap-3 font-bold sm:text-lg">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sun-soft text-warn">${ic("i-help", "h-5 w-5")}</span>
              ${P(f.q)}
            </span>
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-2">${ic("i-chevron", "acc-chevron transition-transform duration-300")}</span>
          </button>
          <div class="acc-panel" id="faq-${i}">
            <div><p class="px-5 pb-6 leading-relaxed text-muted sm:px-6 sm:ps-[4.25rem]">${P(f.a)}</p></div>
          </div>
        </div>`
      )
      .join("");
    observeReveals(list);
  }

  /* ---------------- Render: media ---------------- */
  function renderMedia() {
    const grid = document.getElementById("media-grid");
    if (!grid) return;
    const items = SITE.media || [];
    const slots = Math.max(0, (SITE.mediaSlots || 6) - items.length);
    const filled = items
      .map((m, i) => {
        const cap = P(m.caption);
        if (m.type === "youtube") {
          return `
          <button type="button" data-media="${i}" class="card reveal group relative aspect-video overflow-hidden p-0 text-start">
            <img src="https://i.ytimg.com/vi/${m.id}/hqdefault.jpg" alt="${cap}" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <span class="absolute inset-0 grid place-items-center bg-black/25"><span class="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-[#3e2a20] shadow-xl transition group-hover:scale-110">${ic("i-play", "h-7 w-7 translate-x-0.5")}</span></span>
            ${cap ? `<span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 p-4 text-sm font-semibold text-white">${cap}</span>` : ""}
          </button>`;
        }
        return `
          <button type="button" data-media="${i}" class="card reveal group relative aspect-[4/3] overflow-hidden p-0 text-start">
            <img src="${m.src}" alt="${cap}" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            ${cap ? `<span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 p-4 text-sm font-semibold text-white">${cap}</span>` : ""}
          </button>`;
      })
      .join("");
    const empty = Array.from({ length: slots }, (_, i) => {
      const vid = i % 3 === 1;
      return `
        <div class="reveal relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl border-2 border-dashed border-line bg-surface-2/60" style="--d:${i * 70}ms">
          <div class="dot-grid absolute inset-0 opacity-50"></div>
          <div class="relative text-center text-muted">
            <span class="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-surface shadow-sm ${vid ? "text-accent-strong" : "text-primary"}">${ic(vid ? "i-play" : "i-image", "h-7 w-7")}</span>
            <p class="mt-3 font-semibold">${P(vid ? T.soonVid : T.soonImg)}</p>
            <p class="text-sm">${P(T.soon)}</p>
          </div>
        </div>`;
    }).join("");
    grid.innerHTML = filled + empty;
    observeReveals(grid);
  }

  function initLightbox() {
    const box = document.getElementById("lightbox");
    const body = document.getElementById("lightbox-body");
    if (!box) return;
    const close = () => { box.classList.add("hidden"); box.classList.remove("flex"); body.innerHTML = ""; };
    document.getElementById("media-grid")?.addEventListener("click", (e) => {
      const b = e.target.closest("[data-media]");
      if (!b) return;
      const m = SITE.media[Number(b.dataset.media)];
      body.innerHTML =
        m.type === "youtube"
          ? `<div class="aspect-video w-full overflow-hidden rounded-2xl"><iframe class="h-full w-full" src="https://www.youtube-nocookie.com/embed/${m.id}?autoplay=1" title="${P(m.caption)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`
          : `<img src="${m.src}" alt="${P(m.caption)}" class="mx-auto max-h-[85vh] rounded-2xl object-contain" />`;
      box.classList.remove("hidden");
      box.classList.add("flex");
    });
    box.addEventListener("click", (e) => { if (e.target === box || e.target.closest("#lightbox-close")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ---------------- Contact form ---------------- */
  function renderServiceSelect() {
    const sel = document.getElementById("service-select");
    if (!sel) return;
    const cur = sel.value;
    sel.innerHTML =
      `<option value="general">${P(T.general)}</option>` +
      C.services.map((s) => `<option value="${s.id}">${P(s.title)}</option>`).join("");
    if (cur) sel.value = cur;
  }

  function initForm() {
    const form = document.getElementById("contact-form");
    const err = document.getElementById("form-error");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form));
      if (!d.name.trim() || !d.age.trim()) {
        err.classList.remove("hidden");
        form.querySelector(!d.name.trim() ? '[name="name"]' : '[name="age"]').focus();
        return;
      }
      err.classList.add("hidden");
      const svc = d.service === "general" ? P(T.general) : P(C.services.find((s) => s.id === d.service)?.title);
      const lines = [
        P(T.form.hello),
        `${P(T.form.name)}: ${d.name.trim()}`,
        `${P(T.form.age)}: ${d.age.trim()}`,
        `${P(T.form.service)}: ${svc}`,
      ];
      if (d.message.trim()) lines.push(`${P(T.form.message)}: ${d.message.trim()}`);
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
    });
  }

  /* ---------------- Boot ---------------- */
  function renderAll() {
    applyLinks();
    renderServices();
    renderAbout();
    renderFaq();
    renderMedia();
    renderServiceSelect();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lang-toggle")?.addEventListener("click", () => window.I18N.toggle());
    document.addEventListener("langchange", renderAll);

    initTheme();
    initMenu();
    initAccordions();
    initLightbox();
    initForm();
    renderSocial();

    window.I18N.init(); // triggers langchange → renderAll
    observeReveals();
    initCounters();
    initScroll();
  });
})();
