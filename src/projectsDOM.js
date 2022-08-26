import { pushProject, theToDos, toDoTask } from "./toDo";
import { displayToDO } from "./toDoDOM";

const createProjects = (name) => {
    const mainArea = document.getElementById('projectSide');
    const mainList = document.createElement('div');
    mainList.setAttribute('id', 'mainProjectList');
    mainArea.appendChild(mainList);

    const projectBtn = () => { //+Add Project button
        const createProject = document.createElement('div');
        createProject.setAttribute('id', 'createProject')
        createProject.textContent = '+ Add Project';

        createProject.onclick = function () {
            makeProject();
        }

        mainArea.appendChild(createProject);
    }

    const makeProject = () => { //pop up window to add a new project
        const projectWindow = document.createElement('li');
        projectWindow.setAttribute('id', 'newProjectWindow');
        const input = document.createElement('input');
        input.setAttribute('id', 'newProjectInput');
        projectWindow.appendChild(input);
        const buttonPlace = document.createElement('div');
        buttonPlace.setAttribute('id', 'newProjectButtonPlace');
        projectWindow.appendChild(buttonPlace);
        const createNewProject = document.createElement('div');
        createNewProject.setAttribute('id', 'newProjectCreateButton');
        createNewProject.textContent = 'Add';

        createNewProject.onclick = function () {
            addProjectToList();
            projectWindow.remove(projectWindow);
        }

        buttonPlace.appendChild(createNewProject);
        const cancelBtn = document.createElement('div');
        cancelBtn.setAttribute('id', 'cancelNewProject');
        cancelBtn.textContent = 'Cancel';

        cancelBtn.onclick = function () {
            projectWindow.remove(projectWindow);
        }

        buttonPlace.appendChild(cancelBtn);
        mainList.appendChild(projectWindow)
    }

    const addProjectToList = () => { //this creates projects from array to display in project side window
        const input = document.getElementById('newProjectInput');

        if (input != null) {
            pushProject([input.value]);
        }
        console.log(theToDos)
        while (mainList.firstChild) {
            mainList.removeChild(mainList.firstChild);
        }
        for (let i = 0; i < theToDos.length; i++) {
            const projectTitle = document.createElement('ul');
            projectTitle.classList.add('projectTitle');
            projectTitle.setAttribute('data-index-number', i)
            projectTitle.textContent = theToDos[i][0];
            projectTitle.onclick = () => {
                chooseProject(projectTitle);
                displayToDO()
            }
            const listItem = document.createElement('li');

            listItem.appendChild(projectTitle);
            mainList.appendChild(listItem);
        }
    }

    const chooseProject = (e) => {//cheating so I could get number for arrays
        const titlePlace = document.getElementById('h1');
        titlePlace.textContent = e.textContent;
        const dataNumber = e.dataset.indexNumber;
        titlePlace.setAttribute('data-index-number', dataNumber);
    }

    return {
        addProjectToList,
        projectBtn,
    }
};

export {
    createProjects,
}

