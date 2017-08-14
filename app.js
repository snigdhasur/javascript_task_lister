// this is the js

// form>
// 		<label for="add-list">add a list</label>
// 		<input type="text" name="" value="" id="add-list">
// 		<input type="submit" value="add (+)">
// 	</form>
// this label for when you click on the label points you to input area

// do this to make sure it's connected

// two solutions to make sure page loads when you do debugger
// move script src to last item in body
// OR listen for an even twhen teh page is finished loading

// list can be a <ul>
// task can be an <li>
// look more into HTML elements and semantic HTML 
// there a way to not have HTML stirng in your Javascript - Handlebars
// <script id="task-template" type="handlebars-template">
//   <li id ={{task.id}} >
//      {{task.description}}
// </li>
// <script>

// innerHTML is fastest way to add stuff to page 


// document.getElementById('id') ??one elemnt
// document.getElementByClassName('class') //multiple
// document.getELementsByTagName('p') // multiple
// document.querySelector('#id-1') // one
// document.querySelectorAll('.class') //multiple

// Attribuets, eelements, node (<a href="google.com">Google</a>)
// attribute --> href (anything before =)
// element
// node

// Organizing code
// MVC
//    Controller = Our event handler -- callback to our event listener function call
//        >> 
//    Models - our javascript classes
//    Views - the HTML / here the views are tied to our models


// Organizing code
// page title <h1>
// list form --> when I add a new list - display a task form  <form>

// display newly created list 

// task from: takes associated list, a description, prioroity level
// on submit: add this task to the associated list 

// list of lists --> show each list
// list: be able to delete it, show title, be able to delete list; be able to delete a task 


// h1(title)
// form(list)
//  input(list-title)
//  button[type="submit"] (list-submit)
//    display a task form
//    display a newly created list
// render created List
// form(task)
//  select options [task-list]
//  input [task-description]
//  input [task-priority]
//  button [type="submit"] (task-create) [event]
      // add this task to the associated list 
      // create new task with those properties
// ul (lists)
  // li ul(list)
//      li show title

        // be able to delete it 
        // be able to delete task

document.addEventListener('DOMContentLoaded', function(){
	// console.log("I'm on the page")
	// don't start application until html has loaded!
  // (Prevent default)
  // Grab some user input
  // Create/update model/class do a network request
  // Render/display the update
  // Is that what the controller does? --> YEP SIMILAR TO A CONTROLLER
  // route is user input
	let formEl = document.getElementById('add-form')
	formEl.addEventListener('submit', function(event) {
		event.preventDefault()
		let listName = document.getElementById('add-list')
		console.log(listName.value)
		new List(listName.value)



    // const taskFormTemplate = newTaskForm().render()
    // const taskForm = document.getElementById('task-form')
    // taskForm.innerHTML = taskFormTemplate



		const allListsHTML = List.renderAll()
		const parentEl = document.getElementById('all-lists')
		parentEl.innerHTML = allListsHTML
		const allListOptions = List.renderAllOptions()
		const taskForm = document.getElementById('all-task-list-options')
		taskForm.innerHTML = allListOptions


    List.all().filter(list=> list.appear === true).forEach(list => {  
         let allTasks = Task.renderListTasks(list.id)
         let correctListDiv = document.getElementById(`list_${list.id}`)
         correctListDiv.innerHTML = allTasks

      }
    )

    let listButtons = document.querySelectorAll('button')
    listButtons.forEach(button => button.addEventListener('click', function(){
      let deleteList = document.getElementById(`main_${this.value}`) 
      let foundList = List.all()[parseInt(this.value.slice(5, this.value.length))-1]
      foundList.appear = false 
      deleteList.remove()
      const allListOptions = List.renderAllOptions()
      const taskForm = document.getElementById('all-task-list-options')
      taskForm.innerHTML = allListOptions
    }))




	})

	let taskFormEl = document.getElementById('add-task-form')
	taskFormEl.addEventListener('submit', function(event) {
		event.preventDefault()
		let taskName = document.getElementById('add-task-description')
		let taskPriority = document.getElementById('add-task-priority')
		let taskList = document.getElementById('all-task-list-options')
		console.log(taskName.value)
		console.log(taskPriority.value)
		console.log(taskList.value)


		new Task(taskName.value, taskPriority.value, taskList.value)

    List.all().filter(list=> list.appear === true).forEach(list => {  
         let allTasks = Task.renderListTasks(list.id)
         let correctListDiv = document.getElementById(`list_${list.id}`)
         correctListDiv.innerHTML = allTasks

      }
    )

    // for (let i = 0; i < List.all().filter(list => list.appear === true).length; i++) {
    //   let allTasks = Task.renderListTasks(i+1)
    //   let correctList = document.getElementById(`list_${this.id}`)
    //   correctList.innerHTML = allTasks
    // }

    let allButtons = document.querySelectorAll('button')
    allButtons.forEach(button => button.addEventListener('click', function(){
      let deleteTask = document.getElementById(`${this.value}`) 
      let foundTask = Task.all()[parseInt(this.value.slice(5, this.value.length))-1]
      foundTask.listId = 0
      deleteTask.remove()
    }))



	})




})


// ELEMENT.REMOVE()
// We can just call remove() on the element itself:
// ul.remove()
// ul.removeChild(ul.querySelector('li:nth-child(2)'))


const List = (function createList() {
  let all = []
  let idCounter = 0

  return class List {

    constructor(name) {
      this.name = name
      this.id = ++idCounter
      this.appear = true
      all.push(this)
    }
   

    render(){
    	return `
    		<div id=main_list_${this.id}>
    			<h4>${this.name} 
            <button id=delete_list_${this.id} type=button value=list_${this.id}> [X] </button>
          </h4>
          <ul id=list_${this.id}>
          </ul>
    		</div>
    	`
    }


    renderOption(){
    	return `
    			<option value=${this.id}>${this.name}</option>
    	`
    }

    static renderAllOptions() {
    	const allOptionsHTML = this.all().filter(list => list.appear === true).map(option => option.renderOption()).join("")
    	// returning a group of divs with list names in them 
    	return `
    			${allOptionsHTML}
    	`
    }


    static all() {
      return all
    }


    static renderAll() {
    	const allListsHTML = this.all().filter(list => list.appear === true).map(list => list.render()).join("")
    	// returning a group of divs with list names in them 
    	return `
    		<div>
    			${allListsHTML}
    		</div>
    	`
    }




  }
})()


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
          <button id=delete_task_${this.id} type=button value=task_${this.id}> [X] </button>
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

// view based class - how to render an element / group of elements
// class TaskForm{
//   render() {
//     const lists = List.all().map(list => `<option value=${list.id}>${list.name}</option>`).join("")
//     return `
//       <form id="add-task">
//         <select id="task-lists">${lists}</select>
//         <input id="task-title" type="text">
//         <input id="task-priority" type="text">
//         <button type="submit">Add Task</button>
//         </form>
//     `
//   }
// }
