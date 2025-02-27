import { Book } from "./Book";
import { Reader } from "./Reader";

export class Library {
  private bookList: Book[] = [];
  private readerList: Reader[] = [];

  addBook(book: Book): void {
    this.bookList.push(book);
  }

  addReader(reader: Reader): void {
    this.readerList.push(reader);
  }

  findBooks(title: string): Book[] {
    return this.bookList.filter(book => book.title === title);
  }

  findReaders(lastName: string): Reader[] {
    return this.readerList.filter(reader => reader.lastName === lastName);
  }

  removeBook(title: string): void {
    const books = this.findBooks(title);
    if (books.length === 1) {
      this.bookList = this.bookList.filter(book => book.title !== title);
      console.log(`Removed book: ${title}`);
    } else {
      console.log(`Book "${title}" was not removed (multiple copies exist).`);
    }
  }

  removeReader(lastName: string): void {
    const readers = this.findReaders(lastName);
    if (readers.length === 1) {
      this.readerList = this.readerList.filter(reader => reader.lastName !== lastName);
      console.log(`Removed reader: ${lastName}`);
    } else {
      console.log(`Reader "${lastName}" was not removed (multiple readers with this name exist).`);
    }
  }

  displayBooks(): void {
    console.log(" Book Collection:");
    this.bookList.forEach(book => console.log(book.toString()));
  }

  displayReaders(): void {
    console.log("Readers List:");
    this.readerList.forEach(reader => console.log(reader.toString()));
  }
}
