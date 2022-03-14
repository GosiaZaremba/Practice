function isPalindrom(word) {

    let original = word.split(" ").join("");
    let reversed = original.split("").reverse().join("");

    if (original.toLowerCase() == reversed.toLowerCase()) {
        return true;
    }
    else
        return false;
}

console.log(isPalindrom("Devil")); // => false
console.log(isPalindrom("madam")); // => true
console.log(isPalindrom("Do geese see God")); // => true
console.log(isPalindrom("Was it a cat I saw")); // => true
console.log(isPalindrom("Devil lived")); // => true
console.log(isPalindrom("infoShare Academy")); // => false
// console.log(isPalindrom(array));
