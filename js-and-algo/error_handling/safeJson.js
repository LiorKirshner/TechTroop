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

const fs = require("fs");

function readFileWithErrorHandling(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      switch (err.code) {
        case "ENOENT":
          callback(`File not found: ${filePath}`);
          break;
        case "EISDIR":
          callback(`Expected a file but found a directory: ${filePath}`);
          break;
        case "EACCES":
          callback(`Permission denied: ${filePath}`);
          break;
        default:
          callback(`Error reading file: ${err.message}`);
      }
      return;
    }

    // If no error, return success message with file size
    const sizeInBytes = Buffer.byteLength(data, "utf8");
    callback(`File read successfully. Size: ${sizeInBytes} bytes`);
  });
}

// דוגמת שימוש:
readFileWithErrorHandling("existing.txt", (result) => {
  console.log(result);
});
