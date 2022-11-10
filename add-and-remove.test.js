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
});
