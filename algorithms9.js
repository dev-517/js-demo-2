// function f1(a) {
//     ++a;

//     a = a + 10; 
//     console.log("inside method", a);
// }

// var x = 100;
// f1(x);
// console.log(x, "outside method");

// calculate Price:  GST 5%
// price: 50
// 105  
// amount = price + (price * 5)/100
// 100 + 500/100 = 105
// 50 + 250/100  = 52.5
// 40%
function calc(price, rate) {

    var amount = price + (price * rate) / 100;

    return amount;
}

// var res = calc(100);
// var res = calc(1000, 18);
// console.log(res);


// 1000 - 40% 
// price - (price * 40)/100
function discount(price, rate) {
    var amount = price - (price * rate) / 100;

    return amount;
}

var res = discount(1000, 0);
console.log(res);

console.log( discount(500, 20)  );
