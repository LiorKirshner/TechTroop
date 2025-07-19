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
  work() {}
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
  askEmployeesToWork(name) {
    name.work();
  }
}
