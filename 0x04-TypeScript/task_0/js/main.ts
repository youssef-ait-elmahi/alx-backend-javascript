// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
let student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

let student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Los Angeles",
};

// Create an array to hold the students
let studentsList: Student[] = [student1, student2];

// Use Vanilla JavaScript to render a table
let table: HTMLTableElement = document.createElement("table");
studentsList.forEach((student) => {
  let row: HTMLTableRowElement = table.insertRow();
  let cell1: HTMLTableCellElement = row.insertCell();
  let cell2: HTMLTableCellElement = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});
document.body.appendChild(table);
