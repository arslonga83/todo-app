import {projects} from "./todo.js";
import {buttons, printProjects, populateForm, redraw} from "./DOMstuff.js";

redraw();
printProjects(projects);
buttons();
populateForm(projects);


