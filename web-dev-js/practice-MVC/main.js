let posts = [];

const container = document.getElementById("posts-container");

function render(posts) {
  for (let i = 0; i < posts.length; i++) {
    const post = document.createElement("div");
    post.setAttribute("class", "post");
    post.innerHTML = `<strong>${posts[i].name}:</strong> ${posts[i].text}`;

    container.appendChild(post);
  }
}

on Event