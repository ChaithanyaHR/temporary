"use strict";

// Game state variables
let questionNumber = 1;

const q1 = document.getElementById('question1');
const q2 = document.getElementById('question2');
const q3 = document.getElementById('question3');
const q4 = document.getElementById('question4');
const q5 = document.getElementById('question5');
const q6 = document.getElementById('question6');
const success = document.getElementById('success');
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');

console.log(q2);


q2.style.display = 'none';
q3.style.display = 'none';
q4.style.display = 'none';
q5.style.display = 'none';
q6.style.display = 'none';
success.style.display = 'none';


const yesClick = () => {
  q1.style.display = 'none';
  q2.style.display = 'none';
  q3.style.display = 'none';
  q4.style.display = 'none';
  q5.style.display = 'none';
  q6.style.display = 'none';
  success.style.display = 'inline-block';
};

const noClick = () => {
  questionNumber += 1
  if (questionNumber == 2) {
    q1.style.display = 'none';
    q2.style.display = 'inline-block';
  } else if (questionNumber == 3) {
    q2.style.display = 'none';
    q3.style.display = 'inline-block';
  } else if (questionNumber == 4) {
    q3.style.display = 'none';
    q4.style.display = 'inline-block';
  } else if (questionNumber == 5) {
    q4.style.display = 'none';
    q5.style.display = 'inline-block';
  } else {
    q5.style.display = 'none';
    q6.style.display = 'inline-block';
  }
  success.style.display = 'none';
};

// Handle onClick events

window.onclick = function(event) {
  switch (event.target) {
    case yesButton: {
      yesClick();
      break;
    }
    case noButton: {
      noClick();
      break;
    }
  };
};
