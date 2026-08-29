"use strict";

// change theme dark & night
const themeButton = document.querySelector(".theme");
const themeIconImg = document.querySelector("#theme-icon-img");
const changeTheme = () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  themeIconImg.src = isDark ? "img/moon.png" : "img/sun.png";
};
themeButton.addEventListener("click", changeTheme);

// contact to me
const contact = document.querySelector(".contact");
const sendMail = () => {
  const emailAddress = "ismailselimzade@mail.ru";
  const emailSubject = "Portfolio Mail";
  const emailBody = "";
  const encodedSubject = encodeURIComponent(emailSubject);
  const encodedBody = encodeURIComponent(emailBody);
  window.location.href = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
};
contact.addEventListener("click", sendMail);

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
