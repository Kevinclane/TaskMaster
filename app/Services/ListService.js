import List from "../Models/List.js";
import _store from "../store.js"
//Public
class ListService {
  deleteList(id) {
    let index = _store.State.lists.findIndex(l => l.id == id)
    _store.State.lists.splice(index, 1)
    _store.saveState()
  }

  //THIS IS BROKEN AF
  deleteItem(listId, itemIndex) {
    let list = _store.State.lists.find(l => l.id == listId)
    list.listItems.splice(itemIndex, 1)
    _store.saveState()
  }
  addList(rawList) {
    let list = new List(rawList)
    _store.State.lists.push(list)
    _store.saveState()
  }

  addItem(newItem, id) {
    let index = _store.State.lists.findIndex(l => l.id == id)
    let itemStr = newItem.toString()
    _store.State.lists[index].listItems.push(itemStr)
    _store.saveState()
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
