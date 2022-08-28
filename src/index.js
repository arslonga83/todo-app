//things to do....
//add a clear function that removes crossed off items/projects
//divide up some functions that are doing too many things....divide between dom and data
//add style!
//research, add date library 



import toDo, {projects} from "./todo.js";
import {newItem, newProject, buttons, printProjects, populateForm} from "./DOMstuff.js";

printProjects(projects);
buttons();
populateForm(projects);