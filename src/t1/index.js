import "./index.scss";

const contaner = document.querySelector(".contaner");

const t1 = document.createElement("div");
t1.classList.add("task1");

let titleTask = document.createElement("p");
titleTask.innerHTML =
  "Цикл, который делает 7 вызовов console.log и выводит треугольник.(//console.log)";

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 1";

t1.appendChild(labelTask);
t1.appendChild(titleTask);

contaner.appendChild(t1);

let out = document.createElement("div");
out.classList.add("task1__out");

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
document.querySelector(".task1").appendChild(out);
