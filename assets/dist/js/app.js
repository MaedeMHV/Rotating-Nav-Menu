let container = document.querySelector(".cont");
let circle = document.querySelector(".circle");
console.log("hellot");
function openmenu() {
  console.log("hello");
  container.classList.add("active");
  circle.classList.add("active");
}
function closemenu() {
  container.classList.remove("active");
  circle.classList.remove("active");
}
