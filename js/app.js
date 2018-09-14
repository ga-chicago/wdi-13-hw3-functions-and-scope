//1. What is the difference between a parameter and an argument?
//Parameters are the names given to the variables that a function accepts
//Arguments are the specific values passed to the function

//2. Within a function, what is the difference between return and console.log?
//Return yields a value for use by a program; console.log outputs content
//for viewing on the console.

//3. What are the implications of the ability of a function to return a value?
//There are intermediate or final values used by programs that aren't
//seen by the user.

//2. Palindrome again
const checkPalindrome = (word) => {
	let reversed = "";
	for(let i = 0; i < word.length; i++) {
		reversed = word[i].toLowerCase() + reversed;
	}
	if(word.toLowerCase() === reversed) {
		return true;
	} else {
		return false;
	}
}

//3. Digit sum
const sumDigits = (number) => {
	const string = number.toString();
	const array = string.split('');
	let sum = 0;
	for(let i = 0; i < string.length; i++) {
		sum += Number(array[i]);
	}
	return sum;
}

//4. Pythagoras
const calculateSide = (sideA,sideB) => {
	return Math.sqrt(sideA**2 + sideB**2);
}

//5. Sum Array
const sumArray = (array) => {
	let sum = 0;
	for(let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

//6. Prime Numbers
//Function to check whether a number is prime
const checkPrime = (number) => {
	let factorCheck = 0;
	for(let i = 0; i <= Math.sqrt(number); i++) {
		if(number % i === 0) {
			factorCheck ++;
		}
	}
	if(factorCheck === 1) {
		return true;
	} else {
		return false;
	}
}

//Function to print all primes up to an arbitrary number
const printPrimes = (limit) => {
	for(let i = 0; i <= limit; i++) {
		if(checkPrime(i) === true) {
			console.log(i);
		}
	}
}




















