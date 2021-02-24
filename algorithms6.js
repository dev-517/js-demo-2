// given a number print digits
// ex: 123 -> 3 2 1
// ex: 567 -> 7 6 5
// input: n(number)
// output: print
// "123"
// naive
/*
    123 -> 123 % 10 => 3   123/10 -> ParseInt(12.3)
    12   -> 12 % 10 => 2   12/10 -> parseInt(1.2)
    1    -> 1 % 10 => 1     
    0  
    5.5lacs - 13lacs
*/
function printDigits(n) {
    var str = n.toString();
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

printDigits(123);