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
	for(let i = 0; i < digitsArray.length; i++) {
		sum = (sum + Number(digitsArray[i]));
	};
	return(sum);
};

console.log(sumDigits(987698765439874574));

const calculateSide = (sideA, sideB) => {
	// sideA^2 + sideB^2 = sideC^2
	// sideC = sqrt(sideA^2 + sideB^2) ---- sideC is what we want
	const sideC = Math.sqrt((Math.pow(sideA, 2))+(Math.pow(sideB, 2)));
		return sideC;
}

console.log(calculateSide(34, 40));

const sumArray = (array) => {
	let total = 0;
	for(let i = 0; i < array.length; i++) {
		total += Number(array[i]);
	};
	return(total);
};

console.log(sumArray([45, 2, 3,9, 76]));

const checkPrime = (num) => {
	const squareRoot = Math.floor(Math.sqrt(num));
	for(let i = 2; i < squareRoot; i++) {
		if(num % i === 0) {
			return(false);
		}
}
return true;
};

console.log(checkPrime(95));

const printPrimes = (testNumber) => {
	for(let i = 2; i <= testNumber; i++) {
		if(checkPrime(i) === true) {
			console.log(i);
		}
	}
}
printPrimes(97);

// Got printPrimes to work, had true as string and not Boolean.
