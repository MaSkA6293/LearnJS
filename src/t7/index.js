import "./index.scss";

const contaner = document.querySelector(".contaner");

const t7 = document.createElement("div");
t7.classList.add("task7");
contaner.appendChild(t7);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 7";
t7.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Написать функцию Range, которая принимает 2 аргумента, start и end
и возвращает массив, содержащий числа от start до end включительно.
Затем написать функцию sum, которая принимает массив чисел и возвращает их сумму.
Дополнительно: изменить range, чтобы функция принимала не обязательный 3й аргумент,
который указывал бы на значение шага, используемое при построении массива.Если шаг не задан
элементы увеличиваются на 1, что соответствует старому поведению.
Пример range(1,10,2) return [1,3,5,7,9]; range(5,2,-1) return [5,4,3,2]`;
t7.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task7__out");
t7.appendChild(out);

const labelOne = document.createElement("label");
labelOne.setAttribute("for", "task7One");
labelOne.innerHTML = "start";
const inputOne = document.createElement("input");
inputOne.classList.add("task7__input");
inputOne.setAttribute("id", "task7One");
labelOne.appendChild(inputOne);

const labelTwo = document.createElement("label");
labelTwo.setAttribute("for", "task7Two");
labelTwo.innerHTML = "end";
const inputTwo = document.createElement("input");
inputTwo.classList.add("task7__input");
inputTwo.setAttribute("id", "task7Two");
labelTwo.appendChild(inputTwo);

const labelThree = document.createElement("label");
labelThree.setAttribute("for", "task7Three");
labelThree.innerHTML = "step";
const inputThree = document.createElement("input");
inputThree.classList.add("task7__input");
inputThree.setAttribute("id", "task7Three");
labelThree.appendChild(inputThree);

const labelFour = document.createElement("label");
labelFour.setAttribute("for", "task7Four");
labelFour.innerHTML = "Введите элементы массива через запятую";
const inputFour = document.createElement("input");
inputFour.classList.add("task7__input");
inputFour.setAttribute("id", "task7Four");
labelFour.appendChild(inputFour);

out.appendChild(labelOne);
out.appendChild(labelTwo);
out.appendChild(labelThree);

const buttonRange = document.createElement("button");
buttonRange.classList.add("btn");
buttonRange.innerHTML = "Run range";
buttonRange.addEventListener("click", () =>
  range(+inputOne.value, +inputTwo.value, +inputThree.value)
);
const buttonSum = document.createElement("button");
buttonSum.classList.add("btn");
buttonSum.innerHTML = "Run sum";
buttonSum.addEventListener("click", () => sum(inputFour.value));

const resultRange = document.createElement("span");
out.appendChild(resultRange);

out.appendChild(buttonRange);
out.appendChild(labelFour);
const resultSum = document.createElement("span");
out.appendChild(resultSum);
out.appendChild(buttonSum);

function range(start, end, step = 1) {
  step === 0 ? (step = 1) : "";
  let arr = [];
  if (start === end) {
    resultRange.innerHTML = start;
    return;
  }

  if ((start < end) & (step < 0) || (start > end) & (step > 0)) {
    resultRange.innerHTML = "Бесконечный цикл";
    return;
  }

  for (let i = start; start < end ? i <= end : i >= end; i += step) {
    arr.push(i);
  }
  let outRange = "";
  for (let el of arr) {
    outRange += `${el} `;
  }
  resultRange.innerHTML = outRange;
}
function sum(str) {
  const arr = str.trim().split(",");
  let sum = 0;
  for (let args of arr) {
    sum += +args;
  }
  resultSum.innerHTML = sum;
}
