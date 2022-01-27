import {
  generateNumbersCollection,
  generateTable,
  checkOrderOfClickTd,
} from "./utils.js";

let field = document.querySelector("#field");
let n = 2;
const numberCollection = []; //коллекция чисел в произвольно порядке
let orderNumberCollection = []; // для проверки последовательности нажатия на цифры
let numbersOfFieldClick = [];

field.addEventListener("click", onFieldClick);

function onFieldClick(e) {
  if (!numbersOfFieldClick.includes(+e.target.dataset.num)) {
    if (
      checkOrderOfClickTd(
        orderNumberCollection,
        numbersOfFieldClick,
        +e.target.dataset.num
      )
    ) {
      e.target.classList.add("active");
    }
  }
  if (checkEndOfTheGame(numbersOfFieldClick, numberCollection)) {
    numbersOfFieldClick = [];
    return;
  }
  return;
}

orderNumberCollection = generateNumbersCollection(
  n,
  numberCollection,
  orderNumberCollection
);
generateTable(n, numberCollection, field);

function checkEndOfTheGame(numbersOfFieldClick, numberCollection) {
  if (numbersOfFieldClick.length === n * n) {
    field.innerHTML = "";
    n += 1;
    orderNumberCollection = generateNumbersCollection(
      n,
      numberCollection,
      orderNumberCollection
    );
    generateTable(n, numberCollection, field);
    return true;
  }
  return false;
}
