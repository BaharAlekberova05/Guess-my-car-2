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
    // Reset the score
    score = 0;
    scoreElement.innerText = score;

    // Reset the background color
    document.body.style.backgroundColor = '';

    // Pick a new random car
    let randomIndex = Math.floor(Math.random() * my_cars.length);
    let secretCar = my_cars[randomIndex].name;
    randomCar.innerHTML = secretCar;

    // Shuffle the cars
    let shuffledCars = my_cars.sort(() => Math.random() - 0.5);

    // Update question marks with the question image
    questionMarks.forEach((questionMark, index) => {
        let imgElement = questionMark.querySelector('img');
        imgElement.src = './images/question.jpg';
        questionMark.dataset.carName = shuffledCars[index].name;
        questionMark.dataset.carPhoto = shuffledCars[index].photo;
    });
}

// Add event listeners to each question mark
questionMarks.forEach((questionMark) => {
    questionMark.addEventListener('click', () => {
        // Check if the car name matches the secret car
        if (questionMark.dataset.carName === randomCar.innerHTML) {
            // Increase the score and update the score element
            score++;
            scoreElement.innerText = score;

            // Change the background color to green
            document.body.style.backgroundColor = 'green';

            // Update the image source to show the car's photo
            let imgElement = questionMark.querySelector('img');
            imgElement.src = questionMark.dataset.carPhoto;
        } else {
            // Decrease the score and update the score element
            score--;
            scoreElement.innerText = score;

            // Change the background color to red
            document.body.style.backgroundColor = 'red';
        }
    });
});

// Add event listener to the "Again" button
btnAgain.addEventListener('click', startNewGame);

// Start the game initially
startNewGame();