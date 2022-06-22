function isPalindrome(word) {
    let i = 0;
    let check = true;
    while ((i != word.length / 2) && (check)) {
        if (word[i] != word[word.length - 1 - i]) {
            check = false;
        }
        i++;
    }

    return check;
}

const userWord = prompt('inserire una parola');
const palindrome = isPalindrome(userWord);

if (palindrome) {
    console.log(`la parola ${userWord} e' palindroma`);
} else {
    console.log(`la parola ${userWord} non e' palindroma`);
}