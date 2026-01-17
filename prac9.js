// Qs1. Write a JavaScript function that returns array elements larger than a number

let arr = [8, 9, 3, 4, 7, 6];
let num = 5;

function largerElements() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
largerElements();

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"


// Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.
let str = "Apple"
function countVowels(str){
    let count=0;
    str = str.toLowerCase();
    for(i=0;i<str.length;i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count++;
        }
    }
    return count;
}
console.log(countVowels(str));

// Qs5. Write a JavaScript function to generate a random number within a range
// (start, end).

function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(4,10));







