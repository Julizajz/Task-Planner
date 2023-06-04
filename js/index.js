document.addEventListener('DOMContentLoaded', () => {

    // task form selector
    const newTaskForm = document.getElementById('newTaskForm')
    
    
    newTaskForm.addEventListener('submit', (event) => {
        
        // element input selectors 
        const newTaskNameInput = document.getElementById('taskName');
        const newTaskDescriptionInput = document.getElementById('taskDescription');
        const newAssignedToInput = document.getElementById('assignedTo');
        const newDueDateInput = document.getElementById('dueDate');
        let failValidation = 0;
        
        // prevent default action
        event.preventDefault();
        
        // input values
        const name = newTaskNameInput.value;
        const description = newTaskDescriptionInput.value;
        const assignedTo = newAssignedToInput.value;
        const dueDate = newDueDateInput.value;
        
        console.log(`Name: ${name}`);
        console.log(`Description: ${description}`);
        console.log(`Assigned To: ${assignedTo}`);
        console.log(`Due: ${dueDate}`);
        
        // validates for min lenght of 4 characters
        if (name.length > 4) {
            newTaskNameInput.classList.add('is-valid');
            newTaskNameInput.classList.remove('is-invalid');
          } else {
            newTaskNameInput.classList.add('is-invalid');
            newTaskNameInput.classList.remove('is-valid');
            failValidation++;
          }

        // valides for min length of 4 characters
        if(description.length > 4){
            newTaskDescriptionInput.classList.add('is-valid');
            newTaskDescriptionInput.classList.remove('is-invalid');
        }   else {
            newTaskDescriptionInput.classList.add('is-invalid');
            newTaskDescriptionInput.classList.remove('is-valid');
            failValidation++;
        }

        // validates assigned to for min length
        if(assignedTo.length > 3){
            newAssignedToInput.classList.add('is-valid');
            newAssignedToInput.classList.remove('is-invalid');
        }   else {
            newAssignedToInput.classList.add('is-invalid');
            newAssignedToInput.classList.remove('is-valid');
            failValidation++;
        }

        // validates due date
        if(dueDate.length){
            newDueDateInput.classList.add('is-valid');
            newDueDateInput.classList.remove('is-invalid');
        }   else {
            newDueDateInput.classList.add('is-invalid');
            newDueDateInput.classList.remove('is-valid');
            failValidation++;
        }
        
        
    })
});








