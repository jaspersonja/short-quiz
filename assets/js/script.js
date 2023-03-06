const questionsEl = document.getElementById('questions');
const timerEl = document.getElementById('time');
const choicesEl = document.getElementById('choices');
const submitBtn = document.getElementById('submit');
const startBtn = document.getElementById('start');
const initialsEl = document.getElementById('initials');
const feedbackEl = document.getElementById('feedback');



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
  