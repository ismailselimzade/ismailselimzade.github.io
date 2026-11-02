"use strict";

/* ==========================================================================
   1. ÇOXDİLLİLİK (İ18N) VƏ TƏRCÜMƏLƏR
   ========================================================================== */

const translations = {
  az: {
    jobTitle: ".NET Developer",
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
    // Weather API endpoint açıqlamaları (AZ)
    weatherTitle: "Şəhər üçün cari hava məlumatını qaytarır",
    weatherCityLabel: "şəhər",
    weatherCityPlaceholder: "məs. London",
    weatherSend: "Göndər",
    responseLabel: "Cavab",
    copyBtn: "kopyala",
    copyDone: "kopyalandı",
    weatherError_empty: "// zəhmət olmasa şəhər adı daxil edin",
    weatherError_fail: "// API ilə əlaqə qurmaq mümkün olmadı",
    ecomLoading: "sorğu göndərilir...",
    ecomError_connect: "// serverə qoşulmaq mümkün olmadı",
    ecomLoggedIn: "sistemə daxil olunub",
    ecomNotLoggedIn: "daxil olunmayıb",
    // E-commerce endpoint açıqlamaları (AZ)
    ecom_register: "Yeni istifadəçi qeydiyyatdan keçirir",
    ecom_login: "Sistemə daxil olub JWT token əldə edir",
    ecom_refresh: "Mövcud tokeni yeniləyir",
    ecom_logout: "Sistemdən çıxış edir",
    ecom_getCategories: "Bütün kateqoriyaların siyahısını qaytarır",
    ecom_getCategoryById: "ID-yə əsasən kateqoriya məlumatını gətirir",
    ecom_createCategory: "Yeni kateqoriya yaradır (Admin)",
    ecom_updateCategory: "Kateqoriyanı yeniləyir (Admin)",
    ecom_deleteCategory: "Kateqoriyanı silir (Admin)",
    ecom_getProducts: "Məhsulların siyahısını filtrləmə ilə qaytarır",
    ecom_getProductById: "ID-yə əsasən məhsul məlumatını gətirir",
    ecom_createProduct: "Yeni məhsul əlavə edir (Admin)",
    ecom_updateProduct: "Məhsul məlumatlarını yeniləyir (Admin)",
    ecom_updateStock: "Məhsul stokunu yeniləyir (Admin)",
    ecom_deleteProduct: "Məhsulu silir (Admin)",
    ecom_getCart: "İstifadəçinin səbətini gətirir",
    ecom_addCartItem: "Səbətə məhsul əlavə edir",
    ecom_updateCartItem: "Səbətdəki məhsul sayını yeniləyir",
    ecom_deleteCartItem: "Səbətdən məhsulu silir",
    ecom_deleteCart: "Səbəti tamamilə təmizləyir",
    ecom_getOrders: "İstifadəçinin sifarişlərini qaytarır",
    ecom_getOrderById: "ID-yə əsasən sifariş detallarını gətirir",
    ecom_createOrder: "Səbətdəki məhsullardan yeni sifariş yaradır",
    ecom_updateOrderStatus: "Sifariş statusunu dəyişdirir (Admin)",
    // ecomField placeholder-ləri (AZ)
    ph_UserName: "istifadəçi adı",
    ph_Email: "john@example.com",
    ph_Password: "şifrə",
    ph_Token: "refresh token",
    ph_id: "ID",
    ph_Name: "ad",
    ph_Page: "1",
    ph_PageSize: "20",
    ph_SearchTerm: "axtarış",
    ph_Description: "açıqlama",
    ph_Price: "qiymət",
    ph_Stock: "stok",
    ph_ImageUrl: "şəkil linki",
    ph_CategoryId: "kateqoriya ID",
    ph_ProductId: "məhsul ID",
    ph_Quantity: "say",
    ph_cartItemId: "səbət element ID",
    ph_NewStock: "yeni stok",
    ph_cartId: "səbət ID",
    ph_orderId: "sifariş ID",
    ph_CartId: "səbət ID",
    // HTTP status codes and messages (AZ)
    status_400: "Yanlış sorğu (Bad Request)",
    status_401: "Avtorizasiya tələb olunur (Unauthorized)",
    status_403: "Bu əməliyyat üçün icazəniz yoxdur (Forbidden)",
    status_404: "Axtarılan resurs tapılmadı (Not Found)",
    status_405: "Bu HTTP metodu bu endpoint üçün dəstəklənmir (Method Not Allowed)",
    status_500: "Server daxili xətası baş verdi (Internal Server Error)",
    response_empty_ok: "Sorğu uğurlu oldu, lakin geri data dönmədi (No Content)",
    response_empty_err: "Sorğu uğursuz oldu və cavab gövdəsi boşdur",
  },
  tr: {
    jobTitle: ".NET Developer",
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
    weatherTitle: "Şehir için güncel hava durumu verilerini döndürür",
    weatherCityLabel: "şehir",
    weatherCityPlaceholder: "örn. Londra",
    weatherSend: "Gönder",
    responseLabel: "Yanıt",
    copyBtn: "kopyala",
    copyDone: "kopyalandı",
    weatherError_empty: "// lütfen bir şehir adı girin",
    weatherError_fail: "// API ile bağlantı kurulamadı",
    ecomLoading: "istek gönderiliyor...",
    ecomError_connect: "// sunucuya bağlanılamadı",
    ecomLoggedIn: "oturum açıldı",
    ecomNotLoggedIn: "oturum açılmadı",
    ecom_register: "Yeni kullanıcı kaydı oluşturur",
    ecom_login: "Sisteme giriş yaparak JWT token alır",
    ecom_refresh: "Mevcut tokeni yeniler",
    ecom_logout: "Sistemden çıkış yapar",
    ecom_getCategories: "Tüm kategorilerin listesini döndürür",
    ecom_getCategoryById: "ID'ye göre kategori detayını getirir",
    ecom_createCategory: "Yeni kategori oluşturur (Admin)",
    ecom_updateCategory: "Kategoriyi günceller (Admin)",
    ecom_deleteCategory: "Kategoriyi siler (Admin)",
    ecom_getProducts: "Ürünlerin listesini filtreleme ile döndürür",
    ecom_getProductById: "ID'ye göre ürün detayını getirir",
    ecom_createProduct: "Yeni ürün ekler (Admin)",
    ecom_updateProduct: "Ürün bilgilerini günceller (Admin)",
    ecom_updateStock: "Ürün stok miktarını günceller (Admin)",
    ecom_deleteProduct: "Ürünü siler (Admin)",
    ecom_getCart: "Kullanıcının sepetini getirir",
    ecom_addCartItem: "Sepete ürün ekler",
    ecom_updateCartItem: "Sepetteki ürün miktarını günceller",
    ecom_deleteCartItem: "Sepetten ürünü siler",
    ecom_deleteCart: "Sepeti tamamen temizler",
    ecom_getOrders: "Kullanıcının siparişlerini döndürür",
    ecom_getOrderById: "ID'ye göre sipariş detayını getirir",
    ecom_createOrder: "Sepetteki ürünlerle yeni sipariş oluşturur",
    ecom_updateOrderStatus: "Sipariş durumunu günceller (Admin)",
    // ecomField placeholder-ləri (TR)
    ph_UserName: "kullanıcı adı",
    ph_Email: "john@example.com",
    ph_Password: "şifre",
    ph_Token: "refresh token",
    ph_id: "ID",
    ph_Name: "ad",
    ph_Page: "1",
    ph_PageSize: "20",
    ph_SearchTerm: "arama",
    ph_Description: "açıklama",
    ph_Price: "fiyat",
    ph_Stock: "stok",
    ph_ImageUrl: "resim linki",
    ph_CategoryId: "kategori ID",
    ph_ProductId: "ürün ID",
    ph_Quantity: "adet",
    ph_cartItemId: "sepet öğe ID",
    ph_NewStock: "yeni stok",
    ph_cartId: "sepet ID",
    ph_orderId: "sipariş ID",
    ph_CartId: "sepet ID",
    // HTTP status codes and messages (TR)
    status_400: "Geçersiz istek (Bad Request)",
    status_401: "Yetkilendirme gerekiyor (Unauthorized)",
    status_403: "Bu işlem için yetkiniz yok (Forbidden)",
    status_404: "Aranan kaynak bulunamadı (Not Found)",
    status_405: "Bu HTTP metodu bu endpoint için desteklenmiyor (Method Not Allowed)",
    status_500: "Sunucu hatası oluştu (Internal Server Error)",
    response_empty_ok: "İstek başarılı oldu, ancak veri dönmedi (No Content)",
    response_empty_err: "İstek başarısız oldu ve yanıt gövdesi boş",
  },
  en: {
    jobTitle: ".NET Developer",
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
    weatherTitle: "Returns current weather data for a city",
    weatherCityLabel: "city",
    weatherCityPlaceholder: "e.g. London",
    weatherSend: "Send",
    responseLabel: "Response",
    copyBtn: "copy",
    copyDone: "copied",
    weatherError_empty: "// please enter a city name",
    weatherError_fail: "// could not connect to the API",
    ecomLoading: "sending request...",
    ecomError_connect: "// could not connect to the server",
    ecomLoggedIn: "logged in",
    ecomNotLoggedIn: "not logged in",
    ecom_register: "Registers a new user",
    ecom_login: "Logs in and returns a JWT token",
    ecom_refresh: "Refreshes the current token",
    ecom_logout: "Logs out from the system",
    ecom_getCategories: "Returns a list of all categories",
    ecom_getCategoryById: "Returns category details by ID",
    ecom_createCategory: "Creates a new category (Admin)",
    ecom_updateCategory: "Updates a category (Admin)",
    ecom_deleteCategory: "Deletes a category (Admin)",
    ecom_getProducts: "Returns a filtered list of products",
    ecom_getProductById: "Returns product details by ID",
    ecom_createProduct: "Creates a new product (Admin)",
    ecom_updateProduct: "Updates product details (Admin)",
    ecom_updateStock: "Updates product stock (Admin)",
    ecom_deleteProduct: "Deletes a product (Admin)",
    ecom_getCart: "Returns the user's shopping cart",
    ecom_addCartItem: "Adds an item to the cart",
    ecom_updateCartItem: "Updates cart item quantity",
    ecom_deleteCartItem: "Removes an item from the cart",
    ecom_deleteCart: "Clears the shopping cart",
    ecom_getOrders: "Returns the user's orders",
    ecom_getOrderById: "Returns order details by ID",
    ecom_createOrder: "Creates a new order from the cart",
    ecom_updateOrderStatus: "Updates order status (Admin)",
    // ecomField placeholders (EN)
    ph_UserName: "username",
    ph_Email: "john@example.com",
    ph_Password: "password",
    ph_Token: "refresh token",
    ph_id: "ID",
    ph_Name: "name",
    ph_Page: "1",
    ph_PageSize: "20",
    ph_SearchTerm: "search",
    ph_Description: "description",
    ph_Price: "price",
    ph_Stock: "stock",
    ph_ImageUrl: "image URL",
    ph_CategoryId: "category ID",
    ph_ProductId: "product ID",
    ph_Quantity: "quantity",
    ph_cartItemId: "cart item ID",
    ph_NewStock: "new stock",
    ph_cartId: "cart ID",
    ph_orderId: "order ID",
    ph_CartId: "cart ID",
    // HTTP status codes and messages
    status_400: "Bad Request — Invalid syntax or parameters",
    status_401: "Unauthorized — Authentication is required",
    status_403: "Forbidden — You do not have permission",
    status_404: "Not Found — The requested resource does not exist",
    status_405: "Method Not Allowed — Check HTTP method or route",
    status_500: "Internal Server Error",
    response_empty_ok: "Request was successful, but no content was returned",
    response_empty_err: "Request failed and response body is empty",
  },
};

