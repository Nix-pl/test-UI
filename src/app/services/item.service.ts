import {Injectable} from "@angular/core";
import {Item} from "../classes/item";
import {CommentContent} from "../classes/comment";

@Injectable()
export class ItemService{

  private nextId: number;
  private nextIdMsg: number;
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

  public addComment(id: number, text: string){
    // let items = this.getItems();
    // let textMsg = items.find(a=> a.id === id).text;
    // let comment = new CommentContent(this.nextId, text);
    // let item = new Item(id, textMsg, [comment]);
    // items = items.filter((item)=> item.id != id);
    // items.push(item);

    let items = this.getItems();
    let itemMsg = items.find(a=> a.id === id).text;
    let itemComment = items.find(a=> a.id === id).comments;


    // if (itemComment.length == 0) {
    //   this.nextIdMsg = 0;
    // } else {
    //   let maxId = items[itemComment.length - 1].id;
    //   this.nextIdMsg = maxId + 1;
    // }

    // let comment = new CommentContent(this.nextIdMsg, text);
    let comment = new CommentContent(text);
    itemComment.push(comment);

    let item = new Item(id, itemMsg, itemComment);

    items = items.filter((item)=> item.id != id);
    items.push(item);


    this.setLocalStorageItems(items);
    // this.nextId++

    // items.push(item[])
    // items.push(comment);

  }

}
