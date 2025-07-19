class Person {
  constructor(name, startYear) {
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

  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }
}
class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(name, startYear);
    this.salary = this.salary;
  }
  giveGrade(student, courseName, grade) {
    student.receiveGrade(courseName, grade);
  }
}

const s1 = new Student("Ronda", 2017);
const t1 = new Teacher("Cassandra", 2002, 40000);

t1.giveGrade(s1, "Algebra II", 82);
const firstGrade = s1.grades[0];

console.log(
  `${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`
);
//above should print "Ronda received an 82 in Algebra II"
