import "./index.scss";

const contaner = document.querySelector(".contaner");

const t18 = document.createElement("div");
t18.classList.add("task18");
contaner.appendChild(t18);

let labelTask = document.createElement("h2");
labelTask.innerHTML = "Task 18";
t18.appendChild(labelTask);

let titleTask = document.createElement("p");
titleTask.innerHTML = `Массив из промисов [p1,p2,p3,p4,p5]<br>
1. Написать функцию последовательный запуск<br>
2. Написать функцию параллельный запуск<br>
3. Написать функцию PromiseAll<br>
4. Написать функцию PromiseRace <br>
5. Написать функцию PromiseAllSettled <br>`;

t18.appendChild(titleTask);

let out = document.createElement("div");
out.classList.add("task18__out");
t18.appendChild(out);

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
    setTimeout(() => resolve(3), 1000);
  });
let p4 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 2000);
  });
let p5 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 2000);
  });

let arr = [p1, p2, p3, p4, p5];

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
// promiseAll(arr)
//   .then((x) => console.log(x))
//   .catch((e) => console.log("Не завершился", e));

//promiseAll(arr).then(console.log);
function promiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    let count = 0;
    promises.forEach((el, index) => {
      el().then(
        (x) => {
          result[index] = x;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        },
        (x) => reject(x)
      );
    });
  });
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

//allSettled([p1(), p2(), p3(), p4(), p5()]).then(console.log);
//Promise.allSettled([p1(), p2(), p3(), p4(), p5()]).then((x) => console.log(x));
function allSettled(promises) {
  const preparedPromises = promises.map((p) =>
    p.then(
      (value) => ({ status: "resolved", value }),
      (reason) => ({ status: "rejected", reason })
    )
  );

  return Promise.all(preparedPromises);
}

export default t18;
