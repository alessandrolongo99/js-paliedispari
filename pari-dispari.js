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
    userNumber = prompt('inserire un numero da 1 a 5');
    if (userNumber >= 1 && userNumber <= 5) {
        numberNotValid = false;
    }
}

let aiNumber = 0;

