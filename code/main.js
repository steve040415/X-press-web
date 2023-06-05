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