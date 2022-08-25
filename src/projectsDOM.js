

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
    const addProjects = () => {
        //button for creating new projects
    }
    return {
        mainProject,
    }
};

export {
    createProjects,
}

