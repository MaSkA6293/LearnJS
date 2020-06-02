import "./index.scss";
import { object, number, element } from "prop-types";

const contaner = document.querySelector(".contaner");

const t20 = document.createElement("div");
t20.classList.add("task20");
contaner.appendChild(t20);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 20";
t20.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.appendChild(
  document.createTextNode(`Метод document.getElementsByTagName возвращает все дочерние элементы
  с заданным именем тега. Реализуйте собственную версию этого метода как функцию, которая принимает в качестве аргументов узел и строку (имя
  тега) и возвращает массив, содержащий все узлы элемента-потомка с за­данным именем тега.
  Чтобы найти имя тега элемента, используйте его свойство nodeName. Но обра­тите внимание, что это свойство вернет имя тега в верхнем регистре. Чтобы
  это исправить, задействуйте методы для работы со строками или- toLowercase toUpperCase. `)
);

t20.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task20__out");
t20.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run";
buttonRun.addEventListener("click", () => getResult());
t20.appendChild(buttonRun);

function getResult() {
  function byTagName(node, tagName) {
    let result = [];
    tagName = tagName.toUpperCase();
    function explore(node) {
      for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType === document.ELEMENT_NODE) {
          if (node.childNodes[i].nodeName === tagName) {
            result.push(node.childNodes[i]);
          }
          explore(node.childNodes[i]);
        }
      }
    }
    explore(node);
    return result;
  }

  console.log(
    'document.getElementsByTagName("h2")',
    document.body.getElementsByTagName("h2")
  );
  console.log("Найдено элементов h2", byTagName(document.body, "h2").length);
  console.log(
    'document.getElementsByTagName("span")',
    document.body.getElementsByTagName("span")
  );
  console.log(
    "Найдено элементов span",
    byTagName(document.body, "span").length
  );
}

export default t20;
