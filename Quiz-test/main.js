(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // combine  output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){


    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        // answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        // answerContainers[questionNumber].style.color = 'red';
      }
      
    });
    let grade = Math.floor((numCorrect/myQuestions.length)*10);
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    gradeContainer.innerHTML = `${grade}`;
    hiddenInput.value = `${grade}`;
    form.style.display = 'inline-block';
    nextButton.style.display = 'none';   
  }  

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }

    if(currentSlide === slides.length-1){
      getScoresBtn.style.display = 'inline-block';  
      nextButton.style.display = 'none';
    }
    
    else{
      getScoresBtn.style.display = 'none';
      form.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
 

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const gradeContainer = document.getElementById('grade');
  const hiddenInput = document.getElementById('hiddenGrade');
  // const getScoresBtn = document.getElementById('getScores');
  const submitButton = document.getElementById('submit');
  const form = document.getElementById('form');
  const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },    
    {
      question: 'How do you write "Hello World" in an alert box?',
      answers: {
        a: "alertBox('Hello World')",
        b: "msg('Hello World')",
        c: "msgBox('Hello World')",
        d: "alert('Hello World')"
      },
      correctAnswer: "d"
    },
    {
      question: 'JavaScript is a ___ -side programming language?',
      answers: {
        a: "client",
        b: "server",
        c: "both",
        d: "none"
      },
      correctAnswer: "c"
    },
    {
      question: 'How do you find the minimum of x and y using JavaScript?',
      answers: {
        a: "min(x,y)",
        b: "Math.min(x,y)",
        c: "Math.min(xy)",
        d: "min(xy);"
      },
      correctAnswer: "b"
    },
    {
      question: 'Which are the correct “if” statements to execute certain code if “x” is equal to 2?',
      answers: {
        a: "if(x 2)",
        b: "if(x = 2)",
        c: "if(x == 2)",
        d: "if(x != 2 )"
      },
      correctAnswer: "c"
    }    
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  getScoresBtn.addEventListener('click', showResults);
  form.addEventListener('submit', (e)=>{  })
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

})();
