const addInput = document.getElementById('add');
const search = document.getElementById('search');
const task_container = document.querySelector('.tasks-container');
const task_number = document.querySelector('.tasks_number');
const complete = document.querySelector('.complete')
let tasks = []
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
         number_of_task++
         task_number.innerHTML = `${number_of_task}`;
         localStorage.setItem('tasks', JSON.stringify(tasks));
         localStorage.setItem('number', number_of_task);
      }
      complete.innerHTML = number_of_completed_task
      addInput.value = ''
      localStorage.setItem('numbers', number_of_completed_task)
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
      } else {
         task.isCompleted = false;
         number_of_completed_task--;
         number_of_task++;
         complete.innerHTML = number_of_completed_task;
         task_number.innerHTML = number_of_task
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
      localStorage.setItem('number', number_of_task);
      localStorage.setItem('numbers', number_of_completed_task);
   }
   delete(index) {
      const completed = tasks[index]
      if (completed.isCompleted) {
         number_of_completed_task--
         complete.innerHTML = number_of_completed_task;
         tasks.splice(index, 1)
         this.displayNotes()
         localStorage.setItem('numbers', number_of_completed_task)
      } else {
         number_of_task--
         task_number.innerHTML = number_of_task;
         tasks.splice(index, 1)
         this.displayNotes()
         localStorage.setItem('number', number_of_task);
      }
      localStorage.setItem('tasks', JSON.stringify(tasks))
   }
   reverse() {
      tasks = tasks.reverse();
      this.displayNotes()
   }
   search(text) {
      tasks.forEach((item, index) => {
         if (item.text.includes(text)) {
         task_container.innerHTML = ''
         const article = document.createElement('article');
         article.innerHTML = `
         <span>${item.text}</span>
         <button class="not" onclick="keepNote.completed(${index})">Mark complete</button>
         <button onclick="keepNote.delete(${index})">Delete note</button>
         `
            task_container.appendChild(article)
         }
         
      })
   }
}

const keepNote = new KeepNote();
addInput.addEventListener('keypress', (e) => {
   if (e.key == "Enter") {
      keepNote.addNote();
   }
})
search.addEventListener('input', () => {
   if (search.value !== '') {
      keepNote.search(search.value.trim())
   } else {
      keepNote.displayNotes()
   }
})
window.addEventListener('load', () => {
   const data = localStorage.getItem('tasks');
   if (data) {
      console.log(data);
      tasks = JSON.parse(data)
      keepNote.displayNotes()
      let number = parseInt(localStorage.getItem('number'));
      let numbers = parseInt(localStorage.getItem('numbers'));
      task_number.innerHTML = number;
      complete.innerHTML = numbers;
      number_of_task = number
      number_of_completed_task = numbers
   } else {
      task_container.innerHTML = ''
   }
})
keepNote.displayNotes()