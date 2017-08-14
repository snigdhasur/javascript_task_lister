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
            <button class=deleteButton id=delete_list_${this.id} type=button value=list_${this.id}> [X] </button>
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