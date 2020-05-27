import "./index.scss";
import { checkPropTypes } from "prop-types";

const contaner = document.querySelector(".contaner");

const t13 = document.createElement("div");
t13.classList.add("task13");
contaner.appendChild(t13);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 13";
t13.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `1.Напишите класс Vec, который представляет вектор в двумерном простран­стве.
 Вектор принимает параметры х и у (числа) и сохраняет их в свойствах с тем же именем.
 <br><br>
 2.Напишите для прототипа Vec два метода, plus и minus, которые принимают в качестве параметра другой вектор
и возвращают новый вектор, представляющий собой сумму или разность значений х и у для двух векторов (this и параметра).
<br><br>
3. Добавьте в прототип свойство-геттер length, которое вычисляет длину вектора - расстояние от точки (х, у) до начала координат (0, 0).
<br><br>`;

t13.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task13__out");
t13.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run";
buttonRun.addEventListener("click", () => getResult());
t13.appendChild(buttonRun);

function getResult() {
  class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    plus(vector) {
      return new Vec(this.x + vector.x, this.y + vector.y);
    }
    minus(vector) {
      return new Vec(this.x - Math.abs(vector.x), this.y - Math.abs(vector.y));
    }
    get length() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)).toFixed(2);
    }
  }

  console.log("Class Vec:", Vec);

  let vector = new Vec(2, 2);

  console.log("1. Объект класса Vec:", vector);

  let newvectorPlus = vector.plus({ x: 2, y: 2 });
  console.log(
    "2.1 Объект в результате вызова метода plus(x:2,y:2):",
    newvectorPlus
  );
  let newvectorMinus = vector.minus({ x: -4, y: -5 });

  console.log(
    "2.2 Объект в результате вызова метода minus(x:-4,y:-5):",
    newvectorMinus
  );

  let getlength = vector.length;
  console.log("3. Длина вектора бъекта {x:2,y:2}: ", getlength);
  let getlengthplus = newvectorPlus.length;
  console.log("3. Длина вектора бъекта {x:4,y:4}: ", getlengthplus);
  let getlengthminus = newvectorMinus.length;
  console.log("3. Длина вектора бъекта {x:-2,y:-3}: ", getlengthminus);
}
