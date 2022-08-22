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



