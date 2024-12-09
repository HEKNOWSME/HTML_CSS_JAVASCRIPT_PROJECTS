const sub_nav = document.querySelector('.sub-container');
const body = document.querySelector('body');
body.addEventListener("click", toggle)
function toggle(e) {
   const { target } = e;
   if (target.matches(".toggle")) {
      sub_nav.classList.toggle('expanded');
   }
   else {
      sub_nav.classList.remove("expanded")
   }
}