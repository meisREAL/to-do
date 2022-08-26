let theToDos = [['My tasks']];


const toDoTask = (title, description, priority) => {
    return { title, description, priority }
}

const pushProject = (project) => {
    theToDos.push(project);
}

const pushToDo = (project, task) => {
    theToDos[project].push(task)
}


// const test = toDoTask('Buy milk', 'need some stuff', 'High');
// pushToDo(test);

export {
    theToDos,
    toDoTask,
    pushProject,
    pushToDo,
}