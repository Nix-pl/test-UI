import {Injectable} from "@angular/core";

@Injectable()
export class CommentService{
  comments = [
    {
      id: 1,
      text: 'comment1'
    },
    {
      id: 2,
      text: 'comment2'
    },
    {
      id: 3,
      text: 'comment3'
    }
  ]
}
