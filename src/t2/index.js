import "./index.scss";

const contaner = document.querySelector(".contaner");

const t2 = document.createElement("div");
t2.classList.add("task2");

let titleTask = document.createElement("p");
titleTask.innerHTML = `Напишите программу, которая выводит все числа от 1 до 100 с двумя исключениями.
  Для чисел кратных 3 выводится "Fizz", а для чисел кратных 5(но не 3) "Bizz";
  Когда это заработает изменить программу так, чтобы вывод был FizzBuzz для чисел которые кратны  3 и 5б
  (и по прежнему Fizz и Buzz для чисел кратных только одному из них)`;

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 2";

t2.appendChild(labelTask);
t2.appendChild(titleTask);

contaner.appendChild(t2);

let out = document.createElement("div");
out.classList.add("task2__out");

let i = 1;
let str = "";
while (i < 101) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      str += "FizzBuzz";
    } else {
      str += "Fizz";
    }
  } else if (i % 5 === 0) {
    str += "Bizz";
  } else {
    str += i;
  }
  str += "<br>";
  i++;
}
out.innerHTML = str;

const buttonShow = document.createElement("button");
buttonShow.innerHTML = "Show results";
buttonShow.classList.add("btn");
document.querySelector(".task2").appendChild(buttonShow);
const toggleResults = () => {
  out.classList.toggle("task2__out_show");
  if (out.classList.contains("task2__out_show")) {
    buttonShow.innerHTML = "Hide results";
  } else {
    buttonShow.innerHTML = "Show results";
  }
};
buttonShow.addEventListener("click", toggleResults);

const buttonClose = document.createElement("button");
buttonClose.classList.add("btn");
buttonClose.classList.add("task2__out__hideResults");
buttonClose.innerHTML = "Hide results";
buttonClose.addEventListener("click", toggleResults);

document.querySelector(".task2").appendChild(out);
document.querySelector(".task2__out").appendChild(buttonClose);
