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

/* ==========================================================================
   13. API DEMO PANELS — Weather API
   ========================================================================== */

const WEATHER_BASE_URL = "https://weatherapiwrapperservice-ikj2.onrender.com";

document.querySelectorAll(".try-it-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const demoId = btn.dataset.demo;
    const demo = document.getElementById(demoId);
    demo.classList.toggle("open");
  });
});

document.querySelectorAll(".api-send-btn").forEach((btn) => {
  if (btn.dataset.api !== "weather") return;
  btn.addEventListener("click", async () => {
    const city = document.getElementById("weather-city-input").value.trim();
    const responseEl = document.getElementById("weather-response");

    if (!city) {
      responseEl.textContent = "// please enter a city name";
      responseEl.className = "api-response error";
      return;
    }

    btn.disabled = true;
    responseEl.innerHTML = '<span class="api-spinner"></span> loading...';
    responseEl.className = "api-response";

    try {
      const res = await fetch(`${WEATHER_BASE_URL}/weather/${encodeURIComponent(city)}`);
      const data = await res.json();
      responseEl.textContent = JSON.stringify(data, null, 2);
      responseEl.className = res.ok ? "api-response success" : "api-response error";
    } catch {
      responseEl.textContent = "// could not reach the API";
      responseEl.className = "api-response error";
    } finally {
      btn.disabled = false;
    }
  });
});

/* ==========================================================================
   14. API DEMO PANELS — Simple E-Commerce API
   ========================================================================== */

const ECOM_BASE_URL = "https://simpleecommerceapi.onrender.com";

let ecomAccessToken = null;
let ecomRefreshToken = null;
let ecomActiveKey = null;

const ecomSendBtn = document.getElementById("ecom-send-btn");
const ecomResponseEl = document.getElementById("ecom-response");
const ecomTokenBar = document.getElementById("ecom-token-bar");
const ecomInputsEl = document.getElementById("ecom-inputs");
const ecomUrlBar = document.getElementById("ecom-url-bar");
const ecomDropdownPanel = document.getElementById("ecom-dropdown-panel");
const ecomEpList = document.getElementById("ecom-ep-list");

function ecomSetTokenBar() {
  if (ecomAccessToken) {
    ecomTokenBar.innerHTML = '<i class="fa-solid fa-circle-check"></i> logged in';
    ecomTokenBar.className = "ecom-token-bar logged-in";
  } else {
    ecomTokenBar.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> not logged in';
    ecomTokenBar.className = "ecom-token-bar";
  }
}

function ecomField(id, placeholder, type = "text") {
  return `<div class="ecom-field">
    <label class="api-label">${id}</label>
    <input class="api-input" type="${type}" id="ecom-${id}" placeholder="${placeholder}" />
  </div>`;
}

function ecomDropdown(id, options) {
  const opts = options.map(o => `<option value="${o}">${o}</option>`).join("");
  return `<div class="ecom-field">
    <label class="api-label">${id}</label>
    <select class="api-input ecom-native-select" id="ecom-${id}">${opts}</select>
  </div>`;
}

const methodColors = { GET: "badge-get", POST: "badge-post", PUT: "badge-put", DELETE: "badge-delete" };

const ecomGroups = {
  auth: [
    { key: "register", method: "POST", label: "/auth/register" },
    { key: "login", method: "POST", label: "/auth/login" },
    { key: "refresh", method: "POST", label: "/auth/refresh" },
    { key: "logout", method: "POST", label: "/auth/logout" },
  ],
  categories: [
    { key: "getCategories", method: "GET", label: "/categories" },
    { key: "getCategoryById", method: "GET", label: "/categories/{id}" },
    { key: "createCategory", method: "POST", label: "/categories  [Admin]" },
    { key: "updateCategory", method: "PUT", label: "/categories/{id}  [Admin]" },
    { key: "deleteCategory", method: "DELETE", label: "/categories/{id}  [Admin]" },
  ],
  products: [
    { key: "getProducts", method: "GET", label: "/products" },
    { key: "getProductById", method: "GET", label: "/products/{id}" },
    { key: "createProduct", method: "POST", label: "/products  [Admin]" },
    { key: "updateProduct", method: "PUT", label: "/products/{id}  [Admin]" },
    { key: "updateStock", method: "PUT", label: "/products/{id}/stock  [Admin]" },
    { key: "deleteProduct", method: "DELETE", label: "/products/{id}  [Admin]" },
  ],
  cart: [
    { key: "getCart", method: "GET", label: "/carts" },
    { key: "addCartItem", method: "POST", label: "/carts" },
    { key: "updateCartItem", method: "PUT", label: "/carts/{cartItemId}" },
    { key: "deleteCartItem", method: "DELETE", label: "/carts/cartItems/{cartItemId}" },
    { key: "deleteCart", method: "DELETE", label: "/carts/carts/{cartId}" },
  ],
  orders: [
    { key: "getOrders", method: "GET", label: "/orders" },
    { key: "getOrderById", method: "GET", label: "/orders/{id}" },
    { key: "createOrder", method: "POST", label: "/orders" },
    { key: "updateOrderStatus", method: "PUT", label: "/orders/{orderId}/{status}  [Admin]" },
  ],
};

