fetch("components/header.html")
  .then(res => res.text())
  .then(headerHTML => {
    document.getElementById("header").innerHTML = headerHTML;

 return fetch("components/navbar.html");
  })
  .then(res => res.text())
  .then(navbarHTML => {
    document.getElementById("navbar").innerHTML = navbarHTML;
  });