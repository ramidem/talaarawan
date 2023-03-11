export const getKey = (task) => {
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
