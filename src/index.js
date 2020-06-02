import "./index.scss";
import * as Tasks from "./tasks";
let allBlocks = document.querySelector(".contaner");
// console.log(allBlocks);

for (let i = 0; i < allBlocks.childNodes.length; i++) {
  let span = document.createElement("span");
  span.className = "border";
  allBlocks.childNodes[i].appendChild(span);
}
