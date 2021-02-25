/*
 n = 123 
 n%10 = 3  n/10 = 12  = n

 12 % 10 = 2   12/10 = 1

 1 % 10 = 1     1/10 = 0

 0 %10 = 0      0/10 = 0

 0 % 10 = 0     0 /10 = 0
*/

/*
    n= 567  digit   n
    567 %10  7      56
    56 %10   6      5
    5 % 10   5      0

    sum of digits
    123 = 1+2+3 = 3+2+1
*/

function printDigits(n) {
    while (n > 0) {
        var digit = n % 10;
        console.log(digit);

        n = parseInt(n / 10);
    }
}

/*
    n        sum 
    123     0
    12      3
    1       5
    0       6
*/
function sumOfDigits(n) {
    var sum = 0;

    while (n > 0) {
        var digit = n % 10;
        sum = sum + digit;
        n = parseInt(n / 10);
    }
    
    return sum;
}

var res = sumOfDigits(567);
console.log(res);