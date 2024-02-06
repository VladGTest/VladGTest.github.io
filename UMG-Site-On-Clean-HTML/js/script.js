const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__navigation-wrapper');

const closeElem = document.querySelector('.hamburger');

const arrowDown = document.getElementsByClassName('arrow__down');

const footerList = document.getElementsByClassName('footer__list');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    if(menu.classList.contains('active'))
        document.body.style.overflow = "hidden";
    else
        document.body.style.overflow = "auto";

});

for(let i = 0; i < arrowDown.length;i++){
    arrowDown[i].addEventListener('click', ()=>{
        arrowDown[i].classList.toggle('active');
        footerList[i].classList.toggle('active');
    })
    
}




// for(const arrow of arrowDown){
//     arrow.addEventListener('click', () => {

//         footerList.classList.toggle('active');
//     });
// }
// arrowDown.addEventListener('click', () => {
//     footerList.classList.toggle('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
//     clo.classList.remove('active');
// });


// closeElem.addEventListener('click', () => {
//     menu.classList.remove('-active');
// })

