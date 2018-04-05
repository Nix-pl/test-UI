import { Component, OnInit } from '@angular/core';
import {ItemService} from "../services/item.service";
import {Item} from "../classes/item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemsText: string = '';
  warning: string = '';

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  addItems(){
    if(this.itemsText.length !== 0) {
      this.itemService.addItem(this.itemsText);
      this.itemsText = '';
      this.warning = '';
    } else {
      this.warning = 'Enter type plz'
    }
  }

}
