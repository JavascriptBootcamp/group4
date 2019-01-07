//JS solution:
function max(numbersArr) {

    if (!Array.isArray(numbersArr)) {
        throw "Variable type is not an Array";
    }
    else {
        var max = numbersArr.reduce(function (a, b) {
            return Math.max(a, b);
        });

        if (isNaN(max)) {
            throw "There is NaN in Array!";
        }
    } 
    
    return max;
}

try {
    console.log(max([12, 34, 56, 1]));
    // console.log(max([-12, -34, 0, -56, -1]));
}
catch (exeption) {
    return console.log("ERROR:", exeption);
}