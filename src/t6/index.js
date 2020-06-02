import "./index.scss";
import { string } from "prop-types";

const contaner = document.querySelector(".contaner");

const t6 = document.createElement("div");
t6.classList.add("task6");
contaner.appendChild(t6);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 6";
t6.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Напишите функцию countChar, которая принимает строку в качестве первого аргумента. 
В качестве второго аргумента функция принимает значение, которое указывает какие символы нужно посчитать и
выводит количество найденных символов в этой строке.`;
t6.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task6__out");
t6.appendChild(out);

const labelOne = document.createElement("label");
labelOne.setAttribute("for", "task6One");
labelOne.innerHTML = "String";
const inputOne = document.createElement("input");
inputOne.classList.add("task6__input");
inputOne.setAttribute("id", "task6One");
labelOne.appendChild(inputOne);

const labelTwo = document.createElement("label");
labelTwo.setAttribute("for", "task6Two");
labelTwo.innerHTML = "Char";
const inputTwo = document.createElement("input");
inputTwo.classList.add("task6__input");
inputTwo.setAttribute("id", "task6Two");
labelTwo.appendChild(inputTwo);

out.appendChild(labelOne);
out.appendChild(labelTwo);

const button = document.createElement("button");
button.classList.add("btn");
button.innerHTML = "Get result";
button.addEventListener("click", () =>
  countChar(inputOne.value, inputTwo.value)
);
const result = document.createElement("span");
out.appendChild(result);
out.appendChild(button);

function countChar(str, char) {
  let count = 0;
  let i = 0;
  while (i < str.length) {
    str[i] === char ? count++ : "";
    i++;
  }
  result.innerHTML = `Количество совпадений в строке ${str} символу ${char}, равно  ${count}`;
}
export default t6;
