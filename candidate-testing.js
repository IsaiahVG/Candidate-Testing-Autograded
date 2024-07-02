const input = require('readline-sync');




let candidateName = "";


let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  
  candidateName = input.question("Candidate Name: ");
}

function askQuestion() {
  
  for (let i = 0; i < questions.length; i++) {
    let answer = input.question(questions[i]);
    candidateAnswers.push(answer);
  }
}

function gradeQuiz(candidateAnswers) {
  let score = 0;

  console.log(`\nCandidate Name: ${candidateName}`);
  for (let i = 0; i < questions.length; i++) {
    console.log(`${i + 1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }

  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      score++;
    }
  }

  let grade = (score / questions.length) * 100;
  let status = grade >= 80 ? 'Pass' : 'Failed';

  console.log(`>>> Overall Grade: ${grade}% (${score} of ${questions.length} responses correct) <<<`);
  console.log(`>>> Status: ${status} <<<`);

  return grade;
}

function runProgram() {
  askForName();
 
  console.log(`Hello, ${candidateName}!`);
  askQuestion();
  gradeQuiz(candidateAnswers);
}

runProgram();

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
