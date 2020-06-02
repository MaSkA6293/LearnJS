import "./index.scss";
import { object, number } from "prop-types";

const contaner = document.querySelector(".contaner");

const t19 = document.createElement("div");
t19.classList.add("task19");
contaner.appendChild(t19);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 19";
t19.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.appendChild(
  document.createTextNode(`Для заданного множества данных о горных вершинах - массива объектов 
со свойствами name, height и place - создайте структуру DOM для таблицы, в которой перечисляются эти объекты.
В таблице должно быть по одному столбцу для каждого ключа и по одной строке для каждого объекта, а ввер­ху еще
 одна строка заголовка с элементами <th >, в которой перечислены имена столбцов.
Запишите это так, чтобы столбцы автоматически создавались из объектов, а первый столбец - из имен свойств.
Поместите полученную таблицу внутри элемента с атрибутом id, значение которого равно "mountains ", чтобы таблица стала видимой в документе.
Когда у вас это получится, выровняйте ячейки, содержащие числовые значения, по правому краю, задав для них свойство значением style. textAlign
со значением "right". `)
);

t19.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task19__out");
t19.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run";
buttonRun.addEventListener("click", () => getResult());
t19.appendChild(buttonRun);

let mount = document.createElement("div");
mount.setAttribute("id", "mountains");
mount.classList.add("t19__showMount");
out.appendChild(mount);

function getResult() {
  mount.classList.toggle("t19__showMount_hide");
}
let arr = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

mount.appendChild(getTable(arr));

function getTable(arr) {
  let table = document.createElement("table");
  let keys = Object.keys(arr[0]);
  let header = document.createElement("tr");
  keys.forEach((element) => {
    let name = document.createElement("th");
    name.appendChild(document.createTextNode(element));
    header.appendChild(name);
  });
  table.appendChild(header);
  arr.forEach((el) => {
    let row = document.createElement("tr");
    keys.forEach((key) => {
      let str = document.createElement("td");
      str.appendChild(document.createTextNode(el[key]));
      if (typeof el[key] === "number") {
        str.setAttribute("style", "text-align:right");
      }
      row.appendChild(str);
    });
    table.appendChild(row);
  });

  return table;
}

export default t19;
