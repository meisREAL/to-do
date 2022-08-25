

const createProjects = (name) => {
    const mainArea = document.getElementById('projectSide');
    const mainList = document.createElement('div');
    mainList.setAttribute('id', 'mainProjectList');
    mainArea.appendChild(mainList);

    const mainProject = () => {
        const projectTitle = document.createElement('ul');
        projectTitle.classList.add('projectTitle');
        projectTitle.textContent = name;
        const listItem = document.createElement('li');

        listItem.appendChild(projectTitle);
        mainList.appendChild(listItem);
    }

    const projectBtn = () => {
        const createProject = document.createElement('div');
        createProject.setAttribute('id', 'createProject')
        createProject.textContent = '+ Add Project';

        createProject.onclick = function () {
            makeProject();
        }

        // mainList.appendChild(createProject);

        const listItem = document.createElement('li');

        listItem.appendChild(createProject);
        mainList.appendChild(listItem);
    }

    const makeProject = () => {
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

    const addProjectToList = () => {
        const input = document.getElementById('newProjectInput');

        const projectTitle = document.createElement('ul');
        projectTitle.classList.add('projectTitle');
        projectTitle.textContent = input.value;
        const listItem = document.createElement('li');

        listItem.appendChild(projectTitle);
        mainList.appendChild(listItem);
    }

    return {
        mainProject,
        projectBtn,
    }
};

export {
    createProjects,
}

