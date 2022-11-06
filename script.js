const backers = document.querySelector(".backers");
const containers = document.querySelector(".container");
const backThisProject = document.querySelector(".backthisproject");
const three = document.querySelector(".three");
const body = document.querySelector("body");
const thankYou = document.querySelector(".thankyou");
const two = document.querySelector(".two");
const one = document.querySelector(".one");
const bamboo = document.querySelector(".bamboo");
const money = document.querySelector(".money");
const text = document.querySelector(".text");
const update = 89914;
const radio = document.querySelector(".radio");
const underline = document.querySelector("ul");

// ************BUTTONS**************
const backProject = document.querySelector(".bproject");
const remove = document.querySelector(".remove");
const mobileI = document.querySelector(".mobilei");
const mobileC = document.querySelector(".mobilec");
const submit = document.querySelector(".submittext");
const gotIt = document.querySelector(".gotit");

//***************** */ FUNCTIONS***************

function project() {
  three.style.backgroundColor = "rgba(0,0,0,0.1)";
  body.style.backgroundColor = "rgba(0,0,0,0.3)";
  three.style.opacity = "60%";
  containers.style.opacity = "60%";
}
function close() {
  three.style.backgroundColor = "white";
  body.style.backgroundColor = "rgb(233, 233, 233)";
  three.style.opacity = "100%";
  containers.style.opacity = "100%";
}
function style() {
  one.style.backgroundColor = "rgba(0,0,0,0.1)";
  two.style.backgroundColor = "rgba(0,0,0,0.1)";
  bamboo.style.backgroundColor = "rgba(0,0,0,0.1)";
}
function toggle() {
  one.style.backgroundColor = "white";
  two.style.backgroundColor = "white";
  bamboo.style.backgroundColor = "white";
}

// ************* EVENT LISTENERS ****************

backProject.addEventListener("click", function (e) {
  e.preventDefault();
  backThisProject.style.display = "block";
  project();
});
remove.addEventListener("click", function (e) {
  e.preventDefault();
  backThisProject.style.display = "none";
  close();
});
submit.addEventListener("click", function (e) {
  e.preventDefault();
  thankYou.style.display = "block";
  backThisProject.style.display = "none";
  project();
  style();
});
gotIt.addEventListener("click", function (e) {
  e.preventDefault();
  thankYou.style.display = "none";
  close();
  toggle();
  backers.textContent = 5007 + 1;
  money.textContent = "$" + (update + Number(text.value))
});
mobileI.addEventListener("click", function (e) {
  e.preventDefault();
  underline.classList.add("column");
  mobileI.style.display = "none";
  mobileC.style.display = "block";
  project();
});
mobileC.addEventListener("click", function (e) {
  e.preventDefault();
  underline.classList.remove("column");
  mobileI.style.display = "block";
  close();
});

