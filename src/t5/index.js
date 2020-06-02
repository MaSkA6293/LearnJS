import "./index.scss";

const contaner = document.querySelector(".contaner");

const t5 = document.createElement("div");
t5.classList.add("task5");
contaner.appendChild(t5);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 5";
t5.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Является ли положительное число четным? Если 
а) ноль - четный б) единица - не четная с) четность любого другого числа N совпадает  с четностью N-2`;
t5.appendChild(titleTask);

const out = document.createElement("div");
out.classList.add("task5__out");
t5.appendChild(out);

const label = document.createElement("label");
label.setAttribute("id", "task5Input");
label.innerHTML = "Введите любое целое число";
const input = document.createElement("input");
input.setAttribute("id", "task5Input");
input.setAttribute("type", "number");

const button = document.createElement("button");
button.addEventListener("click", () => getResult(Math.round(+input.value)));
button.innerHTML = "Get result";
button.classList.add("btn");

label.appendChild(input);
out.appendChild(label);
out.appendChild(button);

const result = document.createElement("span");
out.appendChild(result);

function getResult(value) {
  input.value = value;
  check(value);
  function check(value) {
    value === 0
      ? (result.innerHTML = "true число четное")
      : value === 1
      ? (result.innerHTML = "false число нечетное")
      : value < 0
      ? check(-value)
      : check(value - 2);
  }
}
export default t5;
