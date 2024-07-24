
/* Description: PRACTICE QUESTIONS 4 ON STRING FUNCTIONS AND REGULAR EXPRESSIONS */
/* Author: Stephen Crocker */
/* Date: MAY 30, 2024 */


/***********************************************************
 * Problem 1: Filtering "hello" string occurrnces from array
 **********************************************************/

var salutations = [
  "bye",
  "hello123",
  "newhello",
  "he20llo",
  "hello",
  "abchello",
  "xyzabc",
];

let salutations2 = [
    'Hello',
    'hello1',
    'goodbye',
    'no',
    "NoHello",
    "No-142hello",
]


// Problem 1 - Solution 1 (using .filter function):
function getHello(arr) {
  let helloRegEx = /hello/i;
  let helloArr = arr.filter(element => helloRegEx.test(element)); // Filter and return elements containing 'hello'
  helloArr.forEach(element => console.log(element)); // Assign elements to new array
}

// Problem 1 - Solution 2 (using .map function):
function getHello(arr) {
  let helloRegEx = /hello/i;
  arr.map(element => {
    if (helloRegEx.test(element)) {
      console.log(element);
    }
  });
}

// Test cases:
getHello(salutations); // Call getHello() method with salutations as parameter value
getHello(salutations2);



/********************************************************
 * Problem 2: Replace every string "10" with string "Ten"
 *******************************************************/

var strWith10 =
  "There are 10 people in room number 10. Call all of the 10 people outside";

function replaceTen(str) {
 return str.replace(/10/g, "Ten"); // Find ReGEX "10" and replace with "Ten"
  
}

// Test Cases
console.log(replaceTen(strWith10));
console.log(replaceTen("There are 10 10 10 Ten 10 people in the room"));


/****************************************************************************
 * Problem 3: clean-up formatting of text.  Specifically, make a given string
 ***************************************************************************/

