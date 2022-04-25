const CLIENT_WIDTH = document.documentElement.clientWidth;
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const fade = document.querySelector('.menu-fade');
const sliderPrevButton = document.querySelector('.slider__prev')
const sliderNextButton = document.querySelector('.slider__next')
const sliderInner = document.querySelector('.slider__inner');
const leftSet = document.querySelector('.slider__left-set');
const activeSet = document.querySelector('.slider__active-set');
const rightSet = document.querySelector('.slider__right-set');
const popup = document.querySelector('.popup');

let activeRandom;
let leftRan
let rightRandom;


// Открывание меню при нажатии на бургер, случаи закрывания

function showMenu() {
    header.classList.remove('menu-closed');
    header.classList.add('menu-opend');
    header.addEventListener('click', (evt) => {
        if (evt.target.tagName === 'A') {
            closeMenu();
        }
    });

    burger.classList.add('burger_rotate');
    burger.classList.remove('burger_horizontal');
    burger.addEventListener('click', closeMenu);

    fade.addEventListener('click', (evt) => {
        if (evt.target === fade) {
            closeMenu();
        }
    });

    document.body.style.overflow = 'hidden';
}

// Закрывание меню с анимацией

function closeMenu() {
    header.classList.add('menu-closed');

    setTimeout(() => {
        header.classList.remove('menu-opend');
    }, 500)

    burger.classList.add('burger_horizontal');

    setTimeout(() => {
        burger.classList.remove('burger_rotate');
    }, 500)

    document.body.style.overflow = '';

    burger.removeEventListener('click', closeMenu);
    burger.addEventListener('click', showMenu);
}


burger.addEventListener('click', showMenu);

// Данные животных

const petsData = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/cards/pets-jennifer.jpg",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": [
            "none"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/cards/pets-sophia.jpg",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": [
            "parvovirus"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/cards/pets-woody.jpg",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": [
            "adenovirus",
            "distemper"
        ],
        "diseases": [
            "right back leg mobility reduced"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/cards/pets-scarlett.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": [
            "parainfluenza"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/cards/pets-katrine.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": [
            "panleukopenia"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/cards/pets-timmy.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": [
            "calicivirus",
            "viral rhinotracheitis"
        ],
        "diseases": [
            "kidney stones"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/cards/pets-freddie.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": [
            "rabies"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/cards/pets-charly.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": [
            "bordetella bronchiseptica",
            "leptospirosis"
        ],
        "diseases": [
            "deafness",
            "blindness"
        ],
        "parasites": [
            "lice",
            "fleas"
        ]
    }
]

// Генерация массива указанной длинны из неповторяющихся чисел в диапазоне соответствующем количеству животных

function getRandomCards(number) {
    let cardSet = [];

    for (let i = 0; i < number; i++) {
        let randomCard = Math.floor(Math.random() * petsData.length);

        while (cardSet.includes(randomCard)) {
            randomCard = Math.floor(Math.random() * petsData.length);
        }

        cardSet.push(randomCard);
    }

    return cardSet;
}

// Создание карточек в указанном контейнере (set), на основе массива числел (cardSet)

function createCardSet(set, cardSet) {
    for (let i = 0; i < cardSet.length; i++) {
        let card = document.createElement('div');
        card.classList.add('slider__item', 'card');
        set.append(card);

        let cardImage = document.createElement('img');
        cardImage.src = petsData[cardSet[i]].img;
        cardImage.alt = petsData[cardSet[i]].name;
        cardImage.classList.add('card__image');
        card.append(cardImage);

        let cardTitle = document.createElement('span');
        cardTitle.classList.add('card__title');
        cardTitle.innerHTML = petsData[cardSet[i]].name;
        card.append(cardTitle);

        let cardButton = document.createElement('button');
        cardButton.classList.add('button', 'button_secondary', 'card__button');
        cardButton.innerHTML = 'Learn more';
        card.append(cardButton);

        card.setAttribute('data-number', cardSet[i]);
    }
}

// Создание начального состояния слайдера (из указзанного количества карточек) при загрузке страницы
// Карточки в трех блоках не повторяются 

function createSlider(number) {
    activeRandom = getRandomCards(number);
    leftRandom = getRandomCards(number);
    rightRandom = getRandomCards(number);

    while (activeRandom.some(i => leftRandom.indexOf(i) >= 0)) {
        leftRandom = getRandomCards(number);
    }

    while (activeRandom.some(i => rightRandom.indexOf(i) >= 0)) {
        rightRandom = getRandomCards(number);
    }

    createCardSet(activeSet, activeRandom);
    createCardSet(leftSet, leftRandom);
    createCardSet(rightSet, rightRandom);
}

// Отрисовка слайдера на разных экранах

function showCards() {
    if (CLIENT_WIDTH >= 1280) {
        createSlider(3);
        sliderInner.style.left = '-1080px';
    } else if (CLIENT_WIDTH >= 768) {
        createSlider(2);
        sliderInner.style.left = '-620px'
    } else {
        createSlider(1);
        sliderInner.style.left = '-360px'
    }

}

showCards()

// Перемещение блока слайдера влево и вправо

function moveLeft() {
    sliderInner.classList.add('transition-left');
    sliderPrevButton.removeEventListener('click', moveLeft);
    sliderNextButton.removeEventListener('click', moveRight);
}

