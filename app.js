const generateEl = document.getElementById('generate-password')
const passwordOneEl = document.getElementById('first-password')
const passwordTwoEl = document.getElementById('second-password')

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


let passLength = 16


generateEl.addEventListener('click', function () {
    let passcode = randomPassword()
    passwordOneEl.textContent = passcode
})

generateEl.addEventListener('click', function () {
    let passcode = randomPassword()
    passwordTwoEl.textContent = passcode
})


function randomPassword() {
    let password = ""
    for (let i = 1; i <= passLength; i++) {
        let randNum = Math.floor(Math.random() * characters.length)
        password += characters[randNum]
    }
    return password
}


