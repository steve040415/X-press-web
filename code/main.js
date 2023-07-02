const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=> {
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})
const main = document.querySelector('body');
document.querySelector('input').addEventListener("click", buttonFunction);

function buttonFunction() {
    if(main.classList.contains('dark')) {
        main.classList.remove('dark');
    }
    else {
        main.classList.add('dark');
    }
}
const dropDown = document.querySelector('button');
const navList = document.querySelectorAll("nav a");
const nav = document.querySelector('nav');
const tick = document.querySelector('.switch');
dropDown.addEventListener("click", navMenu);
function navMenu() {
    if(getComputedStyle(navList[0]).display=='none') {
        for(let i=0; i<navList.length; i++) {
            navList[i].style.display = "initial";
            tick.style.display = "none";
        }
    }
    else {
        for(let i=0; i<navList.length; i++) {
            navList[i].style.display = "none";
            tick.style.display = "inline-block";
        }
    }


}
