import { mainBody } from './bodyDOM';
import { createProjects } from './projectsDOM';
import { popUpWindow, displayToDO } from './toDoDOM';
import './style.css';

mainBody.makeStuff();
const toDoBtn = document.getElementById('newToDo');
toDoBtn.addEventListener('click', popUpWindow)

displayToDO();

const today = createProjects('Today');
const work = createProjects('Work');
today.mainProject();
work.mainProject();



