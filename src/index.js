//things to do....
//divide up some functions that are doing too many things....divide between dom and data
//add style!
//add colors for priority?

import toDo, {projects} from "./todo.js";
import {newItem, newProject, buttons, printProjects, populateForm, redraw} from "./DOMstuff.js";

redraw();
printProjects(projects);
buttons();
populateForm(projects);


