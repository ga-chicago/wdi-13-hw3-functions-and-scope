console.log("up and running");


// 1. A parameter is a varible that is used to declare a function within the (), while an argument consists of the actually values you pass into a function when you invoke that function i.e. const someFunction (parameter) => {} vs. someFunction(argument);
// 2. Return gives the function a value within your program when the program is run while console.log will display the result of the invoked function within your console
// 3. The ability to return a value within a function allows you to store this value within a variable or call upon the result after it is returned

const checkPalindrome = (word) => {
	newWord = word.toUpperCase();
	if(newWord === newWord.split("").reverse().join("")) {
		return(`${word} is a palindrome`)
	}
};

console.log(checkPalindrome("Madam"));

const sumDigits = (numbers) => {
	const digits = numbers.toString();
	const digitsArray = digits.split("");
	console.log(digitsArray)
	let sum = 0;
	for(i = 0; i < digitsArray.length; i++) {
		sum = (sum + Number(digitsArray[i]));
	};
	return(sum);
};

console.log(sumDigits(987698765439874574));