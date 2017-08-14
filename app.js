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


    const taskFormTemplate = TaskForm.render()
    const taskFormContainerEl = document.getElementById('add-task-form')
    taskFormContainerEl.innerHTML = taskFormTemplate




// FORMER CODE
		// const allListOptions = List.renderAllOptions()
		// const taskForm = document.getElementById('all-task-list-options')
		// taskForm.innerHTML = allListOptions


    List.all().filter(list=> list.appear === true).forEach(list => {  
         let allTasks = Task.renderListTasks(list.id)
         let correctListDiv = document.getElementById(`list_${list.id}`)
         correctListDiv.innerHTML = allTasks

      }
    )

    let listButtons = document.querySelectorAll('.listDeleteButton')
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

    let allButtons = document.querySelectorAll('.taskDeleteButton')
    allButtons.forEach(button => button.addEventListener('click', function(){
      let deleteTask = document.getElementById(`${this.value}`) 
      debugger;
      let foundTask = Task.all()[parseInt(this.value.slice(5, this.value.length))-1]
      deleteTask.remove()
    }))


	})

})