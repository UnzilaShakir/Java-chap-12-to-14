// Chap 12
// Q no 1
var asciiValue = +prompt("please enter a single character")
// 48 to 57 for numbers 0 to 9
// 65 to 90 for uppercase letter A-Z
// 97 to 122 for lowercase letter a-z

if (asciiValue >= 48 && asciiValue <= 57){
    alert("The character is a number")
} else if (asciiValue >=65 && asciiValue <=90){
    alert("The character is an uppercase letter")
} else if(asciiValue >= 97 && asciiValue <= 122){
    alert("The character is a lowercase letter")
}
else{
    alert("The character is not a number or letter")
}

// Q no 2
var num1 = +prompt("Enter the first integer")
var num2 = +prompt("Enter the second integer")

if(num1 === num2){
    console.log("Both numbers are equal")
}else if (num1 > num2){
    console.log(num1 + " " + "is larger")
}
else{
    console.log(num2 + " " + "is larger")
}

// Q no 3
var num = +prompt("Enter a number")

if(num > 0){
    alert("The number is positive")
}else if(num < 0){
    alert("The number is negative")
}
else{
    alert("The number is zero")
}

// Q no 4
var char = prompt("Enter a single character")

if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    alert("True")
}else{
    alert("False")
}

// Q no 5
var password = "hey246895"
var userpassword = prompt("Enter your password")

if(password == userpassword){
    alert("Correct!")
}else{
    alert("Incorrect")
}

// Q no 6
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting); 

// Q no 7
var usertime = +prompt("Enter time in 24- hour format (e.g = 1900 for 7pm)")

if (usertime > 0 && usertime < 1200){
    alert("Good morning")
}
else if (usertime > 1200 && usertime < 1700){
    alert("Good afternoon")
}
else if (usertime >= 1700 && usertime < 2100){
    alert("Good evening")
}
else if (usertime >= 2100 && usertime < 2359){
    alert("Good night")
}
else{
    alert("Invalid time entered . Please enter a time between 0000 and 2359")
}

// Chap 10
// Q no 1
var city = "karachi"
if(city == "karachi"){
    console.log("The city of lights")
}

// Q no 2
var z = prompt('Enter the value of z');
var y = z ;
var x = z ;
var newVar = z;
if(x === y){
    console.log("The value of z is assigned to newVar")
}

// Q no 3
var ZipCode = prompt("Enter ZipCode:");

if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}


// Q no 4
var x = 1;  

if (x === 1) {  
    x = 3;  
}
console.log(x);

// Chap 11
// Q no 1
var x  = "a"
var z = "b"
if(x !== z){
     console.log("x is not equal to y")
}

// Q no 2
var x = 5
var y = 3
if(x >= y){
    console.log("True")
}

// Q no 3
var x = 10;  // Initial value of x

if (x !== 5) {  // Test if x is not equal to 5
    x = 5; // Assign a new value (5) to x if the condition is true
}
console.log(x);


// Q no 4
var num1 = 10;
var num2 = 5;
if(num1 !== num2){
    alert("congraulations!")
}

// Q no 5
var myname = "Mr David"
var yourname = prompt("Enter your name")

if(myname !== yourname){
    alert("No match")
}else{
    alert("match")
}


// Chap 12
// Q no 1
var num1 = 20
var num2 = 10
if(num1 >= num2){
    alert("correct")
}
else{
    alert("wrong")
}

// Q no 2
var totalmarks = +prompt("Enter total marks");
var obtainmarks = +prompt("Enter obatined marks");

var percentage = (obtainmarks / totalmarks) * 100;

if(percentage >= 90){
    alert("A+")
} else if (percentage >= 80){
      alert("A")
} else if (percentage >= 70){
        alert("B")
} else if (percentage >= 60){
    alert("C")
} else if (percentage >= 50){
    alert("D")
} 
else{
    alert("fail");
}

alert("Your percentage is" + " " + percentage + "%");

// Q no 3
var a = 10; 

if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);

}


// Q no 4
var city = prompt("Enter your city:");

if (city === "Karachi") {
    alert("You entered Karachi, the City of Lights!");
} else if (city === "Lahore") {
    alert("You entered Lahore, the Heart of Pakistan!");
} else {
    alert("You entered a different city.");
}

// Chap 13

// Q no 1
var a = 5
var b = 5
var c = 8
var d = 8
if (a === b && c === d) {
    console.log("the condition is  true")
}

// Q no 2
var a = 5
var b = 5
var c = 8
var d = 8
if (a === b && c !== d) {
    console.log("the condition is  true")
}

// Q no 3
var username = prompt("Enter your name")
var age = +prompt("Enter your age")

if ((username === "Hamza" || username === "Arsalan") && age < 60) {
    alert("true")
}

// Q no 4
var num1 = 5; 
var num2 = 10; 

if (num1 < num2 || num1 > num2) {
    alert("The first variable is either less than or greater than the second variable.");
}

// Q no 5
var firstname = "Mr John"
var lastname = "Harry"
var userfirstname = prompt("Enter your first name")
var userlastname = prompt("Enter your last name")

if(firstname == userfirstname && lastname == userlastname){
    alert("Your name is true")
}else{
    alert("write your correct name")
}

// Chap 14
// Q no 1
var password = prompt("Enter your password:");
var Mypassword = 8;

if (password !== "") {  
    if (Mypassword <= 5) {  
        alert("Password must be greater than 5");
    } else {
        alert("Password OK");
    }
} else {
    alert("Password cannot be empty!");
}

// Q no 2
 var a = 1; 
var c = 100;  
var Max = 100; 
if (a === 1) {
    if (c === Max) {
        alert("OK");
    }
}


// Q no 3
 var a = 1; 
var c = 100;  
var Max = 100; 
if (a === 1 && c === Max) {
    alert("OK");
}

// Q no 4
var num1 = 10; 
var num2 = 10;

if (num1 === num2) { 
    if (num1 <= num2) {  
        alert("Both conditions are true: num1 equals num2 and num1 is less than or equal to num2.");
    }
}



















