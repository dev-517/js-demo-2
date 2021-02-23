var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < 100; i++) {
    // skip an iteration
    if (i === 3) continue;
    console.log(i);
    if (i === 5) break;
}

// var i = 0;

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }