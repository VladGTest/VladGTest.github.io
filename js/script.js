const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
})

const percents = document.querySelectorAll('.skills__statistics-precent'),
    lines = document.querySelectorAll('.skills__statistics-scale span');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


