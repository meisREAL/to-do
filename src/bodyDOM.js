

const mainBody = (function () {
    const mainWindow = document.getElementById('content')
    const projectSide = document.createElement('div');
    projectSide.setAttribute('id', 'projectSide');
    const toDoSide = document.createElement('div')
    toDoSide.setAttribute('id', 'toDoSide')
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const headerTitle = () => {
        const title = document.createElement('h1');
        title.setAttribute('id', 'h1')
        title.textContent = 'my To-do List';
        header.appendChild(title);
    }

    const makeStuff = () => {
        mainWindow.appendChild(header);
        headerTitle();
        makeBtn();
        mainWindow.appendChild(projectSide);
        mainWindow.appendChild(toDoSide);
    }

    const makeBtn = () => {
        const createBtn = document.createElement('div');
        createBtn.setAttribute('id', 'newToDo');
        createBtn.textContent = '+';
        header.appendChild(createBtn);
    }

    return {
        makeStuff,
        makeBtn,
    }
}());

export {
    mainBody,
}

