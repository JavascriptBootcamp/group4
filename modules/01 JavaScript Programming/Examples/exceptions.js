function foo(){
    try { // our code
        console.log(x);
    }
    catch (exception){ // our code didn't succeed
        console.log("Ooops... Something went wrong: " + a,b,c);
    }
    finally { // happens anyway
        console.log("Happens anyway...");
    }
}

foo();

// function getString(str){
//     var result = "";
//     try { // our code
//         result = str + "!!!";
//     }
//     catch (exception){ // our code didn't succeed
//         result = "Error! Something really bad happened";
//     }
//     finally { // happens anyway
//         return result;
//     }
// }

// console.log(getString("Mashu"));