let ecomAccessToken = null;
let ecomRefreshToken = null;
let ecomActiveKey = null;

const langIcon = document.querySelector(".lang-icon");
const langMenu = document.querySelector(".lang-menu");
const langOptions = document.querySelectorAll(".lang-option");
const i18nEls = document.querySelectorAll("[data-i18n]");
const container = document.querySelector(".container");

const langFlagUrls = {
  az: "img/flags/az.svg",
  tr: "img/flags/tr.svg",
};

// Səhifənin dilini tənzimləyən əsas funksiya
const setLanguage = (lang) => {
  const dict = translations[lang];
  if (!dict) return;

  i18nEls.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      const icon = el.querySelector(".toggle-icon");
      if (icon) {
        el.textContent = dict[key];
        el.prepend(icon);
      } else {
        el.textContent = dict[key];
      }
    }

    const placeholderKey = el.getAttribute("data-i18n-placeholder");
    if (placeholderKey && dict[placeholderKey]) {
      el.placeholder = dict[placeholderKey];
    }
  });

  const tokenBar = document.getElementById("ecom-token-bar");
  if (tokenBar && !tokenBar.classList.contains("logged-in")) {
    tokenBar.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${dict.ecomNotLoggedIn}`;
  }

  if (ecomActiveKey && typeof ecomEndpoints !== "undefined" && ecomInputsEl) {
    const ep = ecomEndpoints[ecomActiveKey];
    if (ep) {
      ecomInputsEl.innerHTML = ep.inputs().join("") + `
        <div class="ecom-field ecom-send-field">
          <label class="api-label">&nbsp;</label>
          <button class="api-send-btn" id="ecom-send-btn">Send <i class="fa-solid fa-paper-plane"></i></button>
        </div>
      `;
      ecomSendBtn = document.getElementById("ecom-send-btn");
      if (ecomSendBtn) ecomSendBtn.addEventListener("click", handleEcomSend);
    }
    const descEl = document.getElementById("ecom-ep-desc");
    if (descEl && dict[`ecom_${ecomActiveKey}`]) {
      descEl.textContent = dict[`ecom_${ecomActiveKey}`];
    }
  }

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

/* ==========================================================================
   2. TEMA DƏYİŞDİRİCİ (Light / Dark Mode)
   ========================================================================== */

const themeButton = document.querySelector(".theme-icon");

themeButton.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
});

/* ==========================================================================
   3. TAB KEÇİDLƏRİ (Proyektlər, Bacarıqlar, Sertifikatlar)
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
      panel.classList.remove("panel-animate");
      void panel.offsetWidth;
      panel.classList.add("panel-animate");
    } else {
      panel.style.display = "none";
      panel.classList.remove("panel-animate");
    }
  });

  allTabs.forEach((tab) => {
    tab.classList.toggle("active", tab === activeTab);
  });
};

skills.addEventListener("click", () => openPanel(skills, mySkills));
portfolio.addEventListener("click", () => openPanel(portfolio, projects));
certificatesTab.addEventListener("click", () => openPanel(certificatesTab, certificates));

/* ==========================================================================
   4. CV DİL MENYUSU VƏ ÜMUMİ BAĞLANMA QAYDALARI
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

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  langMenu.classList.remove("open");
  cvMenu.classList.remove("open");
  container.classList.remove("blur-bg-lang", "blur-bg-cv");
});

/* ==========================================================================
   5. AKKORDEONLAR (Backend/Frontend, Bacarıqlar və Sertifikatlar)
   ========================================================================== */

const setupAccordion = (btnSelector, panelSelector) => {
  const btn = document.querySelector(btnSelector);
  const panel = document.querySelector(panelSelector);
  if (!btn || !panel) return;

  btn.addEventListener("click", () => {
    panel.classList.toggle("open");
    btn.classList.toggle("active");
  });
};

setupAccordion(".backend", ".backend-projects");
setupAccordion(".frontend", ".frontend-projects");

document.querySelectorAll(".skill-toggle, .cert-toggle").forEach((btn) => {
  const panel = btn.nextElementSibling;
  btn.addEventListener("click", () => {
    panel.classList.toggle("open");
    btn.classList.toggle("active");
  });
});

/* ==========================================================================
   6. SERTİFİKAT (Şəklin böyük formatda açılması)
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
certLightbox.addEventListener("click", (e) => { if (e.target === certLightbox) closeCertLightbox(); });

/* ==========================================================================
   7. STICKY TOPBAR VƏ SCROLL EFFEKTLƏRİ
   ========================================================================== */

const topbar = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 20);
});

document.querySelectorAll(".my-skills, .certificates").forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ==========================================================================
   8. MOUSE İLƏ HƏRƏKƏT EDƏN İŞIQ (Glow) VƏ MAGNETIC CV DÜYMƏSİ
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

  card.addEventListener("mouseleave", () => { glow.style.opacity = "0"; });
});

cvBtn.addEventListener("mousemove", (e) => {
  const rect = cvBtn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  cvBtn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
});

cvBtn.addEventListener("mouseleave", () => { cvBtn.style.transform = "translate(0, 0)"; });

/* ==========================================================================
   9. API TEST PANELLƏRİ
   ========================================================================== */

const WEATHER_BASE_URL = "https://weatherapiwrapperservice-ikj2.onrender.com";
const ECOM_BASE_URL = "https://simpleecommerceapi.onrender.com";

document.querySelectorAll(".try-it-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.demo).classList.toggle("open");
  });
});

// Weather API Sorğusu
document.querySelectorAll(".api-send-btn").forEach((btn) => {
  if (btn.dataset.api !== "weather") return;
  btn.addEventListener("click", async () => {
    const city = document.getElementById("weather-city-input").value.trim();
    const responseEl = document.getElementById("weather-response");
    const copyBtn = document.querySelector('[data-clipboard="weather-response"]');

    const currentLang = document.documentElement.getAttribute("lang") || "en";
    const dict = translations[currentLang] || translations["en"];

    if (!city) {
      responseEl.textContent = dict.weatherError_empty;
      responseEl.className = "api-response error";
      copyBtn?.classList.remove("visible");
      return;
    }

    btn.disabled = true;
    responseEl.innerHTML = `<span class="api-spinner"></span> ${dict.ecomLoading}`;
    responseEl.className = "api-response";
    copyBtn?.classList.remove("visible");

    try {
      const res = await fetch(`${WEATHER_BASE_URL}/weather/${encodeURIComponent(city)}`);
      const data = await res.json();
      responseEl.textContent = JSON.stringify(data, null, 2);
      responseEl.className = res.ok ? "api-response success" : "api-response error";
      copyBtn?.classList.add("visible");
    } catch {
      responseEl.textContent = dict.weatherError_fail;
      responseEl.className = "api-response error";
      copyBtn?.classList.add("visible");
    } finally {
      btn.disabled = false;
    }
  });
});

// E-Commerce API Məntiqi
let ecomSendBtn = document.getElementById("ecom-send-btn");
let ecomResponseEl = document.getElementById("ecom-response");
let ecomTokenBar = document.getElementById("ecom-token-bar");
let ecomInputsEl = document.getElementById("ecom-inputs");
let ecomUrlBar = document.getElementById("ecom-url-bar");
let ecomEpList = document.getElementById("ecom-ep-list");

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

const methodDescColors = {
  GET: { color: "rgba(34, 197, 94, 0.8)", bg: "rgba(34, 197, 94, 0.07)" },
  POST: { color: "rgba(14, 165, 233, 0.8)", bg: "rgba(14, 165, 233, 0.07)" },
  PUT: { color: "rgba(202, 138, 4, 0.8)", bg: "rgba(234, 179, 8, 0.07)" },
  DELETE: { color: "rgba(239, 68, 68, 0.8)", bg: "rgba(239, 68, 68, 0.07)" },
};

function setDescColor(el, method) {
  const c = methodDescColors[method] || methodDescColors.POST;
  el.style.setProperty("--api-desc-color", c.color);
  el.style.setProperty("--api-desc-bg", c.bg);
}

function ecomField(id, phKey, type = "text") {
  const lang = document.documentElement.getAttribute("lang") || "en";
  const dict = translations[lang] || translations["en"];
  const placeholder = dict[`ph_${phKey || id}`] || phKey || id;
  return `
    <div class="ecom-field">
      <label class="api-label">${id}</label>
      <input class="api-input" type="${type}" id="ecom-${id}" placeholder="${placeholder}" />
    </div>
  `;
}

function ecomDropdown(id, options) {
  const opts = options.map(o => `<option value="${o}">${o}</option>`).join("");
  return `
    <div class="ecom-field">
      <label class="api-label">${id}</label>
      <select class="api-input ecom-native-select" id="ecom-${id}">
        ${opts}
      </select>
    </div>
  `;
}

const ecomEndpoints = {
  // Auth
  register: { method: "POST", urlTemplate: "/api/auth/register", auth: false, authLevel: null, inputs: () => [ecomField("UserName", "UserName"), ecomField("Email", "Email", "email"), ecomField("Password", "Password", "password")], path: () => "/api/auth/register", body: () => ({ UserName: v("UserName"), Email: v("Email"), Password: v("Password") }) },
  login: { method: "POST", urlTemplate: "/api/auth/login", auth: false, authLevel: null, inputs: () => [ecomField("UserName", "UserName"), ecomField("Password", "Password", "password")], path: () => "/api/auth/login", body: () => ({ UserName: v("UserName"), Password: v("Password") }) },
  refresh: {
    method: "POST",
    urlTemplate: "/api/auth/refresh",
    auth: false,
    authLevel: null,
    inputs: () => [ecomField("Token", "Token")],
    path: () => "/api/auth/refresh",
    body: () => ({ Token: v("Token") })
  }, 
  logout: 
  { 
    method: "POST", 
    urlTemplate: "/api/auth/logout", 
    auth: false, 
    authLevel: null, 
    inputs: () => [ecomField("Token", "Token")], 
    path: () => "/api/auth/logout", 
    body: () => ({ Token: v("Token") }) },

  // Categories
  getCategories: { method: "GET", urlTemplate: "/api/categories", auth: false, authLevel: null, inputs: () => [], path: () => "/api/categories", body: () => null },
  getCategoryById: { method: "GET", urlTemplate: "/api/categories/{id}", auth: false, authLevel: null, inputs: () => [ecomField("id", "id")], path: () => `/api/categories/${v("id")}`, body: () => null },
  createCategory: { method: "POST", urlTemplate: "/api/categories", auth: true, authLevel: "admin", inputs: () => [ecomField("Name", "Name")], path: () => "/api/categories", body: () => ({ Name: v("Name") }) },
  updateCategory: { method: "PUT", urlTemplate: "/api/categories/{id}", auth: true, authLevel: "admin", inputs: () => [ecomField("id", "id"), ecomField("Name", "Name")], path: () => `/api/categories/${v("id")}`, body: () => ({ Name: v("Name") }) },
  deleteCategory: { method: "DELETE", urlTemplate: "/api/categories/{id}", auth: true, authLevel: "admin", inputs: () => [ecomField("id", "id")], path: () => `/api/categories/${v("id")}`, body: () => null },

  // Products
  getProducts: { method: "GET", urlTemplate: "/api/products?[filters]", auth: false, authLevel: null, inputs: () => [ecomField("Page", "Page"), ecomField("PageSize", "PageSize"), ecomField("SearchTerm", "SearchTerm")], path: () => { const p = new URLSearchParams(); if (v("Page")) p.set("Page", v("Page")); if (v("PageSize")) p.set("PageSize", v("PageSize")); if (v("SearchTerm")) p.set("SearchTerm", v("SearchTerm")); return `/api/products?${p.toString()}`; }, body: () => null },
  getProductById: { method: "GET", urlTemplate: "/api/products/{id}", auth: false, authLevel: null, inputs: () => [ecomField("id", "id")], path: () => `/api/products/${v("id")}`, body: () => null },
  createProduct: { method: "POST", urlTemplate: "/api/products", auth: true, authLevel: "admin", inputs: () => [ecomField("Name", "Name"), ecomField("Description", "Description"), ecomField("Price", "Price"), ecomField("Stock", "Stock"), ecomField("ImageUrl", "ImageUrl"), ecomField("CategoryId", "CategoryId")], path: () => "/api/products", body: () => ({ Name: v("Name"), Description: v("Description"), Price: parseFloat(v("Price")), Stock: parseInt(v("Stock")), ImageUrl: v("ImageUrl"), CategoryId: v("CategoryId") }) },
  updateProduct: { method: "PUT", urlTemplate: "/api/products/{id}", auth: true, authLevel: "admin", inputs: () => [ecomField("id", "id"), ecomField("Name", "Name"), ecomField("Description", "Description"), ecomField("Price", "Price"), ecomField("Stock", "Stock"), ecomField("ImageUrl", "ImageUrl"), ecomField("CategoryId", "CategoryId")], path: () => `/api/products/${v("id")}`, body: () => ({ Name: v("Name"), Description: v("Description"), Price: parseFloat(v("Price")), Stock: parseInt(v("Stock")), ImageUrl: v("ImageUrl"), CategoryId: v("CategoryId") }) },
  updateStock: { method: "PUT", urlTemplate: "/api/products/{id}/stock", auth: true, authLevel: "admin", inputs: () => [ecomField("id", "id"), ecomField("NewStock", "NewStock")], path: () => `/api/products/${v("id")}/stock`, body: () => ({ NewStock: parseInt(v("NewStock")) }) },
  deleteProduct: { method: "DELETE", urlTemplate: "/api/products/{id}", auth: true, authLevel: "admin", inputs: () => [ecomField("id", "id")], path: () => `/api/products/${v("id")}`, body: () => null },

  // Cart
  getCart: { method: "GET", urlTemplate: "/api/carts", auth: true, authLevel: "user", inputs: () => [], path: () => "/api/carts", body: () => null },
  addCartItem: { method: "POST", urlTemplate: "/api/carts", auth: true, authLevel: "user", inputs: () => [ecomField("ProductId", "ProductId"), ecomField("Quantity", "Quantity")], path: () => "/api/carts", body: () => ({ ProductId: v("ProductId"), Quantity: parseInt(v("Quantity")) }) },
  updateCartItem: { method: "PUT", urlTemplate: "/api/carts/{cartItemId}", auth: true, authLevel: "user", inputs: () => [ecomField("cartItemId", "cartItemId"), ecomField("Quantity", "Quantity")], path: () => `/api/carts/${v("cartItemId")}`, body: () => ({ Quantity: parseInt(v("Quantity")) }) },
  deleteCartItem: { method: "DELETE", urlTemplate: "/api/carts/cartItems/{cartItemId}", auth: true, authLevel: "user", inputs: () => [ecomField("cartItemId", "cartItemId")], path: () => `/api/carts/cartItems/${v("cartItemId")}`, body: () => null },
  deleteCart: { method: "DELETE", urlTemplate: "/api/carts/carts/{cartId}", auth: true, authLevel: "user", inputs: () => [ecomField("cartId", "cartId")], path: () => `/api/carts/carts/${v("cartId")}`, body: () => null },

  // Orders
  getOrders: { method: "GET", urlTemplate: "/api/orders", auth: true, authLevel: "user", inputs: () => [], path: () => "/api/orders", body: () => null },
  getOrderById: { method: "GET", urlTemplate: "/api/orders/{id}", auth: true, authLevel: "user", inputs: () => [ecomField("orderId", "orderId")], path: () => `/api/orders/${v("orderId")}`, body: () => null },
  createOrder: { method: "POST", urlTemplate: "/api/orders", auth: true, authLevel: "user", inputs: () => [ecomField("CartId", "CartId"), ecomDropdown("PaymentMethod", ["CreditCard", "DebitCard", "Paypal"])], path: () => "/api/orders", body: () => ({ CartId: v("CartId"), PaymentMethod: ["CreditCard", "DebitCard", "Paypal"].indexOf(v("PaymentMethod")) }) },
  updateOrderStatus: { method: "PUT", urlTemplate: "/api/orders/{orderId}/{status}", auth: true, authLevel: "admin", inputs: () => [ecomField("orderId", "orderId"), ecomDropdown("status", ["Pending", "Paid", "Shipped", "Cancelled"])], path: () => `/api/orders/${v("orderId")}/${v("status")}`, body: () => null }
};

function v(id) {
  const el = document.getElementById(`ecom-${id}`);
  return el ? el.value.trim() : "";
}

function ecomRenderEpList(group) {
  const items = ecomGroups[group];
  if (!items || !ecomEpList) return;

  ecomEpList.innerHTML = items.map(ep =>
    `<button class="ecom-ep-item" data-key="${ep.key}">
      <span class="api-method ${ep.method.toLowerCase()}">${ep.method}</span>
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

    const descEl = document.getElementById("ecom-ep-desc");
    if (descEl) descEl.style.display = "none";
    ecomActiveKey = null;
    if (ecomUrlBar) { ecomUrlBar.innerHTML = ""; ecomUrlBar.style.display = "none"; }
    if (ecomInputsEl) { ecomInputsEl.innerHTML = ""; ecomInputsEl.style.display = "none"; }
    if (ecomResponseEl) { ecomResponseEl.textContent = ""; ecomResponseEl.className = "api-response api-response--idle"; }
  });
});

