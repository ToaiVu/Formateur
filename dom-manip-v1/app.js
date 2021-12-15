// E2
var ms = document.querySelector("h2#mernStack");
ms.innerText = "TITI";
console.log(ms);

// E4
var listmern = document.querySelectorAll("#listeMern li");
console.log(listmern);

// E5

var firsth3 = document.querySelector("h3");
console.log(firsth3);

var firsth3V2 = document.querySelectorAll("h3")[0];

// Difference entre innerText et innerHTML
const ol = document.querySelector("#liste");
// ol.innerText = "<li>Papy</li>";
console.log(ol.innerHTML);

// E6
// Ajouter à la liste des techno les technos : Golang et Rust
//const oliste = document.querySelector("#liste");
ol.innerHTML += "<li>Golang</li><li>Rust</li>";
// console.log(ol.innerHTML);

//E7
const olmern = document.querySelector("#listeMern");
olmern.innerHTML = "<li>Golang</li><li>Rust</li>" + olmern.innerHTML;
// ol.innerText = "<li>Papy</li>";
// console.log(olmern.innerHTML);

// Ajout des styles(css)
ms.style.color = "red";
ms.style.fontSize = "100px";
ms.style.backgroundColor = "orange";

// Ajout des classes css dynamiquement
const listeDeTechnos = document.querySelectorAll("#liste li");

console.log("Liste : ", listeDeTechnos);

for (var i = 0; i < listeDeTechnos.length; i++) {
  listeDeTechnos[i].classList.add("title-styles", "list-gap");
}

// Gestion des events
const mainTitle = document.querySelector("#main_title");

console.log("dehors : ", this);
mainTitle.addEventListener("click", function (e) {
  // console.log("Context : ", mainTitle.innerText);
  // console.log("Contenu : ", this);
  console.log("dedans : ", this.innerText);
  // console.log("dedans : ", e.target.innerText);
});

// Exercice
// Quand on clique sur un li
// - color : indigo
// - background-color:orangered
// - border : indigo
// var liste = document.querySelectorAll("#liste li");
// for (var i = 0; i < liste.length; i++) {
//   liste[i].addEventListener("click", function () {
//     this.style.color = "indigo";
//     this.style.backgroundColor = "orangered";
//     this.style.border = "2px solid indigo";
//   });
// }

// Refactor avec la propagation
const olParent = document.querySelector("#liste");
olParent.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.color = "indigo";
  e.target.style.backgroundColor = "orangered";
  e.target.style.border = "2px solid indigo";
});

//Approche 2
var listeBackenTechs = document.querySelector("#backend");
var backendChildren = listeBackenTechs.children;

for (let i = 0; i < backendChildren.length; i++) {
  backendChildren[i].addEventListener("click", function () {
    this.remove();
  });
}

// Accéder aux enfants de #listeMern
//Quand on clique sur un enfant, il doit être retiré du DOM en utilisant
// le méthode .remove() sur l'élement
// var liste1 = document.querySelectorAll("#listeMern li");
// for (var i = 0; i < liste1.length; i++) {
//   liste1[i].addEventListener("click", function () {
//     this.remove();
//   });
// }

// Refactor avec la propagation
var listeMern2 = document.querySelector("#listeMern");

listeMern2.addEventListener("click", function (e) {
  e.target.remove();
});

var monTitre = document.querySelector("#html55");
monTitre.addEventListener("click", function () {
  this.innerText = "HTML6";
});
