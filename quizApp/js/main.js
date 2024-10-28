class Answer {
   constructor(answer, isCorrect) {
      this.answer = answer
      this.isCorrect = isCorrect
   }
}
class QuizQuestion {
   constructor(question, answers) {
      this.question = question
      this.answers = answers
   }
}
const answersOfQuestion1 = [new Answer('kigali', false), new Answer('Rwanda', false), new Answer('Uganda', true), new Answer('America', false)];
const question1 = new QuizQuestion("What is the largest city in Africa", answersOfQuestion1)

const answersOfQuestion2 = [new Answer('Claude', false), new Answer('iranzi', false), new Answer('Paul', true), new Answer('peter', false)];

const question2 = new QuizQuestion("What is The president Of Rwanda? ", answersOfQuestion2);

const answersOfQuestion3 = [new Answer('Olivier', false), new Answer('Patrick', false), new Answer('Dr Kayijuka', true), new Answer('peter', false)];

const question3 = new QuizQuestion("Who is the teacher of statistic? ", answersOfQuestion3);

const answersOfQuestion4 = [new Answer('Province', false), new Answer('Village', false), new Answer('District', true), new Answer('cell', false)];

const question4 = new QuizQuestion("Where do we start from country?", answersOfQuestion4);
const question = document.getElementById('question');
const answers = document.getElementById('answers');
const nextQuestion = document.getElementById('next-btn');
const questions = [question1, question2, question3, question4];

let currentQuestionIndex = 0;
let currentScore = 0;

function startQuiz() {
   currentQuestionIndex = 0;
   currentScore = 0;
   nextQuestion.innerHTML = "next";
   showQuestion();
}

function showQuestion() {
   removeNext()
   const currentQuestion = questions[currentQuestionIndex];
   question.innerHTML = `Q ${currentQuestionIndex + 1}. ${currentQuestion.question}`
   currentQuestion.answers.forEach(element => {
      const btn = document.createElement('button');
      btn.classList.add('btn');
      btn.innerHTML = element.answer;
      answers.appendChild(btn)
   });
   
}

function removeNext() {
   nextQuestion.style.display = "none";
}
startQuiz()

