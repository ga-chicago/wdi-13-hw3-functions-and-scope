console.log("works");

//--------------Verbal Questions------------//
// What is the difference between a parameter and an argument?
//--A parameter is the variables passed through a function. An argument is the actual value of the variable that gets passed to the function.
// Within a function, what is the difference between return and console.log?
//--return stops a function running and returns a value to the user. returns execution to the calle--console.log logs out information to the console
// What are the implications of the ability of a function to return a value?
//-return spits out data from a function that you can use else where in your code

//--------------Palindrome again------------//

// Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.
const checkPalindrome = (word) => {
	const reverseWord = word.split("").reverse().join("").toUpperCase();
	console.log(reverseWord)
// console.log(word.toUpperCase());
	if (word.toUpperCase() === reverseWord.toUpperCase()){
		return true
	} else {
		return false
}
}
console.log(checkPalindrome("Mom"));

//--------------Digit Sum------------//
//Write a function sumDigits that accepts a number and returns the sum of its digits..l


const sumDigits = (num) => {
	return (num + 1) % 9 - 1;

}

console.log(sumDigits(12));

//---------------Pythagoras-------------//
//
// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.
// hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript
//declared variable 
const calculateSide = (sideA, sideB) => {
	//returns value --> the square root of sideA&sideB to the 2nd power
	return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

}
//console log the function, and putting parameters in
console.log(calculateSide(5,1));

//------------------Sum Array------------------//
//
// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array.
//I want to start with zero and add each value of the array to our initial value until we've looped through the whole array. 
const sumArray = function(arr){
  return arr.reduce(function(a,b){
    return a + b
  }, 0);
}


//-----------------Prime Numbers-----------------//
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.

// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.

//declaring function checkPrime that takes the parameter num
const checkPrime = (num) =>{
	//for loop that starts at 2 all the way up to our num. then adds one
	for(let i = 2; i<num; i++ ) {
		//if the remainder of the num  with the current value being looped is zero, we know it's not prime
		if (num % i === 0){
			//return false
			return false
		}
	}
	//return num is greater than 1
		return num > 1;
	}
console.log(checkPrime(23));
//i seriously don't get any of this. I just dont get it. It's so discouraging.

// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.

const printPrime = (total) => {
	for (let i = 0; i<total; i++){
		if (checkPrime(i))
			console.log(i);
	}
}
console.log(printPrime(167));
