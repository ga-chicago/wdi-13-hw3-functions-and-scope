// Part 1. Verbal Questions

// 1. Paramenters are placeholders for values used when writing functions. 
// If a function has parameters, they are listed when the function is written, 
// like so: 
// const function = (parameter1, parameter2) => {}

// Arguments are the actual values, which are stated when the function is called, 
// like so: 
// function(argument1, argument2);

// 2. console.log() displays whatever content it contains in the console, 
// where developers can review it. It's useful for testing fuctions, loops, etc. 
// and for communicating with other devs, but not much else. 

// Return ends the execution of a function and returns the value(s) 
// that result from it. 

// 3. If a fuction doesn't have a return statment, it has not means by which
// to give anything other than the default/input value back. i.e., 
// if a function can't return a new value, it's not really doing anything. 


//2. Palindrom again

const isPalindrom = (word) => {
	const forwards = (word.toLowerCase());
 	const backwards = (forwards.split("").reverse().join("")); 
 	if (forwards === backwards) {
		return `Woo hoo! ${word} is Palindrome!`;
	} 	else return `Uh oh, ${word} is not a palindrome :(`; 
}



// console.log(isPalindrom('RaCeCar'));

// console.log(isPalindrom('mAmam'));