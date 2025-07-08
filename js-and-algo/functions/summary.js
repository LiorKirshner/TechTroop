//ex1
const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};

const getAge = function(age) {
    if (age < 21 ) return "Underage";
    else if (age > 55) return "55+";
    else return age;
}
const cityCountry = function(city,country){
    return (""+city+", "+country);
}

const capitalizeProfession = function(profession) {
    return capitalize(profession);    
}
const capitalizeCatchphrase = function(text) {
    const tex = capitalize(text);
    return ('"' +tex+'"');
}

const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is an ${getAge(person.age)} ` ;//Yes - you can put a function call inside the tick quotes!
    summary += capitalizeProfession(person.country); //call function for profession
    summary += cityCountry(person.city, person.country);//call function for country + city
    summary += `${person.name} love to say ${capitalizeCatchphrase(person.catchphrase)}`;//call function for catchphrase
    return summary
  }

  console.log(getSummary(people_info[2]));
