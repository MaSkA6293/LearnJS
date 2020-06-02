import "./index.scss";

const contaner = document.querySelector(".contaner");

const t14 = document.createElement("div");
t14.classList.add("task14");
contaner.appendChild(t14);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 14";
t14.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `1.Напишите класс c именем Group, который как и Set, располагает методами add, delete, has.
Его конструктор создает пустую группу, add добавляет в неё значение (только если такого значения нет в группе),
метод delet удаляет элемент из группы( если такой там был), а has возвращает логическое значение, указывающее, является ли
аргумент членом группы.
 <br><br>
 2.Присвойте классу статический метод from, который принимает в качестве аргумента итерируемый объект и создает группу, содержащую
 все значения полученные посредством перебора.
<br><br>
3.Сделайте класс Group итерируемым. Не возвращайте просто итератор, созданный путем вызова метода Symbol.iterator для массива.
<br><br>
4. Заменить метод hasOwnProperty для объекта, придумать как воспользоваться методом из прототипа, который становится не доступным`;

t14.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task14__out");
t14.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run";
buttonRun.addEventListener("click", () => getResult());
t14.appendChild(buttonRun);

function getResult() {
  class Group {
    constructor() {
      this.myGroup = [];
    }
    add(value) {
      //  const index = this.myGroup.indexOf(value);
      // if (!index !== -1) {
      if (!this.has(value)) {
        this.myGroup.push(value);
        console.log(`Элемент ${value} add`);
      } else console.log(`Такой элемент  ${value} уже есть`);
    }
    delete(value) {
      //    this.myGroup = this.myGroup.filter((el) => el !== value);
      const index = this.myGroup.indexOf(value);
      if (index !== -1) {
        this.myGroup.splice(index, 1);
        console.log(`Элемент ${value} был удален из Group`);
      } else {
        console.log(`Элемента ${value} нет в Group`);
      }
    }
    has(value) {
      return this.myGroup.includes(value);
    }

    static from(obj) {
      const group = new Group();
      for (let el of obj) {
        group.add(el);
      }
      return group;
    }

    [Symbol.iterator]() {
      return new GroupIterator(this);
    }
  }

  let group = new Group();
  console.log("task1");
  group.add(1);
  group.add(2);
  group.add(3);
  group.add(4);
  group.delete(1);
  group.delete(2);
  group.has(3);
  group.has(4);
  group.has(1);
  console.log(group);
  console.log("task2");
  console.log('Новая группа из массива [22,33,44,55,"learn","js"]');
  let somegroop = Group.from([22, 33, 44, 55, "learn", "js"]);
  console.log("somegroup", somegroop);
  console.log("task3");
  class GroupIterator {
    constructor(group) {
      this.i = 0;
      this.group = group;
    }
    next() {
      if (this.i >= this.group.myGroup.length) {
        return { done: true };
      }
      let value = this.group.myGroup[this.i];
      this.i++;
      return { value, done: false };
    }
  }
  console.log(
    'Создание и вывод объекта Group.from(["a", "b", "c"]) c помощью собственного Symbol.iterator в console.log '
  );
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }

  let map = { one: true, two: true, hasOwnProperty: true };
  console.log("task4 obj", map);
  map.hasOwnProperty = function () {
    console.log("Совсем не то что ожидается");
  };
  console.log('Вызов map.hasOwnProperty("two")', map.hasOwnProperty("two"));
  console.log(
    "Object.prototype.hasOwnProperty.call(map, 22)",
    Object.prototype.hasOwnProperty.call(map, 22)
  );
}

export default t14;
