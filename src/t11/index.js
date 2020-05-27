import "./index.scss";

const contaner = document.querySelector(".contaner");

const t11 = document.createElement("div");
t11.classList.add("task11");
contaner.appendChild(t11);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 11";
t11.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Напишите функцию высшего порядка loop, которая представляет собой ана­лог оператора цикла for.
 Она принимает значение, функцию условия, функ­цию обновления и функцию тела. На каждой итерации сначала выполняется
функция условия для текущего значения цикла. Если эта функция возвращает false, то выполнение цикла прекращается.
 Затем вызывается функция тела, которой передается текущее значение цикла. Наконец, вызывается функция обновления
  для создания нового значения, и цикл запускается сначала. При определении функции вы можете использовать обычный 
  цикл для перебора значений.<br><br>
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1`;
t11.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task11__out");
t11.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run";
buttonRun.addEventListener("click", () =>
  loop(
    3,
    (n) => n > 0,
    (n) => n - 1,
    console.log
  )
);
t11.appendChild(buttonRun);

function loop(value, funcIf, funcUpdate, funcBody) {
  while (funcIf(value)) {
    funcBody(value);
    value = funcUpdate(value);
  }
}
