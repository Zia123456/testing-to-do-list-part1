const Functionality = require('./__MOCK__/add-and-remove');

describe('Add and Remove', () => {
  it('Add task', () => {
    // Arrange
    const task2 = 'Tasklist 2';

    // Act
    const addtask = Functionality.addNewTask(task2);

    // Assert
    expect(addtask).toBe(2);
  });

  it('Remove task', () => {
    // Arrange
    const index = 2;

    // Act
    const removetask = Functionality.removeTask(index);

    // Assert
    expect(removetask).toBe(1);
  });

  it('eddit description', () => {
    // arrange
    const index = 2;
    const description = 'I eddited';

    // act
    const edditTask = Functionality.edditTask(index, description);

    // assert
    expect(edditTask).toMatch(/I eddited/);
  });

  it('check status', () => {
    // arrange
    const index = 1;
    const checked = false;

    // act
    const status = Functionality.status(index, checked);

    // assert
    expect(status).toBeFalsy();
  });

  it('delete all completed tasks', () => {
    // arrange
    const checked = true;

    // act
    const clearAll = Functionality.clearAll(checked);

    // assert
    expect(clearAll).toBe(1);
  });
});
