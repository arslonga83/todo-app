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


export let projects = ['Default project'];
export let items = [];