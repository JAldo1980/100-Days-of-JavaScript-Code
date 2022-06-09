

let countEl = document.getElementById("count-el");

let count = 0;

function increment() {

    count += 1;
    // the += is the same as saying 'count = count + 1;
    countEl.textContent = count;
    console.log(count);
}

increment()

let saveEl = document.getElementById("save-el");

function save() {
    let savedCount = count + " -";
    saveEl.textContent += savedCount;
    // remember! The += sign takes into account the previous entry!
    // the below resets the counter once 'save' has been triggered
    count = 0;
    countEl.textContent = 0;
    console.log(count);
}

save();

// I created a 'reset' button below - but the more efficient way of doing resetting things is shown above

// let resetBtn = document.getElementById("reset-btn");

// function reset() {
//     count = 0;
//     countEl.textContent = 0;
// }
// reset()




