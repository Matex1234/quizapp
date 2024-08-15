const quizData = [
    {
        question: "what is the capital of france?",
        answers: ["paris", "london", "berlin", "rome"],
        correct: 0
        //add more questions
    },
    {
        question: "who is the current president of nigeria",
        amswers: ["yar adura", "tinubu", "obasanjo", "richard"],
        correct: 1
    }

];
//brtku788o9o99oo9oo7o
let currentQuestion = 0;
let score = 0;
document.getElementById("submit").addEventListener("click", checkAnswer);

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    questionElement.textContent = quizData[currentQuestion].answers.forEach((answer, index) => {
        const answerElement = document.createElement("li");
        answersElement.innerHTML = <button>${answer}</button>;
        answersElement.appendChild(answerElement);
    });

}

function checkAnswer() {
    const userAnswer = document.querySelector("button:checked");
    if (userAnswer.textContent === quizData[currentQuestion].answers[quizData[currentQuestion].correct]) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
        displayScore();
    } else {
        displayQuestion();
    }

}

function displayScore() {
    document.getElementById("quiz container").innerHTML = `your score is ${score} out of ${quizData.length} `;
}
displayQuestion();