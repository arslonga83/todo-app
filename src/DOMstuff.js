import {projects, items, createNewTodo, createProject, deleteProject, deleteTodo} from "./todo";

//prints project list to the dom
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

//adds new tasks to the dom along with checkbox, more button, delete button
export function newItem(item, project, status=false) {
    if (document.getElementById(item) === null) {
    const section = document.getElementById(project);
    const toDo = section.appendChild(document.createElement('li'));

    //add checkbox
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = item;
    checkBox.name = item;
    checkBox.checked = status;
    toDo.appendChild(checkBox);
    let text = document.createElement('p');
    text.innerHTML = item;
    if (checkBox.checked) {
        text.style.textDecoration = 'line-through';
    }
    toDo.appendChild(text);

    //add more details button
    let more = document.createElement('button');
    more.classList.add('more');
    more.textContent = 'more';
    toDo.appendChild(more);
    more.addEventListener('click', () => {
        items.forEach(item => {
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
        deleteTodo(dlt);
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
                text.style.textDecoration = 'line-through';
                }
                if (checkBox.checked === false) {
                    items[i].complete = false;
                    localStorage.setItem("items", JSON.stringify(items));
                    console.log(items);
                    text.style.textDecoration = 'none';
                }
            }
            }
            }
        )
    }
    }

// contains the listeners for all buttons
export function buttons() {

//new project button
const btn1 = document.getElementById('newProject');
btn1.addEventListener('click', () => {
    newProjPopup();
});

//submit button
const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    createNewTodo()
    document.getElementById('form').reset();
});

//clear button
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
});

//delete project button
const delproj = document.getElementById('delete');
delproj.addEventListener('click', () => {
    delProjPopup();
})
}

// this adds options to the form dropdown
export function populateForm(projects){
    let select = document.getElementById('project');
    select.innerHTML = '';
    projects.forEach(project => {
        let option = document.createElement('option');
        option.textContent = project;
        option.value = project;
        select.appendChild(option);
    })
};

//popup form details button
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
};

//new project popup
function newProjPopup() {
    const projPopup = document.createElement('div');
    projPopup.textContent = 'Project Name:';
    let input = document.createElement('input');
    input.type = 'text';
    projPopup.appendChild(input);
    projPopup.id = 'projPopup';
    content.appendChild(projPopup);
    const close = projPopup.appendChild(document.createElement('button'));
    close.textContent = 'close popup';
    close.addEventListener('click', () => {
        projPopup.remove();
})
    const submitNew = projPopup.appendChild(document.createElement('button'));
    submitNew.textContent = 'Submit';
    submitNew.addEventListener('click', (e) => {
        e.preventDefault;
        projPopup.remove();
        createProject(input.value);
    })
}

//delete projects popup
function delProjPopup() {
    const delProjPopup = document.createElement('div');
    delProjPopup.textContent = 'Which project do you want to delete?';
    let dropdown = document.createElement('select');
    delProjPopup.appendChild(dropdown);
    delProjPopup.id = 'delProjPopup';
    content.appendChild(delProjPopup);
    const close = delProjPopup.appendChild(document.createElement('button'));
    close.textContent = 'close popup';
    close.addEventListener('click', () => {
        delProjPopup.remove();
})
    projects.forEach(project => {
        let option = document.createElement('option');
        option.textContent = project;
        option.value = project;
        dropdown.appendChild(option);
})
const submitDel = delProjPopup.appendChild(document.createElement('button'));
    submitDel.textContent = 'Submit';
    submitDel.addEventListener('click', (e) => {
        e.preventDefault;
        delProjPopup.remove();
        deleteProject(dropdown.value);
    }); 
};

//call local storage on page refresh
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
                newItem(item.title, item.project, item.complete);
            })
            console.log(projects);
            console.log(items);
        }
     }   
 };



    
        
          
      