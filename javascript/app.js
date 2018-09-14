/*

1. Verbal questions
Write answers to the following questions as comments.

1. What is the difference between a parameter and an argument?
2. Within a function, what is the difference between return and console.log?
3. What are the implications of the ability of a function to return a value?
 */

//1 A Parameter is inside a function itself that allows arguments to be passed. The argument is usually a string or a number that acts as input into the paramenter of the function. That's my non-googled answer... The internet says a parameter is a variable in a method definition. When the method is called, you pass data into the method's parameters. The argument is the actual value of what's getting passed to the function. So I'm essentially right I think.
//2 return only gives you the information to the program, console.log writes that information out for you to see in the console. 
//3 Code doesn't need to be repeated, you can use the same function for other things. 

/* 
2. 2. Palindrome again.
Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.
*/

/* I don't understand why this isn't working. */
const checkPalindrome = (string) => {
	const reverseString = string.split("").reverse().join("");
		if (string === reverseString) {
			return(true) 
		} else {
			return(false)
		};
		console.log(reverseString.toUpperCase());
};

checkPalindrome('racecar'); 


//3.Write a function sumDigits that accepts a number and returns the sum of its digits.

//Didn't give myself time to finish, set my alarm for 2:30am and basically turned it off while not fully awake. 
const sumDigits = (number) => {
	number = number.split("");
	return number; 
}

console.log(sumDigits(42));

/*4. Pythagoras: Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.*/

const calculateSide = (sideA, sideB) => {

}


/*5 Sum Array
Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. */

const sumArray = (array) => {
	let array = [];
	//
	array = 
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

/* 6. Prime Numbers
A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.

Step One
Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.

Step Two
Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.
*/


