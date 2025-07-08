//ex1
// same_city();
function same_city(){
const p1 = {
    name : 'Lior',
    age : 29,
    city : 'ariel'
}
const p2 = {
  name: "Suzanna",
  age: 26,
  city: "ariebl",
}

console.log(`same age ? ${p1.age == p2.age}`);
p1.city == p2.city
  ? console.log(`${p1.name} wanted to date ${p2.name}`)
  : console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`);

}


//ex2
//library_f()
function library_f(){
  const library = {
    books: [
      { title: "Harry Potter", author: "J.K. Rowling" },
      { title: "1984", author: "George Orwell" },
      { title: "The Hobbit", author: "J.R.R. Tolkien" },
      { title: "To Kill a Mockingbird", author: "Harper Lee" },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
    ]
  } 
  console.log(library.books[0].title) ;// "Harry Potter")
}


//ex3
const reservations = {
  bob: { claimed: false },
  ted: { claimed: true }
};

function checkReservation(name) {
  const normalizedName = name.toLowerCase();

  if (reservations[normalizedName]) {
    if (reservations[normalizedName].claimed) {
      console.log("Hmm, someone already claimed this reservation");
    } else {
      console.log(`Welcome, ${name}`);
    }
  } else {
    console.log("You have no reservation.");
    reservations[normalizedName] = { claimed: true };
    console.log(`Reservation created and claimed for ${name}`);
  }
}

// דוגמאות לשימוש:
checkReservation("Bob");    // Welcome, Bob
checkReservation("TED");    // Hmm, someone already claimed this reservation
checkReservation("alice");  // You have no reservation. Reservation created...
checkReservation("AliCe");  // Hmm, someone already claimed this reservation