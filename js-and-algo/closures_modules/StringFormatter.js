const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    //capitalizeFirst - receives a string and returns the string with the first letter uppercased, and the next ones lowercased
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  const toSkewerCase = function (str) {
    //toSkewerCase - receives a string and replaces all spaces with hyphens
    return str.replace(" ", "-");
  };
  return {
    capitalizeFirst,
    toSkewerCase,
  };
};

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box")); //should return blue-box
