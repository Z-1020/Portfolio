const projectsHome = [
  {
    title : "Application de recherche de stage",
    color: "bg-stone-600 p-4 w-3/4 mx-auto rounded-xl shadow-lg shadow-stone-700",
    image : "assets/images/applicationStage.png",
    description : "Cette application a été conçue pour répondre à la demande d'une cliente (fictive), souhaitant une application afin de faciliter la recherche de stage de ses étudiants.",
  },
  {
    title : "DungeonXplorer",
    color: "bg-stone-700 p-4 w-3/4 rounded-xl mx-auto shadow-lg shadow-stone-800",
    image : "assets/images/dungeonXplorer.png",
    description : "DungeonXplorer est un jeu développé en PHP, il est inspiré d'un « livre dont vous êtes le héros ». Le joueur peut gérer son compte, s'inscrire, se connecter et commencer une aventure.",
    
  },
]
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
      items : ["Commande Linux et Windows", "Notions de réseaux (configuration de routeurs)", "Déploiement et configuration de serveurs web (Apache)", "Configuration de serveurs FTP (FileZilla)"],
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

  const projects = [
  {
    title : "Application de recherche de stage",
    color: " bg-stone-500 p-4 rounded-xl shadow-lg shadow-stone-600",
    image : "../assets/images/applicationStage.png",
    nbPersons : "Projet de groupe (5 personnes)",
    languages : "React, Laravel, Tailwind CSS",
    contributions : ["Utilisation de l'API pour afficher les informations d'une entreprise", "Requête pour afficher le nombre d'étudiants ayant effectué leur stage dans l'entreprise"],
    description : "Cette application a été conçue pour répondre à la demande d'une cliente (fictive), souhaitant une application afin de faciliter la recherche de stage de ses étudiants.",
    link: "https://github.com/Z-1020/StageWebApp.git",
  },
  {
    title : "DungeonXplorer",
    color: "bg-stone-600 p-4 rounded-xl shadow-lg shadow-stone-700",
    image : "../assets/images/dungeonXplorer.png",
    nbPersons : "Projet de groupe (4 personnes)" ,
    languages : "PHP, HTML, CSS, JavaScript, Tailwind CSS",
    contributions : ["Affichage du profil", "Suppression du compte par l'utilisateur", "Modification des éléments du compte par l'utilisateur", "Gestion des combats en JavaScript"],
    description : "DungeonXplorer est un jeu développé en PHP, il est inspiré d'un « livre dont vous êtes le héros ». Le joueur peut gérer son compte, s'inscrire, se connecter et commencer une aventure.",
    link: "https://github.com/Z-1020/DungeonXplorer.git",
  },
  {
    title : "Gribouille",
    color: "bg-stone-700 p-4 rounded-xl shadow-lg shadow-stone-800",
    image : "../assets/images/gribouille.jpg",
    nbPersons : "Projet individuel",
    languages : "Java, JavaFX",
    contributions :["Gestion du tracé", "Changement de la taille du tracé", "Changement de couleur du tracé", "Affichage du tracé", "Sauvegarde du dessin"],
    description : "Gribouille est un logiciel de dessin réalisé en Java et en JavaFX. Il est possible de réaliser des dessins, de changer la couleur ou d'épaissir le tracé, ainsi que de sauvegarder le dessin.",
    link: "https://github.com/Z-1020/Gribouille.git",
  },
  {
    title : "Anime Requester",
    color: "bg-stone-800 p-4 rounded-xl shadow-lg shadow-stone-900",
    image : "../assets/images/animeRequester.png",
    nbPersons : "Projet de groupe (3 personnes)",
    languages : "HTML, CSS, JavaScript",
    contributions : ["Mode sombre / mode clair", "Création du design avec CSS"],
    description : "L'Anime Requester est un site web qui, grâce à une API, permet de rechercher et d'afficher des résumés d'animés japonais. Il est possible de rechercher par genre, par nom, par classement ou par leur identifiant.",
    link: "https://github.com/Z-1020/AnimeRequester.git",
    viewLink: "https://Z-1020.github.io/AnimeRequester/",
  },
  {
    title : "Solo Pong",
    color: "bg-stone-900 p-4 rounded-xl shadow-lg shadow-stone-950",
    image : "../assets/images/soloPong.png",
    nbPersons : "Projet de groupe (2 personnes)",
    languages : "HTML, CSS, JavaScript",
    contributions : ["Affichage du jeu", "Gestion des mouvements de la raquette"],
    description : "Solo Pong est un jeu inspiré de Pong, mythique jeu commercialisé en 1972. Le principe du jeu est de faire rebondir la balle sur la raquette et sur les murs. Si la balle touche le sol, vous perdez.",
    link: "https://github.com/Z-1020/pong.git",
    viewLink: "https://Z-1020.github.io/pong/",
  }
  ]

