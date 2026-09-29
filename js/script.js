"use strict";

/* ==========================================================================
   1. I18N (translations)
   ========================================================================== */

const translations = {
  az: {
    tabProjects: "layihələr",
    tabSkills: "bacarıqlar",
    tabCertificates: "sertifikatlar",
    backendProjects: "Backend Layihələr",
    frontendProjects: "Frontend Layihələr",
    skillLanguages: "Dillər",
    skillBackend: "Backend Stack",
    skillDatabase: "Verilənlər Bazası",
    skillTools: "Alətlər",
    skillFundamentals: "Əsaslar",
    footerRights: "Bütün hüquqlar qorunur.",
  },
  tr: {
    tabProjects: "projeler",
    tabSkills: "yetenekler",
    tabCertificates: "sertifikalar",
    backendProjects: "Backend Projeler",
    frontendProjects: "Frontend Projeler",
    skillLanguages: "Diller",
    skillBackend: "Backend Stack",
    skillDatabase: "Veritabanı",
    skillTools: "Araçlar",
    skillFundamentals: "Temeller",
    footerRights: "Tüm hakları saklıdır.",
  },
  en: {
    tabProjects: "projects",
    tabSkills: "skills",
    tabCertificates: "certificates",
    backendProjects: "Backend Projects",
    frontendProjects: "Frontend Projects",
    skillLanguages: "Languages",
    skillBackend: "Backend Stack",
    skillDatabase: "Database",
    skillTools: "Tools",
    skillFundamentals: "Fundamentals",
    footerRights: "All rights reserved.",
  },
};

const langIcon = document.querySelector(".lang-icon");
const langMenu = document.querySelector(".lang-menu");
const langOptions = document.querySelectorAll(".lang-option");
const i18nEls = document.querySelectorAll("[data-i18n]");
const container = document.querySelector(".container");

const langFlagUrls = {
  az: "img/flags/az.svg",
  tr: "img/flags/tr.svg",
};

const setLanguage = (lang) => {
  const dict = translations[lang];
  if (!dict) return;

  i18nEls.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!dict[key]) return;
    const icon = el.querySelector(".toggle-icon");
    if (icon) {
      el.textContent = dict[key];
      el.prepend(icon);
    } else {
      el.textContent = dict[key];
    }
  });

  if (lang === "en") {
    langIcon.innerHTML = '<span class="lang-flag-text">EN</span>';
  } else {
    langIcon.innerHTML = `<img class="lang-flag" src="${langFlagUrls[lang]}" alt="${lang.toUpperCase()}" />`;
  }

  document.documentElement.setAttribute("lang", lang);
  langMenu.classList.remove("open");
  container.classList.remove("blur-bg-lang");
};

langIcon.addEventListener("click", () => {
  langMenu.classList.toggle("open");
  container.classList.toggle("blur-bg-lang", langMenu.classList.contains("open"));
});

langOptions.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage("en");

/* ==========================================================================
   2. THEME TOGGLE (light/dark)
   ========================================================================== */

const themeButton = document.querySelector(".theme-icon");

const changeTheme = () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
};

themeButton.addEventListener("click", changeTheme);

/* ==========================================================================
   3. TAB SWITCHING (projects / skills / certificates)
   ========================================================================== */

const skills = document.querySelector(".skills");
const mySkills = document.querySelector(".my-skills");
const portfolio = document.querySelector(".portfolio");
const projects = document.querySelector(".projects");
const certificatesTab = document.querySelector(".certificates-tab");
const certificates = document.querySelector(".certificates");

const allTabs = [portfolio, skills, certificatesTab];
const allPanels = [projects, mySkills, certificates];

const openPanel = (activeTab, activePanel) => {
  allPanels.forEach((panel) => {
    if (panel === activePanel) {
      panel.style.display = "block";
      panel.classList.remove("panel-animate"); // əvvəlki animasiyanı sıfırla
      void panel.offsetWidth; // brauzeri məcburi reflow-a saldıq
      panel.classList.add("panel-animate"); // animasiyanı yenidən başlat
    } else {
      panel.style.display = "none";
      panel.classList.remove("panel-animate");
    }
  });

  allTabs.forEach((tab) => {
    tab.classList.toggle("active", tab === activeTab);
  });
};

const openSkills = () => openPanel(skills, mySkills);
const openProjects = () => openPanel(portfolio, projects);
const openCertificates = () => openPanel(certificatesTab, certificates);

skills.addEventListener("click", openSkills);
portfolio.addEventListener("click", openProjects);
certificatesTab.addEventListener("click", openCertificates);

