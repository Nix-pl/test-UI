import {CommentContent} from "./comment";

export class Item {
  id: number;
  text: string;
  comments: CommentContent[];

  constructor(id: number, text: string, comments: CommentContent[]) {
    this.id = id;
    this.text = text;
    this.comments = comments;
  }
}
