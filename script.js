
const element = document.getElementById("level");

let level = 0;
let current = element;


while (current) {
  level++;
  current = current.parentElement;
}


alert(`The level of the element is: ${level}`);
