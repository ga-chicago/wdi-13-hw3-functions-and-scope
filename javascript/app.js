console.log("JS is running!");

// Setup
// Fork/clone this repo as directed by your instructor. Inside the repo, create the usual folder structure. Write your answers in app.js, following the instructions in today's lab



// 1. Verbal questions
// Write answers to the following questions as comments.

// What is the difference between a parameter and an argument?
// When defining a function, one may also include parameters to that function.
// When calling the function, if parameters are required (as per the declaration), one must call and list arguments.
// Arguments are the data that what will be processed through the function.

// Within a function, what is the difference between return and console.log?
// return can be 'invoked' to say what will be the value held by the function it is at the end of. It also happens to be shown on the user's console.
// console.log() is just a JavaScript embedded function that prints text to the console.

// What are the implications of the ability of a function to return a value?
// return being able to return a value implies one will simply be able to invoke the function (with its arguments) to refer to actual results of the function.

// 🔴 **Commit your work.** 
// The commit message should read: 
// "Commit 1 - Verbal questions".
////////////////////////////////////////////////////////////////////////////////////////////////////



// 2. Palindrome again.
// Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.
const checkPalindrome = (string) => {
	// Split string
	let stringSplit = string.split('');
	// Reverse elements order
	let stringReverse = stringSplit.reverse();
	// Join back together
	let stringJoin = stringReverse.join('').toLowerCase();
	// Are string and reverse equal?
	if (string.toLowerCase() === stringJoin) {
		return true;
	} else {
		return false;
	}
}
// //  // Also Tried this vvv Can't make it to work...
// const checkPalindrome = (string) => {
// 	// Just in case
// 	console.log('string: ' + string);
// 	// Declare array
// 	const stringArray = [];
// 	// Store string into array .push()
// 	// Transform string .toLowerCase
// 	stringArray.push(string.toLowerCase());
// 	console.log('stringArray: ' + stringArray);
// 	// Declare stringArrayReverse
// 	const stringArrayReverse = [];
// 	// Push into array the following
// 	// Split word string into array of letter strings .split('')
// 	// .reverse() them
// 	// .join('') them back together
// 	stringArrayReverse.push(string.toLowerCase().split('').reverse().join(''));
// 	console.log('stringArrayReverse: ' + stringArrayReverse);

// 	while (stringArray !== stringArrayReverse || stringArray == null || stringArrayReverse == null) {
// 		return false;
// 	};
// 	return true
// }

console.log(checkPalindrome("Radar"));
//  => true
console.log(checkPalindrome("Borscht"));
// => false

// 🔴 **Commit your work.** 
// The commit message should read: 
// "Commit 2 - Palindrome".
////////////////////////////////////////////////////////////////////////////////////////////////////



// 3. Digit Sum
// Write a function sumDigits that accepts a number and returns the sum of its digits.
const sumDigits = (number) => {
	// This is absolutely brilliant (I did NOT come up with this) I'm looking up the math behind it.
	// Okay so: Modulo 9 counts the number of 10s in a number (and gives us a remainder of 1 each time)
	return (number - 1) % 9 + 1;
}
console.log(sumDigits(42));
// => 6;

// 🔴 **Commit your work.** 
// The commit message should read: 
// "Commit 3 - Digit Sum".
////////////////////////////////////////////////////////////////////////////////////////////////////



// 4. Pythagoras
// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.
const calculateSide = (sideA, sideB) => {
	return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

console.log(calculateSide(8, 6));
// => 10

// 🔴 **Commit your work.** 
// The commit message should read: 
// "Commit 4 - Pythagoras".
////////////////////////////////////////////////////////////////////////////////////////////////////



// 5. Sum Array
// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array.
const sumArray = (array) => {
	// From what I understand .reduce() makes us able to iterate through an array
	// According to MDN .reduce() "executes a reducer function [...] on each member of the array resulting in a single output value."
	return array.reduce((a, b) => a + b, 0)
}

// Expected result:
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21

// 🔴 **Commit your work.** 
// The commit message should read: 
// "Commit 5 - Sum Array".
////////////////////////////////////////////////////////////////////////////////////////////////////



// 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.
// const checkPrime = (num) => {
// 	// Start with 2 because 1 is its own special special case
// 	if (num === 1) {
// 		return `1 is a special case!`;
// 	}
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			return false;
// 		}
// 		return num !== 1;
// 	}
// }
// console.log(checkPrime(13));

// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.

const checkPrime = (num) => {
	// Start with 2 because 1 is its own special special case
	if (num === 1) {
		return `1 is a special case!`;
	}
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return num !== 1;

}

// Create array that will hold values that will be found when checkPrime is invoked in printPrime
const listPrimes = [];

const printPrimes = (numLimit) => {
	// loop up to the number and check each one
	for (let j = 1; j <= numLimit; j++) {
		// CALL FUNCTION to make it available!
		checkPrime(j);
		if (checkPrime(j) === true) {
			listPrimes.push(j);
		}
	}
	console.log(listPrimes);
}
// console.log(checkPrime(13));
console.log(printPrimes(97));

// 🔴 **Commit your work.** 
// The commit message should read: 
// "Commit 6 - Prime Numbers".
////////////////////////////////////////////////////////////////////////////////////////////////////



// CSS
// Watch the following three videos on CSS:

// First CSS video - 5 minutes
// Second CSS video - 11 minutes
// Third CSS video - 17 minutes
// You will need to have watched these videos for tomorrow's lab.

// Hungry for more?
// Complete the afternoon lab.

// Write a function insertDash that accepts a number as a parameter and returns a string with a dash inserted between any consecutive odd numbers. There should not be a dash at the end, it goes only between numbers.

// console.log(insertDash(454793));

// => 4547-9-3
// Commit.
// Write a function reverseString that takes a string as a parameter and returns that string with the letters reversed without using .split(), .reverse(), or .join().

// Commit.

// Make your palindrome function from problem two above work regardless of spacing (or capitalization). So, for example, "Sit on a potato pan Otis" or "Bird rib" would pass the test.

// Commit.

// Make your palindrome function work even if the string contains punctuation. So: "Sit on a potato pan, Otis!!!" or "A man, a plan, a canal: Panama." would pass the test.

// Commit.

// Make a "word palindrome" function that returns true if the words in a phrase are the same backwards and forwards. It should not care about spacing, capitalization, or punctuation. For example the following string would pass the test:

// "Son, I am able," she said. "Though you scare me, watch!" said I, "Beloved," I said, "watch me scare you!" Though, said she: "able am I, son."

// Commit.

// You still want more?!?! Do you even sleep? Create an account on Project euler and keep working on those problems.

// 🔴 **Commit your work.** 
// The commit message should read: 
// "Commit 7 - HUNGRY FOR MORE - INSANITY MODE".
////////////////////////////////////////////////////////////////////////////////////////////////////



















