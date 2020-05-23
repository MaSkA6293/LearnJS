import "./index.scss";

const contaner = document.querySelector(".contaner");

const t3 = document.createElement("div");
t3.classList.add("task3");

let titleTask = document.createElement("p");
titleTask.innerHTML = `Напишите программу которая создает строку, представляющую сетку 8x8,
используя для разделения символ новой строки. В каждой позиции сетки стоит либо пробел, либо символ "#".
Эти символы должны располагаться в шахматном порядке.`;

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 3";

t3.appendChild(labelTask);
t3.appendChild(titleTask);

contaner.appendChild(t3);

let out = document.createElement("div");
out.classList.add("task3__out");
renderShessBord();

let laberX = document.createElement("label");
laberX.innerHTML = "Size X";
laberX.setAttribute("for", "task3InputX");

let inputX = document.createElement("input");
inputX.setAttribute("type", "text");
inputX.setAttribute("id", "task3InputX");
laberX.appendChild(inputX);

let laberY = document.createElement("label");
laberY.innerHTML = "Size Y";
laberY.setAttribute("for", "task3InputY");

let inputY = document.createElement("input");
inputY.setAttribute("type", "text");
inputY.setAttribute("id", "task3InputY");
laberY.appendChild(inputY);

inputX.classList.add("task3__input");
inputY.classList.add("task3__input");
t3.appendChild(laberX);
t3.appendChild(laberY);

let buttonGetResult = document.createElement("button");
buttonGetResult.innerHTML = "Get result";

buttonGetResult.addEventListener("click", getResult);
buttonGetResult.classList.add("btn");
t3.appendChild(buttonGetResult);
document.querySelector(".task3").appendChild(out);

function renderShessBord(sizeX = 12, sizeY = 12) {
  let string = "";
  for (let i = 0; i < sizeX / 2; i++) {
    for (let j = 0; j < sizeY / 2; j++) {
      if (i % 2 === 0) {
        string += "&nbsp&nbsp" + "#";
      } else {
        string += "#" + "&nbsp&nbsp";
      }
    }
    string += `<br>`;
  }
  out.innerHTML = string;
}

function getResult() {
  let sizeX = +document.querySelectorAll(".task3__input")[0].value;
  let sizeY = +document.querySelectorAll(".task3__input")[1].value;
  renderShessBord(sizeX, sizeY);
}
