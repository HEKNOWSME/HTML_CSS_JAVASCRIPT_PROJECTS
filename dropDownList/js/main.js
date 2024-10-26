const sub_nav = document.querySelector('.sub-container')
document.querySelector('.toggle').addEventListener('click', toggle)
function toggle() {
   sub_nav.classList.toggle('collapse')
}