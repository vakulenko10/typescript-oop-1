
// zadanie 1
// import "./styles.css";
// import { Author } from "./models/Author";
// import { Song } from "./models/Song";

// let authors : Author[] = []

// const author1 = new Author("David Bowie");
// const author2 = new Author("Freddie Mercury");

// author1.addSong(new Song("Space Oddity", "David Bowie"));
// author1.addSong(new Song("Heroes", "David Bowie"));

// author2.addSong(new Song("Bohemian Rhapsody", "Freddie Mercury"));
// author2.addSong(new Song("We Will Rock You", "Freddie Mercury"));
// authors = [author1, author2]

// authors.forEach(author => author.display());



// zadanie 2
// import "./styles.css";
// import { Person } from "./models/Person";
// import { PeopleRegistry } from "./models/PeopleRegistry";

// const registry = new PeopleRegistry();

// const person1 = new Person("John", "Doe", 25);
// const person2 = new Person("Jane", "Doe", 30);
// const person3 = new Person("Alice", "Smith", 22);
// const person4 = new Person("Bob", "Proctor", 23);
// const person5 = new Person("Andy", "Anderson", 19);
// const person6 = new Person("Jessey", "Pinkman", 76);

// registry.addPerson(person1);
// registry.addPerson(person2);
// registry.addPerson(person3);
// registry.addPerson(person4);
// registry.addPerson(person5);
// registry.addPerson(person6);

// console.log("After adding people:");
// registry.display();

// // Find by lastname
// const foundPerson = registry.findByLastname("Doe");
// console.log(foundPerson ? `✅ Found: ${foundPerson.toString()}` : "❌ Person not found");

// // Delete a person
// registry.deletePerson(person1);

// console.log("\nAfter deleting John Doe:");
// registry.display();

// // Static methods test
// const peopleList = [person2, person3, person4, person5, person6];

// console.log(`🔹 Youngest Age: ${PeopleRegistry.minAge(peopleList)}`); // ✅ Should return 19
// console.log(`🔹 Oldest Age: ${PeopleRegistry.maxAge(peopleList)}`); // ✅ Should return 76
// console.log(`🔹 Average Age: ${PeopleRegistry.averageAge(peopleList)?.toFixed(2)}`); // ✅ Should return correct avg


// zadanie 3
// import "./styles.css";
// import { Book } from "./models/Book";
// import { Reader } from "./models/Reader";
// import { Library } from "./models/Library";

// const library = new Library();

// library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger"));
// library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger")); 
// library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
// library.addBook(new Book("1984", "George Orwell"));

// library.addReader(new Reader("Smith"));
// library.addReader(new Reader("Johnson"));
// library.addReader(new Reader("Smith"));

// console.log(" Initial Library:");
// library.displayBooks();
// library.displayReaders();

// console.log("\n Finding books by title 'The Catcher in the Rye':");
// console.log(library.findBooks("The Catcher in the Rye"));

// console.log("\n Finding readers by last name 'Smith':");
// console.log(library.findReaders("Smith"));

// console.log("\n Removing book '1984':");
// library.removeBook("1984"); 

// console.log("\n Attempting to remove 'The Catcher in the Rye':");
// library.removeBook("The Catcher in the Rye"); 


// console.log("\n Removing reader 'Johnson':");
// library.removeReader("Johnson");

// console.log("\n Attempting to remove reader 'Smith':");
// library.removeReader("Smith");

// console.log("\n Final Library:");
// library.displayBooks();
// library.displayReaders();

import "./styles.css";
import { Student, Subject } from "./models/Student";

const student1 = new Student("Smith");
const student2 = new Student("Johnson");

student1.insertGrade(Subject.MATH, 5);
student1.insertGrade(Subject.ENGLISH, 4);
student1.insertGrade(Subject.SCIENCE, 3);

student2.insertGrade(Subject.MATH, 2);
student2.insertGrade(Subject.HISTORY, 3);
student2.insertGrade(Subject.ENGLISH, 4);

console.log("\n📚 Gradebook After Adding Grades:");
Student.printGradebook();

// Add more grades to verify updates
student1.insertGrade(Subject.ENGLISH, 5);
student1.insertGrade(Subject.ENGLISH, 1);
student1.insertGrade(Subject.ENGLISH, 1);
student1.insertGrade(Subject.ENGLISH, 1);
student1.insertGrade(Subject.ENGLISH, 1);
student2.insertGrade(Subject.SCIENCE, 1);

console.log("\n📚 Gradebook After Updating:");
Student.printGradebook();
