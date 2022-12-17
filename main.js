import './style.scss';

import * as bootstrap from  'bootstrap/dist/js/bootstrap.bundle'
// const reactChoice = document.querySelector('.react-choice');
// const reactBtns = document.querySelector('.react-btns');
// const btnLike = document.querySelector('.btn-like');

document.addEventListener('click',(e) =>{
    const parent = e.target.closest('.posts');
    const btnLike = parent.querySelector('.btn-like');
    const reactChoice = parent.querySelector('.react-choice');
    const reaction = reactChoice.querySelector('.reaction');

    btnLike.addEventListener('mousemove',() =>{
        reactChoice.style.display = 'block';
        reactChoice.addEventListener('mouseenter',() => {
            reactChoice.style.display = 'block';
        })
        reactChoice.addEventListener('mouseleave',() => {
            reactChoice.style.display = 'none';
        })
        document.addEventListener('click',() => {
            reactChoice.style.display = 'none';
        }) 
        reaction.addEventListener('click',() =>{
            const currentSvg = document.getElementById("like");
            console.log(currentSvg);
        })
    })
})

