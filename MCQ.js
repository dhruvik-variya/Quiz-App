import Navbar from "./components/nav.js";

document.getElementById("Navbar").innerHTML = Navbar();

let correctAnswers = 0;
let wrongAnswers = 0;

const UiMaker = (data) => {
    document.getElementById("McqData").innerHTML = "";
    let questionCounter = 1;

    data.map((ele) => {
        let div = document.createElement("div");
        div.className = "mcqs";

        // Create a question header with numbering
        let Question = document.createElement("h3");
        Question.textContent = `${questionCounter}. ${ele.que}`;
        questionCounter++;

        // Create options with A, B, C, D labels
        let mcq1 = document.createElement("button");
        mcq1.textContent = `A. ${ele.mcq1}`;
        mcq1.className = "mcq-option";

        let mcq2 = document.createElement("button");
        mcq2.textContent = `B. ${ele.mcq2}`;
        mcq2.className = "mcq-option";

        let mcq3 = document.createElement("button");
        mcq3.textContent = `C. ${ele.mcq3}`;
        mcq3.className = "mcq-option";

        let mcq4 = document.createElement("button");
        mcq4.textContent = `D. ${ele.mcq4}`;
        mcq4.className = "mcq-option";

// Disabl effect
const handleAnswerClick = (btn, selected, correctAnswer) => {
              

        if (selected === correctAnswer) {
                btn.style.backgroundColor = "green";
                correctAnswers++;
        } else {
                btn.style.backgroundColor = "red";
                wrongAnswers++;
        }

        if (btn.disabled) return;


        // Disable all options after selecting one
        mcq1.disabled = true;
        mcq2.disabled = true;
        mcq3.disabled = true;
        mcq4.disabled = true;

            updateScore();
        };

        mcq1.addEventListener("click", () => handleAnswerClick(mcq1, 'A'.toLowerCase(), ele.ans.toLowerCase()));
        mcq2.addEventListener("click", () => handleAnswerClick(mcq2, 'B'.toLowerCase(), ele.ans.toLowerCase()));
        mcq3.addEventListener("click", () => handleAnswerClick(mcq3, 'C'.toLowerCase(), ele.ans.toLowerCase()));
        mcq4.addEventListener("click", () => handleAnswerClick(mcq4, 'D'.toLowerCase(), ele.ans.toLowerCase()));

        div.append(Question, mcq1, mcq2, mcq3, mcq4);
        document.getElementById("McqData").append(div);
    });
};

// Function to update the score on the page
const updateScore = () => {
    const scoreDiv = document.getElementById("score");
    scoreDiv.innerHTML = `

   <h3> Correct Answers: ${correctAnswers} </h3>
   <h3> Wrong Answers: ${wrongAnswers}</h3>`;
};

// Fetch the data from the API and render the questions
const getData = async () => {
    const response = await fetch('https://quiz-server-1toc.onrender.com/questions');  
    const data = await response.json();
    UiMaker(data);
};

getData();