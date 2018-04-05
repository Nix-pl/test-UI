import { Component, OnInit, Input } from '@angular/core';
import {ItemService} from "../services/item.service";
import {Item} from "../classes/item";


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() item: Item;


  constructor(private itemService: ItemService ) { }

  ngOnInit() {
  }

  deleteItem(){
    this.itemService.deleteItem(this.item.id);
  }

}
