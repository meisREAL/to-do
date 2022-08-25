import { pushToDo, theToDos, toDoTask } from "./toDo";




const displayToDO = () => {
    //displays to do on page
    const mainArea = document.getElementById('toDoSide');

    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild);
    }

    for (let i = 0; i < theToDos.length; i++) {
        const toDoTask = document.createElement('div');
        toDoTask.classList.add('toDoTask');
        toDoTask.setAttribute('data-index-number', i)
        const doneCheck = document.createElement('input');
        doneCheck.setAttribute('type', 'radio');
        doneCheck.classList.add('doneToDo');
        toDoTask.appendChild(doneCheck);

        const title = document.createElement('div');
        title.classList.add('toDoTaskTitle');
        title.textContent = theToDos[i].title;
        toDoTask.appendChild(title);

        const priority = document.createElement('div');
        priority.classList.add('toDoTaskPriority');
        priority.textContent = theToDos[i].priority;
        toDoTask.appendChild(priority);

        mainArea.appendChild(toDoTask);
    }
}

const popUpWindow = function () {
    //pop up window to list info for to do
    const mainArea = document.getElementById('toDoSide');

    const popUp = document.createElement('div');
    popUp.setAttribute('id', 'popUpToDo');

    const title = document.createElement('input')
    title.setAttribute('id', 'inputTitle');
    title.setAttribute('placeholder', 'Title')
    popUp.appendChild(title);

    const description = document.createElement('textarea');
    description.setAttribute('id', 'inputDescription');
    description.setAttribute('placeholder', 'Description of the task')
    popUp.appendChild(description);

    const lowPriority = document.createElement('div');
    lowPriority.classList.add('priority');
    lowPriority.textContent = 'Low priority';
    const lowRadio = document.createElement('input');
    lowRadio.setAttribute('type', 'radio');
    lowRadio.setAttribute('name', 'choosePriority');
    lowPriority.appendChild(lowRadio)
    popUp.appendChild(lowPriority);

    const mediumPriority = document.createElement('div');
    mediumPriority.classList.add('priority');
    mediumPriority.textContent = 'Medium priority';
    const mediumRadio = document.createElement('input');
    mediumRadio.setAttribute('type', 'radio');
    mediumRadio.setAttribute('name', 'choosePriority');
    mediumPriority.appendChild(mediumRadio)
    popUp.appendChild(mediumPriority);

    const highPriority = document.createElement('div');
    highPriority.classList.add('priority');
    highPriority.textContent = 'High priority';
    const highRadio = document.createElement('input');
    highRadio.setAttribute('type', 'radio');
    highRadio.setAttribute('name', 'choosePriority');
    highPriority.appendChild(highRadio)
    popUp.appendChild(highPriority);

    const btnPlace = document.createElement('div');
    btnPlace.setAttribute('id', 'btnPlace');
    const createBtn = document.createElement('div');
    createBtn.setAttribute('id', 'createToDo');
    createBtn.textContent = 'Create new';

    createBtn.onclick = function () {
        let taskPriority;
        if (lowRadio.checked) {
            taskPriority = 'Low';
        } else if (mediumRadio.checked) {
            taskPriority = 'Medium';
        } else if (highRadio.checked) {
            taskPriority = 'High';
        }
        const task = toDoTask(title.value, description.value, taskPriority)
        pushToDo(task);
        displayToDO();
        popUp.remove(popUp);
    }
    btnPlace.appendChild(createBtn);
    const cancelBtn = document.createElement('div');
    cancelBtn.setAttribute('id', 'cancelToDo');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.onclick = function () {
        popUp.remove(popUp);
    }
    btnPlace.appendChild(cancelBtn);
    popUp.appendChild(btnPlace);

    mainArea.appendChild(popUp);
};



export {
    popUpWindow,
    displayToDO
}