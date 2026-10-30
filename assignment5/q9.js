function PersonProto(name) {
  this.name = name;
}

PersonProto.prototype.printName = function () {
  console.log("Name: " + this.name);
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}

StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;

StudentProto.prototype.printBranch = function () {
  console.log("Branch: " + this.branch);
};

class Person {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log("Name: " + this.name);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  printBranch() {
    console.log("Branch: " + this.branch);
  }
}

const protoStudent = new StudentProto("Utkarsh", "Computer Engineering");
const classStudent = new Student("Utkarsh", "Computer Engineering");

console.log("Prototype version:");
protoStudent.printName();
protoStudent.printBranch();

console.log("Class version:");
classStudent.printName();
classStudent.printBranch();

console.log(classStudent instanceof Student);
console.log(classStudent instanceof Person);
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype);
