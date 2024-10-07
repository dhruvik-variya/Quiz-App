import Navbar from "./components/nav.js";

document.getElementById("Navbar").innerHTML = Navbar();

const handleSubmit = async (e) => {
    e.preventDefault();

    const questionData = {
        que: document.getElementById("que").value,
        mcq1: document.getElementById("mcq1").value,
        mcq2: document.getElementById("mcq2").value,
        mcq3: document.getElementById("mcq3").value,
        mcq4: document.getElementById("mcq4").value,
        ans: document.getElementById("ans").value,
    };

    // POST request to add question data to the API (db.json)
    const response = await fetch('https://quiz-server-1toc.onrender.com/questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionData),
    });

    if (response.ok) {
        console.log("Question submitted:", questionData);
        window.location.href = "/mcq.html";
    } else {
        console.error('Failed to submit question');
    }
};

document.getElementById("form").addEventListener("submit", handleSubmit);
