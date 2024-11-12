const todoApp  = document.querySelector('.todo-app')
const addTask = document.querySelector('.add-task');
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
