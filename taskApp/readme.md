let tasks = []
const tasks_container = document.querySelector('.tasks-container');
const input = document.getElementById('add');
class Task {
   constructor(taskName, date) {
      this.taskName = taskName;
      this.date = date;
   }
}
class ToTask {
   addTask() {
      const task = new Task();
      const value = input.value.trim();
      if (value === "") return alert('please add something')
      task.taskName = value;
      task.date = new Date();
      tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(tasks));
      input.value = ""
   }
   displayData() {
      tasks_container.innerHTML = ""
      tasks.forEach((task, index) => {
         const article = document.createElement('article');
         article.innerHTML = `
         <span>${index}: ${task.taskName}</span>
         <button onclick="toTask.delete(${index})">Delete</button>`;
         tasks_container.appendChild(article);
      })
   }
   delete(index) {
      tasks.splice(index, 1);
      this.displayData()
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }
   reverse() {
      const data = JSON.parse(localStorage.getItem('tasks'));
      const reversed = data.reverse();
      tasks = reversed
      this.displayData()
   }
}
const toTask = new ToTask();
input.addEventListener('keypress', (e) => {
   if (e.key == 'Enter') {
      toTask.addTask()
      toTask.displayData()
   }
})

window.addEventListener('load', () => {
   const data = localStorage.getItem('tasks');
   tasks = JSON.parse(data);
   toTask.displayData()
})