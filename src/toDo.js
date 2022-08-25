let theToDos = [];

const toDoTask = (title, description, priority) => {
    return { title, description, priority }
}

const pushToDo = (task) => {
    theToDos.push(task);
}

const test = toDoTask('Buy milk', 'need some stuff', 'High');
pushToDo(test);

export {
    theToDos,
    toDoTask,
    pushToDo
}