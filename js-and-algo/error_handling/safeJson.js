function safeJsonParse(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error("Invalid JSON format");
    throw error; // זורק את השגיאה החוצה
  }
}

try {
  console.log(safeJsonParse('{"name": "John"}'));
  // Output: { name: "John" }

  console.log(safeJsonParse("invalid json"));
  // Output: Invalid JSON format (ודפדפן או נוד יזרוק את השגיאה)
} catch (e) {
  console.log("Caught an error:", e.message);
}
