import { Person } from "./Person";

export class PeopleRegistry{
    private people: Person[] = [];
    addPerson(person: Person){
        this.people.push(person)
    }
    deletePerson(person: Person):void{
        this.people.filter((p)=>!person.equals(p))
    }
    display(){
        console.log('lista'+ this.people.map((person)=>person.toString()))
    }

    findByLastname(lastname:string){
        return this.people.find((p)=> p.lastname=lastname)
    }
    static minAge(people: Person[]): number | null {
        if (people.length === 0) return null;
        return Math.min(...people.map(p => p.age));
      }
    
      static maxAge(people: Person[]): number | null {
        if (people.length === 0) return null;
        return Math.max(...people.map(p => p.age));
      }
    
      static averageAge(people: Person[]): number | null {
        if (people.length === 0) return null;
        const sum = people.reduce((acc, p) => acc + p.age, 0);
        return sum / people.length;
      }
      
}