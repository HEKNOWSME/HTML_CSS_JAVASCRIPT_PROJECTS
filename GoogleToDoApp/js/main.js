const task = document.querySelector('.task');
const todo_app  = document.querySelector('.todo-app')
const add_icon = document.querySelector('.add-icon-container');
const add_task = document.querySelector('.add-task')
todo_app.addEventListener('click', toggle)
add_icon.addEventListener('click', () => {
   add_task.classList.toggle('show-task-input')
})
function toggle(e){
   const { target } = e;
   if (target.matches('.task')) {
      todo_app.classList.toggle('show-tasks')
   }
   else if (target.matches('.back')) {
      todo_app.classList.toggle('show-tasks')
   }
}