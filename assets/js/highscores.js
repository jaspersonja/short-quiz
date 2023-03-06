function createHighscores() {
    //get scores from local storage or set an empty array
    const highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  

    highscores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    for (const i = 0; i < highscores.length; i += 1) {
      // create li for each high score
      const createScore = document.createElement('li');
      createScore.textContent = highscores[i].initials + '---' + highscores[i].score;
  

      const olEl = document.getElementById('highscores');
      olEl.appendChild(createScore);
    }
  }
  
  function deleteHighscores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
  }
  
  document.getElementById('delete').onclick = deleteHighscores;
  
//call function 
  createHighscores();
  