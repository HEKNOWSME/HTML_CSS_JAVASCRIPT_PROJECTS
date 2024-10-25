// DOM manipulation
// this will create element <li></li>
const list_element = document.createElement('li')
// this will put text in element <li></li> from box-input
 list_element.innerHTML = box.value;
// className help to add class in element <li class="list"></li>
list_element.className = 'list';
//to add element in its parent called list_container
list_container.appendChild(list_element);

// to add click event to container means when user click in this container,
list_container.addEventListener('click', (e) => {
   const {target} = e // to see where they clicked
   if (target.tagName == 'LI') {
      target.classList.toggle("checked") 
      // should add or remove class called checked into <li></li> 
   } else if (target.tagName == "SPAN") {
      // should remove the parent of this <span></span> element which is list
      target.parentElement.remove()
   }
})

key take ways
--------------
1. document.createElement()
2. element.className = 
3. parentElement.appendChild()
4. target.classList.toggle()
5. target.parentElement.remove()
6. element.innerHTML =

Basic Definition: Toggle means to switch between two states, like a light switch (on/off) or a checkbox (checked/unchecked).
classList.toggle(): This is the most common use in web development:

element.classList.toggle('active');
If the class 'active' exists, it removes it
If the class doesn't exist, it adds it
It's like a switch for CSS classes

Real-World Examples:

Dark/Light mode switches
Menu open/close buttons
Show/hide password buttons;
Expanding/collapsing sections
Checkbox functionality

// Method 1: Using matches() to check elements
    if (e.target.matches('.span')) {
        console.log('Span clicked');
    } else if (e.target.matches('article')) {
        console.log('Article clicked');
    }

 // Method 5: Get parent relationships
    if (e.target.tagName === 'ARTICLE') {
        const parent = e.target.parentElement;  // section
        const grandparent = parent.parentElement;  // li
    }

understanding the storages
// localStorage
// Setting data
localStorage.setItem('key', 'value')
localStorage.key = 'value'  // Alternative syntax

// Getting data
const value = localStorage.getItem('key')
const value = localStorage.key  // Alternative syntax

// Removing specific item
localStorage.removeItem('key')

// Clear all data
localStorage.clear()

// Get number of stored items
localStorage.length

// Get key by index
localStorage.key(index)

// sessionStorage
// Works exactly like localStorage but only for current session
sessionStorage.setItem('key', 'value')
sessionStorage.getItem('key')
sessionStorage.removeItem('key')
sessionStorage.clear()
sessionStorage.length
sessionStorage.key(index)

// Setting a cookie
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/"

// Reading cookies
const allCookies = document.cookie

// Delete cookie by setting expired date
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"

localStorage: Persists until explicitly cleared, ~5-10MB limit
sessionStorage: Clears when tab closes, ~5-10MB limit
Cookies: Sent with every HTTP request, ~4KB limit

// const array = ['claude', 'iranzi', 'uwera']

function search(array, item) {
   const items = array.filter(name => name.toLowerCase().includes(item));
   console.log(items);
}
search(array, 'i')


function search() {
   const tasks = document.querySelectorAll('.list');
   const search = document.getElementById('search');
   Array.from(tasks).forEach(task => {
      const content = task.querySelector('.content').innerHTML.toLowerCase()
      if (content.includes(search.value)) {
          task.style.display = '';
      } else {
          task.style.display = 'none';
      }
   })
}