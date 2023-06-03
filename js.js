let button = document.querySelector(".button");
button.addEventListener("click", Button);
let Hexspan = document.querySelector(".HEX");

function Button() {
  let color = hexgenerator();
  document.body.style.backgroundColor = color;
  Hexspan.textContent = color;
}

let hexcolor = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function RandomNumber() {
  let Num = Math.floor(Math.random() * hexcolor.length);
  return Num;
}

function hexgenerator() {
  let hexx = "#";
  for (let i = 0; i < 6; i++) {
    hexx += hexcolor[RandomNumber()];
  }
  return hexx;
}
