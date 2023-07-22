let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});