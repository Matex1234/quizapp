let question = [
    {
        text: "who is the president",
        options: ["james", "kiol", "love"],
        correct: 1
    },
    {
        text: "who is the president",
        options: ["james", "kiol", "love"],
        correct: 1
    },
    //add questions
];

let currentQuestion = 0;
let score = 0;
document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();
});
document.getElementById("next question btn").addEventListener("click", function () {
    let answer = getSelectedAnswer();
    if (answer === questions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    }
    else {
        displayFinalScore();
    }
});

function displayQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("question text").innerHTML = question.text;
    for (let i = 0; i < question.options.length; i++) {
        let optionText = document.getElementById(`options${i + 1}-text`);
        optionText.innerHTML = question.options[i];
    }
}
function getSelectedAnswer() {
    let radios = document.getElementsByName("answer");
    for (let i = 0; i < radios.length; i++){
        if (radios[i].checked) {
            return i;
        }
    }
    return -i;
}



function displayFinalScore() {
    document.getElementById("score text").innerHTML = `score: ${score}/${questions.length}`;
    document.getElementById("next question btn").disabled = true;

}

