function reverseText(text) {
    let newString = "";
    for (var i = text.length - 1; i >= 0; i--) {
        newString = newString + text[i];
    } return newString
};
console.log(reverseText("BuldogFrancuski"));