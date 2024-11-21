const btn = document.querySelector('.btn');
      const alert = document.querySelector('.alert');
      const number = document.getElementById('number');
      
      number.addEventListener('keypress', (e) => {
         if (e.key === "Enter") {
            if (!number.value || number.value.trim() == 1 | number.value.trim() < 0) {
               alert.innerHTML = "<span style='color: red'>Shaka Uko Wakandika umubare hejuru ya 1";
               alert.classList.add('show');
               setTimeout(() => {
               alert.classList.remove('show')
            }, 1500);
            }
            else if(checkPrimeNumber(number.value)) {
               alert.innerHTML = `The number ${number.value} is Prime number`;
               alert.classList.add('show')
               setTimeout(() => {
                  alert.classList.remove('show')
               }, 1500)
         }else {
            alert.innerHTML = `The number ${number.value} is not Prime number`;
            alert.classList.add('show');
            setTimeout(() => {
               alert.classList.remove('show')
            }, 1500)
         }
      }
      });
function checkPrimeNumber(number){
   let true_or_false = [];
         for (let fact = 2; fact < number; fact ++) {
            if (number % fact === 0) {
               true_or_false.push(0)
               break
            } else {
               true_or_false.push(1);
            }
   }
   check = true_or_false.every((item) => item === 1);
   return check
}