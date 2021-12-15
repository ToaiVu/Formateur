// var button = document.querySelector("#btn");
var usersList = document.querySelector("#users");

// Without event propagation
// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   var fname = document.querySelector("#fname");
//   var lname = document.querySelector("#lname");
//   console.log(fname, " ", lname);

//   // Création d'un element du DOM
//   const li = document.createElement("li");
//   li.innerText = fname.value + " " + lname.value;
//   fname.value = "";
//   lname.value = "";
//   usersList.appendChild(li);
// });

// using  event propagation

const form = document.querySelector("#form");

// const formData = {};

// form.addEventListener("input", function (e) {
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
// });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  e.target.value;
  const li = document.createElement("li");
  li.innerText =
    e.target.elements.fname.value + " " + e.target.elements.lname.value;
  usersList.appendChild(li);
});
