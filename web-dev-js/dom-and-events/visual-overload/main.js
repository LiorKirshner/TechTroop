const container = document.getElementById("container");
const colors = ["blue", "green", "yellow", "red", "orange", "purple"];

for (let i = 0; i < 5; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");

  box.onclick = function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
  };
  container.appendChild(box);
}
