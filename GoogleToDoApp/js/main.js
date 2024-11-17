const todoApp = document.querySelector('.todo-app');
const taskCategory = document.querySelectorAll('.task')
const addTask = document.querySelector('.add-task');
const showCategory = document.querySelector('.show-category');
const categoryContent = document.querySelector('.category-content');
const addOneBtn = document.getElementById('add-one');
const input = document.getElementById('input');
todoApp.addEventListener('click', toggle);
input.addEventListener('keypress', (e) => {
   if (e.key === "Enter") {
      checkForm()
   }
})
function toggle(e){
   const { target } = e;
   if (target.matches('.task')) {
      todoApp.classList.toggle('show-tasks')
   }
   else if (target.matches('.back')) {
      todoApp.classList.toggle('show-tasks')
   } else if (target.matches('.add')) {
      showCategory.classList.add('show-input')
   } else if (target.matches('.screen')) {
      todoApp.classList.add('add_screen_Task');
   }else if (target.matches('.to-scrn')) {
      todoApp.classList.remove('add_screen_Task');
   }
};
const tasks = [
   {taskCategory: "Personal", taskText: "one"},
   {taskCategory: "Personal", taskText: "one Two"},
   {taskCategory: "Work", taskText: "Two"},
   {taskCategory: "Shopping", taskText: "Three"},
   {taskCategory: "Shopping", taskText: "Three Two"},
   {taskCategory: "Coding", taskText: "Four"},
   {taskCategory: "Health", taskText: "Five"},
   {taskCategory: "Fitness", taskText: "Six"},
   {taskCategory: "Education", taskText: "Seven"},
   {taskCategory: "Finance", taskText: "Eight"},
]
class Task {
   constructor(task, categoryContent, completed) {
      this.task = task;
      this.categoryContent = categoryContent;
      this.completed = completed;
   }
}
let categoriesObject = [
   {name: "Personal", number: 0},
   {name: "Work", number: 0},
   {name: "Shopping", number: 0},
   {name: "Coding", number: 0},
   {name: "Health", number: 0},
   {name: "Fitness", number: 0},
   {name: "Education", number: 0},
   {name: "Finance", number: 0},
]

const btnTasks = document.querySelectorAll('.task');
const displayCategory = () => {
   categoriesObject.forEach(cat => {
      Array.from(btnTasks).forEach(task => {
         const h3 = task.querySelector('h3');
         if (cat.name.toLowerCase() === h3.innerHTML.toLowerCase()) {
            const tasksCategory = tasks.filter((task) => cat.name.toLowerCase() === task.taskCategory.toLowerCase());
            const taskNumber = task.querySelector('.task-number');
            taskNumber.innerHTML = `${tasksCategory.length} Tasks`;
         }
      })


   })
}
const displayTasks = () => {
   categoryContent.innerHTML = ''
   Array.from(taskCategory).forEach(task => {
      task.addEventListener('click', (e) => {
         const h3 = task.querySelector('h3');
         const allTasks = tasks.filter(item => item.taskCategory.toLowerCase() === h3.innerHTML.toLowerCase());
         allTasks.forEach(item => {
            const article = document.createElement('article');
            article.classList.add('category-task');
            article.innerHTML = `
            <div class="input-group">
               <input type="checkbox" name="checkbox" id="checkbox">
               <label class="checkbox" for="checkbox">${item.taskText}</label>
            </div>
            <span class="span"></span>`;
            categoryContent.appendChild(article)
         })
         
      })
   })
}
displayCategory()
displayTasks()