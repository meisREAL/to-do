// function mainBody() {
//     const mainWindow = document.getElementById('content')
//     const projectSide = document.createElement('div');
//     projectSide.setAttribute('id', 'projectSide');
//     const toDoSide = document.createElement('div')
//     toDoSide.setAttribute('id', 'toDoSide')
//     const header = document.createElement('header');
// }

const mainBody = (function () {
    const mainWindow = document.getElementById('content')
    const projectSide = document.createElement('div');
    projectSide.setAttribute('id', 'projectSide');
    const toDoSide = document.createElement('div')
    toDoSide.setAttribute('id', 'toDoSide')
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const makeStuff = () => {
        mainWindow.appendChild(header);
        mainWindow.appendChild(projectSide);
        mainWindow.appendChild(toDoSide);
    }
    return {
        makeStuff,
    }
}());

export {
    mainBody,
}

