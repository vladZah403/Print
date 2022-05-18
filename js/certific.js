let link1 = document.querySelector('.link1')
let link2 = document.querySelector('.link2')
let link3 = document.querySelector('.link3')
let link4 = document.querySelector('.link4')

let menu1 = document.querySelector('.menu1')
let menu2 = document.querySelector('.menu2')
let menu3 = document.querySelector('.menu3')
let menu4 = document.querySelector('.menu4')

link2.addEventListener('click', ()=>{
    menu2.style.display = ''
    menu1.style.display = 'none'
    menu3.style.display = 'none'
    menu4.style.display = 'none'
    link2.classList.add('activ_link')
    link1.classList.remove('activ_link')
    link3.classList.remove('activ_link')
    link4.classList.remove('activ_link')
})


link1.addEventListener('click', ()=>{
    menu2.style.display = 'none'
    menu1.style.display = ''
    menu3.style.display = 'none'
    menu4.style.display = 'none'
    link2.classList.remove('activ_link')
    link1.classList.add('activ_link')
    link3.classList.remove('activ_link')
    link4.classList.remove('activ_link')
})

link3.addEventListener('click', ()=>{
    menu2.style.display = 'none'
    menu3.style.display = ''
    menu1.style.display = 'none'
    menu4.style.display = 'none'
    link2.classList.remove('activ_link')
    link1.classList.remove('activ_link')
    link3.classList.add('activ_link')
    link4.classList.remove('activ_link')

})

link4.addEventListener('click', ()=>{
    menu2.style.display = 'none'
    menu3.style.display = 'none'
    menu1.style.display = 'none'
    menu4.style.display = ''
    link2.classList.remove('activ_link')
    link1.classList.remove('activ_link')
    link3.classList.remove('activ_link')
    link4.classList.add('activ_link')

})