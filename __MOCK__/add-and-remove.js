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
    const arr = [
      {
        description: 'Task-1',
        checked: false,
        id: 1,
      },
      {
        description: 'task-2',
        checked: false,
        id: 2,
      },
    ];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].id === index) {
        arr.splice(i, 1);
      }
    }

    return arr.length;
  }

  static edditTask(index, edditedDescription) {
    const arr = [
      {
        description: 'Task-1',
        checked: false,
        id: 1,
      },
      {
        description: 'task-2',
        checked: false,
        id: 2,
      },
    ];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].id === index) {
        arr[i].description = edditedDescription;
      }
    }

    return arr[index - 1].description;
  }

  static status(index, checked) {
    const arr = [
      {
        description: 'Task-1',
        checked: false,
        id: 1,
      },
      {
        description: 'task-2',
        checked: true,
        id: 2,
      },
    ];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].id === index) {
        arr[i].checked = checked;
      }
    }

    return arr[index - 1].checked;
  }
}

module.exports = functionalty;
