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


