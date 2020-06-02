import "./index.scss";

const contaner = document.querySelector(".contaner");

const t16 = document.createElement("div");
t16.classList.add("task16");
contaner.appendChild(t16);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 16";
t16.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `1. Объект Box, это ящик с замком. В ящике есть массив, но его можно получить, 
только если отпереть ящик. Прямой доступ к частному свойству _content запрещен.
Нацишите функцию withBoxUnlocked, которая принимает в качестве аргумента функциональное значение, отпирает ящик, запускает функцию,
 а затем гарантирует, что прежде, чем завершить работу, ящик снова будет заперт независимо от того, возвратила функция-аргумент нормальный результат
или вызвала исключение.<br>
2.Если хотите заработать дополнительные баллы, убедитесь, что при вызове withBoxUnlocked, когда ящик уже открыт, он остается открытым.
 `;

t16.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task16__out");
t16.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run";
buttonRun.addEventListener("click", () => getResult());
t16.appendChild(buttonRun);

function getResult() {
  const box = {
    locked: true,
    unlock() {
      this.locked = false;
    },
    lock() {
      this.locked = true;
    },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    },
  };

  function withBoxUnlocked(body) {
    if (!box.locked) {
      return body();
    }
    box.unlock();
    try {
      return body();
    } finally {
      box.lock();
    }
  }

  withBoxUnlocked(function () {
    box.content.push("gold piece");
  });

  try {
    withBoxUnlocked(function () {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box);
}

export default t16;
