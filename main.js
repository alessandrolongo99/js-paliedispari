function isPalindrome(word) {
    return word == word.split('').reverse().join('');
}

const userWord = prompt('inserire una parola');
const palindrome = isPalindrome(userWord);

if (palindrome) {
    console.log(`la parola ${userWord} e' palindroma`);
} else {
    console.log(`la parola ${userWord} non e' palindroma`);
}