const toggleButton = document.getElementById('menuToggle');
const menu = document.querySelector('.nav')

const handleToggleMenu = function() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
}

toggleButton.addEventListener('click', handleToggleMenu, false);
menu.addEventListener('click', handleToggleMenu, false);
