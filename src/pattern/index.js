import "./index.scss";

const contaner = document.querySelector(".contaner");

const t3 = document.createElement("div");
t3.classList.add("task3");

let titleTask = document.createElement("p");
titleTask.innerHTML = `Напишите программу которая создает строку, представляющую сетку 8x8,
используя для разделения символ новой строки. В каждой позиции сетки стоит либо пробел, либо символ "#".
Эти символы должны располагаться в шахматном порядке.`;

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 3";

t3.appendChild(labelTask);
t3.appendChild(titleTask);

contaner.appendChild(t3);

let out = document.createElement("div");
out.classList.add("task3__out");

document.querySelector(".task3").appendChild(out);
