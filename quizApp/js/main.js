class Question {
   constructor(question, answer) {
      this.question = question
      this.answer = answer
   }
}
const Q1 = "what is the largest city"
const ans1 = [
   { answer: "Kigali", correct: true },
   { answer: "Rubavu", correct: false },
   { answer: "Rwamagana", correct: false },
   { answer: "Rurindo", correct: false },
]
const question1 = new Question(Q1, ans1)