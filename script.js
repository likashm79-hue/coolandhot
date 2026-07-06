const menuBtn=document.querySelector(".menu-btn");
const mobile=document.querySelector(".mobile-menu");
const closeBtn=document.querySelector(".close-btn");

menuBtn.onclick=()=>{

mobile.classList.add("show");

}

closeBtn.onclick=()=>{

mobile.classList.remove("show");

}

window.onload=()=>{

setTimeout(()=>{

document.querySelector(".loader").classList.add("hide");

},1200);

}
