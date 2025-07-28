function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    new Promise((res) => {
      setTimeout(() => res(), 800);
    })
      .then(() => {
        if (num <= 0) {
          throw new Error("Invalid number");
        } else if (num % 7 === 0) {
          return "Lucky!";
        } else {
          return "Not lucky";
        }
      })
      .then((result) => resolve(result))
      .catch((error) => {
        reject(error);
      });
  });
}

checkLuckyNumber(77)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
