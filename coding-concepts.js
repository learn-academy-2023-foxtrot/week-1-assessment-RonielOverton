// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: Code will log the number of characters in a string.
// b) Verify and explain: Output 10  .length counts all characters in a string inculding spaces which adds up to 10.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: Code will return the index of the string. 
// b) Verify and explain: Output 0  Code returned 0 because the variable <greeting> is a string and not an array. 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Code should retrun "Ruby".
// b) Verify and explain: "Ruby" The code returned "Ruby" because <index> is assigned to the number 1 which is the second value in <languages>.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Code will return string as all upper case.
// b) Verify and explain: Output TypeError: weekendDays.toUpperCase is not a function 
    //The code returned a syntax error because <weekendDays> is an array and not a string.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: Code should throw an error.
// b) Verify and explain: Output Number  Code returned number because .length will return number data type.
