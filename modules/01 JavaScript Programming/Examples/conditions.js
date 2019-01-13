var legs = 4;
if (legs === 2) {
    console.log("human");
}
else {
    console.log("some other creature");
}

if ("0"){
    console.log("It's Ok");
}

var numOfStudents = 22;
switch (true) {
    case numOfStudents < 10:
        console.log("less than ten");
        break;
    case numOfStudents === 20:
        console.log("exactly twenty");
        break;
    case (numOfStudents >= 20 && numOfStudents < 30):
        console.log("more than twenty");
        break;
    default:
        console.log("others");
}

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