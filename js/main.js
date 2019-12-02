let hmbr = document.getElementsByClassName('hamburger')[0]
let lines = document.getElementsByClassName('line')
let mbmenu = document.getElementsByClassName('mobile-menu')[0]

hmbr.addEventListener('click', () => {
    lines[0].classList.toggle('activeLine1')
    lines[1].classList.toggle('activeLine2')
    lines[2].classList.toggle('activeLine3')
    mbmenu.classList.toggle('active')
})