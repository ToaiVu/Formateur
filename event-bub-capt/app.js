const grandP = document.querySelector("#grand-parent");
const parent = document.querySelector("#parent");
const petitFils = document.querySelector("#petit-fils");

petitFils.addEventListener(
  "click",
  function (e) {
    console.log("Grand son");
  },
  true
);

parent.addEventListener(
  "click",
  function (e) {
    console.log("Parent");
    e.stopPropagation();
  },
  true
);

grandP.addEventListener(
  "click",
  function (e) {
    console.log("Grand parent");
  },
  true
);
