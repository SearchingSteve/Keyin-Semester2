/* Description: PRACTICE QUESTIONS 2: Functions
/* Author: Stephen Crocker */
/* Date: MAY 16, 2024 */

// 1) Given r (radius) of a circle, calculate the area of a circle (A = π * r * r).
function areaCirlce(r) {
    let area =  Math.PI * r * r;
    console.log(area)
}
// Test cases:
areaCirlce(10);
// areaCirlce(20);

// 2.	Simulate rolling a dice using random(). The function should allow the caller to specify any number of sides, but default to 6 if no side count is given: roll() (assume 6 sided, return random number between 1 and 6) vs. roll(50) (50 sided, return number between 1 and 50).[You might need Math class or specifically Math.random() to produce a random number in JavaScript]
function roll(sides = 6) {
    let dice = Math.floor(Math.random() * sides) + 1;
    console.log(dice);
}
// Test cases:
roll(); // Roll with general dice (6 sides)
// roll(10); // Roll with explicitly states sides (10 sides)

// 3.	Write a function that converts values in Celcius to Farenheit: convert(0) should return "32 F".
function convert(celsius) {
    var farenheit = (celsius * 9)/5 + 32;
    console.log("The farenheit degree is: " +farenheit + '°F');
}
// Test cases:
convert(0);
// convert(50);

// 4.	Modify your solution to the previous function to allow a second argument: "F" or "C", and use that to determine what the scale of the value is, converting to the opposite: convert(122, "F") should return "50 C".
function convert2(value, type) {
    if (type === "C") {
        let farenheit =  `${((value * 9/5) + 32)} °F`; // Use toFixed built in method to format decimal points, similar to f strings in python previous semester.
        console.log("The farenheit degree is: " +farenheit);
    } 
    
    else {
        let celcius = `${((value - 32) * 5/9)} C`;
        console.log("The celcius degree is: " +celcius);
    }
}
// Test cases:
convert(122, "F");
// convert(0, "C");

// 5.	Function taking any number of arguments (Numbers), returning true if they are all less than 50: isUnder50(1, 2, 3, 5, 4, 65) should return false.
function isUnder50(...numbers) {
    var len = numbers.length;
    let flag = 0;
    for (var i = 0; i < len; i++){
        if (numbers[i] < 50) continue;
        else flag = 1;
    }
    return flag === 0;
}
// Test cases:
console.log("Are all numbers under 50? " + isUnder50(1, 2, 3, 4, 5, 65));
// console.log("Are all numbers under 50? " + isUnder50(1, 2, 3, 4, 5, 45));


// 6.	Function allowing any number of arguments (Numbers), returning their sum: sum(1, 2, 3) should return 6.
function sum(...numbers) {
    sumval = 0;
    var len = numbers.length;
    for (var i = 0; i < len; i++){
        sumval += numbers[i];
    }
    return sumval;
}
// Test cases:
console.log("The sum of the numbers are: " +sum(1,2,3,4));
// console.log("The sum of the numbers are: " +sum(11,22,33,44));
// console.log("The sum of the numbers are: " +sum(-1,-2,-3,-4));


// 7.	Function to check if a number is a multiple of 3 (returns true or false)
function isMultipleOf3(number) {
    isTrue =  number % 3 === 0;
    console.log("The number is a multiple of 3:" +isTrue);
}
// Test cases:
isMultipleOf3(3);
// isMultipleOf3(5);
// isMultipleOf3(99);


// 8.	Function to subtract a discount % from a total. If no % is given, return the original value.
function applyDiscount(total, discount = 0) {
    afterDiscountTotal =  total - (total * (discount / 100));
    console.log("The after discount total is: "+ afterDiscountTotal);
}
// Test cases:
applyDiscount(100)
// applyDiscount(100, 10)
// applyDiscount(100, 100)


// 9.	Function that takes a number of seconds as a Number, returning a String formatted like "X Days, Y Hours, Z Minutes" rounded to the nearest minute.
function formatTime(seconds) {
    const days = Math.floor(seconds / 86400);
    seconds %= 86400;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.round(seconds / 60);
    combinedTime =  `${days} Days, ${hours} Hours, ${minutes} Minutes`;
    console.log(combinedTime);
}

// Test cases:
formatTime(1);       
// formatTime(60);    
// formatTime(3600);    
// formatTime(86400); 
// formatTime(90060);  
// formatTime(183300); 

// 10.	Modify your solution above to only include units that make sense: "1 Minute" vs. "3 Hours, 5 Minutes" vs. "1 Day, 1 Hour, 56 Minutes" etc
function formatTimeCompact(seconds) {
    const days = Math.floor(seconds / 86400); // Calculate number of days
    seconds %= 86400; 
    const hours = Math.floor(seconds / 3600); // Calculate number of hours
    seconds %= 3600; 
    const minutes = Math.round(seconds / 60); 

    let result = []; // Array to store the result parts
    if (days > 0) result.push(`${days} Day${days > 1 ? 's' : ''}`); // Add days part if more than 0
    if (hours > 0) result.push(`${hours} Hour${hours > 1 ? 's' : ''}`); // Add hours part if more than 0
    if (minutes > 0) result.push(`${minutes} Minute${minutes > 1 ? 's' : ''}`); // Add minutes part if more than 0

    const formattedTime = result.join(', '); // Combine parts into a single string
    console.log(formattedTime); 
}

// Test cases:
formatTimeCompact(60);     
// formatTimeCompact(3600);    
// formatTimeCompact(86400);   
// formatTimeCompact(90060);   
// formatTimeCompact(183300);  
