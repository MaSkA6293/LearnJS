import "./index.scss";

const contaner = document.querySelector(".contaner");

const t2 = document.createElement("div");
t2.classList.add("task2");
contaner.appendChild(t2);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 2";
t2.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Напишите программу, которая выводит все числа от 1 до 100 с двумя исключениями.
  Для чисел кратных 3 выводится "Fizz", а для чисел кратных 5(но не 3) "Bizz";
  Когда это заработает изменить программу так, чтобы вывод был FizzBuzz для чисел которые кратны  3 и 5б
  (и по прежнему Fizz и Buzz для чисел кратных только одному из них)`;

let wraper = document.createElement("div");
wraper.appendChild(titleTask);

t2.appendChild(wraper);

let out = document.createElement("div");
out.classList.add("task2__out");
t2.appendChild(out);

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
buttonShow.classList.add("task2__btnShow");
buttonShow.addEventListener("click", toggleResults);
wraper.appendChild(buttonShow);

const buttonClose = document.createElement("button");
buttonClose.classList.add("btn");
buttonClose.classList.add("task2__out__hideResults");
buttonClose.innerHTML = "Hide results";
buttonClose.addEventListener("click", toggleResults);
out.appendChild(buttonClose);

function toggleResults() {
  out.classList.toggle("task2__out_show");
  if (out.classList.contains("task2__out_show")) {
    buttonShow.innerHTML = "Hide results";
  } else {
    buttonShow.innerHTML = "Show results";
    window.scrollTo({
      top: t2.offsetTop,
      behavior: "smooth",
    });
  }
}
