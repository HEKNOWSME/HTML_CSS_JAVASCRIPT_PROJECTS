const body = document.querySelector('body');
const menu = document.querySelector(".menu");

body.addEventListener("click", (e) => {
	const {target} = e
	if (target.matches(".menu-item") || target.matches(".menu")) {
		body.classList.toggle("toggle")
	}else {
		body.classList.remove("toggle")
	}
})