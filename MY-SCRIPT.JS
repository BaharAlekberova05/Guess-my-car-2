const scoreElement = document.querySelector('#scoreElement');
const questionMarks = document.querySelectorAll('.questionMark');
const randomCar = document.querySelector('#randomCar');
const btnAgain = document.querySelector('#btnAgain');
const image = document.querySelector('#image');

const my_cars = [
    {photo: "./images/car-bmw.jpg", name: 'bmw'},
    {photo: "./images/car-camaro.jpg", name: 'camaro'},
    {photo: "./images/car-chevrolet.jpg", name: 'chevrolet'},
    {photo: "./images/car-lamborghini.jpg", name: 'lamborghini'},
    {photo: "./images/car-porsche.jpg", name: 'porsche'},
    {photo: "./images/car-range rover.jpg", name: 'range rover'}
];

let score = 0;

let randomIndex = Math.floor(Math.random() * my_cars.length);
let secretCar = my_cars[randomIndex].name;
randomCar.innerHTML = secretCar;


for(let i = 0; i < questionMarks.length; i++) {
    let questionMark = questionMarks[i];

    questionMark.addEventListener('click', function() {
        if (randomCar === secretCar) {
            image.src = my_cars[randomIndex].photo;
        }
    })
}