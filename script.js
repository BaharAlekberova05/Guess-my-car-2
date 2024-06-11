const scoreElement = document.querySelector('#scoreElement');
const questionMarks = document.querySelectorAll('.questionMark');
const randomCar = document.querySelector('#randomCar');
const btnAgain = document.querySelector('#btnAgain');

const my_cars = [
    {photo: "./images/car-bmw.jpg", name: 'bmw'},
    {photo: "./images/car-camaro.jpg", name: 'camaro'},
    {photo: "./images/car-chevrolet.jpg", name: 'chevrolet'},
    {photo: "./images/car-lamborghini.jpg", name: 'lamborghini'},
    {photo: "./images/car-porsche.jpg", name: 'porsche'},
    {photo: "./images/car-range rover.jpg", name: 'range rover'}
];

let score = 0;

function startNewGame() {
    score = 0;
    scoreElement.innerText = score;

    document.body.style.backgroundColor = '';

    let randomIndex = Math.floor(Math.random() * my_cars.length);
    let secretCar = my_cars[randomIndex].name;
    randomCar.innerHTML = secretCar;

    let shuffledCars = my_cars.sort(() => Math.random() - 0.5);

    for (let index = 0; index < questionMarks.length; index++) {
        let questionMark = questionMarks[index];
        let imgElement = questionMark.querySelector('img');
        imgElement.src = './images/question.jpg';
        questionMark.dataset.carName = shuffledCars[index].name;
        questionMark.dataset.carPhoto = shuffledCars[index].photo;
    }
}

for (let i = 0; i < questionMarks.length; i++) {
    let questionMark = questionMarks[i];
    questionMark.addEventListener('click', () => {
        if (questionMark.dataset.carName === randomCar.innerHTML) {
            score++;
            scoreElement.innerText = score;

            document.body.style.backgroundColor = 'green';

            let imgElement = questionMark.querySelector('img');
            imgElement.src = questionMark.dataset.carPhoto;
        } else {
            score--;
            scoreElement.innerText = score;

            document.body.style.backgroundColor = 'red';
        }
    });
}

btnAgain.addEventListener('click', startNewGame);

startNewGame();