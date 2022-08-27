import toDo, {projects} from "./todo.js";
import {newItem, newProject, buttons, printProjects, populateForm} from "./DOMstuff.js";

// function test() {
//     alert('this is a test');
// }

//test();

// const todo = new toDo('a', 'b', 'c', 'd');
// const todo2 = new toDo('e', 'f', 'g', 'h')
// console.log(todo);

// const project1 = [];
// project1.push(todo);
// project1.push(todo2);
// console.log(project1);
// console.log(project1[0]);
// console.log(project1.todo);

// newProject('project');

// newItem('test', 'project');



printProjects(projects);
buttons();
// populateForm(projects);