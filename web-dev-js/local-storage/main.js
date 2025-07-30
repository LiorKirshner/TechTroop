let wisdom = JSON.parse(localStorage.wisdom || "[]");

function displayWisdomEntry(entry, index) {
  const container = document.getElementById("wisdomDisplay");

  const div = document.createElement("div");
  div.id = `wisdom-${index}`;
  div.textContent = entry.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = function () {
    wisdom.splice(index, 1); // הסרה מהמערך
    localStorage.wisdom = JSON.stringify(wisdom); // שמירה מחדש
    container.innerHTML = ""; // ניקוי תצוגה
    wisdom.forEach(displayWisdomEntry); // הצגה מחדש של כל הפריטים
  };

  div.appendChild(deleteBtn);
  container.appendChild(div);
}

wisdom.forEach(displayWisdomEntry);

document.getElementById("myButton").addEventListener("click", () => {
  const inputValue = document.getElementById("myInput").value;
  if (!inputValue.trim()) return;

  const newEntry = { text: inputValue };
  wisdom.push(newEntry);
  displayWisdomEntry(newEntry);

  if (wisdom.length % 2 === 0) {
    localStorage.wisdom = JSON.stringify(wisdom);
  }

  document.getElementById("myInput").value = "";
});

document.getElementById("clearButton").addEventListener("click", () => {
  localStorage.removeItem("wisdom");
  $("#wisdomDisplay").empty();
  wisdom = [];
});
