// 12: 1, 2, 3, 4, 6, 12
// 16: 1,2,4,8,16
// 20: 1,2,4,5,10,20
// 15: 1,3,5,15
// 9: 1,3,9
// 3: 1, 3
// 5, 1,5

// O(sqrt(N))
// naive/ brute force
// optimized
function isPrime(n) {
    if (n <= 1) return false;
    var upper = Math.sqrt(n);
    for (var i = 2; i <= upper; i++) {
        if (n % i === 0) return false;
    }
    
    return true;
}

var res = isPrime(4);
console.log(res);
