const quizData = [
    {
        question: "What is 2 + 2?",
        a: "4",
        b: "1",
        c: "2",
        d: "0",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheet",
        b: "Costcutting Style SpreadSheet",
        c: "Champion Style Sheet ",
        d: "Computer Software System",
        correct: "a",
    },
    {
        question: "What is H2O element symbol of?",
        a: "Water",
        b: "Hydrogen",
        c: "Oxygen",
        d: "Nitrogen",
        correct: "a",
    },
    {
        question: "Who wrote Macbeth?",
        a: "Stephen King",
        b: "Stan Lee",
        c: "JK Rowling",
        d: "Shakespheare",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("atext");
const b_text = document.getElementById("btext");
const c_text = document.getElementById("ctext");
const d_text = document.getElementById("dtext");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});