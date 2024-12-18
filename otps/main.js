const inputs = document.querySelectorAll('.input-item')
const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const message = document.querySelector('.message');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');

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
window.addEventListener("paste", (e) => {
   let numbers = parseInt(e.clipboardData.getData('text/plain'));
   numbers = numbers.toString().split('').map(Number);
   one.value = numbers[0]
   two.value = numbers[1]
   three.value = numbers[2]
   four.value = numbers[3]
   five.value = numbers[4]
   six.value = numbers[5]
   btn.disabled = false
   console.log(numbers);
   })
