import { tasks } from "./tasks.js";
import * as helpers from "../helpers/helpers.js";

const ul = document.createElement("ul");

tasks.forEach((task) => {
  const li = document.createElement("li");
  const content = document.createTextNode(
    `${helpers.getKey(task)} ${task.content}`
  );

  if (task.status === "cancelled") {
    const em = document.createElement("em");
    em.appendChild(content);
    li.appendChild(em);
  } else {
    li.appendChild(content);
  }

  ul.appendChild(li);
});

export default ul;
