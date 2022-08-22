import toDo from "./todo.js";
import {newItem, newProject, buttons} from "./DOMstuff.js";

function test() {
    alert('this is a test');
}

test();

const todo = new toDo('a', 'b', 'c', 'd');

console.log(todo);

newProject('project');

newItem('test', 'project');

buttons();