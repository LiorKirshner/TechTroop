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

// Starter code structure:
async function getUserWithPosts(userId) {
  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data
  try {
    let userData = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!userData.ok) {
      throw new Error("User not found");
      return userId;
    }

    let userPosts = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!userPosts.ok) {
      throw new Error("Posts not found");
    }

    const user = await userData.json();
    const posts = await userPosts.json();
    console.log("Combined data:", { user, posts });
    $("#getUserById").append(
      `<div><strong>${user.name}</strong> has ${posts.length} posts.</div>`
    );
    return { user, posts };
  } catch (error) {
    console.error("Error fetching :", error.message);
  }
}
