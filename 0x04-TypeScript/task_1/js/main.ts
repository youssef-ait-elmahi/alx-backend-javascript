interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Assign the printTeacher function to a variable that has the printTeacherFunction type
let printTeacherTyped: printTeacherFunction = printTeacher;

console.log(printTeacherTyped("John", "Doe")); // Outputs: J. Doe

// Define the interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Define the interface for the class
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Define the StudentClass
class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Assign the StudentClass to a variable that has the StudentConstructor type
let Student: StudentConstructor = StudentClass;

let student = new Student("John", "Doe");
console.log(student.workOnHomework()); // Outputs: Currently working
console.log(student.displayName()); // Outputs: John
