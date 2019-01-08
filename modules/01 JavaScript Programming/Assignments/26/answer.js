// Write a JavaScript function that creates a copy of an object where the keys have become the values and the values the keys.<br><br>
// 1. Create 3 objects and execute the function on them using <code>call</code><br>
// 2. Add 2 arguments to the function named: <code>keySuffix</code> and <code>valueSuffix</code>.<br>Add these suffixes on each function execution to the keys and values 
// using <code>apply</code>.
// <h2>Related Links:</h2>
// <a href="https://internet-israel.com/%D7%A4%D7%99%D7%AA%D7%95%D7%97-%D7%90%D7%99%D7%A0%D7%98%D7%A8%D7%A0%D7%98/%D7%91%D7%A0%D7%99%D7%99%D7%AA-%D7%90%D7%AA%D7%A8%D7%99-%D7%90%D7%99%D7%A0%D7%98%D7%A8%D7%A0%D7%98-%D7%9C%D7%9E%D7%A4%D7%AA%D7%97%D7%99%D7%9D/%D7%94%D7%A2%D7%95%D7%9C%D7%9D-%D7%94%D7%9E%D7%95%D7%A4%D7%9C%D7%90-%D7%A9%D7%9C-this-%D7%91-javascript/" target="_blank">
// Call, Apply and this
// </a>


var obj = {
    swapKeysValues : function(keySuffix,valueSuffix){
        if(!keySuffix || !valueSuffix)
            return "Wrong input!";
        copyObj = {};
        for(var key in this) {
            var value = this[key];
            copyObj[value + valueSuffix] = key + keySuffix;
        }
        return copyObj;
    }
};

var obj1 = { name: "Daniel" , age : 50 };
var obj2 = { name: "Yael" , age : 48 };
var obj3 = { name: "Michal" , age : 55 };

console.log(obj.swapKeysValues.call(obj1,'a','A'),obj.swapKeysValues.call(obj2,'b','B'),obj.swapKeysValues.call(obj3,'c','C'));

console.log(obj.swapKeysValues.apply(obj1,['a','A']),obj.swapKeysValues.apply(obj2,['b','B']),obj.swapKeysValues.apply(obj3,['c','C']));

console.log(obj.swapKeysValues.apply(obj1,['','A']),obj.swapKeysValues.apply(obj2,['b','B']),obj.swapKeysValues.apply(obj3,['c','C']));
