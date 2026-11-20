(function () {
  "use strict";
  const S = window.SITE;
  if (!S) return;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), S);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tick = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>';

  /* ---------- Bind simple text + links ---------- */
  $$("[data-bind]").forEach((el) => {
    const v = get(el.dataset.bind);
    if (v != null) el.textContent = v;
  });
  const hrefs = {
    cv: S.cv,
    mailto: "mailto:" + S.email + "?subject=" + encodeURIComponent("Hello Ayesha"),
    linkedin: S.linkedin,
  };
  $$("[data-href]").forEach((el) => (el.href = hrefs[el.dataset.href]));
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Build lists ---------- */
  $("#stats").innerHTML = S.stats
    .map((s) => `<li><p class="stat-v"><span class="count" data-to="${s.value}">${s.value}</span><em>${esc(s.suffix)}</em></p><p class="stat-l">${esc(s.label)}</p></li>`)
    .join("");

  $("#services-list").innerHTML = S.services
    .map(
      (s, i) => `<li>
        <button type="button" aria-expanded="${i === 0}" aria-controls="svc-${i}" id="svc-b-${i}">${esc(s.title)}</button>
        <div class="panel-body" id="svc-${i}" role="region" aria-labelledby="svc-b-${i}"><div><p>${esc(s.text)}</p></div></div>
      </li>`
    )
    .join("");

  const orbitWords = ["Sage", "QuickBooks", "Xero", "Excel", "Payroll", "VAT"];
  $("#orbit-text").textContent = orbitWords.join("  ·  ") + "  ·  ";

  const mq = S.marquee.map((w) => `<span class="marquee-item">${esc(w)}${tick}</span>`).join("");
  $("#marquee").innerHTML = mq + mq + mq + mq;

  $("#tools-list").innerHTML = S.tools
    .map(
      (t) => `<li class="tool" data-reveal>
        <span class="tool-check">${tick}</span>
        <div class="tool-top"><span class="tool-mark">${esc(t.mark)}</span><div><h3>${esc(t.name)}</h3><span class="lvl">${esc(t.level)}</span></div></div>
        <p>${esc(t.text)}</p>
      </li>`
    )
    .join("");

  const badge = S.hero.badge;
  const papers = $("#papers");
  papers.setAttribute("aria-label", badge.cleared + " of " + badge.total + " CAF papers cleared");
  papers.innerHTML = Array.from({ length: badge.total }, (_, i) => `<span class="paper${i < badge.cleared ? " done" : ""}" style="--i:${i}">${i < badge.cleared ? tick : ""}</span>`).join("");

  $("#exp-projects").innerHTML = S.experience.projects.map((p) => `<span class="chip">${esc(p)}</span>`).join("");
  $("#exp-points").innerHTML = S.experience.points
    .map((p, i) => `<li><span class="n">${String(i + 1).padStart(2, "0")}</span><span>${esc(p)}</span></li>`)
    .join("");

  $("#edu-list").innerHTML = S.education
    .map(
      (e) => `<li class="tl" data-reveal><div class="tl-card">
        <p class="tl-period">${esc(e.period)}</p>
        <h3>${esc(e.title)}</h3>
        <p class="place">${esc(e.place)}</p>
        <ul>${e.detail.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
      </div></li>`
    )
    .join("");

  const medal = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="M9 14.5 7.5 22l4.5-2.5 4.5 2.5L15 14.5"/></svg>';
  $("#awards-track").innerHTML = S.awards
    .map(
      (a) => `<article class="award">
        <div class="award-top"><span class="medal">${medal}</span><div><h3>${esc(a.title)}</h3><p class="by">${esc(a.by)}</p></div></div>
        <p>${esc(a.text)}</p>
      </article>`
    )
    .join("");

  const tk = S.ticker.map((t) => `<span>${esc(t)}</span>`).join("");
  $("#ticker").innerHTML = tk + tk + tk;

  /* ---------- Nav: shrink, active link, mobile menu ---------- */
  const navWrap = $(".nav-wrap");
  const onScroll = () => navWrap.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuBtn = $(".menu-btn");
  const menu = $("#mobile-menu");
  const setMenu = (open) => {
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
  };
  menuBtn.addEventListener("click", () => setMenu(menu.hidden));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

  const navLinks = $$(".nav-links a");
  const sections = ["about", "services", "experience", "education", "awards", "contact"].map((id) => document.getElementById(id));
  const secObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id && !a.classList.contains("nav-cta")));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => s && secObs.observe(s));

  /* ---------- Accordion ---------- */
  $$("#services-list button").forEach((b) =>
    b.addEventListener("click", () => {
      const open = b.getAttribute("aria-expanded") === "true";
      $$("#services-list button").forEach((x) => x.setAttribute("aria-expanded", "false"));
      b.setAttribute("aria-expanded", String(!open));
    })
  );

  /* ---------- Reveal on scroll + counters ---------- */
  const countUp = (el) => {
    const to = +el.dataset.to;
    if (reduced) return (el.textContent = to);
    const t0 = performance.now();
    const dur = 1200;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    el.textContent = 0;
    requestAnimationFrame(step);
  };

  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        el.classList.add("in");
        $$(".count", el).forEach(countUp);
        revealObs.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  $$("[data-reveal]").forEach((el, i) => {
    // stagger siblings in grids
    const sibs = el.parentElement ? $$(":scope > [data-reveal]", el.parentElement) : [];
    const idx = sibs.indexOf(el);
    if (idx > 0) el.style.transitionDelay = Math.min(idx * 90, 450) + "ms";
    revealObs.observe(el);
  });

  /* ---------- Button ripple ---------- */
  document.addEventListener("pointerdown", (e) => {
    const b = e.target.closest(".btn, .circle-btn");
    if (!b || reduced) return;
    const r = b.getBoundingClientRect();
    const d = Math.max(r.width, r.height);
    const s = document.createElement("span");
    s.className = "ripple";
    s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
    b.appendChild(s);
    setTimeout(() => s.remove(), 650);
  });

  /* ---------- Hero tilt (desktop only) ---------- */
  const heroImg = $(".hero-photo img");
  if (!reduced && window.matchMedia("(pointer:fine)").matches && heroImg) {
    const hero = $(".hero");
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      heroImg.style.transform = `translate(${x * 10}px, ${y * 6}px)`;
    });
    hero.addEventListener("pointerleave", () => (heroImg.style.transform = ""));
    heroImg.style.transition = "transform .6s cubic-bezier(.2,.7,.2,1)";
    heroImg.addEventListener("animationend", () => (heroImg.style.animation = "none"), { once: true });
  }

  /* ---------- Awards carousel ---------- */
  const track = $("#awards-track");
  const prev = $("#aw-prev");
  const next = $("#aw-next");
  const stepSize = () => {
    const card = $(".award", track);
    return card ? card.getBoundingClientRect().width + 16 : 300;
  };
  const updateCtrl = () => {
    prev.disabled = track.scrollLeft < 8;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
  };
  prev.addEventListener("click", () => track.scrollBy({ left: -stepSize() }));
  next.addEventListener("click", () => track.scrollBy({ left: stepSize() }));
  track.addEventListener("scroll", updateCtrl, { passive: true });
  window.addEventListener("resize", updateCtrl);
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") track.scrollBy({ left: stepSize() });
    if (e.key === "ArrowLeft") track.scrollBy({ left: -stepSize() });
  });
  updateCtrl();

  /* ---------- "Free sample" links preselect the form ---------- */
  $$("[data-need=sample]").forEach((a) =>
    a.addEventListener("click", () => {
      $("#f-need").value = "A free sample of my work";
    })
  );

  /* ---------- Call-back form (FormSubmit) ---------- */
  const form = $("#callback-form");
  const status = $("#form-status");
  const btn = $("button[type=submit]", form);
  const btnLabel = $("span", btn);

  const setErr = (input, msg) => {
    const f = input.closest(".field");
    f.classList.toggle("invalid", !!msg);
    let e = $(".err", f);
    if (msg) {
      if (!e) {
        e = document.createElement("span");
        e.className = "err";
        e.id = input.id + "-err";
        f.appendChild(e);
      }
      e.textContent = msg;
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", e.id);
    } else {
      e && e.remove();
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
    }
  };
  const validate = () => {
    let ok = true;
    const n = form.name;
    const em = form.email;
    const ph = form.phone;
    if (!n.value.trim()) { setErr(n, "Please add your name."); ok = false; } else setErr(n);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim())) { setErr(em, "Please add a valid email."); ok = false; } else setErr(em);
    if (ph.value.replace(/\D/g, "").length < 7) { setErr(ph, "Please add a number I can call."); ok = false; } else setErr(ph);
    return ok;
  };
  ["name", "email", "phone"].forEach((k) => form[k].addEventListener("blur", () => form[k].closest(".field").classList.contains("invalid") && validate()));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form-status";
    status.textContent = "";
    if (!validate()) {
      $("[aria-invalid=true]", form).focus();
      return;
    }
    if (form._honey.value) return; // bot
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      need: form.need.value,
      best_time: form.best_time.value,
      message: form.message.value.trim() || "(none)",
      _subject: (form.need.value === "A free sample of my work" ? "Free sample request from " : "Call-back request from ") + form.name.value.trim(),
      _template: "table",
      _captcha: "false",
    };
    btn.classList.add("loading");
    btnLabel.textContent = "Sending…";
    try {
      const res = await fetch(S.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) !== "true") throw new Error(json.message || "Request failed");
      form.reset();
      status.classList.add("ok");
      status.textContent = "Thanks, " + data.name.split(" ")[0] + ". Your request is in and I'll call you back soon.";
    } catch (err) {
      status.classList.add("bad");
      status.innerHTML = 'That didn\'t go through. Please email me at <a href="mailto:' + S.email + '" style="text-decoration:underline">' + S.email + "</a>.";
    } finally {
      btn.classList.remove("loading");
      btnLabel.textContent = "Request a call back";
    }
  });
})();
