import { pushProject, theToDos, toDoTask, pushToDo } from "./toDo";




const displayToDO = (e) => {//displays to do task on todo window
    const mainArea = document.getElementById('toDoSide');
    const projectNumber = document.getElementById('h1').dataset.indexNumber;


    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild);
    }

    for (let i = 0; i < theToDos[projectNumber].length; i++) {
        const toDoTask = document.createElement('div');
        toDoTask.classList.add('toDoTask');
        toDoTask.setAttribute('data-index-number', i)
        const doneCheck = document.createElement('input');
        doneCheck.setAttribute('type', 'radio');
        doneCheck.classList.add('doneToDo');
        doneCheck.setAttribute('data-index-number', i)
        toDoTask.appendChild(doneCheck);

        const viewToDo = document.createElement('div');
        viewToDo.classList.add('viewToDo');
        viewToDo.textContent = 'View';
        viewToDo.setAttribute('data-index-number', i);
        viewToDo.onclick = previewToDo;
        toDoTask.appendChild(viewToDo);

        const title = document.createElement('div');
        title.classList.add('toDoTaskTitle');
        title.textContent = theToDos[projectNumber][i].title;
        toDoTask.appendChild(title);

        const priority = document.createElement('div');
        priority.classList.add('toDoTaskPriority');
        priority.textContent = theToDos[projectNumber][i].priority;
        toDoTask.appendChild(priority);

        mainArea.appendChild(toDoTask);
    }
    mainArea.removeChild(mainArea.firstChild);
    completeToDo();
}

const completeToDo = () => {//adds event listeners on todo's radio buttons
    const radioCheck = document.querySelectorAll('.doneToDo');
    const projectNumber = document.getElementById('h1').dataset.indexNumber;
    for (let i = 0; i < radioCheck.length; i++) {
        radioCheck[i].addEventListener('click', function (e) {
            setTimeout(function () {
                theToDos[projectNumber].splice(e.target.dataset.indexNumber, 1);
                displayToDO();
            }, 300);
        })
    }
}

const popUpWindow = function () {//pop up window to list info for to do (to create a to do)
    const mainArea = document.getElementById('toDoSide');
    const projectNumber = document.getElementById('h1').dataset.indexNumber;

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
        if (title.value.length <= 0) {
            window.confirm('To do?');
            return;
        }
        console.log(title.value);
        let taskPriority;
        if (lowRadio.checked) {
            taskPriority = 'Low';
        } else if (mediumRadio.checked) {
            taskPriority = 'Medium';
        } else if (highRadio.checked) {
            taskPriority = 'High';
        }
        const task = toDoTask(title.value, description.value, taskPriority)
        pushToDo(projectNumber, task);
        console.log(theToDos);
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

const previewToDo = (e) => {//creates pop up window to view to do task in detail
    const mainWindow = document.getElementById('toDoSide');
    const previewWindow = document.createElement('div');
    const toDoNumber = e.target.dataset.indexNumber;
    const projectNumber = document.getElementById('h1').dataset.indexNumber;
    previewWindow.setAttribute('id', 'previewToDoWindow')

    const title = document.createElement('div');
    title.setAttribute('id', 'previewToDoTitle');
    title.textContent = theToDos[projectNumber][toDoNumber].title;
    previewWindow.appendChild(title);

    const description = document.createElement('div');
    description.setAttribute('id', 'previewToDoDescription');
    description.textContent = theToDos[projectNumber][toDoNumber].description;
    previewWindow.appendChild(description);

    const priority = document.createElement('div');
    priority.setAttribute('id', 'previewToDoPriority');
    priority.textContent = theToDos[projectNumber][toDoNumber].priority;
    previewWindow.appendChild(priority);

    const closeButton = document.createElement('div');
    closeButton.setAttribute('id', 'closePreviewToDo');
    closeButton.textContent = 'Close'
    closeButton.onclick = function () {
        previewWindow.remove(previewWindow);
    }
    previewWindow.appendChild(closeButton);

    mainWindow.appendChild(previewWindow)
}



export {
    popUpWindow,
    displayToDO
}