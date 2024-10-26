const input = document.getElementById('input')
const list_container = document.getElementById('list-container');

input.addEventListener('keypress', (e) => {
   if (e.key === "Enter") {
      addNote();
   }
})
list_container.addEventListener('click', (e) => {
   const { target } = e
   toggles(target)
})
document.querySelector('.btn').addEventListener('click', addNote);
document.getElementById('search').addEventListener('input', search);

function addNote() {
   if (input.value === "") {
      alert('please add something')
   }
   else {
      const list_element = document.createElement('li');
      list_element.className = 'list';
      const section = document.createElement('section');
      section.className = 'media';
      const article = document.createElement('article');
      const span = document.createElement('span');
      article.className = 'content'
      article.innerHTML = input.value
      section.appendChild(article)
      list_element.appendChild(section)
      list_container.appendChild(list_element);
      list_element.appendChild(span)
      span.className = 'span'
      showMessage()
      input.value = ""
      save_tasks_in_storage()
   }
}
function toggles(target) {
   if (target.matches('.content')) {
      target.parentElement.classList.toggle('checked')
      save_tasks_in_storage()
   } else if (target.tagName == "SPAN") {
      target.parentElement.remove()
      save_tasks_in_storage()

   }
}
function search() {
   const tasks = document.querySelectorAll('.list');
   const search = document.getElementById('search');
   tasks.forEach(task => {
      const content = task.querySelector('.content').innerHTML.toLowerCase()
      if (content.includes(search.value)) {
          task.style.display = '';
      } else {
          task.style.display = 'none';
      }
   })
}
function save_tasks_in_storage() {
   localStorage.setItem('data', list_container.innerHTML);
}
function display_tasks() {
   const data = localStorage.getItem('data');
   if (data) {
      list_container.innerHTML = data
      search()
   }
}
function showMessage() {
   const not = document.querySelector('.notification');
   not.classList.remove('hidden')
   setTimeout(() => {
      not.classList.add('hidden')
   }, 2000)
}
display_tasks()