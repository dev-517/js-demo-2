// sort an array
// input: 10 -1 8 5 -6 20
// output: -6 -1 5 8 10 20
// Searching Sorting
// 10 -1 8 5 -6 20
// -6 -1 8 5 10 20
// -6 -1 8 5 10 20
// -6 -1 5 8 10 20
// -6 -1 5 8 10 20
/*
    i      j
    0       1,2,3,4,5
    1       2,3,4,5
    2       3,4,5
    3       4,5
    4       5
*/
// inplace 
// Value types, Reference types
function sort(arr) {

    for (var i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }

        var temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}


var a = [10, -1, 8, 5, -6, 20];
sort(a);
console.log(a);


// var a = 10; // 8 bytes: 64bits
// var b = a; // copy, value type

// b = 100;

// console.log(a, b);
// var m1 = {
//     width: 10, // 64bit
//     heigth: 10
// };

// var m3 = {
//     width: 10, // 64bit
//     heigth: 10
// };

// var m2 = m1; //no copy

// console.log(m1 === m3);