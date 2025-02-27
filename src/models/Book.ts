export class Book{
    constructor(public title:string, public author: string  ){}
    toString(): string {
        return `📖 Title: ${this.title}, Author: ${this.author}`;
      }
}