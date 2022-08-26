import { mainBody } from './bodyDOM';
import { createProjects, } from './projectsDOM';
import { popUpWindow, displayToDO } from './toDoDOM';
import './style.css';

mainBody.makeStuff(); //creates stuff on screen
const toDoBtn = document.getElementById('newToDo'); //takes button to add new to do
toDoBtn.addEventListener('click', popUpWindow) // activates new to do button

// displayToDO();

const myTask = createProjects();
myTask.projectBtn();
myTask.addProjectToList();
// myTask.projectBtn();




