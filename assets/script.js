var body = document.body;
var scoreDivEl = document.querySelector(".score");
var timerDivEl = document.querySelector(".timer");
var startDivEl = document.querySelector(".start");
var questionsDivEl = document.querySelector(".questions");
var endDivEl = document.querySelector(".end");
var feedbackDivEl = document.querySelector(".feedback");
var buttonEl = document.createElement("button")
//Start Page
startDivEl.children[0].textContent = "Quiz";
startDivEl.children[0].setAttribute("style", "color: red");
startDivEl.children[1].textContent = "To proceed with this timed quiz please press start and make a multiple choice selection to answer each question.";
startDivEl.appendChild(buttonEl);
startDivEl.children[2].textContent = "START";
startDivEl.setAttribute("style", "text-align: center");
console.log(startDivEl);

//Timer
buttonEl.addEventListener("click",function countdown() {
    var timeLeft = 60;
  
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerDivEl.textContent = timeLeft + " seconds left.";
  
      if(timeLeft === 0) {
        clearInterval(timeInterval);
        sendMessage();
      }
    }, 1000);
  }
)
countdown(); 

//Questions
var submitAnswer = function() {

    var radios = document.getElementsByName('option');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "" ) {
      alert('please select answer');
    } else if ( val == "Scripting" ) {
      alert('Answer is correct !');
    } else {
      alert('Answer is wrong');
    }
  };

var score = 0;



for(var i=0; i < questions.length; i++);