function cleanUp(str) {
  // 1) One space vs. two spaces after a period, question mark, or exclamation point
  str = str.replace(/([.?!])\s+/g, "$1 ");

  // 2) Single-quotes vs. double-quotes
  str = str.replace(/"/g, "'");

  // 3) Remove any spaces after ( and before )
  str = str.replace(/\(\s+/g, "(");
  str = str.replace(/\s+\)/g, ")");

  return str;
}

// Test cases
console.log(cleanUp('This is a sentence.  This is another.'));
console.log(cleanUp('One!  Two?  Three.'));
console.log(cleanUp('This is "fun."')); 
console.log(cleanUp('A ( red) dog arrived.')); 
console.log(cleanUp('A (red  ) dog arrived.')); 
console.log(cleanUp('A (    red ) dog arrived.')); 


/********************************************************
 * Problem 4: fix the formatting of Canadian Postal Codes
 *******************************************************/
function fixPostalCode(postalCode) {
  const validfirstChars = 'ABCEGHJKLMNPRSTVXY';
  const validPrecedingLetters = 'ABCEGHJKLMNPRSTVWXYZ';

  // 1) Remove any leading/trailing whitespace
  postalCode = postalCode.trim();

  // 2) Convert everything to UPPER case letters
  postalCode = postalCode.toUpperCase();

 // 3) Ensure fourth character is a space.
 postalCode = postalCode.replace(/-/g, ' ').replace(/(\w{3})(\w{3})/, '$1 $2');

 // 4) Make sure the order and format of the letters/numbers is correct
 const validPostalCodeFormat = new RegExp(`^[${validfirstChars}]\\d[${validPrecedingLetters}] \\d[${validPrecedingLetters}]\\d$`);
  
 if (!validPostalCodeFormat.test(postalCode)) {
   throw new Error("Invalid Canadian postal code format");
 }

 return postalCode;
}

// Test cases
try {
  console.log(fixPostalCode("a1a1a1")); // Valid Postal code
  console.log(fixPostalCode(" a1a-1a1 ")); // Valid Postal code
  console.log(fixPostalCode("A1A1A1")); // Valid Postal code
  console.log(fixPostalCode("B1C-2e3")); // Valid Postal code
  console.log(fixPostalCode("b1c 2e3")); // Valid Postal code
  console.log(fixPostalCode("a1b2c3")); // Valid Postal code
  // console.log(fixPostalCode("u1b2c3")); // Not valid - Throws error
  //console.log(fixPostalCode("a1c 2d3")); // Not valid - Throws error
} catch (e) {
  console.error(e.message);
}


/************************************************************************
 * Problem 5: convert a valid Canadian Postal Code to a Canadian Province
 ***********************************************************************/
function toProvince(postalCode, useLongForm = false) {
  // Create Object mapping using nested dictionaries to hold each short and long key pair
  const provinceMap = {
    'A': { short: 'NL', long: 'Newfoundland and Labrador' },
    'B': { short: 'NS', long: 'Nova Scotia' },
    'C': { short: 'PE', long: 'Prince Edward Island' },
    'E': { short: 'NB', long: 'New Brunswick' },
    'G': { short: 'QC', long: 'Quebec' },
    'H': { short: 'QC', long: 'Quebec' },
    'J': { short: 'QC', long: 'Quebec' },
    'K': { short: 'ON', long: 'Ontario' },
    'L': { short: 'ON', long: 'Ontario' },
    'M': { short: 'ON', long: 'Ontario' },
    'N': { short: 'ON', long: 'Ontario' },
    'P': { short: 'ON', long: 'Ontario' },
    'R': { short: 'MB', long: 'Manitoba' },
    'S': { short: 'SK', long: 'Saskatchewan' },
    'T': { short: 'AB', long: 'Alberta' },
    'V': { short: 'BC', long: 'British Columbia' },
    'X': { short: 'NT', long: 'Nunavut, Northwest Territories' },
    'Y': { short: 'YT', long: 'Yukon' }
  };

  try {
    postalCode = fixPostalCode(postalCode);
  } catch (e) {
    return null;
  }

  const firstChar = postalCode.charAt(0);
  const province = provinceMap[firstChar];

  if (!province) {
    return null;
  }

  return useLongForm ? province.long : province.short;
}

// Test cases
console.log(toProvince('M5W1E6')); // Returns 'ON'
console.log(toProvince('M5W 1E6')); // Returns 'ON'
console.log(toProvince('M5W 1E6', true)); // Returns 'Ontario'
console.log(toProvince('M5W')); // Returns null


/**********************************************************************************************************************************
 * Problem 6: A JavaScript function checkFirstChar( value ) that checks whether or not the first character in a string is uppercase.
 **********************************************************************************************************************************/
function checkFirstChar(str) {
  return /^[A-Z]/.test(str) ? "String's first character is uppercase" : "String's first character is not uppercase";
}

// Test cases
console.log(checkFirstChar('Keyin')); // Returns "String's first character is uppercase"
console.log(checkFirstChar('keyin')); // Returns "String's first character is not uppercase"


/*************************************************************************************************************************************
 * Problem 7: A JavaScript function validEmail( str ) that checks whether or not an email by using a general email regular expression.
**************************************************************************************************************************************/
function validEmail(email) {
  // Corrected regular expression for validating an email address
  const correctFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return email.match(correctFormat) ? "Valid email" : "Not valid email";
}

// Test cases
console.log(validEmail('Keyin@gmail.com')); // Returns "Valid email"
console.log(validEmail('keyin')); // Returns "Not valid email"
console.log(validEmail('keyin@yahoo.ca')); // Returns "Valid email"
console.log(validEmail('keyin@yahoo.c')); // Returns "Valid email"


/*********************************************************************************************************************
 * Problem 8: A JavaScript function myTrimFunction( str ) that works like a .trim( )[built-in funciton] of JavaScript.
*********************************************************************************************************************/
function myTrimFunction(str) {
  const trimmedStr = str.replace(/^\s+|\s+$/g, '');
  return trimmedStr;
}

// Test cases
console.log(myTrimFunction("          Keyin College       ")); // Returns "Keyin College"
console.log(myTrimFunction("   College")); // Returns "College"


/***********************************************************************************
 * Problem 9: A JavaScript function validateHTML( str ) that checks for an html tag.
***********************************************************************************/
function validateHTML(str) {
  const htmlTagRegEx = /^<\w+>$/;
  return htmlTagRegEx.test(str);
}

// Test cases
console.log(validateHTML("b")); 
console.log(validateHTML("<b>")); 
console.log(validateHTML("<html>")); 
console.log(validateHTML("h<tml>")); 