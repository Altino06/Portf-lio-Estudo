let botaoMenu = document.getElementById ('botaoMenu')
let menu = document.getElementById ('menuMob')
let overlay = document.getElementById ('overlayMenu')

botaoMenu.addEventListener('click',()=> {
    menu.classList.add('abrirMenu')
})

menu.addEventListener('click',()=> {
    menu.classList.remove('abrirMenu')
})

overlay.addEventListener('click',()=> {
    menu.classList.remove('abrirMenu')
})
