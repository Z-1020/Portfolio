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
    if(document.getElementById("home")){
      await loadComponent("header", "./components/header.html");
      const navbarPath = mobileQuery.matches
      ? "./components/telephoneNavbarIndex.html"
      : "./components/navbarIndex.html";
      await loadComponent("navbar", navbarPath);
    initBurgerMenu();
    }
    else{
    
    await loadComponent("header", "../components/header.html");
    const navbarPath = mobileQuery.matches
      ? "../components/telephoneNavbar.html"
      : "../components/navbar.html";
       await loadComponent("navbar", navbarPath);
    initBurgerMenu();
    
  }
}

  function initBurgerMenu() {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("mobileMenu");
    if (!burger || !menu) return;
    burger.onclick = () => {
      menu.classList.toggle("hidden");
    };
  } 
  function loadFooter(){
   
    fetch("../components/footer.html")
    .then(res => res.text())
  .then(footerHTML => {
    document.getElementById("footer").innerHTML = footerHTML

  })
}
loadFooter()
if(document.getElementById("home")){
      fetch("./components/footer.html")
      .then(res => res.text())
  .then(footerHTML => {
    document.getElementById("footer").innerHTML = footerHTML

  })
    }
    else{

  mobileQuery.addEventListener("change", loadHeaderAndNavbar)
  loadHeaderAndNavbar()
    }
});
