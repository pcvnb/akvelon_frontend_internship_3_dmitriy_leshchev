/**
 * Reverses the bits in an integer.
 * For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
 * @param {number} number 
 */
function reverseBits(number) {
    let binaryNumber = number.toString(2);
    let binaryNumberReversed = binaryNumber.split("").reverse().join("");
    let decimalNumberReversed = parseInt(binaryNumberReversed, 2).toString(10);
    return decimalNumberReversed;
}

let tests = [417, 267, 0, 2017, 1023, 1024, Number.MAX_SAFE_INTEGER];
for (let testValue of tests) {
    console.log(reverseBits(testValue));
}


/**
 * Counts factorial of number
 * @param {number} number 
 * @returns number
 */
function factorial(number) {
    let result = 1;
    for (; number !== 0; number--) {
        result *= number;
    }
    return result
}
let tests2 = [4, 7, 17];
for (let testValue of tests2) {
    console.log(factorial(testValue));
}


/**
 * 
 * @param {string} str given string
 * @returns  only unique words in the string, all words are separated only by space
 */
function getUniqueWords(str) {
    let uniqueWords = [];
    let wordsFromStr = str.split(' ');
    for (word of wordsFromStr) {
        if (!uniqueWords.includes(word)) uniqueWords.push(word);
    }
    console.log(uniqueWords)
    return uniqueWords.join(" ");
}

let tests3 = ["easy come easy go", "first things first", ""];
for (let testValue of tests3) {
    console.log(getUniqueWords(testValue));
}