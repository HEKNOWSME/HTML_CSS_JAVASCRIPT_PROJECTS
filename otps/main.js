const inputs = document.querySelectorAll('.input-item')
const btn = document.querySelector('.btn')
const message = document.querySelector('.message');
btn.disabled = true
Array.from(inputs).forEach(input => {
   input.addEventListener("keydown", (e) => {
      input.value = ""
      const previousInput = input.previousElementSibling
      const nextInput = input.nextElementSibling
      if (e.key === "ArrowRight" | e.keyCode === 32 && nextInput) {
         nextInput.focus()
      }
      if (e.key === "Backspace") {
         e.target.value = ""
      }
      if (e.key === "ArrowLeft" && previousInput) {
         previousInput.focus()
         console.log(nextInput.value);
      } else {
         btn.disabled = true
      }
     
   })
   input.addEventListener("input", (e) => {
      input.nextElementSibling ? input.nextElementSibling.focus() : btn.disabled = false;
     
   })
})