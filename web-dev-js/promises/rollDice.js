function rollDice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Dice fell off the table");
      } else {
        const roll = Math.floor(Math.random() * 6) + 1;
        resolve(roll);
      }
    }, 0);
  });
}

async function testProbability(numRolls) {
  let successes = 0;
  let failures = 0;
  let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (let i = 0; i < numRolls; i++) {
    try {
      const result = await rollDice();
      successes++;
      rollCounts[result]++;
    } catch (error) {
      failures++;
    }
  }

  console.log(`🔁 Total attempts: ${numRolls}`);
  console.log(
    `✅ Successes: ${successes} times (${((successes / numRolls) * 100).toFixed(
      2
    )}%)`
  );
  console.log(
    `❌ Failures: ${failures} times (${((failures / numRolls) * 100).toFixed(
      2
    )}%)`
  );
  // console.log(`📊 Success rate: ${((successes / numRolls) * 100).toFixed(2)}%`);
  // console.log(`📉 Failure rate: ${((failures / numRolls) * 100).toFixed(2)}%`);
  console.log("🎲 Distribution of rolled numbers:");
  const dist = Object.entries(rollCounts)
    .map(([num, count]) => `${num}: ${count}`)
    .join(" | ");
  console.log(dist);
}
//testProbability(100); // Test 100 rolls
//testProbability(1000); // Test 1000 rolls

function oldAsyncFunction(callback) {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callback(null, "Success");
    } else {
      callback(new Error("Failed"));
    }
  }, 1000);
}

function newAsyncFunction() {
  return new Promise((resolve, reject) => {
    oldAsyncFunction((err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
newAsyncFunction()
  .then((res) => console.log("✅", res))
  .catch((err) => console.error("❌", err.message));
