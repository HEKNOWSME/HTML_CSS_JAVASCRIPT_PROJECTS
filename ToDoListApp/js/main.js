const box = document.getElementById('box')
const list_container = document.getElementById('list-container')
function addNote() {
   if (box.value === "") {
      alert('please add something')
   }
   else {
      const list_element = document.createElement('li')
      list_element.innerHTML = box.value;
      list_element.className = 'list';
      list_container.appendChild(list_element);

      const span = document.createElement('span');
      span.innerHTML = "\u00d7";
      span.className = "span"
      list_element.appendChild(span)
   }
   box.value = ""
}

list_container.addEventListener('click', (e) => {
   const {target} = e
   if (target.tagName == 'LI') {
      target.classList.toggle("checked")
   } else if (target.tagName == "SPAN") {
      target.parentElement.remove()
   }
})