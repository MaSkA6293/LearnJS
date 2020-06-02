import "./index.scss";

const contaner = document.querySelector(".contaner");

const t8 = document.createElement("div");
t8.classList.add("task8");
contaner.appendChild(t8);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 8";
t8.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Написать функцию reverse, которая создает новый массив и изменяет порядок элементов.
Создать функцию reverseArrayinPlace, которая преобразует заданный массив в качетве аргумента`;
t8.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task8__out");
t8.appendChild(out);

const labelOne = document.createElement("label");
labelOne.setAttribute("for", "task8One");
labelOne.innerHTML = "Введите элементы массива через запятую";
const inputOne = document.createElement("input");
inputOne.classList.add("task8__input");
inputOne.setAttribute("id", "task8One");
labelOne.appendChild(inputOne);

const labelTwo = document.createElement("label");
labelTwo.setAttribute("for", "task8Two");
labelTwo.innerHTML = "Введите элементы массива через запятую";
const inputTwo = document.createElement("input");
inputTwo.classList.add("task8__input");
inputTwo.setAttribute("id", "task8Two");
labelTwo.appendChild(inputTwo);

out.appendChild(labelOne);
out.appendChild(labelTwo);

const buttonReverse = document.createElement("button");
buttonReverse.classList.add("btn");
buttonReverse.innerHTML = "Run reverse";
buttonReverse.addEventListener("click", () => reverse(inputOne.value));

const buttonReversePlace = document.createElement("button");
buttonReversePlace.classList.add("btn");
buttonReversePlace.innerHTML = "reverseArrayinPlace";
buttonReversePlace.addEventListener("click", () =>
  reverseArrayinPlace(inputTwo.value)
);

const resultReverse = document.createElement("span");
out.appendChild(resultReverse);

out.appendChild(buttonReverse);
out.appendChild(labelTwo);
const resultReversePlace = document.createElement("span");
out.appendChild(resultReversePlace);
out.appendChild(buttonReversePlace);

function reverse(str) {
  let arr = str.trim().split(",");

  let inputarr = "Исходный массив : [";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      inputarr += `${arr[i]}]`;
    } else {
      inputarr += `${arr[i]},`;
    }
  }

  let newarray = [];

  for (let i = arr.length; i > 0; i--) {
    newarray.push(arr[i - 1]);
  }

  let outreverse = "reverse массив : [";
  for (let i = 0; i < newarray.length; i++) {
    if (i === newarray.length - 1) {
      outreverse += `${newarray[i]}]`;
    } else {
      outreverse += `${newarray[i]},`;
    }
  }
  resultReverse.innerHTML = `${inputarr}  ${outreverse}`;
}

function reverseArrayinPlace(str) {
  let arr = str.trim().split(",");

  let inputarr = "Исходный массив : [";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      inputarr += `${arr[i]}]`;
    } else {
      inputarr += `${arr[i]},`;
    }
  }
  let j = arr.length - 1;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let begin = arr[i];
    let end = arr[j];
    arr[i] = end;
    arr[j] = begin;
    j--;
  }

  let outreversePlace = "reversePlace массив : [";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      outreversePlace += `${arr[i]}]`;
    } else {
      outreversePlace += `${arr[i]},`;
    }
  }
  resultReversePlace.innerHTML = `${inputarr}  ${outreversePlace}`;
}
export default t8;
