import "./index.scss";

const contaner = document.querySelector(".contaner");

const t22 = document.createElement("div");
t22.classList.add("task22");
contaner.appendChild(t22);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 22";
t22.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `1.В этом упражнении вы попробуете реализовать след мыши. Используйте элементы <div> с фиксированным размером,
 заданным цветом фона и абсолютным позиционированием. Создайте группу таких элементов и при перемещении мыши отображайте их
  в виде указателя мыши. <br>
Здесь возможны различные подходы. Можно сделать решение настолько простым или сложным, насколько вы захотите. Начните с простого реше­ния -
сохраните фиксированное количество элементов, образующих след и, перебирая их в цикле, перемещайте каждый следующий элемент в текущее
положение мыши всякий раз, когда происходит событие mousemove.`;

t22.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task22__out");
t22.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run";
buttonRun.addEventListener("click", () => getResult());
t22.appendChild(buttonRun);

const buttonHide = document.createElement("button");
buttonHide.className = "btn";
buttonHide.textContent = "Hide results";
buttonHide.style.display = "none";
buttonHide.addEventListener("click", () => hideResult(mouseTrackGo));
t22.appendChild(buttonHide);

function hideResult() {
  buttonRun.style.display = "block";
  buttonHide.style.display = "none";
  window.removeEventListener("mousemove", mouseTrackGo);
  let arr = document.querySelectorAll(".t22__mouseTrack");
  arr.forEach((el) => el.parentNode.removeChild(el));
}

function getResult() {
  buttonRun.style.display = "none";
  buttonHide.style.display = "block";
  let elemOfTrack = arrayFromDivElements(5);

  function arrayFromDivElements(count) {
    let array = [];
    for (let i = 0; i < count; i++) {
      let div = document.createElement("div");
      div.className = "t22__mouseTrack";
      div.style.display = "none";
      document.querySelector("body").appendChild(div);
      array.push(div);
    }
    return array;
  }

  window.addEventListener("mousemove", mouseTrackGo);
}

function mouseTrackGo(e) {
  let trackElem = document.querySelectorAll(".t22__mouseTrack");
  for (let el of trackElem) {
    let padding = 20;
    el.style.display = "block";
    el.style.opacity = Math.random();
    el.style.top = e.pageY + Math.random() * padding + "px";
    el.style.left = e.pageX + Math.random() * padding + "px";
  }
}

export default t22;
