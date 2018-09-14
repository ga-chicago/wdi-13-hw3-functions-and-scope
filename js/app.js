// console.log('it is working')

// Verbal Questions

// 1. A parameter is a variable within a function definition. An arguement
// is the data you pass through a function

// 2. Within a function return will spit out the value that has been
//    stored within a variable. Console.log will just print the info
//	  into the console and no data is stored

// 3. The value that is stored within a function can then be called
//	  later on in your code.

// Palindrome again

// const checkPalindrome = (aStr) => {
// 	const aStrLower = aStr.toLowerCase();
// 	const aStrReversed = aStrLower.split('').reverse().join('');
// 	if(aStrLower === aStrReversed) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(checkPalindrome('RaceCar'));

// Digit Sum

// const sumDigits = (aNum) => {	
// 	let digits = aNum.toString().split('')
// 	let sum = 0;
// 	for(let i = 0; i < digits.length; i++){
// 		sum += Number(digits[i])
// 	}
// 	return sum;
// }
// console.log(sumDigits(5634));

// Pythagoras

// const calculateSides = (sideA, sideB) => {
// 	const aAndBSquared = ((sideA ** 2) + (sideB ** 2));
// 	const answer = Math.sqrt(aAndBSquared);
// 	return answer;
// }
// console.log(calculateSides(25, 6));

// Sum Array

const sumArray = (anArray) => {
	const array = anArray;
	let sum2 = 0;
	for(i = 0; i < array.length; i++) {
		sum2 += array[i];
	}
	return sum2;
}

console.log(sumArray([1, 5, 7, 8, 10, 5]));