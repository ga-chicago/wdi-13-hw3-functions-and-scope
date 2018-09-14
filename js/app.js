console.log('hello');

//VERBAL QUESTIONS

//1. What is the difference between a parameter and an argument?

// The parameters are within the function definition, and the arguments are the values that you pass into the function that you call.

// 2. Within a function, what is the difference between return and console.log?

//Returning a value produces it onto the page, console log is for the user to check the work(verifying it works).

//3. What are the implications of the ability of a function to return a value?

//By returning the value, it actually gives you a tangeable function that you can use.



// 2. PALINDROME AGAIN

// Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.



const checkPalindrome = (words) => {
	const reverseWord = words.split('').reverse().join('');
	// console.log(reverseWord);
	console.log(words.toUpperCase());
if(words.toUpperCase() === reverseWord.toUpperCase()) {
	return true;
} else {
	return false;
}
}

 console.log(checkPalindrome('Mom'));



//DIGIT SUM

// Write a function sumDigits that accepts a number and returns the sum of its digits.

const sumDigits = (num) => {
	//this code works, but will not go past the number 9
	//I do not understand how to accomplish this
	return (num - 1) % 9 +1;
} 
console.log(sumDigits(34));


//PYTHAGORAS


// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.


const calculateSide = (sideA,sideB) => {
	//a2 + b2 = c2 Math sqrt(Squares it)Math,Power(to the power)
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))};
console.log(calculateSide(5,12));



//SUM ARRAY

// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array.

// const sumArray = (a,b) => {
// 	let getSum [1,2,3].reduce(add, 0);
// 		return a + b;

// }
// console.log(sum)



//PRIME NUMBERS 

// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.

	const checkPrime = (num) => {
		for(let i = 2; i < num; i++) {
			if(num % i === 0) {
				return false;
			}
		}
		 return num > 1;
	}
console.log(checkPrime(22))

	const printPrime = (total) => {
		for (i = 0; i < total; i++) {
			if (checkPrime(i))
				// return true;
			console.log(i);
		}
	}
console.log(printPrime(167));




































