let strings = [
    'Прогер',
    'Музыкант',
    'Пригожин Вагнер (мой одногруппник не хочет чтобы я это удалял)',
    'Халяль'
];

let typed = new Typed('#typed', {
    strings: strings,
    typeSpeed: 20,
    backSpeed: 20,
    loop: true
});

function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

function toggleContacts() {
    document
        .getElementById("contactsPanel")
        .classList.toggle("active");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("sidebar").classList.remove("active");
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