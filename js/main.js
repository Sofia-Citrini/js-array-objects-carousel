const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const sliderContainer = document.querySelector(".slider-container");
const titleContainer = document.querySelector('.title-container');
const tnContainer = document.querySelector(".row");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentEl = 0

//stampare le immagini nella pagina 
images.forEach(function (element, index) {
    //immagini
    const imgEl = document.createElement('img');
    imgEl.classList.add('slider-img');
    imgEl.src = element.image;

    //titlo e descrizione
    const descriptionEl = document.createElement('div');
    descriptionEl.classList.add('description')
    descriptionEl.innerHTML = `<h2>${element.title}</h2>
                               <p>${element.text}</p>`

    // thumbnails
    const tnEl = document.createElement('div');
    tnEl.classList.add('col')
    tnEl.innerHTML = `<img class="thumbnail-img" src="${element.image}">`

    if (index === currentEl) {
        imgEl.classList.add('active');
        descriptionEl.classList.add('active');
        tnEl.classList.add('thumbnail-img-active');
    }

    sliderContainer.append(imgEl);
    titleContainer.append(descriptionEl);
    tnContainer.append(tnEl);
})

//Button Prev
prevBtn.addEventListener("click", function () {
    if (currentEl - 1 < 0) {
        currentEl = images.length;
    }

    currentEl--;

    removeClassActive();
    addClassActive();
});

//Button Next
nextBtn.addEventListener("click", function () {
    if (currentEl + 1 >= images.length) {
        currentEl = -1
    }

    currentEl++;

    removeClassActive();
    addClassActive();
});

function removeClassActive() {
    const activeEl = sliderContainer.querySelectorAll('.active');
    const activeTnEl = tnContainer.querySelectorAll('.thumbnail-img-active');

    activeEl.forEach(element => {
        element.classList.remove('active');
    })

    activeTnEl.forEach(element => {
        element.classList.remove('thumbnail-img-active');
    })

    // activeEl.classList.remove('active')
    // activeTnEl. classList.remove('thumbnail-img-active')
}

function addClassActive() {
    const imgEl = sliderContainer.querySelectorAll("img");
    const descriptionEl = titleContainer.querySelectorAll("div");
    const imgTnEl = tnContainer.querySelectorAll("img");

    const nextImg = imgEl[currentEl];
    const nextDescription = descriptionEl[currentEl];
    const nextimgTnEl = imgTnEl[currentEl];

    nextImg.classList.add("active");
    nextDescription.classList.add("active");
    nextimgTnEl.classList.add("thumbnail-img-active");
} 