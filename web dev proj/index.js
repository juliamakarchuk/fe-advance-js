let toggleMenuBtn=document.querySelector('.menu-hidden');
let menu=document.querySelector('.header-menu');
let headerNavigation= document.querySelector('.header-navigation');
let moreWorksBtn=document.querySelector('.works-btn');
let moreWorksBlocks=document.querySelectorAll('.work-block-hidden');

function toggleMenu(e){
    e.preventDefault();
    console.log(e.target);
    headerNavigation.classList.toggle('header-menu-none');
    console.log('tooogleee');
}
toggleMenuBtn.addEventListener('click', toggleMenu);

function toggleBlock(){
    moreWorksBlocks.forEach(el=>{
        el.classList.toggle('work-block-show');
    })
}
moreWorksBtn.addEventListener('click', toggleBlock);