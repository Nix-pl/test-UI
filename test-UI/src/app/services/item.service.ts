import {Injectable} from "@angular/core";
import {Item} from "../classes/item";

@Injectable()
export class ItemService{

  nextId: number;

  constructor() {
    let items = this.getItems();

    if (items.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = items[items.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  addItem(text: string){
    let item = new Item(this.nextId, text);
    let items = this.getItems();
    items.push(item);

    this.setLocalStorageItems(items);
    this.nextId++;
  }

  getItems(): Item[] {
    let locatStorageItem = JSON.parse(localStorage.getItem('items'));
    return locatStorageItem == null ? [] : locatStorageItem.items;
  }

  deleteItem(id: number){
    let items = this.getItems();
    items = items.filter((item)=> item.id != id);
    this.setLocalStorageItems(items);
  }

  setLocalStorageItems(items: Item[]) {
    localStorage.setItem('items', JSON.stringify({items: items}));
  }

}
