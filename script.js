window.addEventListener("load",()=>{

document.querySelector(".loader").style.opacity="0";

setTimeout(()=>{

document.querySelector(".loader").style.display="none";

},800);

});

window.addEventListener("scroll",()=>{

const nav=document.querySelector("header");

nav.classList.toggle("sticky",window.scrollY>50);

});