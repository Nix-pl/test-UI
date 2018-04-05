import { Component, OnInit } from '@angular/core';
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemsText: string = '';
  warningMsg: string = '';

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  addItems(){
    if(this.itemsText.length !== 0) {
      this.itemService.addItem(this.itemsText);
      this.itemsText = '';
      this.warningMsg = '';
    } else {
      this.warningMsg = 'Write something, please'
    }
  }

}
