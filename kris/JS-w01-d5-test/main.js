questions = [
    {
        "question": "What sort of animal is Tux, the official mascot of the Linux operating system?",
        "answer": "Penguin"
    },
    {
        "question": "What is a software program that crawls the web, searching and indexing web pages?",
        "answer": "Spider"
    },
    {
        "question": "For what does the acronym IT stand?",
        "answer": "Information Technology"
    },
    {
        "question": "How many bits are there in a byte?",
        "answer": "8"
    },
    {
        "question": "What does the acronym LCD stand for?",
        "answer": "Liquid Crystal Display"
    },
    {
        "question": "Which popular company designed the first CPU?",
        "answer": "Intel"
    },
    {
        "question": "Which computer hardware device performs the functions like click, point, drag, or select.",
        "answer": "Mouse"
    },
    {
        "question": "Question: What is the computer's main circuit board called?",
        "answer": "Motherboard"
    },
    {
        "question": "What is the name of the system that manages and programs hardware resources for a computer?",
        "answer": "Operating System"
    },
    {
        "question": "Which information storage is used to store short-term running programs and data in a computer?",
        "answer": "RAM"
    },
    {
        "question": "Which input device is used to enter letters, numbers, and other characters into a computer?",
        "answer": "Keyboard"
    },
    {
        "question": "Which output device is used to display information in visual pictorial form?",
        "answer": "Monitor"
    },
    {
        "question": "Which web browser is run by the Mozilla Corporation?",
        "answer": "Firefox"
    },
    {
        "question": "Which computer company invented the first floppy disks, hard disk drives, and DRAMS?",
        "answer": "IBM"
    },
    {
        "question": "Which company invented the USB port?",
        "answer": "Intel"
    }
]

function onLoad() {
    var questionsBlock = document.getElementById("questions");

    // Generate the HTML for questions in code
    // I thought it would be easier to make changes to all elements this way if something is wrong
    for (let i = 0; i < questions.length; i++) {
        var input = document.createElement("input");
        input.setAttribute("id", "question_" + i);
        input.setAttribute("class", "question-input");
        questionsBlock.appendChild(input);

        var label = document.createElement("label");
        label.innerHTML = questions[i].question;
        questionsBlock.appendChild(label);

        questionsBlock.appendChild(document.createElement("br"));

    }
   
}


function calculateScore(){
    var points = 0;
    for (let i = 0; i < questions.length; i++) {
        if(document.getElementById("question_" + i).value == questions[i].answer){
            points++;
        }
    }
    points = Math.round((10 * points) / 15);
    document.getElementById("grade").value = points;
}

function cheat(){
    for (let i = 0; i < questions.length; i++) {
        document.getElementById("question_" + i).value = questions[i].answer;
    }
}