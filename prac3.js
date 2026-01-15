// Q1. Create a number variable num with some value.
// Now, print “good” if the number is divisible by 10 and print “bad” if it is not.

let num= 50;

if(num%10==0){
    console.log("good");
}else{
    console.log("bad");
}

// Q3. Write a switch statement to print the months in a quarter.

// Months in Quarter 1: January, February, March

// Months in Quarter 2: April, May, June

// Months in Quarter 3: July, August, September

// Months in Quarter 4: October, November, December

// [Use the number as the case value in switch]

let quarter = 2;

switch(quarter){
    case 1:
        console.log("January , February,  March")
        break;
    case 2:
        console.log("April, May, June")
        break;
    case 3:
        console.log("July, August, September")
        break;
    case 4:
        console.log("October, November, December")
        break;
    default:
        console.log("Invalid quarter");
}


//  Q4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.
// For a given string, print whether it is golden or not.
 
let str= "Apples";

if((str=='A'|| 'a') && (str.length>5)){
    console.log("Golden String");
}
else{
    console.log("Not a Golden String");
}

// Q5. Write a program to find the largest of 3 numbers.

let a= 8;
let b= 9;
let c= 7;

if(a>b && a>c){
    console.log("a is greater than b and c")
}
else if(b>a && b>c){
    console.log("b is greater than a and c")
}
else{
    console.log("c is greater than a and c")
}

// Q6. (Bonus) Write a program to check if two numbers have the same last digit.
// Example: 32 and 47852 have the same last digit, i.e., 2.

let num1= 36;
let num2= 47856;

if(num1%10 == num2%10){
    console.log(`Both have same last digit ${num1%10}`);
}
else{
    console.log(`Both have different last digit`);
}