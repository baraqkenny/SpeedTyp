window.addEventListener('load', init);



let time = 5;
let score = 0;
let isPlaying;


const wordInput = document.getElementById('word-input');
const currentWord = document.getElementById('current-word');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const message = document.getElementById('message');
const seconds = document.getElementById('seconds');





const words = [
    'generate',
    'river',
    'cocktail',
    'developer',
    'nutrition',
    'javascript',
    'laughter',
   'industry',
    'information',
    'inside',
    'instead',
    'institution',
    'interest',
    'interesting',
    'international',
    'interview',    
    'investment',
    'involve',
    'issue',
    'perform',
    'performance',
    'perhaps',
    'period',
    'person',
    'personal',
    'physical',
    'perform',
    'responsibility',
    'significant',
    'technology',
    'television',
    'thousand'
];



function init() {
    showWord(words);
    seconds.innerHTML = time;

    wordInput.addEventListener('input', startMatch);


    setInterval(countdown, 1000);

    setInterval(checkStatus);
}

 function startMatch() {
     if(matchWords()) {
         isPlaying = true;
         time = 6;
         showWord(words);
         wordInput.value = '';
         score++; 
     }
    
     if(score === -1) {
        scoreDisplay.innerHTML = 0;
     }else {
         scoreDisplay.innerHTML = score;
     }

 }

 function matchWords() {
     if(wordInput.value === currentWord.innerHTML) {
            message.innerHTML = 'Correct!!!';
            return true;
         }else {
             message.innerHTML = '';
             return false;
         }
 }

   function showWord(words) {
       const randIndex = Math.floor(Math.random() * words.length)
  
        currentWord.innerHTML = words[randIndex]
  
    }

function countdown() {
    if(time > 0) {
        time--;
    } else if(time === 0) {
        isPlaying = false;
    }

    timeDisplay.innerHTML = time
}


function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}

 