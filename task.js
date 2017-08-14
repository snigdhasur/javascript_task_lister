const Task = (function createTask() {
  let all = []
  let idCounter = 0

  return class Task {

    constructor(description, priority, listId) {
      this.name = description
      this.priority = priority
      this.id = ++idCounter
      this.listId = parseInt(listId)
      all.push(this)
    }
   

    render(){
      return `
        <li id=task_${this.id}>
          ${this.name} | priority: ${this.priority}
          <button class=taskDeleteButton id=delete_task_${this.id} type=button value=task_${this.id}> [X] </button>
        </li>
      `
    }


    static all() {
      return all
    }


    static renderListTasks(listId) {
      const tasksHTML = this.all().filter(task => task.listId === listId).map(task => task.render()).join("")
      // returning a group of divs with list names in them 
      return `
        <div>
          ${tasksHTML}
        </div>
      `
    }


  }
})()