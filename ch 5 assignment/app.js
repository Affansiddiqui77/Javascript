
// Q1: Addition
console.log("QUESTION 1: ADDITION");
var num1 = 10;
var num2 = 5;
var sum = num1 + num2;
console.log("Sum: " + sum);

// Q2: 
console.log("QUESTION 2: ARITHMETIC OPERATIONS");

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
console.log("Modulus: " + modulus);

// Q3: 
console.log("QUESTION 3: VARIABLE OPERATIONS");

var value;

console.log("Value after variable declaration is: " + value);

value = 5;
console.log("Initial value: " + value);

value++;
console.log("Value after increment is: " + value);

value = value + 7;
console.log("Value after addition is: " + value);

value--;
console.log("Value after decrement is: " + value);

var remainder = value % 3;
console.log("The remainder is: " + remainder);

// Q4: 
console.log("QUESTION 4: MOVIE TICKETS");

var ticketPrice = 600;
var numberOfTickets = 5;
var totalTicketCost = ticketPrice * numberOfTickets;

console.log("Price of one ticket: " + ticketPrice + " PKR");
console.log("Number of tickets: " + numberOfTickets);
console.log("Total cost: " + totalTicketCost + " PKR");

// Q5: 
console.log("QUESTION 5: MULTIPLICATION TABLE");

var tableNumber = 4;

for (var i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

// Q6: 
console.log("QUESTION 6: TEMPERATURE CONVERTER");

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

console.log(celsius + "°C is " + fahrenheit + "°F");

var fahrenheitTemp = 77;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

console.log(fahrenheitTemp + "°F is " + celsiusTemp + "°C");


// Q7: 
console.log("QUESTION 7: SHOPPING CART");

var item1Price = 500;
var item2Price = 800;
var item1Quantity = 2;
var item2Quantity = 1;
var shippingCharges = 200;
var totalCost =
    (item1Price * item1Quantity) +
    (item2Price * item2Quantity) +
    shippingCharges;

console.log("Price of item 1: " + item1Price + " PKR");
console.log("Quantity of item 1: " + item1Quantity);
console.log("Price of item 2: " + item2Price + " PKR");
console.log("Quantity of item 2: " + item2Quantity);
console.log("Shipping charges: " + shippingCharges + " PKR");
console.log("Total cost: " + totalCost + " PKR");


// Q8: 
console.log("QUESTION 8: MARKS PERCENTAGE");
var totalMarks = 550;
var marksObtained = 420;
var percentage = (marksObtained / totalMarks) * 100;

console.log("Total marks: " + totalMarks);
console.log("Marks obtained: " + marksObtained);
console.log("Percentage: " + percentage + "%");

// Q9:
console.log("QUESTION 9: CURRENCY CONVERSION");
var totalRupees = (10 * 104.80) + (25 * 28);
console.log("Total currency in PKR: " + totalRupees);

// Q10: 
console.log("QUESTION 10: ARITHMETIC EXPRESSION");
var number = 5;
var result = ((number + 5) * 10) / 2;

console.log("Result: " + result);

// Q11: 
console.log("QUESTION 11: AGE CALCULATOR");

var currentYear = 2026;
var birthYear = 2008;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

console.log("They are either " + age1 + " or " + age2 + " years old");

// Q12: 
console.log("QUESTION 12: THE GEOMETRIZER");

var radius = 5;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

console.log("Radius: " + radius);
console.log("The circumference is " + circumference);
console.log("The area is " + area);

// Q13: 
console.log("QUESTION 13: LIFETIME SUPPLY CALCULATOR");
var favoriteSnack = "Chips";
var currentAge = 17;
var maximumAge = 70;
var amountPerDay = 2;
var yearsRemaining = maximumAge - currentAge;
var totalSnacks = yearsRemaining * 365 * amountPerDay;

console.log(
    "You will need " + totalSnacks +
    " " + favoriteSnack +
    " to last you until the ripe old age of " + maximumAge
);
