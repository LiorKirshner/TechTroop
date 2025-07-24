let posts = [];

function render() {
  const container = document.getElementById("posts-container");
  container.innerHTML = ""; // מנקה לפני הרינדור

  for (let i = 0; i < posts.length; i++) {
    const post = document.createElement("div");
    post.classList.add("post-show");
    post.innerHTML = `<strong>${posts[i].name}:</strong> ${posts[i].text}`;
    post.addEventListener("click", function () {
      posts.splice(i, 1); // הסר את הפוסט מהמערך
      render(); // רנדר מחדש
    });
    container.appendChild(post);
  }
}

document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // מונע רענון הדף

    const name = document.getElementById("name").value.trim();
    const text = document.getElementById("post").value.trim();

    if (name && text) {
      posts.push({ name, text });
      render();
      // נקה את השדות
      document.getElementById("name").value = "";
      document.getElementById("post").value = "";
    }
  });
