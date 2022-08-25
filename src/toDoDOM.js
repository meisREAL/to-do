
const showToDo = (title, description, priority) => {
    const mainArea = document.getElementById('toDoSide');

    const displayToDO = () => {
        //displays to do on page
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
}