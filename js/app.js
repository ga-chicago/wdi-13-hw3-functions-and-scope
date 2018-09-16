// Part 1. Verbal Questions

// 1. Paramenters are placeholders for values used when writing functions. 
// If a function has parameters, they are listed when the function is written, 
// like so: 
// const function = (parameter1, parameter2) => {}

// Arguments are the actual values, which are stated when the function is called, 
// like so: 
// function(argument1, argument2);

// 2. console.log() displays whatever content it contains in the console, 
// where developers can review it. It's useful for testing fuctions, loops, etc. 
// and for communicating with other devs, but not much else. 

// Return ends the execution of a function and returns the value(s) 
// that result from it. 

// 3. If a fuction doesn't have a return statment, it has not means by which
// to give anything other than the default/input value back. i.e., 
// if a function can't return a new value, it's not really doing anything. 


//2. Palindrom again

const isPalindrom = (word) => {
	const forwards = (word.toLowerCase());
 	const backwards = (forwards.split('').reverse().join('')); 
 	if (forwards === backwards) {
		return `Woo hoo! ${word} is Palindrome!`;
	} 	else return `Uh oh, ${word} is not a palindrome :(`; 
}



// console.log(isPalindrom('RaCeCar'));

// console.log(isPalindrom('mAmam'));


// 3. sumDigits

const sumDigits = (x) => {
	const digits = x.toString().split('');
	let parsed = [];
	const reducer = (accumulator, currentValue) => accumulator + currentValue; //figured I needed to define a second function within the first - is that allowed?
	for (i = 0; i < digits.length; i ++) {
		parsed.push(parseInt(digits[i])) 
	} return parsed.reduce(reducer) 
};


// console.log(sumDigits(81000));
// console.log(sumDigits(546));
// console.log(sumDigits(919));


// 4. Pythagoras

const calculateSide = (sideA, sideB) => {
	const sideC = Math.sqrt((sideA * sideA) + (sideB * sideB));
	return sideC;
};

// console.log(calculateSide(3, 4));
// console.log(calculateSide(12, 15));
// console.log(calculateSide(60, 221)); //had to look up another perfect triangle to check. 


// 5. sumArray

const sumArray = (array) => {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	// const sum = [];
	// for (i = 0; i <= arr.length; i++) {
	// 	sum.push(arr[i])
	// } 								// <-- didn't end up needing this. 
	const sum = array.reduce(reducer); 
	return sum;
};

// console.log(sumArray([1, 19, 22]));
// console.log(sumArray([4, 5, 41]));
// console.log(sumArray([103, 102, 45]));


// 5. Prime Numbers

const checkPrime = (x) => {
	for (i = 2; i < x; i++) {
		if (x % i === 0) {
			return false;
		}
	} return true;
};

// console.log(checkPrime(11));
// console.log(checkPrime(6));
// console.log(checkPrime(29));
// console.log(checkPrime(55));
// console.log(checkPrime(43));


// 6. CSS