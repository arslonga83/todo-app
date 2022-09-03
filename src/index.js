//things to do....
//divide up some functions that are doing too many things....divide between dom and data
//add style!
//research, add date library 
//add example text in form...dropdown for priority?
//add colors for priority?

//what's up the the ghost 'new project' that seems stuck?!




import toDo, {projects} from "./todo.js";
import {newItem, newProject, buttons, printProjects, populateForm, redraw} from "./DOMstuff.js";

redraw();
printProjects(projects);
buttons();
populateForm(projects);


