// given a number n return whether its a prime
// input: n (number)
// outupt: boolean
// 2,3,5,7,11  
// 4,6,8,9 factors: >2
// 4:  4%1 ===0 4%2===0 4%3!=0, 4%4==0
// 4: 3
// 2: 2
// 3: 2
// 10: >2
// 12: 1 2 3 4 6 12
// 20: 1 2 4 5 10 20
// 16: 1 2 4 8 16
// 15: 1 3 5 15
// hackerrank
// 1st round
// arrays, linkedlist, stacks, queues, trees, heaps, DP, Graphs
// recursion, searching, sorting
// OS, Networking, Design
// O(N)
function isPrime(n) {
    // edge case condition
    if (n <= 1) return false;

    var count = 2;

    var upper = parseInt(n / 2);

    for (var i = 2; i <= upper; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    // if (count === 2) return true;
    // else return false;

    return count === 2;
}

var result = isPrime(3);
console.log(result);
var res2 = isPrime(4);
console.log(res2);