const ecomEndpoints = {
  register: { method: "POST", urlTemplate: "/api/auth/register", auth: false, inputs: () => [ecomField("UserName", "e.g. johndoe"), ecomField("Email", "john@example.com", "email"), ecomField("Password", "min 6 chars", "password")], path: () => "/api/auth/register", body: () => ({ UserName: v("UserName"), Email: v("Email"), Password: v("Password") }) },
  login: { method: "POST", urlTemplate: "/api/auth/login", auth: false, inputs: () => [ecomField("UserName", "your username"), ecomField("Password", "your password", "password")], path: () => "/api/auth/login", body: () => ({ UserName: v("UserName"), Password: v("Password") }) },
  refresh: { method: "POST", urlTemplate: "/api/auth/refresh", auth: false, inputs: () => [ecomField("Token", ecomRefreshToken || "refresh token")], path: () => "/api/auth/refresh", body: () => ({ Token: v("Token") || ecomRefreshToken || "" }) },
  logout: { method: "POST", urlTemplate: "/api/auth/logout", auth: false, inputs: () => [ecomField("Token", ecomRefreshToken || "refresh token")], path: () => "/api/auth/logout", body: () => ({ Token: v("Token") || ecomRefreshToken || "" }) },
  getCategories: { method: "GET", urlTemplate: "/api/categories", auth: false, inputs: () => [], path: () => "/api/categories", body: () => null },
  getCategoryById: { method: "GET", urlTemplate: "/api/categories/{id}", auth: false, inputs: () => [ecomField("id", "category UUID")], path: () => `/api/categories/${v("id")}`, body: () => null },
  createCategory: { method: "POST", urlTemplate: "/api/categories", auth: true, inputs: () => [ecomField("Name", "e.g. Electronics")], path: () => "/api/categories", body: () => ({ Name: v("Name") }) },
  updateCategory: { method: "PUT", urlTemplate: "/api/categories/{id}", auth: true, inputs: () => [ecomField("id", "category UUID"), ecomField("Name", "new name")], path: () => `/api/categories/${v("id")}`, body: () => ({ Name: v("Name") }) },
  deleteCategory: { method: "DELETE", urlTemplate: "/api/categories/{id}", auth: true, inputs: () => [ecomField("id", "category UUID")], path: () => `/api/categories/${v("id")}`, body: () => null },
  getProducts: { method: "GET", urlTemplate: "/api/products?[filters]", auth: false, inputs: () => [ecomField("Page", "1"), ecomField("PageSize", "20 (max 100)"), ecomField("SearchTerm", "optional"), ecomField("MinPrice", "optional"), ecomField("MaxPrice", "optional"), ecomField("CategoryId", "optional UUID")], path: () => { const p = new URLSearchParams(); if (v("Page")) p.set("Page", v("Page")); if (v("PageSize")) p.set("PageSize", v("PageSize")); if (v("SearchTerm")) p.set("SearchTerm", v("SearchTerm")); if (v("MinPrice")) p.set("MinPrice", v("MinPrice")); if (v("MaxPrice")) p.set("MaxPrice", v("MaxPrice")); if (v("CategoryId")) p.set("CategoryId", v("CategoryId")); return `/api/products?${p.toString()}`; }, body: () => null },
  getProductById: { method: "GET", urlTemplate: "/api/products/{id}", auth: false, inputs: () => [ecomField("id", "product UUID")], path: () => `/api/products/${v("id")}`, body: () => null },
  createProduct: { method: "POST", urlTemplate: "/api/products", auth: true, inputs: () => [ecomField("Name", "product name"), ecomField("Description", "description"), ecomField("Price", "e.g. 29.99"), ecomField("Stock", "e.g. 100"), ecomField("ImageUrl", "https://..."), ecomField("CategoryId", "category UUID")], path: () => "/api/products", body: () => ({ Name: v("Name"), Description: v("Description"), Price: parseFloat(v("Price")), Stock: parseInt(v("Stock")), ImageUrl: v("ImageUrl"), CategoryId: v("CategoryId") }) },
  updateProduct: { method: "PUT", urlTemplate: "/api/products/{id}", auth: true, inputs: () => [ecomField("id", "product UUID"), ecomField("Name", "product name"), ecomField("Description", "description"), ecomField("Price", "e.g. 29.99"), ecomField("Stock", "e.g. 100"), ecomField("ImageUrl", "https://..."), ecomField("CategoryId", "category UUID")], path: () => `/api/products/${v("id")}`, body: () => ({ Name: v("Name"), Description: v("Description"), Price: parseFloat(v("Price")), Stock: parseInt(v("Stock")), ImageUrl: v("ImageUrl"), CategoryId: v("CategoryId") }) },
  updateStock: { method: "PUT", urlTemplate: "/api/products/{id}/stock", auth: true, inputs: () => [ecomField("id", "product UUID"), ecomField("NewStock", "e.g. 50")], path: () => `/api/products/${v("id")}/stock`, body: () => ({ NewStock: parseInt(v("NewStock")) }) },
  deleteProduct: { method: "DELETE", urlTemplate: "/api/products/{id}", auth: true, inputs: () => [ecomField("id", "product UUID")], path: () => `/api/products/${v("id")}`, body: () => null },
  getCart: { method: "GET", urlTemplate: "/api/carts", auth: true, inputs: () => [], path: () => "/api/carts", body: () => null },
  addCartItem: { method: "POST", urlTemplate: "/api/carts", auth: true, inputs: () => [ecomField("ProductId", "product UUID"), ecomField("Quantity", "e.g. 2")], path: () => "/api/carts", body: () => ({ ProductId: v("ProductId"), Quantity: parseInt(v("Quantity")) }) },
  updateCartItem: { method: "PUT", urlTemplate: "/api/carts/{cartItemId}", auth: true, inputs: () => [ecomField("cartItemId", "cart item UUID"), ecomField("Quantity", "new quantity")], path: () => `/api/carts/${v("cartItemId")}`, body: () => ({ Quantity: parseInt(v("Quantity")) }) },
  deleteCartItem: { method: "DELETE", urlTemplate: "/api/carts/cartItems/{cartItemId}", auth: true, inputs: () => [ecomField("cartItemId", "cart item UUID")], path: () => `/api/carts/cartItems/${v("cartItemId")}`, body: () => null },
  deleteCart: { method: "DELETE", urlTemplate: "/api/carts/carts/{cartId}", auth: true, inputs: () => [ecomField("cartId", "cart UUID")], path: () => `/api/carts/carts/${v("cartId")}`, body: () => null },
  getOrders: { method: "GET", urlTemplate: "/api/orders", auth: true, inputs: () => [], path: () => "/api/orders", body: () => null },
  getOrderById: { method: "GET", urlTemplate: "/api/orders/{id}", auth: true, inputs: () => [ecomField("orderId", "order UUID")], path: () => `/api/orders/${v("orderId")}`, body: () => null },
  createOrder: { method: "POST", urlTemplate: "/api/orders", auth: true, inputs: () => [ecomField("CartId", "cart UUID"), ecomDropdown("PaymentMethod", ["CreditCard", "DebitCard", "Paypal"])], path: () => "/api/orders", body: () => ({ CartId: v("CartId"), PaymentMethod: ["CreditCard", "DebitCard", "Paypal"].indexOf(v("PaymentMethod")) }) },
  updateOrderStatus: { method: "PUT", urlTemplate: "/api/orders/{orderId}/{status}", auth: true, inputs: () => [ecomField("orderId", "order UUID"), ecomDropdown("status", ["Pending", "Paid", "Shipped", "Cancelled"])], path: () => `/api/orders/${v("orderId")}/${v("status")}`, body: () => null },
};

