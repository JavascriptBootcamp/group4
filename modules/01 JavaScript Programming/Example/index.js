// var x = 2;
// var y = '3';
// console.log(x + +y);

// var result = (2 + 3) * 4;
// console.log(result);
// console.log(x);

// var x = 3;
// console.log(x < 5 || x > 6 && x > 1 && x < 10 && x < 0);

// var x = "some string";
// x = x || "some other string";

// var x = 4;
// console.log(x !== 3);

// var x = " 0xF";
// console.log(parseInt(x, 10));

// var legs = 4;
// if (legs === 2) {
//     console.log("human");
// }
// else {
//     console.log("some other creature");
// }

// if ("0"){
//     console.log("It's Ok");
// }

// var numOfStudents = 22;
// switch (true) {
//     case numOfStudents < 10:
//         console.log("less than ten");
//         break;
//     case numOfStudents === 20:
//         console.log("exactly twenty");
//         break;
//     case (numOfStudents >= 20 && numOfStudents < 30):
//         console.log("more than twenty");
//         break;
//     default:
//         console.log("others");
// }

var numOfStudents = 22;
switch (numOfStudents) {
    case 10:
        console.log("less than ten");
        break;
    case 20:
        console.log("exactly twenty");
        break;
    case 30:
        console.log("more than twenty");
        break;
    default:
        console.log("others");
}