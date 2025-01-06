// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe"; // string
let age = 25; // number
let isStudent = true; // boolean
let hobbies = ["reading", "gaming", "coding"]; // array
let user = { name: "John", age: 25 }; // object

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

// Operators
function calculator() {
    let firstNumber = parseFloat(prompt("Enter the first number:"));
    let secondNumber = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            alert("Invalid operation.");
            return;
    }
    alert(`Result: ${result}`);
}

// Functions
function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript assignment.`;
}

// Part 2: JavaScript Control Structures

// If Statements
let userAge = parseInt(prompt("Enter your age:"));
if (userAge >= 18) {
    document.getElementById("dynamic-content").innerHTML += "<p>You are eligible to vote.</p>";
} else {
    document.getElementById("dynamic-content").innerHTML += "<p>You are not eligible to vote.</p>";
}

// Loops
let ol = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    ol.appendChild(li);
}
document.getElementById("dynamic-content").appendChild(ol);

// Part 3: Introduction to the DOM

// Modifying HTML Elements
document.querySelector("h1").textContent = "JavaScript in Action!";
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);

// Call the calculator function
calculator();
