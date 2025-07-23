const reservations = {
  Lior: true,
  Dana: false,
  Amir: true,
};

function checkReservation() {
  const input = document.getElementById("name-input");
  const result = document.getElementById("result");
  const name = input.value.trim();
  const formattedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  if (reservations.hasOwnProperty(formattedName)) {
    if (reservations[formattedName]) {
      result.innerText = `Welcome, ${formattedName}. Your reservation is confirmed.`;
    } else {
      result.innerText = `Sorry, ${formattedName}. You had a reservation but it is already claimed.`;
    }
  } else {
    result.innerText = `No reservation found for ${formattedName}.`;
  }
}
