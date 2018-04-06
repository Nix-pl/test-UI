import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id: number;
  commentText = '';

  constructor(private route: ActivatedRoute,
              private itemService: ItemService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.id = +params['id'];
    })

  }

  onKeyUp(event){
    if ((event.code === 'Enter' || event.code ==='NumpadEnter') && event.ctrlKey) {
      this.commentText = event.target.value;
    this.itemService.addComment(this.commentText);
    }



  }

}
