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
    let text = document.createElement('p');
    text.innerHTML = item;
    toDo.appendChild(text);

    //add more details button
    let more = document.createElement('button');
    more.classList.add('more');
    more.textContent = 'more';
    toDo.appendChild(more);
    console.log(toDo.innerText);
    more.addEventListener('click', () => {
        items.forEach(item => {
            console.log(item.title);
            if (text.textContent === item.title) {
                popupDetails(item);
            }
        })
    })


    //add delete button
    let dlt = document.createElement('button');
    dlt.classList.add('dlt');
    dlt.textContent = 'X';
    toDo.appendChild(dlt);
    dlt.addEventListener('click', () => {
       
        for (let i = 0; i < items.length; i++) {
            console.log(items[i].title + 'moreX');
            console.log(dlt.parentElement.textContent);
            if (items[i].title + 'moreX' === dlt.parentElement.textContent) {
                
                items.splice(i, 1);
            }
        }
        localStorage.setItem("items", JSON.stringify(items));
        console.log(JSON.parse(localStorage.getItem('items')));
        console.log(items);
        dlt.parentElement.remove();
        
    });

    //listeners for checkbox
    checkBox.addEventListener('change', () => {
        
        for (let i = 0; i < items.length; i++) {
            if (items[i].title === item) {
                if (checkBox.checked) {
                items[i].complete = true;
                localStorage.setItem("items", JSON.stringify(items));
                console.log(items);
                console.log(JSON.parse(localStorage.getItem('items')));
                text.style.textDecoration = 'line-through';
                }
                if (checkBox.checked === false) {
                    items[i].complete = false;
                    localStorage.setItem("items", JSON.stringify(items));
                    console.log(items);
                    console.log(items[i].complete);
                    text.style.textDecoration = 'none';
                }
            }
            }
            
            }
        )
    }
    }
    

    // contains the listeners for all buttons...including create new todo and clearing the form...too much! or maybe just move this whole thing to todo.js?
export function buttons() {
const btn1 = document.getElementById('newProject');
btn1.addEventListener('click', () => {
    
    let title = prompt('Title:');
    projects.push(title);
    console.log(projects);
    localStorage.setItem("projects", JSON.stringify(projects));
    console.log(JSON.parse(localStorage.getItem("projects")));
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
    localStorage.setItem("items", JSON.stringify(items));
    console.log(localStorage);
    console.log(JSON.parse(localStorage.getItem("items")));
    
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
            localStorage.setItem("items", JSON.stringify(items));
    }
}
})  

const delproj = document.getElementById('delete');
delproj.addEventListener('click', () => {
    let choice = prompt('which project do you want to delete?');
    for (let i = 0; i < projects.length; i++) {
        if (projects[i] === choice) {
            const display = document.getElementById(projects[i]);
            display.parentElement.remove();
            projects.splice(i, 1);
        }
    }
    localStorage.setItem("projects", JSON.stringify(projects));
    populateForm(projects);

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

function popupDetails(item) {
    const content = document.getElementById('content');
    const popup = document.createElement('div');
    let details = popup.appendChild(document.createElement('p'));
    details.textContent = `Title: ${item.title} \n Description: ${item.description} \n Due: ${item.dueDate} \n Priority: ${item.priority}`;
    popup.id = 'popup';
    content.appendChild(popup);
    const close = popup.appendChild(document.createElement('button'));
    close.textContent = 'close popup';
    close.addEventListener('click', () => {
        popup.remove();
    })
}


////i think the projects storage is working....need to add the items

   export function redraw() {
      window.onload = (event) => {
        if(localStorage.getItem('projects')) {
          projects = JSON.parse(localStorage.getItem("projects"));
          printProjects(projects);
          populateForm(projects);
        }
        if(localStorage.getItem('items')) {
            items = JSON.parse(localStorage.getItem('items'));
            items.forEach(item => {
                newItem(item.title, item.project);
            })
            console.log(items);
        }

//         // console.log(JSON.parse(localStorage.getItem("items")))
//         // items = JSON.parse(localStorage.getItem("items"));
//         // console.log(items);
//         // for (let i = 0; i < items.length; i++) {
//         //     newItem(items[i], items[i].project);
//         // }

     }   
 }



    
        
          
      