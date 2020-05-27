import "./index.scss";

const contaner = document.querySelector(".contaner");

const t10 = document.createElement("div");
t10.classList.add("task10");
contaner.appendChild(t10);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 10";
t10.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Используйте метод reduce в сочетании с методом concat для свертки массива,
 состоящего из нескольких массивов, в один массив, у которого есть все элементы входных массивов.
 Вывод решения в console.log`;
t10.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task10__out");
t10.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run";
buttonRun.addEventListener("click", () => collapseArray());
t10.appendChild(buttonRun);

function collapseArray() {
  const testArray = [1, 3, 2, 5, [1, 2], [3, 4], [5, 6], [7, 8], 5, 3];

  let result = testArray.reduce((a, b) => {
    return Array.isArray(a) && Array.isArray(b)
      ? a.concat(b)
      : Array.isArray(a)
      ? (a.push(b), a)
      : Array.isArray(b)
      ? (b.push(a), b)
      : [a, b];
  });
  console.log("test:", testArray);
  console.log("result:", result);
}
