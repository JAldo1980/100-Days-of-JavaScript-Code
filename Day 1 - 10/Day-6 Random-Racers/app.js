let cars = ["Koenigsegg Agera RS", "Koenigsegg Agera R", "Bugatti Chiron Super Sport", "Koenigsegg One:1 9ff GT9 Vmax", "Hennessey Venom GT '16", "Bugatti Veyron 16.4 Super Sport", "Bugatti Chiron", "Bugatti Chiron Sport", "Koenigsegg Agera", "Hennessey Venom GT", "Rimac Nevera", "Ultimate Aero TT", "Koenigsegg Regera", "Bugatti Veyron", "Grand Sport Vitesse", "Bugatti Veyron Grand Sport", "Porsche 962", "Koenigsegg CCXR", "McLaren Speedtail"]


let speed = ["135", "136", "142", "145", "149", "155", "187", "205", "211", "221", "239", "256"]
let lapTimes = [1.38, 1.42, 1.44, 1.49, 1.52, 1.57, 1.61, 1.66, 1.87, 1.89, 1.91, 1.93, 1.95]

// player 1
let yourCar1 = document.getElementById("your-car-1");
let topSpeed1 = document.getElementById("top-speed-1");
let p1lap1 = document.getElementById("p1-lap-1");
let p1lap2 = document.getElementById("p1-lap-2");
let p1lap3 = document.getElementById("p1-lap-3");
let p1TotalTime = document.getElementById("p1-total-time");

// player 2
let yourCar2 = document.getElementById("your-car-2");
let topSpeed2 = document.getElementById("top-speed-2");
let p2lap1 = document.getElementById("p2-lap-1");
let p2lap2 = document.getElementById("p2-lap-2");
let p2lap3 = document.getElementById("p2-lap-3");
let p2TotalTime = document.getElementById("p2-total-time");

// button
let raceBtn = document.getElementById("race-btn");

// winner 
let winner = document.getElementById("winner");

// functions
raceBtn.addEventListener("click", function () {

    const randomIndexOne = Math.floor(Math.random() * cars.length)
    const randomIndexTwo = Math.floor(Math.random() * cars.length)
    yourCar1.textContent = `${cars[randomIndexOne]}`
    yourCar2.textContent = `${cars[randomIndexTwo]}`

    // speed randomiser

    const randomSpeedOne = Math.floor(Math.random() * speed.length)
    topSpeed1.textContent = `Top speed: ${speed[randomSpeedOne]} MPH`
    const randomSpeedTwo = Math.floor(Math.random() * speed.length)
    topSpeed2.textContent = `Top speed: ${speed[randomSpeedTwo]} MPH`

    // Lap randomiser - p1

    const randomLap1 = Math.floor(Math.random() * lapTimes.length)
    p1lap1.textContent = `Lap 1: ${lapTimes[randomLap1]} mins`
    const randomLap2 = Math.floor(Math.random() * lapTimes.length)
    p1lap2.textContent = `Lap 2: ${lapTimes[randomLap2]} mins`
    const randomLap3 = Math.floor(Math.random() * lapTimes.length)
    p1lap3.textContent = `Lap 3: ${lapTimes[randomLap3]} mins`

    // Player 1 total time 
    let totalTimeP1 = `${lapTimes[randomLap1] + lapTimes[randomLap2] + lapTimes[randomLap3]}`
    p1TotalTime.textContent = `Total Time: ${totalTimeP1} mins`;

    // Lap randomiser - p2

    const randomLap1a = Math.floor(Math.random() * lapTimes.length)
    p2lap1.textContent = `Lap 1: ${lapTimes[randomLap1a]} mins`
    const randomLap2a = Math.floor(Math.random() * lapTimes.length)
    p2lap2.textContent = `Lap 2: ${lapTimes[randomLap2a]} mins`
    const randomLap3a = Math.floor(Math.random() * lapTimes.length)
    p2lap3.textContent = `Lap 3: ${lapTimes[randomLap3a]} mins`

    // Player 2 total time 
    let totalTimeP2 = `${lapTimes[randomLap1a] + lapTimes[randomLap2a] + lapTimes[randomLap3a]}`;
    p2TotalTime.textContent = `Total Time: ${totalTimeP2} mins`;

    if (totalTimeP1 < totalTimeP2) {
        winner.textContent = "Player 1 wins! 🏆"
    } else if (totalTimeP1 > totalTimeP2) {
        winner.textContent = "Player 2 wins! 🏆"
    } else {
        winner.textContent = "It's a draw!! 😱"
    }
})
