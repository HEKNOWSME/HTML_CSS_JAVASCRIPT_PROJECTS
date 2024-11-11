const task = document.querySelector('.task');
const todo_app  = document.querySelector('.todo-app')
todo_app.addEventListener('click', toggle)

function toggle(e){
   const { target } = e;
   if (target.matches('.task')) {
      todo_app.classList.toggle('show-tasks')
   }
   else if (target.matches('.back')) {
      todo_app.classList.toggle('show-tasks')
   }
}