const box = document.getElementById('box')
const list_container = document.getElementById('list-container');
function addNote() {
   if (box.value === "") {
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
      article.innerHTML = box.value
      section.appendChild(article)
      list_element.appendChild(section)
      list_container.appendChild(list_element);
      list_element.appendChild(span)
      span.className = 'span'
      span.innerHTML = "\u00d7";
      span.className = "span"

   }
   box.value = ""
   save_tasks_in_storage()
}

list_container.addEventListener('click', (e) => {
   const { target } = e
   if (target.matches('.media')) {
      target.classList.toggle('checked')
      save_tasks_in_storage()
   } else if (target.tagName == "SPAN") {
      target.parentElement.remove()
      save_tasks_in_storage()
   }
})
display_tasks()
function save_tasks_in_storage() {
   localStorage.setItem('data', list_container.innerHTML);
}
function display_tasks() {
   const data = localStorage.getItem('data');
   if (data) {
      list_container.innerHTML += data
   }

}
