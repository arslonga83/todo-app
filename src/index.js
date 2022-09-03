//things to do....
//divide up some functions that are doing too many things....divide between dom and data
//make my own popup for new project and delete project functions....don't use prompt()

import toDo, {projects} from "./todo.js";
import {newItem, newProject, buttons, printProjects, populateForm, redraw} from "./DOMstuff.js";

redraw();
printProjects(projects);
buttons();
populateForm(projects);


