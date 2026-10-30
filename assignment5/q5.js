function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log("Name: " + this.name);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
  console.log("Branch: " + this.branch);
};

Student.prototype.printDetails = function () {
  this.printName();
  this.printBranch();
};

const student = new Student("Utkarsh", "Computer Engineering");

student.printDetails();

console.log(student instanceof Student);
console.log(student instanceof Person);
console.log(Object.getPrototypeOf(student) === Student.prototype);
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype);
