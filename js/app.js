// 1. Verbal questions

// a parameter is a variable that lives inside of a method
// an argument is the value of after its been passed through the method
// is it possible then to have your parameter and agrument be the same?
// thats what it looks like in my Palindrome?

// return is giving you the value of the function 
// where console.log is just showing the output in the console

// Other than returing a function value you can reuse it, pass it through an argument?


// 2. Palindrome
const checkPalindrome = (word) => {
	console.log(word.split("").reverse().join(""))
	word = word.toLowerCase()
	const reversedWord = word.toLowerCase().split("").reverse().join("")
	return reversedWord === word;
	}
	

console.log(checkPalindrome("Borscht"));

console.log(checkPalindrome("Radar"));
   

// 3.Sum of Digits


const sumDigits = (num) => {
    return (num + 4 + 2) % 10 - 2 ;
// I know I got this but I'm a litle confused still
// return (num + 4 + 2) % 10 gets me with the remainder of 6 but why -2?
// when I tried it without I would get 8, just a little foggy on this
}

console.log(sumDigits(42));

// Pythagoras

const calculateSide = (sideA, sideB) => {
    
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

}

// Sum Array


const sum = [1, 2, 3, 4, 5, 6].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);



// Prime Numbers
		
function checkPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(checkPrime(2));

// I'm not sure where to go from here
// I did some googling and found some 
// code that could probaly work, 
// but I didnt understand how 
// and didnt just want to copy and paste
// to have an answer



	