function v(id) {
  const el = document.getElementById(`ecom-${id}`);
  return el ? el.value.trim() : "";
}

let ecomActiveGroup = null;

function ecomRenderEpList(group) {
  const items = ecomGroups[group];
  ecomEpList.innerHTML = items.map(ep =>
    `<button class="ecom-ep-item" data-key="${ep.key}">
      <span class="ecom-method-badge ${methodColors[ep.method]}">${ep.method}</span>
      <span class="ecom-ep-label">${ep.label}</span>
    </button>`
  ).join("");

  ecomEpList.querySelectorAll(".ecom-ep-item").forEach(item => {
    item.addEventListener("click", () => {
      ecomEpList.querySelectorAll(".ecom-ep-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      ecomSelectEndpoint(item.dataset.key);
    });
  });
}

document.querySelectorAll(".ecom-group-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".ecom-group-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    ecomRenderEpList(btn.dataset.group);
    // endpoint seçimini sıfırla
    ecomActiveKey = null;
    ecomUrlBar.innerHTML = "";
    ecomInputsEl.innerHTML = "";
    ecomResponseEl.textContent = "";
    ecomResponseEl.className = "api-response api-response--idle";
  });
});

// ilkin render
ecomRenderEpList("auth");

function ecomSelectEndpoint(key) {
  ecomActiveKey = key;
  const ep = ecomEndpoints[key];
  if (!ep) return;

  ecomUrlBar.innerHTML = `
    <span class="ecom-method-badge ${methodColors[ep.method]}">${ep.method}</span>
    <span class="ecom-url-path">${ECOM_BASE_URL}${ep.urlTemplate}</span>
  `;

  ecomInputsEl.innerHTML = ep.inputs().join("");
  ecomResponseEl.textContent = "";
  ecomResponseEl.className = "api-response api-response--idle";

  if (key === "refresh" || key === "logout") {
    const tokenInput = document.getElementById("ecom-Token");
    if (tokenInput && ecomRefreshToken) tokenInput.value = ecomRefreshToken;
  }
}