function loadHome(){
  document.getElementById("projet").innerHTML = 
  projectsHome.map(p=> `
    <article>
    <div class= "${p.color}">
                <h2 class="text-2xl md:text-4xl font-bold text-center p-4 md:p-10">${p.title}</h2>
                <img src="${p.image}"class="mx-auto rounded-xl" alt="Capture d'écran "></img>
                <div class="md:flex md:flex-col p-4 md:p-4">
                  <h3 class="text-2xl md:text-4xl mt-4">Description</h3>
                  <p  class="space-y-1 text-justify md:text-3xl text-l mt-4">${p.description}</p> 
                  <a href="pages/projects.html" aria-label="Voir les projets" class="hover:cursor-pointer text-center  p-4 bg-stone-800 md:w-1/2 w-full rounded-xl m-4 hover:bg-stone-900 mx-auto text-l md:text-3xl">
                    Voir les projets
                  </a>       
                </div>
              </div>
    </article>

  `).join("")
}

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
function loadProjects(){
  document.getElementById("projects").innerHTML = 
  projects.map(p=> `
     <article class="mb-30">
              <div class= " ${p.color}">
                <h2 class="text-2xl md:text-4xl font-bold text-center p-4 md:p-10">${p.title}</h2>
                <p class="text-center text-center space-y-1 p-4 md:text-3xl text-l mb-4 ">${p.nbPersons}</p>
                <img src=${p.image} class="mx-auto rounded-xl" alt="Capture d'écran "></img>
                <div class="md:flex md:flex-col p-4 md:p-4">
                  <h3 class="text-2xl md:text-4xl font-bold md:mt-4">Langages</h3>
                  <p class="space-y-1 mt-4 text-justify md:text-3xl text-l">
                    ${p.languages}
                  </p>
                  <h3 class="text-2xl md:text-4xl font-bold mt-4">Description</h3>
                  <p class="space-y-1 text-justify md:text-3xl text-l mt-4">${p.description}</p> 
                  <h3 class="text-2xl md:text-4xl font-bold mt-4">Mes Contributions</h3>
                  <ul class="space-y-1 mt-4">
                    ${p.contributions.map(i => `
                      <li class="list-disc ml-8 md:p-4 md:text-3xl text-l " >${i}</li>
                    `).join("")}
                  </ul>
                  <h3 class="text-2xl md:text-4xl font-bold mt-4 mb-4">Lien vers les dépôts gitHub</h3>
                  <a href=${p.link} class="underline hover:text-stone-300 text-justify md:text-3xl text-l mt-4">${p.link}</a>
                    ${p.viewLink ? `
                      <h3 class="text-2xl md:text-4xl font-bold mt-4 mb-4">Visualiser le projet</h3> 
                      <a href=${p.viewLink} class="underline hover:text-stone-300 text-justify md:text-3xl text-l mt-4">${p.viewLink}</a>
                      ` :""}
                </div>
              </div>
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
    if(document.getElementById("home")){
      await loadComponent("header", "components/header.html");
      const navbarPath = mobileQuery.matches
      ? "components/telephoneNavbar.html"
      : "components/navbar.html";
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
    if(document.getElementById("home")){
      fetch("components/footer.html")
      .then(res => res.text())
  .then(footerHTML => {
    document.getElementById("footer").innerHTML = footerHTML

  })
    }
    else{
    fetch("../components/footer.html")
    .then(res => res.text())
  .then(footerHTML => {
    document.getElementById("footer").innerHTML = footerHTML

  })
    }
  
}
loadFooter()

  mobileQuery.addEventListener("change", loadHeaderAndNavbar)
  loadHeaderAndNavbar()
  if(document.getElementById("home")){
    loadHome()
  } 
  else if(document.getElementById("interests") ){
    loadInterests()
  }
  else if(document.getElementById("projects")){
  loadProjects()
  }
  else if(document.getElementById("skills")){
    loadSkills()
  }
  else{
    console.log("Page non existante")
  }
});
