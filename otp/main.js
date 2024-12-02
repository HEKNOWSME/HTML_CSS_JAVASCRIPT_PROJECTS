const inputs = document.querySelectorAll('.input-item')
const btn = document.querySelector('.btn')
Array.from(inputs).forEach(input => {
   let lastElement = 0
   input.onkeyup = (e) => {
      const currentElement = e.target;
      const nextInput = input.nextElementSibling
      const previousInput = input.previousElementSibling
      if (previousInput && e.keyCode === 8) {
         if (lastElement === 1) {
            previousInput.value = ''
            previousInput.focus()
         }
         lastElement = 1
         currentElement.value = ''
         btn.setAttribute('disabled', true)
      } else {
         if (currentElement.value) {
            if (nextInput) {
               nextInput.focus()
               btn.setAttribute('disabled', true)
               lastElement = 1
            } else {
               btn.removeAttribute('disabled')
               lastElement = 0
            }
         }
      }
   }
}
)