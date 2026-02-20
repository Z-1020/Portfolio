
const skills = [
    {
      title : "Langages",
      items: ["HTML", "CSS", "JavaScript", "PHP", "SQL / PLSQL", "Java", "JavaFx", "C"],
      color: "bg-stone-500 rounded-xl shadow-lg w-60 md:w-90 md:h-150 mx-auto shadow-stone-600 text-stone-50 ",

    },
    {
      title : "Frameworks",
      items : ["Laravel", "Tailwind CSS", "Boostrap", "React (en cours)"],
      color: "bg-stone-600 rounded-xl w-60 md:w-90 md:h-150 shadow-lg mx-auto  shadow-stone-700 text-stone-50 ",
    },
    {
      title : "Outils",
      items : ["Visual Studio Code", "Eclipse", "SQL Developer", "Proxmox", "VirtualBox", "Apache", "MySQL", "XAMPP", "Git (github, gitLab)"],
      color: "bg-stone-700 rounded-xl w-60 md:w-90 md:h-150 shadow-lg mx-auto shadow-stone-800 text-stone-50 ",
    },
    {
      title : "Systèmes et réseaux",
      items : ["Commandes Linux / Windows", "Notions de réseaux (configuration de routeurs)", "Déploiement et configuration de serveurs web (Apache)", "Configuration de serveurs FTP (FileZilla)"],
      color: "bg-stone-800 rounded-xl shadow-lg w-60 md:w-90 md:h-150 mx-auto shadow-stone-900 text-stone-50 ",
    }

  ]

const interest = [
    {
      title: "Géologie / Minéralogie (loisir)",
      color: "bg-stone-500 p-4 rounded-xl shadow-lg shadow-stone-600",
      image1: "../assets/images/collection1.jpg",
      image2: "../assets/images/collection2.jpg",
      image3: "../assets/images/collection3.jpg",
      image4: "../assets/images/collection4.jpg",
      alt: "Photographie de ma collection de roches",
      description:"L’un de mes loisirs est la collection, l’identification et le classement de roches, fossiles et minéraux. Je possède aujourd’hui près d’une centaine de spécimens représentant une quarantaine d’espèces différentes. Cette passion m’accompagne depuis l’âge de 10 ans.",
    },
    {
      title: "Photographie",
      color: "bg-stone-600 p-4 rounded-xl shadow-lg shadow-stone-700",
      image1: "../assets/images/amethyste1.jpg",
      image2: "../assets/images/citrine2.jpg",
      image3: "../assets/images/amethyste2.jpg",
      image4: "../assets/images/aragonite.jpg",
      alt: "Photographie d'un minéral",
      description: "Je pratique la photographie depuis l’âge de 14 ans. J’aime particulièrement photographier mes pierres : en jouant sur l’angle de prise de vue et l’exposition à la lumière, chaque image devient unique.",
    },
    
  ]


function loadInterests(){
  document.getElementById("interests").innerHTML = 
  interest.map(p=> `
    <article class="mb-30">
         
              <div class="${p.color}">
                <h2 class="text-2xl md:text-4xl font-bold text-center p-4 md:p-10"> ${p.title}</h2>
                <div class="grid grid-cols-2 gap-4 p-2">
                    <img src="${p.image1}" class="p-2 rounded-xl" alt="${p.alt}"></img>
                    <img src="${p.image2}" class="p-2 rounded-xl "alt="${p.alt}"></img>
                    <img src="${p.image3}" class="p-2 rounded-xl" alt="${p.alt}"></img>
                    <img src="${p.image4}" class="p-2 rounded-xl" alt="${p.alt}"></img>
                    </div>
                <p class="p-4 text-justify md:text-3xl text-l">${p.description}</p>
              
          </article>  

  `).join("")
}


function loadSkills(){
  document.getElementById("skills").innerHTML = 
  skills.map(p=> `
     <article class="mb-10">
              <div class="${p.color}">
                <div>
                  <h2 class="text-2xl md:text-4xl font-bold p-4 text-center text-stone-50">
                    ${p.title}
                  </h2>
                  <ul class="list-disc p-8 md:text-3xl text-l ml-4">
                    ${p.items.map((item) => `
                      <li>${item}</li>
                    `).join("")}
                  </ul>
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
    
    await loadComponent("header", "../components/header.html");
    const navbarPath = mobileQuery.matches
      ? "../components/telephoneNavbar.html"
      : "../components/navbar.html";
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
   
    fetch("../components/footer.html")
    .then(res => res.text())
  .then(footerHTML => {
    document.getElementById("footer").innerHTML = footerHTML

  })
}
loadFooter()

  mobileQuery.addEventListener("change", loadHeaderAndNavbar)
  loadHeaderAndNavbar()
  
});
