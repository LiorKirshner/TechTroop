const move = function (direction) {
  const ball = document.getElementById("ball");
  const computedStyle = window.getComputedStyle(ball);
  let index;

  switch (direction) {
    case "left":
      index = parseInt(computedStyle.left) || 0;
      index -= 15;
      ball.style.left = index + "px";
      break;
    case "right":
      index = parseInt(computedStyle.left) || 0;
      index += 15;
      ball.style.left = index + "px";
      break;
    case "up":
      index = parseInt(computedStyle.top) || 0;
      index -= 15;
      ball.style.top = index + "px";
      break;
    case "down":
      index = parseInt(computedStyle.top) || 0;
      index += 15;
      ball.style.top = index + "px";
      break;
  }
};

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.setAttribute("class", "sub-header");
subHeader.innerHTML = "by Lior ";
header.appendChild(subHeader);

const right = document.getElementById("right");
right.onclick = function () {
  move("right");
};

const left = document.getElementById("left");
left.onclick = function () {
  move("left");
};

const up = document.getElementById("up");
up.onclick = function () {
  move("up");
};

const down = document.getElementById("down");
down.onclick = function () {
  move("down");
};
