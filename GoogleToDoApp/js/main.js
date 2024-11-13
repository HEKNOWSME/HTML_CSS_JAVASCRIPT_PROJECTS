const todoApp = document.querySelector('.todo-app');
const taskCategory = document.querySelectorAll('.task')
const addTask = document.querySelector('.add-task');
const showCategory = document.querySelector('.show-category');
const categoryContent = document.querySelector('.category-content');
const addOneBtn = document.getElementById('add-one');
const input = document.getElementById('input');
todoApp.addEventListener('click', toggle);
addOneBtn.addEventListener('click', checkForm);
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
}

function checkForm() {
   const addTaskForm = addOneBtn.parentElement
   const input = addTaskForm.querySelector('#input');
   if (!input.value.trim()) {
      window.alert('please enter anything')
      return
   }
   const task = input.value;
   const article = document.createElement('article');
   article.className = "category-task"
   article.innerHTML = `
   <div class="input-group">
      <input type="checkbox" name="checkbox" id="checkbox">
      <label class="checkbox" for="checkbox">${task}</label>
   </div>
   <span class="span"></span>`
   categoryContent.appendChild(article)
   input.value = ''
}

let numberPersonal = 0, numberWork = 0;
let tasks = []
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
const taskInput = document.getElementById('task-input');
const categories = document.getElementById('categories');
const catBtn = document.getElementById('catBtn');

catBtn.addEventListener('click', () => {
   if (!taskInput.value) {
      alert('Enter something');
      return
   }
   Array.from(taskCategory).forEach((btn) => {
      const h3 = btn.querySelector('h3');
      if (categories.value.toLocaleLowerCase() === h3.innerHTML.toLocaleLowerCase()) {
         const task_number = btn.querySelector('.task-number');
         const task = new Task(taskInput.value, categories.value, false);
         tasks.push(task)

         // check availability of category
         categoriesObject.forEach(category => {
            if (category.name.toLocaleLowerCase() === categories.value.toLocaleLowerCase()) {
               category.number += 1;
               localStorage.setItem('categories', JSON.stringify(categoriesObject))
               
               const data = localStorage.getItem('categories');
               const categoriesInStorage = JSON.parse(data)
               const matchedCategory = categoriesInStorage.find(categoryInStorage => category.name.toLocaleLowerCase() === categoryInStorage.name.toLocaleLowerCase()
               );

               task_number.innerHTML = `${matchedCategory.number} Tasks`
               
            }
         })
         localStorage.setItem('tasks', JSON.stringify(tasks));
         console.log(tasks);
      }
   
   })
})
const getTask = () => {
   const data = localStorage.getItem('tasks');
   JSON.parse(data)
   console.log(data);
}
function displayCategory() {
   const data = localStorage.getItem('categories');
   const categoriesInStorage = JSON.parse(data);
   Array.from(taskCategory).forEach(task => {
      const task_number = task.querySelector('.task-number');
      const h3 = task.querySelector('h3');
      const matchedCategory = categoriesInStorage.find(categoryInStorage => h3.innerHTML.toLocaleLowerCase() === categoryInStorage.name.toLocaleLowerCase()
      );
      task_number.innerHTML = `${matchedCategory.number} Tasks`

   })
}
displayCategory()
getTask()
