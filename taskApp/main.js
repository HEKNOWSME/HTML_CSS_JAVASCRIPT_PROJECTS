const addInput = document.getElementById('add');
const task_container = document.querySelector('.tasks-container');
const task_number = document.querySelector('.tasks_number');
const complete = document.querySelector('.complete')
const tasks = []
let number_of_task = 0;
let number_of_completed_task = 0;
class Task {
   constructor(text, isCompleted) {
      this.text = text
      this.isCompleted = isCompleted
   }
}
class KeepNote {
   addNote() {
      if (addInput !== '') {
      const task = new Task();
      task.text = addInput.value;
      task.isCompleted = false;
      tasks.push(task);
      this.displayNotes()   
      localStorage.setItem('tasks', JSON.stringify(tasks));
      number_of_task++
      task_number.innerHTML = `${number_of_task}`;
      }
      if (number_of_completed_task > 0) {
         number_of_completed_task--
         complete.innerHTML = number_of_completed_task
      } else {
         complete.innerHTML = number_of_completed_task
      }
      addInput.value = ''
   }
   displayNotes() {
      task_container.innerHTML = ''
      tasks.forEach((task, index) => {
         const article = document.createElement('article');
         article.innerHTML = `
         <span>${task.text}</span>
         <button class="not" onclick="keepNote.completed(${index})">Mark complete</button>
         <button onclick="keepNote.delete(${index})">Delete note</button>
         `
         task_container.appendChild(article)
      });
   }
   completed(index) {
      const task = tasks[index];
      const isCompleted = task.isCompleted
      if (isCompleted === false) {
         task.isCompleted = true
         number_of_completed_task++
         number_of_task--
         complete.innerHTML = number_of_completed_task;
         task_number.innerHTML = number_of_task;
      }
   }
   delete(index) {
      const completed = tasks[index]
      if (completed.isCompleted) {
         number_of_completed_task--
         complete.innerHTML = number_of_completed_task;
         tasks.splice(index, 1)
         this.displayNotes()
         return
      } else {
         number_of_task--
         task_number.innerHTML = number_of_task;
         tasks.splice(index, 1)
         this.displayNotes()
      }
      
   }
}

const keepNote = new KeepNote();
addInput.addEventListener('keypress', (e) => {
   if (e.key == "Enter") {
      keepNote.addNote();
   }
})
