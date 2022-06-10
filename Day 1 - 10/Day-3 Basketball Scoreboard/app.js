let scoreBox = document.getElementById("score-box");
let scoreBox1 = document.getElementById("score-box1");

let score = 0;
let score1 = 0;


// HOME TEAM

function plus1() {
    score += 1;
    scoreBox.textContent = score;
    scoreBox.style.color = 'red';
    scoreBox.style.fontSize = '7rem';
    scoreBox.style.fontFamily = "Cursed Timer ULiL";
}
plus1();

function plus2() {
    score += 2;
    scoreBox.textContent = score;
    scoreBox.style.color = 'red';
    scoreBox.style.fontSize = '7rem';
    scoreBox.style.fontFamily = "Cursed Timer ULiL";
}
plus2();

function plus3() {
    score += 3;
    scoreBox.textContent = score;
    scoreBox.style.color = 'red';
    scoreBox.style.fontSize = '7rem';
    scoreBox.style.fontFamily = "Cursed Timer ULiL";
}
plus3();

function reset() {
    score = 0;
    scoreBox.textContent = score;
    scoreBox.style.color = 'red';
    scoreBox.style.fontSize = '7rem';
    scoreBox.style.fontFamily = "Cursed Timer ULiL";
}

reset();


// AWAY TEAM

function add1() {
    score1 += 1;
    scoreBox1.textContent = score1;
    scoreBox1.style.color = 'red';
    scoreBox1.style.fontSize = '7rem';
    scoreBox1.style.fontFamily = "Cursed Timer ULiL";
}
plus1();

function add2() {
    score1 += 2;
    scoreBox1.textContent = score1;
    scoreBox1.style.color = 'red';
    scoreBox1.style.fontSize = '7rem';
    scoreBox1.style.fontFamily = "Cursed Timer ULiL";
}
plus2();

function add3() {
    score1 += 3;
    scoreBox1.textContent = score1;
    scoreBox1.style.color = 'red';
    scoreBox1.style.fontSize = '7rem';
    scoreBox1.style.fontFamily = "Cursed Timer ULiL";
}
plus3();

function reset1() {
    score1 = 0;
    scoreBox1.textContent = score1;
    scoreBox1.style.color = 'red';
    scoreBox1.style.fontSize = '7rem';
    scoreBox1.style.fontFamily = "Cursed Timer ULiL";
}

reset1();

scoreBox.textContent = 0;
scoreBox1.textContent = 0;