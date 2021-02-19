// starting file
// nodejs JS runtime
// JRE java
// variables
// RAM - 4GB
// Disk (SSD,HDD) - 256GB 
// Processor (CPU) 2.3 GHz 4cores (10^9 instructions per second)
// add two numbers
// allocation
// data types
// Mathematics: natural, whole, int, fractions
// Save,retrieve, searching 

// number, string, boolean, undefined, NaN, Object
// float, double, int, short, byte, char, string,
// typeof
// strongly typed
// loosely typed 
// compile time and run time

// scalar 
// int x = "abc";
// arrays
// pass or fail
// <40%
// array
// element
// index
// length: 3
// maxIndex: 2
// range: 0 - 2
// stack LIFO
// list
// fixed size
var marks = [78, 89, 80];

var subjects = ["AI", "SE", "MathsI"];

marks.push(90);

console.log(marks);

marks.pop();

console.log(marks.length);


// var name = "abc";
// var dob = "20/10/2000"; // Object
// var active = true;
// var marks = [10, 20, 10];
// var countryCode = 00;
// var mobile = ["132-234-1890"];
// var arr = [1, 2, 3, 4];

// encapsulate -> object
// key value
// dictionaries
// design questions
// stack 
// linked queues, heaps
// domain: Banking, IT, HealthCare, Insurance
// domain models
// Contact book

var addr1 = {
    doorNo: "1-123",
    city: "Hyderabad",
    state: "TS",
    zip: "502222"
};

var addr2 = {
    doorNo: "1-123",
    city: "Hyderabad",
    state: "TS",
    zip: "504312"
};

var student = {
    name: "abc",
    dob: "20/10/2000", // Object
    active: true,
    marks: [10, 20, 10],
    countryCode: 00,
    mobile: ["132-234-1890"],
    arr: [1, 2, 3, 4],
    address: [addr1, addr2]
};

var studentAddress = student.address.doorNo + ', ' + student.address.city + ', ' + student.address.state + " - " + student.address.zip;

console.log(studentAddress);


var arr = [1, 2, 3, 4];

console.log(Array.isArray(arr));
console.log(Array.isArray(student));

// shift
// culture, 25C, 100F, 1lac, 1,000,000
// time
// 18/02/2020 -> 02/18/2020
// copy
// copy till i, add, copy i+1 to n
