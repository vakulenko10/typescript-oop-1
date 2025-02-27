export class Song {
    constructor(public title: string, public author: string) {
        this.title = title;
        this.author = author;
    }
    toString(): string {
      return `${this.title}`;
    }
  }
  