const container = document.getElementById("container");
const colors = ["blue", "green", "yellow", "red", "orange", "purple"];

for (let i = 0; i < 3; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");

  box.onclick = function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
    checkBoxesColor(); // ← מוסיף את הבדיקה
  };
  container.appendChild(box);
}

function checkBoxesColor() {
  const boxes = document.querySelectorAll(".box");
  if (!boxes.length) return;

  const firstColor = boxes[0].style.backgroundColor;
  const allSame = [...boxes].every(
    (box) => box.style.backgroundColor === firstColor
  );

  const messageBox = document.getElementById("box-message");

  if (allSame) {
    messageBox.textContent = "🎉 Nice job! 🎉";
    messageBox.style.color = firstColor; // ← צבע דינמי
    if (firstColor === "yellow") {
      messageBox.style.color = "black";
    } else {
      messageBox.style.color = firstColor;
    }
    messageBox.classList.add("show");
  } else {
    messageBox.textContent = "";
    messageBox.classList.remove("show");
  }
}
