import ListService from "../Services/ListService.js";
import _store from "../store.js"

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

  submitForm(event) {
    let formData = event.target
    event.preventDefault()
    let rawList = {
      listName: formData.name.value,
      color: formData.color.value
    }
    ListService.addList(rawList)
    formData.reset()
    _drawLists()
  }

  addListItem(event, id) {
    let formData = event.target
    event.preventDefault()
    let newItem = formData.newListItem.value
    ListService.addItem(newItem, id)
    _drawLists()
  }

  deleteItem(listId, index) {
    if (window.confirm("Delete this item from your list?")) {
      ListService.deleteItem(listId, index)
      _drawLists()
    }
  }

  deleteList(id) {
    if (window.confirm("Are you sure you want to delete this list?")) {
      ListService.deleteList(id)
      _drawLists()
    }
  }
}
