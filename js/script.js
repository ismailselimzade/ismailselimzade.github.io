"use strict";

// i18n
const translations = {
  az: {
    tabProjects: "layihələr",
    tabSkills: "bacarıqlar",
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

const langFlagUrls = {
  az: "img/flags/az.svg",
  tr: "img/flags/tr.svg",
};

const setLanguage = (lang) => {
  const dict = translations[lang];
  if (!dict) return;
  i18nEls.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  if (lang === "en") {
    langIcon.innerHTML = '<span class="lang-flag-text">EN</span>';
  } else {
    langIcon.innerHTML = `<img class="lang-flag" src="${langFlagUrls[lang]}" alt="${lang.toUpperCase()}" />`;
  }
  document.documentElement.setAttribute("lang", lang);
  langMenu.classList.remove("open");
};

langIcon.addEventListener("click", () => {
  langMenu.classList.toggle("open");
});

langOptions.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-wrapper")) {
    langMenu.classList.remove("open");
  }
});

setLanguage("en");

// change theme dark & night
const themeButton = document.querySelector(".theme-icon");
const changeTheme = () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
};
themeButton.addEventListener("click", changeTheme);

// change portfolio and skills section
const skills = document.querySelector(".skills");
const mySkills = document.querySelector(".my-skills");
const portfolio = document.querySelector(".portfolio");
const projects = document.querySelector(".projects");

const openSkills = () => {
  projects.style.display = "none";
  mySkills.style.display = "block";
  portfolio.classList.remove("active");
  skills.classList.add("active");
};

const openProjects = () => {
  projects.style.display = "block";
  mySkills.style.display = "none";
  portfolio.classList.add("active");
  skills.classList.remove("active");
};


skills.addEventListener("click", openSkills);
portfolio.addEventListener("click", openProjects);

// cv language dropdown
const cvBtn = document.querySelector(".cv");
const cvMenu = document.querySelector(".cv-lang-menu");

cvBtn.addEventListener("click", () => {
  cvMenu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".cv-wrapper")) {
    cvMenu.classList.remove("open");
  }
});



// backend and frontend accordion
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

// skills accordion
const skillToggles = document.querySelectorAll(".skill-toggle");
skillToggles.forEach((btn) => {
  const panel = btn.nextElementSibling;
  btn.addEventListener("click", () => {
    panel.classList.toggle("open");
    btn.classList.toggle("active");
  });
});
