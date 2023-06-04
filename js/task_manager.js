const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    `<div class="list-item">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <h6 class="card-subtitle mb-2 text-muted">Assigned to: ${assignedTo}</h6>
        <h6 class="card-subtitle mb-2 text-muted">Due Date: ${dueDate}</h6>
        <button type="button" class="btn btn-success">Mark As Done</button>
        <button type="button" class="btn btn-primary">DELETE</button>
      </div>
    </div>
  </div>`
}


class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate, status) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        }

        this.tasks.push(task)
    }

}