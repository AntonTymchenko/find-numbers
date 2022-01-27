export function generateNumbersCollection(
  n,
  numberCollection,
  orderNumberCollection
) {
  // функция для создания массива из произвальных чисел

  let count = 1;
  let numberCollectionLength = n * n + 1;
  while (count < numberCollectionLength) {
    let number = randomInteger(1, n * n);
    if (!numberCollection.includes(number)) {
      count += 1;
      numberCollection.push(number);
    }
  }
  if (orderNumberCollection.length !== 0) {
    orderNumberCollection = [];
  }
  return (orderNumberCollection = [...numberCollection].sort((a, b) => a - b));
}

function randomInteger(min, max) {
  //функция для создания числа
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function generateTable(n, numberCollection, field) {
  //функция для создания ячеек и столбцов
  for (let i = 0; i < n; i += 1) {
    let tr = document.createElement("tr");
    for (let j = 0; j < n; j += 1) {
      let td = document.createElement("td");
      // добавляю текстовый контент в яейку и выкидываю добавленное число из массива
      td.textContent = numberCollection[numberCollection.length - 1];
      td.setAttribute(
        "data-num",
        numberCollection[numberCollection.length - 1]
      );
      numberCollection.pop();
      tr.append(td);
    }
    field.append(tr);
  }
}

export function checkOrderOfClickTd(
  orderNumberCollection,
  numbersOfFieldClick,
  num
) {
  numbersOfFieldClick.push(num);

  const resultOfCheck = numbersOfFieldClick.map((number, i) => {
    if (number === orderNumberCollection[i]) {
      return true;
    } else {
      return false;
    }
  });
  if (resultOfCheck.some((item) => item === false)) {
    numbersOfFieldClick.pop();
    return;
  } else {
    return true;
  }
}
