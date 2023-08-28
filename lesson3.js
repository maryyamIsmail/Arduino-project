const page=document.getElementById("button1");
function openfile(){
  page.className='open_file'
}

const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const nextButton = document.getElementById('next-btn');


const quizData = [
  {
    question: "What can a servo motor do",
    options: [" Move things like a robot","Write the code","Dance like a star","Generate soothing melodies"],
    correctAnswer: 0
  },
  {
    question: "How do ultrasonic sensors measure distance?",
    options: [
      " By analyzing brain waves",
      "By emitting laser beams",
      "By utilizing gravitational waves",
      "By sending sound waves and analyzing echoes"
    ],
    correctAnswer: 3
  },
  {
    question: "What's a potentiometer's job?",
    options: [
      " Forecasting the future",
      "Generating unlimited energy",
      "Adjusting various parameters",
      "Translating animal languages"
    ],
    correctAnswer: 2
  },
  {
    question: "Imagine servo motors as",
    options: [
     " Ethereal beings",
     " Robot allies",
     "A car",
     "Mysterious puzzles"
    ],
    correctAnswer: 1
  },
  {
    question: "Why are ultrasonic sensors like electronic eyes?",
    options: [
      " They can predict lottery numbers",
      " They measure distances like eyesight",
      " They have night vision capabilities",
      "They look like the eyes"
    ],
    correctAnswer: 1
  }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement('button');
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(optionElement);
  });
}

function selectAnswer(selectedIndex) {
    userAnswers.push(selectedIndex);
    optionsContainer.innerHTML = '';
  
    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.correctAnswer;
  
    if (selectedIndex === correctAnswerIndex) {
      optionsContainer.innerHTML = "Correct!";
      optionsContainer.classList.add('correct');
    } else {
      optionsContainer.innerHTML = "Wrong! Try again.";
      optionsContainer.classList.add('incorrect');
      currentQuestionIndex--; 
    }
  
    nextButton.disabled = false;
  }

  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showSummary();
    }
  });

const backBtn = document.getElementById('back-btn');

function showSummary() {
    questionElement.textContent = "Quiz Completed!";
    optionsContainer.innerHTML = `
      <p>Your Score: ${calculateScore()} out of ${quizData.length}</p>
    `;
  
    backBtn.style.display = 'block'; 
    nextButton.style.display = 'none'; 
}
backBtn.addEventListener('click', () => {
    window.location.href = 'lesson3.html';
  });

function calculateScore() {
  let score = 0;
  for (let i = 0; i < quizData.length; i++) {
    if (userAnswers[i] === quizData[i].correctAnswer) {
      score++;
    }
  }
  return score;
}

loadQuestion();


// cardGame

