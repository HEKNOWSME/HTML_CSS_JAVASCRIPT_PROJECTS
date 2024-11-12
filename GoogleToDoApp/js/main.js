const task = document.querySelector('.task');
const todoApp  = document.querySelector('.todo-app')
const addIcon = document.querySelector('.add-icon-container');
const addTask = document.querySelector('.add-task');
const form_input = document.getElementById('task');
const select = document.querySelector('.select');
const submit = document.getElementById('submit')
todoApp.addEventListener('click', toggle);
addIcon.addEventListener('click', () => {
   addTask.classList.toggle('show-task-input')
})
function toggle(e){
   const { target } = e;
   if (target.matches('.task')) {
      todoApp.classList.toggle('show-tasks')
   }
   else if (target.matches('.back')) {
      todoApp.classList.toggle('show-tasks')
   }
}
