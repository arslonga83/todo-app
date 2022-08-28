import toDo, {projects, items} from "./todo";

//prints project list to the dom... 1 thing...good?
export function printProjects(projects) {
    projects.forEach(name => {
        if (document.getElementById(name)=== null) {
    const content = document.getElementById('content');
    const project = document.createElement('div');
    const section = document.createElement('ul');
    const title = document.createElement('h2');
    title.innerHTML = name;
    section.id = name;
    section.appendChild(title);
    project.appendChild(section);
    content.appendChild(project);}
})
}

//adds new tasks to the dom along with checkbox...includes checkbox functionality... too much!
export function newItem(item, project) {
    if (document.getElementById(item) === null) {
    const section = document.getElementById(project);
    const toDo = section.appendChild(document.createElement('li'));
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = item;
    checkBox.name = item;
    toDo.appendChild(checkBox);
    let text = document.createTextNode(item)
    toDo.appendChild(text);
    checkBox.addEventListener('change', () => {
        
        for (let i = 0; i < items.length; i++) {
            if (items[i].title === item) {
                if (checkBox.checked) {
                items[i].complete = true;
                console.log(items);
                toDo.style.textDecoration = 'line-through';
                }
                if (checkBox.checked === false) {
                    items[i].complete = false;
                    console.log(items);
                    toDo.style.textDecoration = 'none';
                }
            }
            }
            }
        )
    }
    }
    

    // contains the listeners for both buttons...including create new todo and clearing the form...too much! or maybe just move this whole thing to todo.js?
export function buttons() {
const btn1 = document.getElementById('newProject');
btn1.addEventListener('click', () => {
    
    let title = prompt('Title:');
    projects.push(title);
    console.log(projects);
    printProjects(projects);
    populateForm(projects);
})

const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const newTodo = new toDo();
    newTodo.project = document.getElementById('project').value;
    newTodo.title = document.getElementById('title').value;
    newTodo.description = document.getElementById('description').value;
    newTodo.dueDate = document.getElementById('dueDate').value;
    newTodo.priority = document.getElementById('priority').value;
    newTodo.complete = false;
    newItem(newTodo.title, newTodo.project);
    
    items.push(newTodo);
    
    console.log(newTodo);
    console.log(items);
    
    document.getElementById('form').reset();
})

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    for (let i = items.length-1; i >= 0; i--) {
        if (items[i].complete === true) {
            let display = document.getElementById(items[i].title);
            display.parentElement.remove();
            items.splice(i, 1);
    }
}
})  

}

// this adds options to the form dropdown - 1 thing..good?
export function populateForm(projects){
    let select = document.getElementById('project');
    select.innerHTML = '';
    projects.forEach(project => {
        let option = document.createElement('option');
        option.textContent = project;
        option.value = project;
        select.appendChild(option);
    })
}

// something like this for when I add storage?
// export function redraw() {
//     printProjects(projects);
//     items.forEach(item => {
//         newItem(item, item.project);
//     })
// }

    
        
          
      