ecomSendBtn.addEventListener("click", async () => {
  if (!ecomActiveKey) return;
  const ep = ecomEndpoints[ecomActiveKey];
  if (!ep) return;

  const path = ep.path();
  const body = ep.body();

  ecomSendBtn.disabled = true;
  ecomResponseEl.innerHTML = '<span class="api-spinner"></span> loading...';
  ecomResponseEl.className = "api-response";

  const headers = { "Content-Type": "application/json" };
  if (ep.auth && ecomAccessToken) headers["Authorization"] = `Bearer ${ecomAccessToken}`;

  try {
    const res = await fetch(`${ECOM_BASE_URL}${path}`, {
      method: ep.method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const text = await res.text();
    let data;
    if (!text) {
      data = `// ${res.status} ${res.statusText}`;
    } else {
      try { data = JSON.parse(text); } catch { data = text; }
    }

    if ((ecomActiveKey === "login" || ecomActiveKey === "register") && res.ok && data.accessToken) {
      ecomAccessToken = data.accessToken;
      ecomRefreshToken = data.refreshToken;
      ecomSetTokenBar();
    }
    if (ecomActiveKey === "refresh" && res.ok && data.accessToken) {
      ecomAccessToken = data.accessToken;
      ecomRefreshToken = data.refreshToken;
      ecomSetTokenBar();
    }
    if (ecomActiveKey === "logout" && res.ok) {
      ecomAccessToken = null;
      ecomRefreshToken = null;
      ecomSetTokenBar();
    }

    ecomResponseEl.textContent = typeof data === "string" ? data : JSON.stringify(data, null, 2);
    ecomResponseEl.className = res.ok ? "api-response success" : "api-response error";
  } catch {
    ecomResponseEl.textContent = "// could not reach the API";
    ecomResponseEl.className = "api-response error";
  } finally {
    ecomSendBtn.disabled = false;
  }
});