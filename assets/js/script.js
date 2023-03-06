const questionsEl = document.getElementById('questions');
const timerEl = document.getElementById('time');
const choicesEl = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const startButton = document.getElementById('start');
const initialsEl = document.getElementById('initials');
const feedbackEl = document.getElementById('feedback');

let timerId;
const time = questions.length * 10;
const questionIndex = 0;

//timer
function timerCountdown() {
    time --;
    timerEl.textContent = time;

    if (time <= 0) {
        endQuiz();
    }
};

//Start quiz
function startQuiz() {
    const homeScreenEl = document.getElementById('home')
    homeScreenEl.setAttribute('class', 'hide')

    questionsEl.removeAttribute('class');

    timerId = setInterval(timerCountdown, 1000);

    timerEl.textContent = time;
    getQuestion();
}

//get questions
function getQuestion() {
    const currentQuestion = questions[questionIndex];
    
    const titleEl = document.getElementById('question-title')
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = '';
    
    for( let i = 0; i < currentQuestion.choices.length; i++) {
        let choice = currentQuestion.choices[i];
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute('class', 'choice')
        choiceButton.setAttribute('value', choice)
         
        choiceButton.textContent = choice;
        choicesEl.appendChild(choiceButton);
    }
}

//end quiz
function endQuiz() {

}

//choice click
function choiceClick() {

}

//save highscore

function saveHighscore() {
    
}

// questions array
const questions = [
    {
      title: 'Given the year 1918, when did World War 1 end?',
      choices: ['November 11', 'January 14', 'August 7', 'July 4'],
      answer: 'November 11',
    },
    {
      title: 'Who was assassinated to kick off the first World War?',
      choices: ['Helmuth Von Moltke', 'Otto Von Bismarck', 'Ernst Junger', 'Franz Ferdinand'],
      answer: 'Franz Ferdinand',
    },
    {
      title: 'What was a key element in almost all battles of the first World War?',
      choices: ['trench warfare', 'artillery', 'heavy casualties', 'all of the above'],
      answer: 'all of the above',
    },
    {
      title:'Though they did not technically start the war, ____ received the biggest share of blame for the catastrophic loss of life inflicted on all belligerents.',
      choices: ['Austria-Hungary', 'Ottoman Empire', 'Germany', 'Bulgaria'],
      answer: 'Germany',
    },
    {
      title:'Which battle saw the heaviest casualties of the entirety of World War 1?',
      choices: ['Somme', 'Verdun', 'Passchendaele', 'Vimy Ridge'],
      answer: 'Verdun',
    },
  ];
  