const Functionality = require('./utils');

it('Add task', () => { 
  //Arrange
  const task2 = 'Tasklist 2';

  //Act
  const addtask = Functionality.addNewTask(task2);

  //Assert
  expect(addtask).toBe(2);
});

it('Remove task', () => { 

});
