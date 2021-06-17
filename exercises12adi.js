// returns the smallest number from a and b
// ex. (3,4) -> 3
min = (a, b) => {
  if (a > b) {
    return b;
  } else {
    return a;
  }
};
console.log(min(5, 7));

// returns the largest number from a and b
// ex. (3,4) -> 4
max = (a, b) => {
  if (a < b) {
    return b;
  } else {
    return a;
  }
};
console.log(max(13, 27));

// returns the sum of the three numbers
// ex. (3,4,5) -> 12
sum = (a, b, c) => a + b + c;
console.log(sum(3, 4, 5));

// returns the remainder from dividing number a with b
// ex. (13, 4) -> 1
modulo = (a, b) => a % b;
console.log(modulo(20, 6));

// returns the n-th fibbonacci number
// ex. (5) -> 3 (the sequence being 0, 1, 1, 2, 3, 5, 8, 13, 21, ...)
fibbonacci=(n)=>
{
let n1=0,n2=1,nextTerm;
console.log(n1);
console.log(n2);
nextTerm=n1+n2;
while (nextTerm<=n){
    console.log(nextTerm);
    n1=n2;
    n2=nextTerm;
    nextTerm=n1+n2;
}
return nextTerm
}
console.log(fibbonacci(5))

// returns the factorial of n
// ex. (7) -> 5040
factorial=(n)=>{
    if(n<0)
    return -1;
    else if (n ==0)
    return 1;
    else{return (n* factorial(n-1));}
};
console.log(factorial(7))

// returns a to the power of b
// ex. (2,3) -> 8
power=(a, b)=> a**b;
console.log(power(2,3))

// returns an array of number from "from" to "to"
// ex. (4,9) -> [4,5,6,7,8,9]
generateArray=(from, to)=>{

};

// returns the smallest number from array
// ex. ([2,3,6,3,8,9,3,5,1,7]) -> 1
min=(array)=>{
let minimumNumber=array[2,3,6,3,8,9,3,5,1,7];
let counter=0;
while(counter< array.length){
minimumNumber=min(minimumNumber,array[counter]);
    counter=counter+1;
}
return minimumNumber;
};
console.log(min([2,3,6,3,8,9,3,5,1,7]));

// returns the largest number from array
// ex. ([9,3,4,6,2,3,5,6,8,9]) -> 9
max(array);

// returns the sum of array
// ex. ([1,2,2,3,6]) -> 14
sum(array);

// returns the average of an array
// ex. ([4,8,2,6,4,6,8,10]) -> 6
average(array);

// returns the nth digit of a
// ex. (482739, 3) -> 2
getTheNthDigit(a, n);

// returns the greatest common divisor of a and b
// ex. (6,4) -> 2
greatestCommonDivisor(a, b);

// returns the least common multiple of a and b
// ex. (6,4) -> 12
leastCommonMultiple(a, b);

// returns the number of digits in a
// ex. (3827372829, 2) -> 3
countDigitsInNumber(a, digit);

// returns the occurences number in array
// ex. (7, [3,5,8,6,7,1,4,7]) -> 2
countNumberInArray(number, array);

// returns the number of even numbers in array
// ex. ([2,7,4,6,9,3,3,8,4,8,2,7]) -> 7
countEvensInArray(array);

// returns a big list containing all the elements from a and b
// ex. ([1,2,3,4], [5,6,7,8]) -> [1,2,3,4,5,6,7,8]
mergeLists(a, b);

// returns the elements from the given array between "from" and "to"
// ex. ([1,2,3,4,5,6,7,8,9], 3, 6) -> [4,5,6,7]
getSublist(array, from, to);

// prints number in binary form
// ex. (13) -> pints "1101"
printBinary(number);

// returns true if the number is prime, false otherwise
// ex. (101) -> true
isPrime(a);
