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
const titleContainer = document.querySelector('.title-container')
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentImg = 0;

//stampare le immagini nella pagina 
images.forEach(function (element, index){
    console.log(element.image, element.title)
    console.log(index)

    const imgEl = document.createElement ('img');
    imgEl.classList.add('slider-img');
    imgEl.src = element.image;

    const titleEl = document.createElement('h2');
    titleEl.textContent = element.title;

    const textEl = document.createElement('p');
    textEl.textContent = element.text;

    if (index === currentImg) {
        imgEl.classList.add('active');
        titleEl.classList.add('active');
        textEl.classList.add('active');
    }

    sliderContainer.append(imgEl);
    titleContainer.append(titleEl, textEl)
    // sliderContainer.innerHTML += `<img src="${element.image}" class="slider-img ${active}">`
})

prevBtn.addEventListener ("click", function(){



});

nextBtn.addEventListener ("click", function(){



});

