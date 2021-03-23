var timerCount = 0;
var score = 0;
var question = document.querySelector(".question");
var startButton = document.querySelector("#quizStart");
var timerElement = document.querySelector(".time");
var q1 = document.querySelector(".q1")
var q2 = document.querySelector(".q2")
var q3 = document.querySelector(".q3")
var q4 = document.querySelector(".q4")
var questions= ["What is the difference between HTML and CSS?", "Arrays in Javascript can be used to store ____.", "A very useful tool used during development and debugging for printing content to the debugger is:","Which of these tags would display the largest text?","String values must be enclosed within ____ when being assigned to variables.",];
var questionNumber;

//arrays of possible answers and the answers
var quiz = [["HTML gives a webpage structure. CSS provides styling.", "CSS is one type of HTML.", "CSS structures a webpage. HTML strictly provides styling.","There is no difference."],["Numbers and strings","Other arrays","Booleans","All of the above"],["Javascript","Terminal/Bash","For loops", "console.log"],["<p>","<h2>","<h6>","<h4>"],["Commas","Parentheses","Curly Brackets","Quotes"]];
var answers= ["HTML gives a webpage structure. CSS provides styling.", "All of the above", "console.log", "<h2>", "Curly Brackets"];

function questionAsk() {
  question.textContent = questions[questionNumber]
  q1.textContent = quiz[questionNumber][0];
  q2.textContent = quiz[questionNumber][1];
  q3.textContent = quiz[questionNumber][2];
  q4.textContent = quiz[questionNumber][3];
  q1.addEventListener("click", compareQ1())
  q2.addEventListener("click", compareQ2())
  q3.addEventListener("click", compareQ3())
  q4.addEventListener("click", compareQ4())
}


function compareQ1(){
  document.getElementById('correct').style.display = "none";
  document.getElementById('incorrect').style.display = "none";
  if (q1.textContent == answers[questionNumber])
  {
    document.getElementById('correct').style.display = "block";
    questionNumber += 1;
    questionAsk();
  }
  else
  {
    document.getElementById('incorrect').style.display = "block";
    timerCount -= 10;
    questionNumber += 1;
    questionAsk();
  }
}

function compareQ2(){
  document.getElementById('correct').style.display = "none";
  document.getElementById('incorrect').style.display = "none";
  if (q2.textContent == answers[questionNumber])
  { 
    document.getElementById('correct').style.display = "block";
    questionNumber += 1;
    questionAsk();
  }
  else
  {
    document.getElementById('incorrect').style.display = "block";
    timerCount -= 10;
    questionNumber += 1;
    questionAsk();
  }
}

function compareQ3(){
  document.getElementById('correct').style.display = "none";
  document.getElementById('incorrect').style.display = "none";
  if (q3.textContent == answers[questionNumber])
  {
    document.getElementById('correct').style.display = "block";
    questionNumber += 1;
    questionAsk();
  }
    else
  {
    document.getElementById('incorrect').style.display = "block";
    timerCount -= 10; 
    questionNumber += 1;
    questionAsk();
  }
}

function compareQ4(){
  document.getElementById('correct').style.display = "none";
  document.getElementById('incorrect').style.display = "none";
  if (q4.textContent == answers[questionNumber])
  {
    document.getElementById('correct').style.display = "block";
    questionNumber += 1;
    questionAsk();
  }
  else
  {
    document.getElementById('incorrect').style.display = "block";
    timerCount = timecount-10;
    questionNumber += 1;
    questionAsk();
  }
}


function quizStart(){
    timerCount = 75;
    startTimer();
    console.log(timer);
    document.getElementById('briefing').style.display = "none";
    document.getElementById('quizStart').style.display = "none";
    document.getElementById('answers').style.display = "block";
    questionNumber = 0; 
    questionAsk();
    document.getElementById('quizStart').disabled = true;
}

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (isComplete && timerCount > 0) {
          clearInterval(timer);
          endQuiz;
        }
      }
      if (timerCount === 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }

startButton.addEventListener("click", quizStart);