const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  { question: "What is the capital of France? ", answer: "Paris" },
  { question: "What is 2 + 2? ", answer: "4" },
  {
    question: "What color do you get when you mix red and white? ",
    answer: "Pink",
  },
];

let userAnswers = [];
let score = 0;
let currentQuestion = 0;

const askQuestion = () => {
  if (currentQuestion < questions.length) {
    rl.question(questions[currentQuestion].question, (userInput) => {
      userAnswers.push({
        question: questions[currentQuestion].question,
        userInput,
      });

      if (
        userInput.trim().toLowerCase() ===
        questions[currentQuestion].answer.toLowerCase()
      ) {
        score++;
      }

      currentQuestion++;
      askQuestion();
    });
  } else {
    console.log("\nQuiz Completed!");
    userAnswers.forEach((qa, index) => {
      console.log(`Q${index + 1}: ${qa.question}`);
      console.log(`Your answer: ${qa.userInput}`);
      console.log(`Correct answer: ${questions[index].answer}\n`);
    });
    console.log(`Your score: ${score}/${questions.length}`);
    rl.close();
  }
};

askQuestion();
