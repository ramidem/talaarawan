const tasks = [
  {
    id: 1,
    content: "something to do",
    type: "task",
    status: null,
  },
  {
    id: 2,
    content: "tomorrow is another day",
    type: "note",
    status: null,
  },
  {
    id: 3,
    content: "started working on talaarawan",
    type: "event",
    status: null,
  },
  {
    id: 4,
    content: "something done",
    type: "task",
    status: "done",
  },
  {
    id: 5,
    content: "this is not important",
    type: "task",
    status: "cancelled",
  },
];

const getKey = (task) => {
  switch (task.type) {
    case "task":
      if (task.status === "done") {
        return "x";
      }
      return "*";

    case "note":
      return "-";

    case "event":
      return "=";

    default:
      return "*";
  }
};

const ul = document.getElementById("tasks");

tasks.forEach((task) => {
  const li = document.createElement("li");
  const content = document.createTextNode(`${getKey(task)} ${task.content}`);

  if (task.status === "cancelled") {
    const em = document.createElement("em");
    em.appendChild(content);
    li.appendChild(em);
  } else {
    li.appendChild(content);
  }

  ul.appendChild(li);
});
