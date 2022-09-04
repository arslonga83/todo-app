import {format, parseISO} from 'date-fns';
import {newItem, printProjects, populateForm} from "./DOMstuff.js";

export default class toDo {
    constructor(title, description, dueDate, priority, project, complete){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.complete = complete;
    }  
}

//sets default arrays for projects and todos
export let projects = ['Default project'];
export let items = [];

//creates a new todo item
export function createNewTodo() {
    const newTodo = new toDo();
    newTodo.project = document.getElementById('project').value;
    newTodo.title = document.getElementById('title').value;
    newTodo.description = document.getElementById('description').value;
    if (document.getElementById('dueDate').value) {
        newTodo.dueDate = format(parseISO(document.getElementById('dueDate').value), 'PPPP'); 
    }
    newTodo.priority = document.getElementById('priority').value;
    newTodo.complete = false;
    newItem(newTodo.title, newTodo.project);
    items.push(newTodo);
    localStorage.setItem("items", JSON.stringify(items));
    console.log(items);
};

//creates a new project
export function createProject(name) {
    projects.push(name);
        console.log(projects);
        localStorage.setItem("projects", JSON.stringify(projects));
        printProjects(projects);
        populateForm(projects);
};

//deletes a project
export function deleteProject(choice) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i] === choice) {
            const display = document.getElementById(projects[i]);
            display.parentElement.remove();
            projects.splice(i, 1);
        }
    }
    localStorage.setItem("projects", JSON.stringify(projects));
    populateForm(projects);
    console.log(projects);
};

//deletes a todo item
export function deleteTodo(button) {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i].title + 'moreX');
        console.log(button.parentElement.textContent);
        if (items[i].title + 'moreX' === button.parentElement.textContent) {
            items.splice(i, 1);
        }
    }
    localStorage.setItem("items", JSON.stringify(items));
    console.log(items);
}