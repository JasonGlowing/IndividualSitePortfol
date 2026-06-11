let strings = [
    'Прогер',
    'Музыкант',
    'Я не знаю что тут писать?'
];

let typed = new Typed('#typed', {
    strings: strings,
    typeSpeed: 20,
    backSpeed: 20,
    loop: true
});


function toggleContacts() {
    document
        .getElementById("contactsPanel")
        .classList.toggle("active");
}

let currentSlide = 0;

function changeSlide(step) {
    const slides = document.querySelectorAll(".slide");

    slides[currentSlide].classList.remove("active");

    currentSlide += step;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(() => {
    changeSlide(1);
}, 5000);