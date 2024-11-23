const cards = document.querySelectorAll('.card');
Array.from(cards).forEach(card => {
   let startValue = 0;
   const endValue = card.getAttribute('data-value');
   const h2 = card.querySelector('.card-heading')
   const counter =  setInterval(() => {
      startValue++;
      h2.innerHTML = startValue;
      if (startValue === parseInt(endValue)) {
        clearInterval(counter)
      }

   })
})