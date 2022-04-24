const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const fade = document.querySelector('.menu-fade');

// Открывание и закрывание меню при нажатии на бургер

function toggleMenu() {
    header.classList.toggle('menu-closed');
    header.classList.toggle('menu-opend');
    burger.classList.toggle('burger_rotate');

    if (header.classList.contains('menu-opend')) {
        document.body.style.overflow = 'hidden';
        header.addEventListener('click', closeMenu);
        fade.addEventListener('click', closeMenu);
    } else {
        document.body.style.overflow = '';
    }
}

// Закрывание меню при переходе по ссылкам и при нажатии на подложку

function closeMenu(evt) {
    if (evt.target.tagName === 'A' || evt.target === fade) {
        header.classList.remove('menu-opend');
        burger.classList.remove('burger_rotate');
        header.classList.add('menu-closed');
        document.body.style.overflow = '';
    }
}


burger.addEventListener('click', toggleMenu);