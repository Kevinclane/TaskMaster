import { generateId } from "../utils.js";

export default class List {
  constructor(data) {

    this.listName = data.listName
    this.listItems = data.listItems || []
    this.color = data.color
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return /*html*/`
    <div class="col-4">
    <div class="card">
      <div class="card-header text-center bg-${this.color}">
        ${this.listName}
      </div>
      <ul class="list-group list-group-flush">
        ${this.ListItemsTemplate}
      </ul>
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
        Vestibulum at eros
      </span>
      <span>
        <button class="btn btn-danger" onclick="deleteItem(id)">Del</button>
      </span>
    </li>
      `
    })
    return template
  }
}
