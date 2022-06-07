const hamburgerMenuIcon = document.querySelector('.hamburger');

const menu = document.querySelector('.hamburgerMenu');

const toggleMenu = function() {
    menu.classList.toggle('open');  
}

hamburgerMenuIcon.addEventListener('click', toggleMenu);