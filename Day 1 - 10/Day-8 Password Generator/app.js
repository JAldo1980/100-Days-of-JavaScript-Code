const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passwordOne = document.getElementById("password-1");
let passwordTwo = document.getElementById("password-2");
let btn = document.getElementById("btn");
let passwordLength = 12;


btn.addEventListener("click", function () {

    // generate random character - for this, we will need a function...

    function getRandomCharacter() {
        let randomChar = Math.floor(Math.random() * characters.length);
        return characters[randomChar];

        // The formula above creates an randomised character. It is then stored in a variable -> randomChar.
        // characters object is then returned with the [variable] next to it.
    }

    // Now we have set up the random character, we need to create a function that will generate a 12 character password...

    // generating the password - here is the second function...

    function generateRandomPassword() {
        let randomPassword = ""
        for (let i = 0; i < passwordLength; i++) {
            randomPassword += getRandomCharacter()
        }
        return randomPassword
    }

    // Now I need to run the above function - to do that I will create two variables...

    const generatedPasswordOne = generateRandomPassword();
    const generatedPasswordTwo = generateRandomPassword();

    // now I must print these out via HTML...

    passwordOne.textContent = generatedPasswordOne;
    passwordTwo.textContent = generatedPasswordTwo;


    console.log("Here is a random password: ", generatedPasswordOne)
    console.log("Here is a random password: ", generatedPasswordTwo)


    // copy to clip board

})



