import toDo from "./todo";

export function newProject(name) {
    const content = document.getElementById('content');
    const project = document.createElement('div');
    const section = document.createElement('ul');
    const title = document.createElement('h2');
    title.innerHTML = name;
    section.id = name;
    section.appendChild(title);
    project.appendChild(section);
    content.appendChild(project);
}

export function newItem(item, project) {
    const section = document.getElementById(project);
    const toDo = section.appendChild(document.createElement('li'));
    toDo.innerHTML = item;
} 

export function buttons() {
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

const projects = [];
const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const newTodo = new toDo();
    newTodo.project = document.getElementById('project').value;
    newTodo.title = document.getElementById('title').value;
    newTodo.description = document.getElementById('description').value;
    newTodo.dueDate = document.getElementById('dueDate').value;
    newTodo.priority = document.getElementById('priority').value;
    //newProject(newTodo.project);
    newItem(newTodo.title, newTodo.project);
    
    projects.push(newTodo);
    
    console.log(newTodo);
    console.log(projects);
    
    document.getElementById('form').reset();
})

}


