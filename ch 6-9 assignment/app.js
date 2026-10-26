
 // Q1: 
var num = 10;
var result = (num + 5) * 10 / 2;
console.log(result);

// Q2: 
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

console.log("a = " + a);
console.log("b = " + b);
console.log("result = " + result);

// Q3:
var name = prompt("Enter your name");
alert("Hello " + name);

// Q5: 
var number = prompt("Enter a number");
if (number == "") {
    number = 5;
}

console.log(number + " x 1 = " + number * 1);
console.log(number + " x 2 = " + number * 2);
console.log(number + " x 3 = " + number * 3);
console.log(number + " x 4 = " + number * 4);
console.log(number + " x 5 = " + number * 5);
console.log(number + " x 6 = " + number * 6);
console.log(number + " x 7 = " + number * 7);
console.log(number + " x 8 = " + number * 8);
console.log(number + " x 9 = " + number * 9);
console.log(number + " x 10 = " + number * 10);

// Q6: 
var subject1 = prompt("Enter first subject");
var subject2 = prompt("Enter second subject");
var subject3 = prompt("Enter third subject");
var subject4 = prompt("Enter fourth subject");
var subject5 = prompt("Enter fifth subject");
var subject6 = prompt("Enter sixth subject");
var subject7 = prompt("Enter seventh subject");
var marks1 = +prompt("Enter marks for " + subject1);
var marks2 = +prompt("Enter marks for " + subject2);
var marks3 = +prompt("Enter marks for " + subject3);
var marks4 = +prompt("Enter marks for " + subject4);
var marks5 = +prompt("Enter marks for " + subject5);
var marks6 = +prompt("Enter marks for " + subject6);
var marks7 = +prompt("Enter marks for " + subject7);

var totalMarks = 550;
var obtainedMarks = marks1 + marks2 + marks3 + marks4 + marks5 + marks6 + marks7;
var percentage = obtainedMarks / totalMarks * 100;

console.log(subject1 + ": " + marks1);
console.log(subject2 + ": " + marks2);
console.log(subject3 + ": " + marks3);
console.log(subject4 + ": " + marks4);
console.log(subject5 + ": " + marks5);
console.log(subject6 + ": " + marks6);
console.log(subject7 + ": " + marks7);
console.log("Total Marks: " + totalMarks);
console.log("Obtained Marks: " + obtainedMarks);
console.log("Percentage: " + percentage + "%");
