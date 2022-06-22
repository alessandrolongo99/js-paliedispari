// function isPalindrome(word) {
//     return word == word.split('').reverse().join('');
// }

function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const userWord = prompt('inserire una parola');
const palindrome = isPalindrome(userWord);

if (palindrome) {
    console.log(`la parola ${userWord} e' palindroma`);
} else {
    console.log(`la parola ${userWord} non e' palindroma`);
}