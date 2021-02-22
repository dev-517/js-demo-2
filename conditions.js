var a = 10;
var b = 20;
var marks = 500;
var totalSubjects = 7;
//hard coded
// conditional operators
// if else
// if else if ladder
// grades: distinction, first class, second class
// >=70%, >=60%, >=50%, >40%
var percentage = (marks / (totalSubjects * 100)) * 100;

console.log(percentage);

if (percentage >= 70) {
    console.log("Distinction");
}
else if (percentage >= 60) {
    console.log("First class");
}
else if (percentage >= 50) {
    console.log("Second class");
}
else if (percentage >= 40) {
    console.log("Third class");
} else {
    console.log("Failed");
}
