import {Injectable} from "@angular/core";
import {Item} from "../classes/item";

@Injectable()
export class ItemService{

  items: Item[];
  nextId: number;

  constructor() {
    this.items = [
      new Item(0, "First Item"),
      new Item(1, "Second Item"),
      new Item(2, "Third Item")
    ];

    this.nextId = 3;
  }

  addItem(text: string){
    let item = new Item(this.nextId, text);
    this.items.push(item);
    this.nextId++;
  }

  getItems(): Item[] {
    return this.items;
  }

  deleteItem(id: number){
    this.items = this.items.filter((item)=> item.id !== id);
  }

}
