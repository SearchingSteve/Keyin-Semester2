/* Description: PRACTICE QUESTIONS 1: Basic JavaScript (statement, conditional, loops)  */
/* Author: Stephen Crocker */
/* Date: MAY 8, 2024 */



// Q1
var label = "keyincollege";
var tld = "ca";
var domainName = label+"."+tld;
console.log(domainName);

// Q2
if (domainName === "keyincollege.ca"){
    var isKeyin = true;
}
else {
    var isKeyin = false;
}
console.log("Are keyin domain names the same?"+isKeyin);

// Q3
if (isKeyin){
    isNotKeyin = false;
}
else{
    isNotKeyin = true;
}

console.log("Are keyin domain names not the same?"+isNotKeyin);


// Q4
var byte1 = 192
var byte2 = 168
var byte3 = 2
var byte4 = 1

// Q5
ipAddress = byte1+"."+byte2+"."+byte3+"."+byte4;
console.log("IP Address: " + ipAddress);

// Q6 - Unlike example, this solves from n to n, forming a perfect times table.
var table = 15; 

for (var i = 1; i <= table; i++) {
    console.log(table + " X " + i + " = " + (table * i));
}


// Q7
for (var i =1; i<=100; i++){
    if (i%2){
        console.log("Even: "+i)
    }
    else{
        console.log("Odd: " +i)
    }
}

// Q8
var sum = 0;
for (var i =1; i<=100; i++){
    if (i%2){
        sum += i;
    }
}
console.log("Total Sum of Even #'s: "+sum)

// Q9
num = 28
perfectNumSum =0;
for (var i=1; i<= num; i++){
    if (num/i == type(int)){
        perfectNumSum += num/i
    }
}
if (num = perfectNumSum){
    console.log(num+ " is a perfect number.")
}
else{
    console.log(num+ " is not a perfect number.")
}


// Q10
var number = 37;
var isPrime = true; // Assume number is prime until proven otherwise

// Base case, if 0 or 1, Not prime and no need to continue 
if (number < 2) {
    isPrime = false;
}
else {
    // Check every number from 2 to the square root of number
    for (let i = 2; i <= Math.sqrt(number); i++) { 
        if (number % i === 0) {
            isPrime = false;
            break; // If a divisor is found, stop checking
        }
    }
}

if (isPrime) {
    console.log(number + " is Prime");
} else {
    console.log(number + " is not Prime");
}

    

