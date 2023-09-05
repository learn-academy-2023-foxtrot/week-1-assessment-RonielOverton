// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code:
//Function: signature
// Input: number
// Outout: is number above or below boiling point
// Process: write a conditional statement the determines if number is above or below boiling point
// const num1 = 3
// const num2 = 550
// const num3 = 212
const boilingPoint = (num) => {
    if (num <= temperature1) {
        return "below boiling point"
    } else if (num > temperature2) {
        return "above boiling point"
    } else if (num === temperature3) {
        return "at boiling point"
    } else {
        return "NO WATER!"
    }
}
console.log(boilingPoint(212))
// Output: console.log(boilingPoint(4)) below boiling point
// Output: console.log(boilingPoint(500)) above boiling point
// Output: console.log(boilingPoint(212)) at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
//variable: two
//input: two arrays that will combine
//output: combined arrays that returns the inde value 
//Process: .length and concatenation
const captainPlanet = () => {
    return padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length
}
console.log(captainPlanet());
// Output: 9


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code:
//Input: string value
//Output: string value reversed using .reverse() .split() .join()    (.reverse() can only mutates arrays)

const flip = () => {
    let arr = currentCohort.split("")
    return arr.reverse().join("")
    
}
console.log(flip());
//Output: TypeError: arr.reverse.join is not a function (this one blocked me lol)
// New Output: 3,2,0,2, ,t,o,r,t,x,o,F
// New Output: 3202 tortxoF 

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Pseudo code:
//Function: variable 
//Input: two variables to iterate through
//Output: the last index of the two variables

const lastIndex = () => {
    
    return numberOfConnections.lastIndexOf(givenValue1, givenValue2)
}
console.log(lastIndex());
//Output: 7  (Only outputs givenValue1 when having two parameters)