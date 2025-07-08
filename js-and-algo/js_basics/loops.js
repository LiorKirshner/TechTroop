//ex1
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
  people.push({ name: names[i], age: ages[i] });
}
console.log(people);

//ex2
for (let person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

//ex3
// const posts = [
//   { id: 1, text: "Love this product" },
//   { id: 2, text: "This is the worst. DON'T BUY!" },
//   { id: 3, text: "So glad I found this. Bought four already!" },
// ];

// console.log(posts);
// for (let i = 0; i < posts.length; i++) {
//   if (posts[i].id === 2) {
//     posts.splice(i, 1); // מוחק את הפוסט עם id 2
    
//   }
// }
// console.log(posts);


//ex4
const posts = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];
 /*
for (let post of posts){
    if (post.id != 2) continue;
    for (let com in post.comments) {
        if (post.comments[com].id == 3 ) post.comments.splice(com,1);
    }     
}
    */
   
for (let i = 0; i < posts.length; i++) {
  if (posts[i].id === 2) {
    for (let j = 0; j < posts[i].comments.length; j++) {
      if (posts[i].comments[j].id === 3) {
        posts[i].comments.splice(j, 1);
        break; // עצירה אחרי שמצאנו ומחקנו
      }
    }
  }
}
console.log(posts);



const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

let keys =Object.keys(dictionary);
for (const key of keys){
    console.log(" ");
    console.log("Word that begin with "+key+":");
    for (const word of dictionary[key]) {
      console.log(word);

    }
    
}

