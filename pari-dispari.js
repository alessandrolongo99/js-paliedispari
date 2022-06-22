let userNumber = 0;
let userChoice = "";
let numberNotValid = true;
let choiceNotValid = true;

while (choiceNotValid) {
    userChoice = prompt('scegli pari o dispari');
    if (userChoice == 'pari' || userChoice == 'dispari') {
        choiceNotValid = false;
    }
}

while (numberNotValid) {
    userNumber = parseInt(prompt('inserire un numero da 1 a 5'));
    if (userNumber >= 1 && userNumber <= 5) {
        numberNotValid = false;
    }
}

let aiNumber = 0;

function randomAiNumber() {
    return Math.floor((Math.random() * 5) + 1);
}

aiNumber = randomAiNumber();

console.log(`user: ${userNumber}`);
console.log(`ai: ${aiNumber}`);

const sum = userNumber + aiNumber;

console.log(`somma: ${sum}`);

let isEven = 0;

function evenControl(inputNumber) {
    if (inputNumber % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

isEven = evenControl(sum);

if ((isEven && userChoice == 'pari') || (!isEven && userChoice == 'dispari')) {
    console.log('complimenti hai vinto!');
} else {
    console.log('mi spiace hai perso...');
}