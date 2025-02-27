export class Person {
    constructor(public name: string, public lastname: string, public age: number) {}
  
    toString(): string {
      return `Name: ${this.name}, Lastname: ${this.lastname}, Age: ${this.age}`;
    }
  
    equals(other: Person): boolean {
      return this.name === other.name && this.lastname === other.lastname && this.age === other.age;
    }
  }
  