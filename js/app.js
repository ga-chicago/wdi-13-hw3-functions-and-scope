// 1. Verbal questions

// a parameter is a variable that lives inside of a method
// an argument is the value of after its been passed through the method
// is it possible then to have your parameter and agrument be the same?
// thats what it looks like in my Palindrome?

// return is giving you the value of the function 
// where console.log is just showing the output in the console

// Other than returing a function value you can reuse it, pass it through an argument?



const checkPalindrome = (word) => {
	// console.log(word.split("").reverse().join(""))
	word = word.toLowerCase()
	const reversedWord = word.toLowerCase().split("").reverse().join("")
	return reversedWord === word;
	}
	

console.log(checkPalindrome("Borscht"));

console.log(checkPalindrome("Radar"));
   





