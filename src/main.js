import { mainBody } from './bodyDOM';
import { createProjects } from './projectsDOM';
import { createButton } from './toDoDOM';
import './style.css';

mainBody.makeStuff();
// mainBody.makeBtn();

const today = createProjects('Today');
const work = createProjects('Work');
today.mainProject();
work.mainProject();



