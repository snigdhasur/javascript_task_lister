// view based class - how to render an element / group of elements
class TaskForm {
    static render() {
        const lists = List.all().filter(list=> list.appear === true).map(list => `<option value=${list.id}>${list.name}</option>`).join('')
        return `
        <form id=task-form>
            <label for="add-task">add a task</label><br>
            <select id="all-task-list-options"> ${lists} </select>
            <input id="add-task-description" type="text" placeholder="enter your task here">
            <label for="add-task">priority</label>
            <select id="add-task-priority">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button type="submit">add (+)</button>
            </form>
            `
    }
} 