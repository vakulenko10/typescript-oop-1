export enum Subject {
    MATH = "Math",
    SCIENCE = "Science",
    HISTORY = "History",
    ENGLISH = "English",
  }
  
  export class Student {
    private grades: Map<Subject, number[]> = new Map();
    private static gradebook: Map<string, number> = new Map();
  
    constructor(public lastName: string) {
      Student.gradebook.set(lastName, 0); // Initialize gradebook entry
    }
  
    insertGrade(subject: Subject, grade: number): void {
      if (!this.grades.has(subject)) {
        this.grades.set(subject, []);
      }
      this.grades.get(subject)?.push(grade);
      this.updateAverage(); // ✅ Ensures gradebook is updated after each change
    }
  
    private updateAverage(): void {
      let totalSum = 0;
      let totalCount = 0;
  
      this.grades.forEach(grades => {
        totalSum += grades.reduce((sum, g) => sum + g, 0);
        totalCount += grades.length;
      });
  
      const newAverage = totalCount > 0 ? totalSum / totalCount : 0;
      Student.gradebook.set(this.lastName, newAverage); // ✅ Updates gradebook entry
    }
  
    getAverage(): number {
      return Student.gradebook.get(this.lastName) || 0;
    }
  
    static printGradebook(): void {
      console.log("📜 Gradebook:");
      Student.gradebook.forEach((average, lastName) =>
        console.log(`${lastName}: ${average.toFixed(2)}`)
      );
    }
  
    static getAverageGrade(lastName: string): number | null {
      return Student.gradebook.get(lastName) || null;
    }
  
    toString(): string {
      return `Student: ${this.lastName}, Average: ${this.getAverage().toFixed(2)}`;
    }
  }
  