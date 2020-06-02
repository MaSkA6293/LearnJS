import "./index.scss";

const contaner = document.querySelector(".contaner");

const t21 = document.createElement("div");
t21.classList.add("task21");
contaner.appendChild(t21);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 21";
t21.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `1.Напишите страницу, которая отображает воздушный шарик (с помощью смай­лика). При нажатии стрелки вверх шарик должен надуваться (увеличиваться) на 10 %, а при нажатии стрелки вниз -
  сдуваться (уменьшаться) на 10%.<br>
  Для того чтобы управлять размером текста (смайлики это текст), вы можете использовать СSS-свойство - font-size (style.fontSize)
  для его родительского элемента. Не забудьте указать в значении единицу измере­ния - например, пикселы (10рх). Имена клавиш со стрелками
  - "ArrowUp" и "ArrowOown". Убедитесь, что нажатия клавиш меняют только размер шарика и не приводят к прокрутке страницы.<br>
  2. Когда это сработает, добавьте еще одно свойство: если надуть шарик больше определенного размера, он лопнет. В данном случае взрыв означает замену
  шарика на смайлик 💥 с одновременным удалением обработчика события (так что вы не сможете больше надувать или сдувать лопнувший шарик).`;

t21.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task21__out");
t21.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run";
buttonRun.addEventListener("click", getResult);
t21.appendChild(buttonRun);

let ballon = document.createElement("p");
ballon.appendChild(document.createTextNode("🎈"));
out.appendChild(ballon);

function getResult() {
  out.appendChild(
    document.createTextNode('Use key "up" or "down" to change ballon')
  );
  buttonRun.style.display = "none";
  let size = 14;
  window.addEventListener("keydown", myBallon);

  function myBallon(e) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (size > 25) {
        ballon.textContent = "💥";
        window.removeEventListener("keydown", myBallon);
      }
      size = size + size * 0.1;
      ballon.style.fontSize = size + "px";
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (size > 14) {
        size = size - size * 0.1;
        ballon.style.fontSize = size + "px";
      }
    }
  }
}

export default t21;
