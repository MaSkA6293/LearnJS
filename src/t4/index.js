import "./index.scss";

const contaner = document.querySelector(".contaner");

const t4 = document.createElement("div");
t4.classList.add("task4");
contaner.appendChild(t4);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 4";
t4.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Напишите функцию Math.min`;
t4.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task4__out");
t4.appendChild(out);

const labelOne = document.createElement("label");
labelOne.setAttribute("for", "task4One");
labelOne.innerHTML = "Введите число А";
const inputOne = document.createElement("input");
inputOne.classList.add("task4__input");
inputOne.setAttribute("id", "task4One");
labelOne.appendChild(inputOne);

const labelTwo = document.createElement("label");
labelTwo.setAttribute("for", "task4Two");
labelTwo.innerHTML = "Введите число B";
const inputTwo = document.createElement("input");
inputTwo.classList.add("task4__input");
inputTwo.setAttribute("id", "task4Two");
labelTwo.appendChild(inputTwo);

out.appendChild(labelOne);
out.appendChild(labelTwo);

const button = document.createElement("button");
button.classList.add("btn");
button.innerHTML = "Get result";
button.addEventListener("click", getResult);
out.appendChild(button);

const result = document.createElement("span");
out.appendChild(result);

function getResult() {
  let A = +inputOne.value;
  let B = +inputTwo.value;
  if (A > B) {
    result.innerHTML = `Число B наименьшее ${B}`;
  } else if (A < B) {
    result.innerHTML = `Число А наименьшее ${A}`;
  } else {
    result.innerHTML = "Переменные равны";
  }
}
export default t4;
