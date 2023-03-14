const talaarawan = {
  todos: [],
  addTask: function (id, content) {
    this.todos.push({
      id,
      content,
      isDone: false,
    });
  },
  removeTask: function (id) {
    this.getTasks().forEach((todo, idx) => {
      if (todo.id === id) {
        this.todos.splice(idx, 1);
      }
    });
  },
  getTasks: function () {
    return this.todos;
  },
  getTask: function (id) {
    return this.getTasks().filter((todo) => todo.id === id)[0];
  },
  updateTask: function (id, content, isDone = false) {
    const tasks = this.getTasks();
    const task = this.getTask(id);
    const taskIndex = tasks.indexOf(task);
    tasks.splice(taskIndex, 0, {
      ...task,
      id,
      content,
      isDone,
    });

    return this.getTask(id);
  },
};
