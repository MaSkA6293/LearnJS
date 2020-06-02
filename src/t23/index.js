import "./index.scss";

const contaner = document.querySelector(".contaner");

const t23 = document.createElement("div");
t23.classList.add("task23");
contaner.appendChild(t23);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 23";
t23.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `1.Напишите функцию asTabs, которая принимает узел DOM и создает интерфейс с вкладками,
 показывающий дочерние элементы этого узла. Она должна вставлять список элементов <buttoп> в верхней части узла,
  по одному для каждого дочернего элемента, содержащего текст, полученный из атрибута data-tabпame дочернего элемента. 
  Все исходные дочерние элементы, кроме одного, должны быть скрыты (свойство display имеет значение попе). Чтобы
выбрать узел, который должен быть видимым, нужно нажать его кнопку.<br>
2.Когда это заработает, дополните интерфейс, чтобы кнопка выбранной вкладки имела другой стиль и чтобы было понятно, какая вкладка выбрана.`;

t23.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task23__out");
t23.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.appendChild(document.createTextNode("Rum"));
buttonRun.addEventListener("click", () => getResult());
t23.appendChild(buttonRun);

const buttonHide = document.createElement("button");
buttonHide.className = "btn";
buttonHide.textContent = "Hide results";
buttonHide.style.display = "none";
buttonHide.addEventListener("click", () => hideResult());
t23.appendChild(buttonHide);

function hideResult() {
  window.removeEventListener("click", activTab);
  buttonHide.style.display = "none";
  buttonRun.style.display = "block";
  let panel = document.querySelector(".task23__panel").remove();
}

function getResult() {
  buttonRun.style.display = "none";
  buttonHide.style.display = "block";
  let panel = document.createElement("div");
  panel.className = "task23__panel";
  out.appendChild(panel);

  createElements(5);

  asTabs(panel);

  window.addEventListener("click", activTab);
}

function createElements(count) {
  let panel = document.querySelector(".task23__panel");
  for (let i = 0; i < count; i++) {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(`Tab number ${i}`));
    p.setAttribute("data-tabname", `${i}`);
    i === 0 ? (p.style.display = "block") : (p.style.display = "none");
    panel.appendChild(p);
  }
}

function asTabs(node) {
  let tabList = document.createElement("ul");
  tabList.className = "task23__tabs";
  for (let i = 0; i < node.childNodes.length; i++) {
    let child = node.childNodes[i];
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.className = "task23__tabItem";
    i === 0 ? button.classList.add("task23__tabItem_activ") : "";
    let dataTabname = child.getAttribute("data-tabname");
    button.appendChild(document.createTextNode("button " + dataTabname));
    button.setAttribute("data-target", dataTabname);
    li.appendChild(button);
    tabList.appendChild(li);
  }
  node.prepend(tabList);
}

function activTab(e) {
  let panel = document.querySelector(".task23__panel");
  if (e.target.getAttribute("data-target")) {
    let activ = e.target.getAttribute("data-target");
    document
      .querySelectorAll(".task23__tabItem")
      .forEach((el) =>
        el.getAttribute("data-target") === activ
          ? el.classList.add("task23__tabItem_activ")
          : el.classList.remove("task23__tabItem_activ")
      );
    let elements = panel.querySelectorAll("p");
    elements.forEach((el) =>
      el.getAttribute("data-tabname") === activ
        ? (el.style.display = "block")
        : (el.style.display = "none")
    );
  }
}

export default t23;
