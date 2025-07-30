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
      //If user doesn't exist, don't attempt to fetch posts.
      throw new Error("User not found");
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

async function createDashboardSummary() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
        res.json()
      ),
    ]);

    // סיכום כללי
    const summary = {
      totalUsers: users.length,
      totalPosts: posts.length,
      totalComments: comments.length,
      avgPostsPerUser: +(posts.length / users.length).toFixed(2),
      avgCommentsPerPost: +(comments.length / posts.length).toFixed(2),
    };

    // מפות עזר
    const postCommentsMap = {};
    comments.forEach((comment) => {
      postCommentsMap[comment.postId] =
        (postCommentsMap[comment.postId] || 0) + 1;
    });

    // topUsers
    const topUsers = users
      .map((user) => {
        const userPosts = posts.filter((p) => p.userId === user.id);
        const postCount = userPosts.length;
        const commentCount = userPosts.reduce(
          (sum, post) => sum + (postCommentsMap[post.id] || 0),
          0
        );
        return { name: user.name, postCount, commentCount };
      })
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    // recentPosts
    const recentPosts = posts.sort((a, b) => b.id - a.id).slice(0, 5);

    // תוצאה סופית
    $("#getUserById").append(`
      <div>
        <h3>📊 Summary</h3>
        <p>Total Users: ${summary.totalUsers}</p>
        <p>Total Posts: ${summary.totalPosts}</p>
        <p>Total Comments: ${summary.totalComments}</p>
        <p>Avg Posts per User: ${summary.avgPostsPerUser}</p>
        <p>Avg Comments per Post: ${summary.avgCommentsPerPost}</p>

        <h3>👑 Top Users</h3>
        <ul>
          ${topUsers
            .map(
              (u) =>
                `<li>${u.name} - ${u.postCount} posts, ${u.commentCount} comments</li>`
            )
            .join("")}
        </ul>

        <h3>🆕 Recent Posts</h3>
        <ul>
          ${recentPosts
            .map((p) => `<li><strong>${p.title}</strong></li>`)
            .join("")}
        </ul>
      </div>
    `);
    return {
      summary,
      topUsers,
      recentPosts,
    };
  } catch (error) {
    console.error("Failed to build dashboard:", error.message);
    return null;
  }
}
