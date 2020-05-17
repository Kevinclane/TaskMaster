import { generateId } from "../utils.js";

export default class List {
  constructor(data) {

    this.listName = data.listName
    this.listItems = data.listItems || []
    this.color = data.color
    this.id = data.id || generateId();
  }

  get Template() {
    return /*html*/`
    <div class="col-12 col-md-4 my-3">
    <div class="card  box-shadow">
      <div class="card-header text-center bg-${this.color} m-3 d-flex flex-end box-shadow">
        <span>
        ${this.listName}
        </span>
        <span class="ml-35">
        <button onclick="app.listController.deleteList('${this.id}')" class="btn btn-secondary btn-sm">Delete</button>
        </span>
        </div>
      <ul class="list-group list-group-flush">
      ${this.ListItemsTemplate}
       
      </ul>
      <form onsubmit="app.listController.addListItem(event, '${this.id}')">
        <div class="row m-3">
          <div class = "col-8">
            <input type="text" class="form-control" name="newListItem" placeholder="List Item">
          </div>  
          <div class="col-4">
            <button type="submit" class="btn btn-success">Add to list</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  `
  }

  get ListItemsTemplate() {
    let template = ""
    this.listItems.forEach((item, index) => {
      template += /*html*/`
      <li class="list-group-item listItemsSpacing">
      <span>
        <input type="checkbox" aria-label="Checkbox for following text input">
        ${this.listItems[index]}
      </span>
      <span>
        <button class="btn btn-danger" onclick="app.listController.deleteItem('${this.id}', ${index})">Del</button>
      </span>
    </li>
      `
    })
    return template
  }
}
