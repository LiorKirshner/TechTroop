//write your code here to make the tests pass

class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }
  work(office) {
    for (let i = 1; i <= 10; i++) {
      office.documents.push(new Document(this.name));
    }
  }
}

class Manager {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  // pushes a new employee to the employees array
  hireEmployee(name) {
    this.employees.push(new Employee(name));
  }

  // invokes the employees Work function
  askEmployeesToWork(office) {
    for (let employer of this.employees) {
      employer.work(office);
    }
  }
}

class Cleaner {
  constructor(name) {
    this.name = name;
  }
  clean() {
    console.log("Clean");
  }
}

class Office {
  constructor() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
  }
  hireManager(manager) {
    this.managers.push(new Manager(manager));
  }
  hireCleaner(cleaner) {
    this.cleaners.push(new Cleaner(cleaner));
  }
  startWorkDay() {
    this.managers.forEach((manager) => {
      manager.askEmployeesToWork(this);
    });
  }
}