function ecomSelectEndpoint(key) {
  ecomActiveKey = key;
  const ep = ecomEndpoints[key];
  if (!ep) return;

  if (ecomUrlBar) {
    ecomUrlBar.innerHTML = `
      <span class="api-method ${ep.method.toLowerCase()}">${ep.method}</span>
      <span class="ecom-url-path">${ECOM_BASE_URL}${ep.urlTemplate}</span>
      ${ep.authLevel === "admin" ? '<span class="ecom-auth-badge ecom-auth-badge--admin"><i class="fa-solid fa-shield-halved"></i> Admin</span>' : ''}
      ${ep.authLevel === "user" ? '<span class="ecom-auth-badge ecom-auth-badge--user"><i class="fa-solid fa-lock"></i> Auth</span>' : ''}
    `;
    ecomUrlBar.style.display = "flex";
  }

  const currentLang = document.documentElement.getAttribute("lang") || "en";
  const descEl = document.getElementById("ecom-ep-desc");
  const dict = translations[currentLang] || translations["en"];

  if (descEl) {
    descEl.textContent = dict[`ecom_${key}`] || "";
    descEl.style.display = "block";
    setDescColor(descEl, ep.method);
  }

  if (ecomInputsEl) {
    ecomInputsEl.innerHTML = ep.inputs().join("") + `
      <div class="ecom-field ecom-send-field">
        <label class="api-label">&nbsp;</label>
        <button class="api-send-btn" id="ecom-send-btn">Send <i class="fa-solid fa-paper-plane"></i></button>
      </div>
    `;
    ecomInputsEl.style.display = "grid";
    ecomSendBtn = document.getElementById("ecom-send-btn");
    if (ecomSendBtn) ecomSendBtn.addEventListener("click", handleEcomSend);
  }

  if (ecomResponseEl) {
    ecomResponseEl.textContent = "";
    ecomResponseEl.className = "api-response api-response--idle";
  }

  const copyBtn = document.querySelector('[data-clipboard="ecom-response"]');
  copyBtn?.classList.remove("visible");
}

