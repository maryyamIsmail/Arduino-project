const page=document.getElementById("button1");
function openfile(){
  page.className='open_file'
}

const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const nextButton = document.getElementById('next-btn');


const quizData = [
  {
    question: "What is Arduino like?",
    options: [" A magic wand for electronics", "A talking robot", " A creative toolkit", "A giant ice cream"],
    correctAnswer: 2
  },
  {
    question: "What's the role of Arduino?",
    options: [
      'Making sandwiches',
      'Bringing projects to life',
      ' Telling jokes',
       'Playing soccer'
    ],
    correctAnswer: 1
  },
  {
    question: "What can you create with Arduino?",
    options: [
      ' A superhero cape',
    ' A time machine',
    'A pet unicorn',
    'Electronic projects like blinking lights'
    ],
    correctAnswer: 3
  },
  {
    question: "What do you need to give Arduino to make it work?",
    options: [
      "Chocolate",
      "A bedtime story",
      "Instructions (code)",
      "A superhero cape"
    ],
    correctAnswer: 2
  },
  {
    question: "When you want to create, who's your buddy?",
    options: [
      ' A talking parrot',
        'An Arduino friend',
       'A flying carpet',
      'A treasure map'
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
    window.location.href = 'lesson1.html';
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
