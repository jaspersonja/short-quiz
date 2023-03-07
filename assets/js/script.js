const questionsEl = document.getElementById('questions');
const timerEl = document.getElementById('time');
const choicesEl = document.getElementById('choices');
const initialsEl = document.getElementById('initials');
const feedbackEl = document.getElementById('feedback');
const startButton = document.getElementById('start');
const submitButton = document.getElementById('submit');

let timerId;
let time = 60;
let questionIndex = 0;

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
  clearInterval(timerId);

  let resultsEl = document.getElementById('results');
  resultsEl.removeAttribute('class');

  let finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = time;

  questionsEl.setAttribute('class', 'hide');
}

//choice click
function choiceClick(event) {
  const buttonEl = event.target;

  if(!buttonEl.matches('.choice')) {
    return;
  }
  if (buttonEl.value !== questions[questionIndex].answer) {
    time -= 5;

    if (time < 0) {
      time = 0;
    }

    timerEl.textContent = time;


    feedbackEl.textContent = 'INCORRECT';
  } else {

    feedbackEl.textContent = 'GREAT JOB!';
  }

  feedbackEl.setAttribute('class', 'feedback');
  setTimeout(function () {
    feedbackEl.setAttribute('class', 'feedback hide');
  }, 2000);

  questionIndex++;

  if (time <= 0 || questionIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

//save highscore
function saveHighscore() {

  const initials = initialsEl.value.trim();

  if (initials !== '') {

    const highscores =
      JSON.parse(window.localStorage.getItem('highscores')) || [];

    const newScore = {
      score: time,
      initials: initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));

    window.location.href = 'highscores.html';
  }
}

submitButton.onclick = saveHighscore;

startButton.onclick = startQuiz;

choicesEl.onclick = choiceClick;

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
  