const CLIENT_WIDTH = document.documentElement.clientWidth;
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const fade = document.querySelector('.menu-fade');
const sliderPrevButton = document.querySelector('.slider__prev')
const sliderNextButton = document.querySelector('.slider__next')
const sliderWrapper = document.querySelector('.slider__wrapper');
const sliderInner = document.querySelector('.slider__inner');
const leftSet = document.querySelector('.slider__left-set');
const activeSet = document.querySelector('.slider__active-set');
const rightSet = document.querySelector('.slider__right-set');
const slideSets = document.querySelectorAll('.slide-set');

let activeRandom;
let leftRan
let rightRandom;


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

// Cards

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
    }
}


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
