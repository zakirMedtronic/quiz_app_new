let currentQuestionIndex = 0;
let correctAnswers = 0;
let startTime;

const questions = [
  { question: "What is 2 + 2?", answers: ["3", "4", "5"], correct: 1 },
  { question: "What is the capital of France?", answers: ["Paris", "London", "Berlin", "Burma"], correct: 0 },
  { question: "What is the capital of India?", answers: ["Delhi", "London", "Berlin"], correct: 0 },
  { question: "What is the capital of Germany?", answers: ["Paris", "London", "Berlin", "New York"], correct: 2 },
  { question: "What is the capital of USA?", answers: ["Paris", "Washington","London", "Berlin"], correct: 1 },
];

function startQuiz() {
    document.getElementById("signUpScreen").classList.add("hidden");
    document.getElementById("quizScreen").classList.remove("hidden");
    startTime = new Date();
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById("questionText").innerText = q.question;
    document.getElementById("questionNumber").innerText = currentQuestionIndex + 1;
    const answerList = document.getElementById("answerList");
    answerList.innerHTML = ""; // Clear previous answers

    q.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        li.appendChild(button);
        answerList.appendChild(li);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestionIndex].correct) {
        correctAnswers++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quizScreen").classList.add("hidden");
    document.getElementById("resultsScreen").classList.remove("hidden");
    document.getElementById("correctAnswersCount").innerText = `You answered ${correctAnswers} questions correctly.`;
    const endTime = new Date();
    const timeSpent = (endTime - startTime) / 1000; // time in seconds
    document.getElementById("timeSpent").innerText = `Time spent: ${timeSpent} seconds.`;
}

// Initial call to set up the first question
showQuestion();