function moveRight() {
    sliderInner.classList.add('transition-right');
    sliderNextButton.removeEventListener('click', moveRight);
    sliderPrevButton.removeEventListener('click', moveLeft);
}

sliderPrevButton.addEventListener('click', moveLeft);
sliderNextButton.addEventListener('click', moveRight);

// Обработчик назначенный на конец анимации. Класс, отвечающий за анимацию удаляется.
// Карточки левого или правого блока становятся карточками текущего блока.
// Для того блока в чью сторону был осуществлен переход, создаётся новый набор карточек, отличных от карточе текущего блока

sliderInner.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-left' || animationEvent.animationName === 'move-left-mobile' || animationEvent.animationName === 'move-left-tablet') {
        sliderInner.classList.remove('transition-left');

        activeSet.innerHTML = leftSet.innerHTML;
        activeRandom = leftRandom;
        leftSet.innerHTML = '';

        while (activeRandom.some(i => leftRandom.indexOf(i) >= 0)) {
            leftRandom = getRandomCards(leftRandom.length);
        }

        createCardSet(leftSet, leftRandom);
    } else {
        sliderInner.classList.remove('transition-right');

        activeSet.innerHTML = rightSet.innerHTML;
        activeRandom = rightRandom;
        rightSet.innerHTML = '';

        while (activeRandom.some(i => rightRandom.indexOf(i) >= 0)) {
            rightRandom = getRandomCards(rightRandom.length);
        }

        createCardSet(rightSet, rightRandom);
    }

    sliderPrevButton.addEventListener('click', moveLeft);
    sliderNextButton.addEventListener('click', moveRight);
})

// Открытие попапа

function showPopup(cardNumber) {
    popup.classList.remove('popup-close');
    popup.classList.add('popup__opend');

    popup.innerHTML = '<button class="button-round button-round_close popup__close"><span class="visually-hidden">close</span></button>';
    document.body.style.overflow = 'hidden';

    let popupImage = document.createElement('img');
    popupImage.src = petsData[cardNumber].img;
    popupImage.alt = petsData[cardNumber].name
    popupImage.classList.add('popup__image');
    popup.append(popupImage);

    let popupContent = document.createElement('div');
    popupContent.classList.add('popup__content');
    popup.append(popupContent);

    let popupTitle = document.createElement('h3');
    popupTitle.classList.add('popup__title', 'section-title');
    popupTitle.innerHTML = petsData[cardNumber].name;
    popupContent.append(popupTitle);

    let popupSubtitle = document.createElement('div');
    popupSubtitle.classList.add('popup__subtitle');
    popupSubtitle.innerHTML = petsData[cardNumber].type + ' - ' + petsData[cardNumber].breed;
    popupContent.append(popupSubtitle);

    let popupText = document.createElement('p');
    popupText.classList.add('popup__text');
    popupText.innerHTML = petsData[cardNumber].description;
    popupContent.append(popupText);

    let popupList = document.createElement('ul');
    popupList.classList.add('popup__list');
    popupContent.append(popupList);

    let listItem1 = document.createElement('li');
    listItem1.classList.add('popup__li');
    listItem1.innerHTML = `<span style="color: black">Age: ${petsData[cardNumber].age}</span>`;
    popupList.append(listItem1);

    let listItem2 = document.createElement('li');
    listItem2.classList.add('popup__li');
    listItem2.innerHTML = `<span style="color: black">Inoculations: ${petsData[cardNumber].inoculations}</span>`;
    popupList.append(listItem2);

    let listItem3 = document.createElement('li');
    listItem3.classList.add('popup__li');
    listItem3.innerHTML = `<span style="color: black">Diseaases: ${petsData[cardNumber].diseases}</span>`;
    popupList.append(listItem3);

    let listItem4 = document.createElement('li');
    listItem4.classList.add('popup__li');
    listItem4.innerHTML = `<span style="color: black">Parasites: ${petsData[cardNumber].parasites}</span>`;
    popupList.append(listItem4);

    let closePopup = popup.querySelector('.popup__close');
    let fade = document.querySelector('.popup-fade');

    fade.addEventListener('mouseover', () => {
        closePopup.classList.add('popup-fade-hover');
    })

    fade.addEventListener('mouseout', () => {
        closePopup.classList.remove('popup-fade-hover');
    })

    fade.addEventListener('click', () => {
        setTimeout(() => {
            popup.classList.remove('popup__opend');
        }, 700);
        popup.classList.add('popup-close');
        popup.innerHTML = '<button class="button-round button-round_close popup__close"><span class="visually-hidden">close</span></button>';
        document.body.style.overflow = '';
    })

    closePopup.addEventListener('click', () => {
        setTimeout(() => {
            popup.classList.remove('popup__opend');
        }, 700);
        popup.classList.add('popup-close');
        popup.innerHTML = '<button class="button-round button-round_close popup__close"><span class="visually-hidden">close</span></button>';
        document.body.style.overflow = '';
    })
}

sliderInner.addEventListener('click', (evt) => {
    if (evt.target.className === 'slider__item card') {
        showPopup(evt.target.dataset.number);
    }

    if (evt.target.parentElement.className === 'slider__item card') {
        showPopup(evt.target.parentElement.dataset.number);
    }
})
