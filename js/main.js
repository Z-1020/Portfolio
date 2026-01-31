document.addEventListener("DOMContentLoaded", () => {
  const mobileQuery = window.matchMedia("(max-width: 767px)");

  async function loadComponent(id, path) {
    const el = document.getElementById(id);
    if (!el) return;

    const res = await fetch(path);
    if (!res.ok) return;

    el.innerHTML = await res.text();
  }
  async function loadHeaderAndNavbar() {
    await loadComponent("header", "components/header.html");

    const navbarPath = mobileQuery.matches
      ? "components/telephoneNavbar.html"
      : "components/navbar.html";

    await loadComponent("navbar", navbarPath);
    initBurgerMenu();
  }

  function initBurgerMenu() {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("mobileMenu");
    if (!burger || !menu) return;
    burger.onclick = () => {
      menu.classList.toggle("hidden");
    };
  } 
  mobileQuery.addEventListener("change", loadHeaderAndNavbar);
  loadHeaderAndNavbar();
});