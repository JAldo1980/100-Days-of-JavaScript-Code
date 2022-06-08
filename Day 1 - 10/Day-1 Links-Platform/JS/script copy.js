const email = document.getElementById("email");
const btn = document.getElementById("btn");

// now I need to hide the input field...
document.getElementById("email").style.position = "absolute";
email.style.top = '-9999px';
email.style.left = '-9999px';


btn.onclick = function () {
    // step 1 - select text
    email.select();

    // step 2 - copy the text
    document.execCommand("copy");
}
