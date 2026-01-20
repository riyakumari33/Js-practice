// Check if all numbers in an array are multiple of 10 

let arr = [20,10,30,40,50,70];
let mul = arr.every((el) => ( el % 10 == 0));
console.log(mul);

// create a function to find min element in the array

let arr2 = [20,10,30,40,50,70,5];
let min = arr2.reduce((less,el) => {
    if (el<less){
        return el;
    }else{
        return less;
    }
});
console.log(min);
