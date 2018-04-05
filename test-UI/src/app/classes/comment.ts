export class Comment {
  id: number;
  text: string;
  img: string;

  constructor(id: number, text: string, img: string) {
    this.id = id;
    this.text = text;
    this.img = img;
  }
}
