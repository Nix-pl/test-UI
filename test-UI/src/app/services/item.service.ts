import {Injectable} from "@angular/core";
import {Item} from "../classes/item";
import {CommentContent} from "../classes/comment";
import {Comment} from "@angular/compiler";

@Injectable()
export class ItemService{

  private nextId: number;
  // items: Item[];
  array: CommentContent[];

  constructor() {

    // this.items = [
    //   new Item(0, "1", [new CommentContent(1, 'first comment'), new CommentContent(2, 'second comment')]),
    //   new Item(2, "2", [new CommentContent(3, 'third comment')])
    // ];

    let items = this.getItems();

    if (items.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = items[items.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  public addItem(text: string){
    let item = new Item(this.nextId, text, []);
    let items = this.getItems();
    items.push(item);

    this.setLocalStorageItems(items);
    this.nextId++;
  }

  public getItems(): Item[] {
    let locatStorageItem = JSON.parse(localStorage.getItem('items'));
    return locatStorageItem == null ? [] : locatStorageItem.items;
   }

  public deleteItem(id: number){
    let items = this.getItems();
    items = items.filter((item)=> item.id != id);
    this.setLocalStorageItems(items);
  }

  private setLocalStorageItems(items: Item[]) {
    localStorage.setItem('items', JSON.stringify({items: items}));
  }

  public addComment(text: string){
    let comment = new CommentContent(this.nextId, text);
    console.log(comment);
    let items = this.getItems();
    // items.push(comment)
  }

}
