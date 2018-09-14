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
	
console.log(word.toUpperCase());
//


	if (word.toUpperCase() === reverseWord.toUpperCase()){
		return true
	} else {
		return false
}
}
console.log(checkPalindrome("Mom"));


