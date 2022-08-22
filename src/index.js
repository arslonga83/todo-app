import toDo from "./todo.js";
import {newItem, newProject} from "./DOMstuff.js";

function test() {
    alert('this is a test');
}

test();

const todo = new toDo('a', 'b', 'c', 'd');

console.log(todo);

newProject('project');

newItem('test', 'project');

const btn1 = document.getElementById('newProject');
btn1.addEventListener('click', () => {
    let name = prompt('Title:');
    newProject(name);
})

const btn2 = document.getElementById('newItem');
btn2.addEventListener('click', () => {
    let item = prompt('Name:');
    let project = prompt('Project');
    newItem(item, project);
})
