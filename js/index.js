
// task form selector
const newTaskForm = document.getElementById('newTaskForm')


newTaskForm.addEventListener('submit', (event) => {

    // prevent default action
    event.preventDefault();

    // element input selectors 
    const newTaskNameInput = document.getElementById('taskName');
    const newTaskDescriptionInput = document.getElementById('taskDescription');
    const newAssignedToInput = document.getElementById('assignedTo');
    const newDueDateInput = document.getElementById('dueDate');

    // input values
    const name = newTaskNameInput.value;
    const description = newTaskDescriptionInput.value;
    const assignedTo = newAssignedToInput.value;
    const dueDate = newDueDateInput.value;
})








// element input selectors 
// const newTaskNameInput = document.getElementById('taskName');
// const newTaskDescriptionInput = document.getElementById('taskDescription');
// const newAssignedToInput = document.getElementById('assignedTo');
// const newDueDateInput = document.getElementById('dueDate');


