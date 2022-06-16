let balls = ["🔴", "🔵", "🔴", "🔵", "🔵", "🔴", "🔵"]

let blueShelf = document.getElementById("blue-shelf");
let redShelf = document.getElementById("red-shelf");

function sortBalls() {

    for (i = 0; i < balls.length; i++) {
        if (balls[i] === "🔴") {
            blueShelf.textContent += "🔴"
        } else if (balls[i] === "🔵") {
            redShelf.textContent += "🔵"
        }
    }
}

sortBalls();