import "./index.scss";

const contaner = document.querySelector(".contaner");

const t15 = document.createElement("div");
t15.classList.add("task15");
contaner.appendChild(t15);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 15";
t15.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `1.Представьте, что у вас есть функция primitiveMultiply, которая в 20 % случаев
 умножает два числа, а в остальных 80 % случаев возникает исключение типа MultiplicatorUnitFailure. Напишите функцию, оборачивающую эту 
 неуклюжую функцию и просто продолжающую попытки до тех пор, пока вызов не завершится успешно, после чего возвращающую результат.
 <br><br>
 `;

t15.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task15__out");
t15.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run";
buttonRun.addEventListener("click", () => getResult());
t15.appendChild(buttonRun);

function getResult() {
  class MultiplicatorUnitiFailure extends Error {}
  console.log(`result Wraper(8,8)`, Wraper(8, 8));
  function Wraper(x, y) {
    for (;;) {
      try {
        return primitiveMultiply(x, y);
      } catch (e) {
        if (!(e instanceof MultiplicatorUnitiFailure)) {
          throw e;
        } else {
          console.log("Error, I'm trying again.", e.message);
        }
      }
    }
  }

  function primitiveMultiply(x, y) {
    let random = Math.random();
    if (random < 0.8) {
      throw new MultiplicatorUnitiFailure("MultiplicatorUnitiFailure Error");
    } else {
      return x * y;
    }
  }
}

export default t15;
