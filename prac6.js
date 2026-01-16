// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

let number = 287152;
let count = 0;
let copy = number;

while (copy > 0) {
    count += 1;
    copy = Math.floor(copy / 10);
}

console.log(count);

// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let number2 = 287152;
let sum = 0;
let copy2 = number2;

while (copy2 > 0) {
    digit = copy2 % 10;
    sum += digit;
    copy2 = Math.floor(copy2 / 10);
}

console.log(sum);


// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.]
// Example :
// 7! (factorial of 7) = 1×2×3×4×5×6×7 = 5040
// 5! (factorial of 5) = 1×2×3×4×5 = 120
// 3! (factorial of 3) = 1×2×3 = 6
// 0! is always 1

let n = 0;
let fact = 1;

for (i = 1; i <= n; i++) {
    fact *= i;
}
console.log(`Factorial ${n} is ${fact}.`)


// Qs5. Find the largest number in an array with only positive numbers.

let array = [23, 45, 5, 67, 82];
let largest = 0;

for (i = 0; i < array.length; i++) {
    if (largest < array[i]) {
        largest = array[i];
    }
}

console.log(largest);

