let itens = document.getElementById('menu')
let icons = document.getElementById('icon')

function menuOnClick() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

let menuLinks = itens.getElementsByTagName('a'); 

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', menuOnClick);
}