/* ==========================================================================
   4. CV LANGUAGE DROPDOWN
   ========================================================================== */

const cvBtn = document.querySelector(".cv");
const cvMenu = document.querySelector(".cv-lang-menu");

cvBtn.addEventListener("click", () => {
  cvMenu.classList.toggle("open");
  container.classList.toggle("blur-bg-cv", cvMenu.classList.contains("open"));
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-wrapper")) {
    langMenu.classList.remove("open");
    container.classList.remove("blur-bg-lang");
  }
  if (!e.target.closest(".cv-wrapper")) {
    cvMenu.classList.remove("open");
    container.classList.remove("blur-bg-cv");
  }
});

// Escape düyməsi ilə menyuları bağla
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  langMenu.classList.remove("open");
  cvMenu.classList.remove("open");
  container.classList.remove("blur-bg-lang", "blur-bg-cv");
});

/* ==========================================================================
   5. BACKEND / FRONTEND PROJECT ACCORDIONS
   ========================================================================== */

const backendBtn = document.querySelector(".backend");
const frontendBtn = document.querySelector(".frontend");
const backendProjects = document.querySelector(".backend-projects");
const frontendProjects = document.querySelector(".frontend-projects");

backendBtn.addEventListener("click", () => {
  backendProjects.classList.toggle("open");
  backendBtn.classList.toggle("active");
});

frontendBtn.addEventListener("click", () => {
  frontendProjects.classList.toggle("open");
  frontendBtn.classList.toggle("active");
});

/* ==========================================================================
   6. SKILLS ACCORDION
   ========================================================================== */

const skillToggles = document.querySelectorAll(".skill-toggle");

skillToggles.forEach((btn) => {
  const panel = btn.nextElementSibling;
  btn.addEventListener("click", () => {
    panel.classList.toggle("open");
    btn.classList.toggle("active");
  });
});

/* ==========================================================================
   7. CERTIFICATES ACCORDION
   ========================================================================== */

const certToggles = document.querySelectorAll(".cert-toggle");

certToggles.forEach((btn) => {
  const panel = btn.nextElementSibling;
  btn.addEventListener("click", () => {
    panel.classList.toggle("open");
    btn.classList.toggle("active");
  });
});

/* ==========================================================================
   8. CERTIFICATE LIGHTBOX
   ========================================================================== */

const certCards = document.querySelectorAll(".cert-card");
const certLightbox = document.querySelector(".cert-lightbox");
const certLightboxImg = document.querySelector(".cert-lightbox-img");
const certLightboxClose = document.querySelector(".cert-lightbox-close");

certCards.forEach((card) => {
  card.addEventListener("click", () => {
    certLightboxImg.src = card.dataset.full;
    certLightbox.classList.add("open");
  });
});

const closeCertLightbox = () => {
  certLightbox.classList.remove("open");
  certLightboxImg.src = "";
};

certLightboxClose.addEventListener("click", closeCertLightbox);

certLightbox.addEventListener("click", (e) => {
  if (e.target === certLightbox) closeCertLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCertLightbox();
});

/* ==========================================================================
   9. STICKY TOPBAR SCROLL BLUR
   ========================================================================== */

const topbar = document.querySelector(".topbar");

window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 20);
});

/* ==========================================================================
   10. SCROLL-TRIGGERED REVEAL (IntersectionObserver)
   ========================================================================== */

document.querySelectorAll(".my-skills, .certificates").forEach((el) => {
  el.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ==========================================================================
   11. CURSOR-FOLLOW GLOW (skill cards, cert cards, project accordions)
   ========================================================================== */

document.querySelectorAll(
  ".skill-card, .cert-card, .backend, .frontend, .skill-toggle, .cert-toggle, .cv, .portfolio, .skills, .certificates-tab, .theme-icon, .lang-icon, .link-badge, .cv-lang-option, .lang-option, .info-name, .info-job, .project-name, .cert-name"
).forEach((card) => {
  const glow = document.createElement("div");
  glow.className = "glow";
  card.appendChild(glow);

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    glow.style.left = `${e.clientX - rect.left}px`;
    glow.style.top = `${e.clientY - rect.top}px`;
    glow.style.opacity = "1";
  });

  card.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
});

/* ==========================================================================
   12. MAGNETIC CV BUTTON
   ========================================================================== */

cvBtn.addEventListener("mousemove", (e) => {
  const rect = cvBtn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  cvBtn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
});

cvBtn.addEventListener("mouseleave", () => {
  cvBtn.style.transform = "translate(0, 0)";
});