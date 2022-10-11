let oneIncrement = document.getElementById("content-el");
// the values inside the round parentheses is called passing arguments
let count = 0;
let y = document.getElementById("target");
let x = document.getElementById("storage");

function incrementOnClick() {
  count++;
  oneIncrement.innerText = count;
}
let peeps = " Peeps";
function saveOnClick() {
  y.innerText = oneIncrement.innerText + peeps;
  (count = 0), (oneIncrement.innerText = 0);
  x.innerText += y.innerText + " - ";
}
// x.innerText = y.innerText;
