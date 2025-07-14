function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // ?
getUserData({ firstName: "Melissa" }); // ?
getUserData({}); // ?

//alejan , purple
//mel, green
