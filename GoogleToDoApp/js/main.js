const todoApp  = document.querySelector('.todo-app')
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
