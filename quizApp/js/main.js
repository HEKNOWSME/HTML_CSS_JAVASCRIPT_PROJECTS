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
const btn = document.querySelectorAll('.btn');
const questions = [question1, question2, question3, question4];

let score = 0;
let currentIndex = 0;
function startQuiz() {
   resetNext();
   score = 0;
   currentIndex = 0;
   showQuestion()
}

function showQuestion() {
   const currentQuestion = questions[currentIndex];
   question.innerHTML = `${currentIndex + 1}. ${currentQuestion.question}`;

   currentQuestion.answers.forEach(answer => {
      const btn = document.createElement('button');
      btn.innerHTML = answer.answer;
      btn.classList.add('btn');
      answers.appendChild(btn);
      if (answer.isCorrect) {
         btn.dataset.isCorrect = answer.isCorrect
      }
      btn.addEventListener('click', selectBtn);
   });


}

function selectBtn(e) {
   const btn = e.target;
   const correct = btn.dataset.isCorrect == "true";
   if (correct) {
      btn.classList.add('correct');
      score++;
   } else {
      btn.classList.add('incorrect')
   }
   nextQuestion.style.display = "block"

   Array.from(answers.children).forEach(btn => {
      if (btn.dataset.isCorrect) {
         btn.classList.add('correct');
      }
      btn.disabled = true
   })

}
function resetNext() {
   nextQuestion.style.display = "none";
}
startQuiz()