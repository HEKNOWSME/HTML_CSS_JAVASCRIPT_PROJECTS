let tasks = []
const tasks_container = document.querySelector('.tasks-container');
const input = document.getElementById('add')

class Task {
   constructor(taskName, date) {
      this.taskName = taskName;
      this.date = date;
   }
}
const task = new Task();
class ToDo {
   addTask() {
      const taskName = input.value.trim();
      task.taskName = taskName;
      task.date = {
         default: Date.now()
      }
      tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(tasks))
   }
   displayTask() {
      tasks_container.innerHTML = ''
      tasks.forEach((task, index) => {
         const article = document.createElement('article');
         article.innerHTML = index + task.taskName ;
         tasks_container.appendChild(article)
      })
   }
}
