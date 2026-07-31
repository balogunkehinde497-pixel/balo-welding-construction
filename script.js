/* =====================================
   BALO WELDING & CONSTRUCTION COMPANY
   PREMIUM JAVASCRIPT - PART 1
===================================== */

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});



// Sticky Header

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.98)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(0,0,0,.9)";

header.style.boxShadow="none";

}

});



// Counter Animation

const counters=document.querySelectorAll(".stat-box h2");

let counterStarted=false;

function startCounter(){

if(counterStarted) return;

counterStarted=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

});

}

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(stats){

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight-100){

startCounter();

}

}

});
/* =====================================
   PART 2
===================================== */

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}



// Fade-in Animation

const reveals = document.querySelectorAll(

".about,.services,.projects,.contact,.why-us,.testimonials"

);

function revealSections(){

reveals.forEach(section=>{

const top = section.getBoundingClientRect().top;

const windowHeight = window.innerHeight;

if(top < windowHeight - 120){

section.style.opacity = "1";

section.style.transform = "translateY(0)";

}

});

}

reveals.forEach(section=>{

section.style.opacity = "0";

section.style.transform = "translateY(60px)";

section.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealSections);

revealSections();



// Gallery Hover Effect

const images = document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});



// Footer Year

const footer = document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML =

`© ${new Date().getFullYear()} Balo Welding & Construction Company. All Rights Reserved.`;

}



console.log("Balo Welding & Construction Company Website Loaded Successfully.");
