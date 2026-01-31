const projectsHome = [
  {
    title : "Application de recherche de stage",
    color: "bg-stone-600 p-4 w-3/4 mx-auto rounded-xl shadow-lg shadow-stone-700",
    image : "src/assets/applicationStage.png",
    description : "Cette application a été conçue pour répondre à la demande d'une cliente (fictive), souhaitant une application afin de faciliter la recherche de stage de ses étudiants.",
  },
  {
    title : "DungeonXplorer",
    color: "bg-stone-700 p-4 w-3/4 rounded-xl mx-auto shadow-lg shadow-stone-800",
    image : "src/assets/dungeonXplorer.png",
    description : "DungeonXplorer est un jeu développé en PHP, il est inspiré d'un « livre dont vous êtes le héros ». Le joueur peut gérer son compte, s'inscrire, se connecter et commencer une aventure.",
    
  },
]

function loadHome(){
  document.getElementById("projet").innerHTML = 
  projectsHome.map(p=> `
    <article>
    <div class= "${p.color}">
                <h2 class="text-2xl md:text-4xl font-bold text-center p-4 md:p-10">${p.title}</h2>
                <img src=${p.image} class="mx-auto rounded-xl" alt="Capture d'écran "></img>
                <div class="md:flex md:flex-col p-4 md:p-4">
                  <h3 class="font-bold text-xl text-2xl md:text-4xl font-bold mt-4">Description</h3>
                  <p  class="space-y-1 text-justify md:text-3xl text-l mt-4">${p.description}</p> 
                  <button aria-label="Voir les projets" class="hover:cursor-pointer p-4 bg-stone-800 md:w-1/2 w-full rounded-xl m-4 hover:bg-stone-900 mx-auto text-l md:text-3xl"}>
                    Voir les projets
                  </button>       
                </div>
              </div>
    </article>

  `).join("")
}

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
  function loadFooter(){
    fetch("components/footer.html")
  .then(res => res.text())
  .then(footerHTML => {
    document.getElementById("footer").innerHTML = footerHTML

  })
}
loadFooter()
loadHome()
  mobileQuery.addEventListener("change", loadHeaderAndNavbar)
  loadHeaderAndNavbar()
  
});