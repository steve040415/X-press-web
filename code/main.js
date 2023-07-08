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
const navList = document.querySelectorAll("aside a");
const nav = document.querySelector('aside');
dropDown.addEventListener("click", navMenu);
function navMenu() {
    if(getComputedStyle(navList[0]).display=='none') {
        for(let i=0; i<navList.length; i++) {
            navList[i].style.display = "grid";
        }
    }
    else {
        for(let i=0; i<navList.length; i++) {
            navList[i].style.display = "none";
        }
    }


}

/*const home = document.getElementById("home");
const hist = document.getElementById("history");
const gallery = document.getElementById("gallery");
const videos = document.getElementById("videos");
const music = document.getElementById("music");

const mediaQueryList = window.matchMedia("(max-width: 600px)");

function add(e) {
  if (e.matches) {
    alert("hello world");
    home.insertAdjacentHTML("beforebegin","<nav class='main-nav'>");
    const mainnav = document.querySelector(".main-nav");
    mainnav.appendChild(home);
    mainnav.appendChild(music);
    mainnav.appendChild(videos);
    mainnav.appendChild(gallery);
    mainnav.appendChild(hist);
  }
}

mediaQueryList.addListener(add);*/