import "./index.scss";
import { func, object } from "prop-types";

const contaner = document.querySelector(".contaner");

const t9 = document.createElement("div");
t9.classList.add("task9");
contaner.appendChild(t9);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 9";
t9.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Напишите функцию ArrayToList, которая строит список, чья структура подобна показанной,
если передать фукнции массив [1,2,3] в качестве аргумента.
Напишите также функцию listToArray, создающую массив из списка. Затем добавьте вспомогательную функцию prepend, принимающую
элемент и список и создающую новый список, в котором заданный элемент добавлен в начало исходного списка. Кроме того, создайте функцию nth,
принимающую список и число и возвращающую элемент, находящийся в за­ данной позиции в этом списке (где ноль соответствует первому элементу),
или undefined, если элемента в заданной позиции не существует.
Вывод в Console.log`;
t9.appendChild(titleTask);

const picture = document.createElement("div");
picture.classList.add("task9__img");
t9.appendChild(picture);

const out = document.createElement("div");
out.classList.add("task9__out");
t9.appendChild(out);

const labelOne = document.createElement("label");
labelOne.setAttribute("for", "task9One");
labelOne.innerHTML = "Введите элементы массива через запятую";
const inputOne = document.createElement("input");
inputOne.classList.add("task9__input");
inputOne.setAttribute("id", "task9One");
labelOne.appendChild(inputOne);

const result = document.createElement("span");

const buttonReverse = document.createElement("button");
buttonReverse.classList.add("btn");
buttonReverse.innerHTML = "Run arrayToList";
buttonReverse.addEventListener("click", () => arrayToList(inputOne.value));

out.appendChild(labelOne);

out.appendChild(result);

out.appendChild(buttonReverse);

function arrayToList(string) {
  let arr = string.trim().split(",");
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  console.log("Список из массива:", list);

  listToArray(list);

  prepend({ value: "new element" }, list);

  let position = 2;
  const element = nth(list, position);

  console.log(`Элемент в позиции ${position}, значение:`, element);
}

function listToArray(list) {
  let array = [];
  function toArray(obj) {
    array.push(obj.value);
    if (obj.rest !== null) {
      toArray(obj.rest);
    }
  }
  toArray(list);
  console.log("Массив из списка:", array);
}

function prepend(el, list) {
  const newList = { ...el, rest: list };
  console.log("New element add prepend to List", newList);
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
export default t9;
