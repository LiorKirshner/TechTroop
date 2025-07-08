//ex1
function age_check(age) {
  return age >= 20;
}
//console.log("old enough to vote ? "+age_check(20));

//ex2
function grade_classification(grade) {
  if (grade < 60 && grade >= 0) return "F";
  else if (grade < 70) return "D";
  else if (grade < 80) return "C";
  else if (grade < 90) return "B";
  else if (grade < 100) return "A";
  else return "wrong input";
}
//console.log(grade_classification(155));

//ex5
function calculateDiscount(customerType, purchaseAmount, dayOfWeek) {
  return customerType === "vip"
    ? 0.2
    : customerType === "premium"
    ? dayOfWeek === 0 || dayOfWeek === 6
      ? 0.15
      : 0.1
    : customerType === "regular"
    ? purchaseAmount > 100
      ? 0.1
      : purchaseAmount > 50
      ? 0.05
      : 0
    : 0;
}

// 🔍 דוגמה לשימוש:
const customerType = "regular";
const purchaseAmount = 120;
const dayOfWeek = 1; // Monday

const discount = calculateDiscount(customerType, purchaseAmount, dayOfWeek);
console.log(`Discount: ${discount * 100}%`);




//ex6
function leap_year_calc(year) {
  if (year % 4 != 0) return false;
  if (year % 100 == 0 && year % 400 != 0) return false;
  return true;
}
//console.log(leap_year_calc(2024));
