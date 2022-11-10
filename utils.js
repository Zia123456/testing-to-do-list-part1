class functionalty {
  static addNewTask(newTask2) {
    const task1 = [
      {
        description: 'Task 1',
        checked: false,
        id: 1,
      },
    ];
    const newArr = [];
    const newTaskDescription = newTask2;
    const taskslist = task1.length + 1;
    const task2 = [
      {
        description: newTaskDescription,
        checked: false,
        id: taskslist,
      },
    ];
    newArr.push(...task1);
    newArr.push(...task2);
    return newArr.length;
  }

  static removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('myTasks'));
    tasks.splice(index, 1);

    for (let i = 0; i < tasks.length; i += 1) {
      if (i >= index) {
        const updateId = tasks[i].id - 1;
        tasks[i].id = updateId;
        localStorage.setItem('myTasks', JSON.stringify(tasks));
      } else {
        localStorage.setItem('myTasks', JSON.stringify(tasks));
      }
    }
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }

  static removeEditedTask(index) {
    const tasks = JSON.parse(localStorage.getItem('myTasks'));
    tasks.splice(index, 1);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }
}

module.exports = functionalty;
