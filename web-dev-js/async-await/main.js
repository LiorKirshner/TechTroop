//Convert the function to use async/await syntax
//Use try/catch for error handling
//Maintain the same functionality (logging and return values)
//Test with both valid (1-10) and invalid (999) user IDs

// Given Promise-based code:
const getUserById = async function (userId) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("User not found");
    }
    const user = await response.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    $("#getUserById").append(
      `<div>Found user: ${user.name} (${user.email})</div>`
    );
    return user.Id;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
};
