var marksPercentage = 80;

// if (marksPercentage === 70 || marksPercentage === 80) {
//     console.log("Distinction");
// }
// else if (marksPercentage === 60) {
//     console.log("First class");
// }
// else if (marksPercentage === 50) {
//     console.log("Second class");
// }
// else if (marksPercentage === 40) {
//     console.log("Third class");
// }
// else {
//     console.log("Failed");
// }

switch (marksPercentage) {
    case 80:
    case 70:
        console.log("Distinction");
        break;
    case 60:
        console.log("First class");
        break;
    case 50:
        console.log("Second class");
        break;
    case 40:
        console.log("Third class");
        break;
    default:
        console.log("Failed");
        break;
}