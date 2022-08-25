let theToDos = [];

const toDoTask = (title, description, priority) => {
    return { title, description, priority }
}

const pushToDo = (task) => {
    theToDos.push(task);
}

export {
    theToDos,
    toDoTask,
    pushToDo
}