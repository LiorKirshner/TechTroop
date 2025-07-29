function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);

    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`㊙️ Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString(),
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 },
];

const startDate = Date.now();
const promises = files.map((file) => processFile(file.name, file.time)); // 1. Create an array of promises using the files array

Promise.all(promises) // 2. Use Promise.all() to wait for all files to complete
  .then((results) => {
    console.log("🟢 All files processed successfully!");
    console.log("Results:", results);
  })
  // 4. Handle the case where any file fails
  .catch((error) => console.log(error))
  .finally(() => {
    // 3. Log total processing time and all results
    const end = Date.now();
    console.log(`Total time: ${end - startDate} ms`);
  });

// Bonus: Try Promise.allSettled() to see results even if some files fail
const start = Date.now();

Promise.allSettled(promises).then((results) => {
  const end = Date.now();
  console.log("\nAll files settled.");
  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`✓ ${files[i].name} processed:`, result.value);
    } else {
      console.error(`✗ ${files[i].name} failed:`, result.reason.message);
    }
  });
  console.log(`Total processing time: ${end - start} ms`);
});
