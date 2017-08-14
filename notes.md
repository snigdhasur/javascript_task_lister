// ELEMENT.REMOVE()
// We can just call remove() on the element itself:
// ul.remove()
// ul.removeChild(ul.querySelector('li:nth-child(2)'))

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