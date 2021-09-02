const quizData = [
  {
    question: 'Best team in IPL?',
    a: 'MI',
    b: 'CSK',
    c: 'RCB',
    d: 'DC',
    correct: 'a',
  },
  {
    question: 'Most used Programming language in 2020?',
    a: 'Python',
    b: 'JavaScript',
    c: 'java',
    d: 'c++',
    correct: 'b',
  },
  {
    question: 'Who is the PM of India',
    a: 'Mukesh Ambani',
    b: 'Imran Tahir',
    c: 'Narendra Modi',
    d: 'Manas Ranjan Kabat',
    correct: 'c',
  },
  {
    question: 'The full form of popular language JS?',
    a: 'Jay Sambhoo',
    b: 'JavaScript',
    c: 'Joint Supplier',
    d: 'Java Supplier',
    correct: 'b',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const question = document.getElementById('question');
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deSelectAnswer();
  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deSelectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
        quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        
        <button onclick="location.reload()">Reload</button>
    `;
    }
  }
});
