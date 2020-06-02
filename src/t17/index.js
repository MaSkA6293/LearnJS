import "./index.scss";

const contaner = document.querySelector(".contaner");

const t17 = document.createElement("div");
t17.classList.add("task17");
contaner.appendChild(t17);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 17";
t17.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Для каждого из следующих элементов напишите регулярное выражение, позволяющее проверить,
встречается ли в строке какая-либо из указанных подстрок. Регулярное выражение должно соответствовать только строкам,
содержащим одну из описанных подстрок. Не беспокойтесь о границах слов, если явно не указано иное. Когда ваше выражение
 сработает, проверьте, нельзя ли сделать его еще короче.
 1. car и cat`;

t17.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task17__out");
t17.appendChild(out);

const buttonRun = document.createElement("button");
buttonRun.classList.add("btn");
buttonRun.innerHTML = "Run";
buttonRun.addEventListener("click", () => getResult());
t17.appendChild(buttonRun);

function getResult() {
  verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

  verify(/pop|prop/, ["pop culture", "mad props"], ["plop", "prrrop"]);

  verify(
    /ferr[et|y|ari]/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]
  );

  verify(
    /ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]
  );

  verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]); // bad test

  verify(/\w{7,}/, ["hottentottententen"], ["no", "hotten totten tenten"]);

  verify(
    /\b[^\We]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]
  );
  verify(/(2[0-3])|([0-1]\d):[0-5]\d/, ["Завтрак в 20:00"], ["37:98"]);
  verify(/#([0-9A-Fa-f]{6})/, ["#ABCDEF"], [""]);

  function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes)
      if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
      }
    for (let str of no)
      if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
      }
  }
  let text = "'I'm the cook,' he Д'артаньян said, 'it's my job.'";
  // Change this call.

  console.log(
    text.replace(/(^|[^А-Яа-яA-Za-z])'|'([^А-Яа-яA-Za-z ]|$)/g, '$1"$2')
  );
  //→ "I'm the cook," he said, "it's my job."

  //Fill in this regular expression.

  let number = /^[\+\-]?(\d+(\.\d*)?|\.\d+)([eE][\+\-]?\d+)?$/;

  // Tests:
  for (let str of [
    "1",
    "-1",
    "+15",
    "1.55",
    ".5",
    "5.",
    "1.3e2",
    "1E-4",
    "1e+12",
  ]) {
    if (!number.test(str)) {
      console.log(`Failed to match '${str}'`);
    }
  }
  for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
    if (number.test(str)) {
      console.log(`Incorrectly accepted '${str}'`);
    }
  }
}
// let tick = 0;
// let interval = setInterval(() => {
//   console.log(tick);
//   tick = tick + 100;
//   if (tick > 10000) {
//     clearInterval(interval);
//   }
// }, 100);

let p1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
  });
let p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2000);
  });
let p3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(3), 1000);
  });
let p4 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 2000);
  });
let p5 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 2000);
  });
// p1();
// p2();
// p3();
// p4();
// p5();
let arr = [p1, p2, p3, p4, p5];
//promiseParallel(arr).then(console.log);
function promiseParallel(promises) {
  let promiselength = promises.length;
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      item().then(
        (x) => {
          result[index] = x;
          console.log(x);
          promiselength--;
          if (promiselength === 0) {
            resolve(result);
          }
        },
        () => {
          result[index] = "error";
          promiselength--;
          reject;
          if (promiselength === 0) {
            resolve(result);
          }
        }
      );
    });
  }).catch((e) => console.log("Error", e));
}
//promiseSequence(arr).then((x) => console.log(x));
function promiseSequence(promises) {
  let result = [];
  let start = Promise.resolve();
  for (let promis of promises) {
    start = start.then(() =>
      promis().then((x) => {
        result.push(x);
        console.log(x);
      })
    );
  }
  return start.then(() => result);
}
// race(arr)
//   .then((result) => console.log(result))
//   .catch((e) => console.log("catch", e));
function race(promises) {
  return new Promise((resolve, reject) => {
    for (let promis of promises) {
      promis().then(resolve, reject);
    }
  });
}

function allSettled(promises) {
  const preparedPromises = promises.map((p) =>
    p.then(
      (value) => ({ status: "resolved", value }),
      (reason) => ({ status: "rejected", reason })
    )
  );

  return Promise.all(preparedPromises);
}
//allSettled([p1(), p2(), p3(), p4(), p5()]).then(console.log);
//Promise.allSettled([p1(), p2(), p3(), p4(), p5()]).then((x) => console.log(x));

export default t17;
