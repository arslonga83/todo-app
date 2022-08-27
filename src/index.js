import toDo, {projects} from "./todo.js";
import {newItem, newProject, buttons, printProjects, populateForm} from "./DOMstuff.js";

printProjects(projects);
buttons();
populateForm(projects);