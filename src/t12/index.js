import "./index.scss";

const contaner = document.querySelector(".contaner");

const t12 = document.createElement("div");
t12.classList.add("task12");
contaner.appendChild(t12);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 12";
t12.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Для массивов существует метод every, аналогичный методу some.
Этот ме­тод возвращает true, когда заданная функция возвращает true для каждого элемента массива.
 В некотором смысле some - это версия оператора || для массивов, а метод every подобен оператору &&.
Реализуйте метод every, принимающий в качестве параметров массив и пре­дикативную функцию. 
Напишите две версии: одну с использованием цикла, а вторую - с применением метода some.<br><br>
 

console.log(every([1, 3, 5], n => n < 10));<br>
// → true<br>
console.log(every([2, 4, 16], n => n < 10));<br>
// → false<br>
console.log(every([], n => n < 10));<br>
// → true`;

t12.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task12__out");
t12.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run every";
buttonRun.addEventListener("click", () => runEvery());
t12.appendChild(buttonRun);

const buttonRunSome = document.createElement("button");
buttonRunSome.classList.add("btn");
buttonRunSome.innerHTML = "Run some";
buttonRunSome.addEventListener("click", () => runSome());
t12.appendChild(buttonRunSome);

function runEvery() {
  console.log(every([1, 3, 5], (n) => n < 10));
  console.log(every([2, 4, 16], (n) => n < 10));
  console.log(every([], (n) => n < 10));
}
function runSome() {
  console.log(everySome([1, 3, 5], (n) => n < 10));
  console.log(everySome([2, 4, 16], (n) => n < 10));
  console.log(everySome([], (n) => n < 10));
  console.log("Для пустого массива, метод some возвращает false");
}

function every(array, test) {
  for (let el of array) {
    if (!test(el)) {
      return console.log("false");
    }
  }
  return console.log("true");
}

function everySome(array, test) {
  array.some(test) ? console.log("true") : console.log("false");
}
export default t12;
