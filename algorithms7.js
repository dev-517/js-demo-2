// swapping two numbers a = 10, b= 20;  a =20, b=10

function swap(a, b) {
    var temp = a;
    a = b; //20, 20
    b = temp;

    console.log(a, b);
}

// given an array return min element
// given a sorted (natural order, decreasing)
// input: array
// outut: number
// [10 -1 8 5 -6 20]  min: -6
// minSoFar = -6
function min(arr) {
    if (arr.length === 0) return Infinity;

    var minSoFar = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minSoFar) minSoFar = arr[i];
    }

    return minSoFar;
}

var res = min([]);
console.log(res);