const handleEcomSend = async () => {
  if (!ecomActiveKey) return;
  const ep = ecomEndpoints[ecomActiveKey];
  if (!ep) return;

  if (ecomSendBtn) ecomSendBtn.disabled = true;
  const currentLang = document.documentElement.getAttribute("lang") || "en";
  const dict = translations[currentLang] || translations["en"];

  const copyBtn = document.querySelector('[data-clipboard="ecom-response"]');
  copyBtn?.classList.remove("visible");

  // 1. Loading başlayanda köhnə placeholder-i (idle klassını) silirik
  if (ecomResponseEl) {
    ecomResponseEl.innerHTML = `<span class="api-spinner"></span> ${dict.ecomLoading}`;
    ecomResponseEl.className = "api-response";
  }

  const headers = { "Content-Type": "application/json" };
  if (ep.auth && ecomAccessToken) headers["Authorization"] = `Bearer ${ecomAccessToken}`;

  try {
    const res = await fetch(`${ECOM_BASE_URL}${ep.path()}`, {
      method: ep.method,
      headers,
      body: ep.body() ? JSON.stringify(ep.body()) : undefined,
    });

    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { data = text; }

    if ((ecomActiveKey === "login" || ecomActiveKey === "register") && res.ok && data.accessToken) {
      ecomAccessToken = data.accessToken;
      ecomRefreshToken = data.refreshToken;
      if (ecomTokenBar) {
        ecomTokenBar.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${dict.ecomLoggedIn}`;
        ecomTokenBar.className = "ecom-token-bar logged-in";
      }
    }

    if (ecomActiveKey === "logout" && res.ok) {
      ecomAccessToken = null;
      ecomRefreshToken = null;
      if (ecomTokenBar) {
        ecomTokenBar.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${dict.ecomNotLoggedIn}`;
        ecomTokenBar.className = "ecom-token-bar";
      }
    }

    const isEmpty = data === null || data === undefined || data === "" ||
      (typeof data === "object" && Object.keys(data).length === 0);

    // 2. Status kodu, dilə uyğun açıqlama və gələn datanı ekrana yazdırırıq
    if (ecomResponseEl) {
      let statusDesc = dict[`status_${res.status}`] || `${res.status} ${res.statusText}`;
      let output = `// Status: ${res.status} — ${statusDesc}\n`;

      if (isEmpty) {
        output += res.ok ? `// ${dict.response_empty_ok}` : `// ${dict.response_empty_err}`;
      } else {
        output += typeof data === "string" ? data : JSON.stringify(data, null, 2);
      }

      ecomResponseEl.textContent = output;
      ecomResponseEl.className = res.ok ? "api-response success" : "api-response error";
      copyBtn?.classList.add("visible");
    }
  } catch {
    if (ecomResponseEl) {
      ecomResponseEl.textContent = dict.ecomError_connect;
      ecomResponseEl.className = "api-response error";
      copyBtn?.classList.add("visible");
    }
  } finally {
    if (ecomSendBtn) ecomSendBtn.disabled = false;
  }
};

/* ==========================================================================
   10. KOPYALAMA FUNKSİONALLIĞI (Copy to Clipboard)
   ========================================================================== */

document.addEventListener("click", async (e) => {
  const copyBtn = e.target.closest(".copy-btn");
  if (!copyBtn) return;

  const preEl = document.getElementById(copyBtn.dataset.clipboard);
  if (!preEl) return;

  try {
    await navigator.clipboard.writeText(preEl.textContent);
    const lang = document.documentElement.getAttribute("lang") || "en";
    const dict = translations[lang] || translations["en"];
    const originalHTML = copyBtn.innerHTML;
    copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> ${dict.copyDone}`;
    setTimeout(() => { copyBtn.innerHTML = originalHTML; }, 2000);
  } catch (err) {
    console.error("Kopyalama uğursuz oldu: ", err);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ecomRenderEpList("auth");
  if (ecomUrlBar) ecomUrlBar.style.display = "none";
  if (ecomInputsEl) ecomInputsEl.style.display = "none";
  setLanguage("en");
});