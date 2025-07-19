class Person {
  constructor(name = null, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }

  //method overriding!
  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course);
    }
  }

  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }
}

class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(startYear);
    this.salary = salary;
    this.name = "Professor " + name;
    this.courses = {};
  }

  giveGrade(student, courseName, grade) {
    student.receiveGrade(courseName, grade);
  }
  //method overriding!
  addCourse(courseName) {
    this.courses[courseName] = (this.courses[courseName] || 0) + 1;
  }
}

const t1 = new Teacher("Cassandra", 2002, 40000);
t1.addCourse("Algebra II");
t1.addCourse("Algebra II");
t1.addCourse("Trigonometry");
console.log(t1.courses); //should print {Algebra II: 2, Trigonometry: 1}
