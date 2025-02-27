export class Reader {
    constructor(public lastName: string) {}
  
    toString(): string {
      return `👤 Reader: ${this.lastName}`;
    }
  }
  