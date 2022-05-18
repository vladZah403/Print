let link1 = document.querySelector('.link1')
let link2 = document.querySelector('.link2')
let link3 = document.querySelector('.link3')
let link4 = document.querySelector('.link4')

let menu1 = document.querySelector('.menu1')
let menu2 = document.querySelector('.menu2')

link2.addEventListener('click', ()=>{
    menu2.style.display = ''
    menu1.style.display = 'none'
    link2.classList.add('activ_link')
    link1.classList.remove('activ_link')
})

link1.addEventListener('click', ()=>{
    menu2.style.display = 'none'
    menu1.style.display = ''
    link2.classList.remove('activ_link')
    link1.classList.add('activ_link')
})