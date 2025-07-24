function validate(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const salary = parseInt(document.getElementById("salary").value, 10);
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value.trim();
  const errorBox = document.getElementById("error-messages");
  const form = document.querySelector("form");
  const welcomeBox = document.getElementById("welcome-message");
  let errors = [];

  if (name.length < 3) {
    errors.push("Name must be longer than 2 characters.");
  }

  if (isNaN(salary) || salary < 10000 || salary > 16000) {
    errors.push("Salary must be greater than 10,000 but less than 16,000.");
  }

  if (!birthday) {
    errors.push("Birthday may not be null.");
  }

  if (!/^\d{10}$/.test(phone)) {
    errors.push("Phone must be 10 digits long.");
  }

  if (errors.length > 0) {
    errorBox.textContent = errors.join("\n");
  } else {
    errorBox.textContent = "";
    form.style.display = "none"; // מעלים את הטופס
    welcomeBox.style.display = "block";
    welcomeBox.textContent = `Welcome, ${name}!`; // הודעה אישית
  }
}

document
  .querySelector("button[type='submit']")
  .addEventListener("click", validate);
