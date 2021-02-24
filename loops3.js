// 1 to 100
// 1 to 100 only even numbers
// for (var i = 1; i <= 100; i++) {
//     console.log(i);
// }

/*
    n       i       condition (i%2===0) o/p
    10      1       false
            2       true                2
            3       false               
            4       true                4
            5           
            11      false               
            12               
*/

// function printEven(n) {
//     for (var i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// function printEven(n) {
//     for (var i = 1; i <= n; i++) {
//         if (i % 2 !== 0) continue;

//         console.log(i);
//     }
// }

function printEven(n) {
    for (var i = 2; i <= n; i = i + 2) {
        console.log(i);
    }
}

printEven(11);