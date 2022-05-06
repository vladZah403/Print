let burger =  document.querySelector(".header_burger");
let menu = document.querySelector(".header_menu")

burger.addEventListener('click', ()=>{
    if(!burger.classList.contains('active')){
        burger.classList.add('active');
        menu.classList.add('active');
    }else{
        burger.classList.remove('active');
        menu.classList.remove('active');
    }
})