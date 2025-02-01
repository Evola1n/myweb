


// Появление навигации при прокрутке
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('scroll', function() {
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if(elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  });