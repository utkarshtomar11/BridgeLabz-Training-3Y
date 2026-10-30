function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function () {
  console.log("I am " + this.name);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
  console.log("Department: " + this.department);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function () {
  console.log(this.name + " teaches " + this.subject);
};

const professor = new Professor("Dr. Kumar", "Computer Engineering", "JavaScript");

professor.introduce();
professor.showDepartment();
professor.teach();

console.log(professor instanceof Professor);
console.log(professor instanceof Faculty);
console.log(professor instanceof Person);
