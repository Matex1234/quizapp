const btn = document.querySelectorAll("button");

btn[0].addEventListener("click", () => {
    setTimeout(() => {
        alert("wrong answer");

    }, 2000);
});
btn[1].addEventListener("click", () => {
    setTimeout(() => {
        alert("correct answer")

    }, 2000);
});
btn[2].addEventListener("click", () => {
    setTimeout(() => {
        alert("wrong answer try your luck again");

    }, 2000);
});
btn[3].addEventListener("click", () => {
    setTimeout(() => {
        alert("wrong answer");

    }, 2000);
});

function nextQuestion() {
    let nextQuestion = [
        {
            question: "who is the president of nigeria?",
            answers: ["tinubu", "buhari", "biden", "obama"],
            correct: "tinubu"
        },

        {
            question: "who is the best footballer in the world",
            answers: ["ronaldo","messi","zlatan","palmer"],
            correct: "ronaldo"
        }
    ];
}

btn[4].addEventListener("click", () => {
    alert("the next question is yet to be set");
},2000)