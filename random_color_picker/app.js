const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const getRandomColorBtn = document.querySelector("#getRandomColorBtn");
const randomColorHex = document.querySelector("#randomColorHex");

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

getRandomColorBtn.addEventListener("click", () => {
  let hexColor = "#";

  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  randomColorHex.textContent = hexColor;
});

window.addEventListener("load", () => {
  let hexColor = "#";

  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  randomColorHex.textContent = hexColor;
});
