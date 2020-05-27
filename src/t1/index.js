import "./index.scss";

const contaner = document.querySelector(".contaner");

const t1 = document.createElement("div");
t1.classList.add("task1");
contaner.appendChild(t1);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 1";
t1.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML =
  "Цикл, который делает 7 вызовов console.log и выводит треугольник.(//console.log)";
t1.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task1__out");
t1.appendChild(out);

let hashtag = "#";
let i = 0;
let str = "";

while (i < 7) {
  // console.log(hashtag);
  str += hashtag;
  hashtag += `#`;
  str += "<br>";
  i++;
}
out.innerHTML = str;
