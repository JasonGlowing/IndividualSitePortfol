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