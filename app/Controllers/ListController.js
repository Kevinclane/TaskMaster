import ListService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = _store.State.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  submitForm(event) {
    event.preventDefault()
    let rawList = {
      name: event.target.name.value,
      color: event.target.color.value
    }
    ListService.addList(rawList)
    event.target.form.reset()
    _drawLists()
  }
}
