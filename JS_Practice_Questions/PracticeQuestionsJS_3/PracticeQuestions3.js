/* Description: PRACTICE QUESTIONS 3: More functions and intro to JS built in methods
/* Author: Stephen Crocker */
/* Date: MAY 20, 2024 */

// Question 1: Reverse a Number
function reverseNumber(num) {
    let numStr = num.toString();
    let reversedStr = numStr.split('').reverse().join('');
    return parseInt(reversedStr, 10);
  }
  // Test case
  let x = 12345;
  console.log(reverseNumber(x)); 
  

  // Question 2: Alphabetical Order
  function alphabetOrder(str) {
    return str.split('').sort().join('');
  }
  // Test case
  console.log(alphabetOrder("keyincollege")); 
  

  // Question 3: Get the Extension of a Filename
  function getFileExtension(filename) {
    let lastDotIndex = filename.lastIndexOf('.');
    return filename.substring(lastDotIndex + 1);
  }
  // Test case
  console.log(getFileExtension('document.txt')); 
  

  // Question 4: Get the Current Date
  function getCurrentDate() {
    let date = new Date();
    return date.toDateString();
  }
  // Test case
  console.log(getCurrentDate());
  

  // Question 5: Capitalize the First Letter
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // Test case
  console.log(capitalize('hello')); 
  

  // Question 6: Check for Period
  function checkPeriod(str) {
    if (str.includes('.')) {
      return 'contain period';
    } else {
      return 'does not contain period';
    }
  }
  // Test case
  console.log(checkPeriod('hello.world')); 
  // console.log(checkPeriod('helloworld'));
  

  // Question 7: Put Suffix to Number
  function putSuffix(num) {
    if (num === undefined) return;
  
    let suffix = 'th';
    if (num % 10 === 1 && num % 100 !== 11) {
      suffix = 'st';
    } else if (num % 10 === 2 && num % 100 !== 12) {
      suffix = 'nd';
    } else if (num % 10 === 3 && num % 100 !== 13) {
      suffix = 'rd';
    }
  
    return num + suffix;
  }
  // Test case
  console.log(putSuffix(22)); 
  // console.log(putSuffix(23)); 
  // console.log(putSuffix(11));
  // console.log(putSuffix()); 
  