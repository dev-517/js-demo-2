// everything is a value
// every value truthy or falsy
// falsy: 0,"",false,null,undefined, NaN
// true,false, truthy and falsy
var a = {};

if (a) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}