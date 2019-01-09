var obj = {
    getSwitch: function(){
        var newObj = {};
        for(var key in this){
            newObj[this[key]] = key;
        }    
        return newObj;  
    },

    getSwitchWithSuffix: function(keySuffix, valueSuffix){
        var newObj = {};
        for(var key in this){
            newObj[this[key] + keySuffix] = key + valueSuffix;
        }    
        return newObj;
    }

}
var obj1 = { 
    firstName: "Moshe",
    lastName: "Levy"
};
var obj2 = { 
    firstName: "Mor",
    lastName: "Cohen"
};
var obj3 = { 
    firstName: "Aviv",
    lastName: "Katz"
};

console.log(obj.getSwitch.call(obj1));
console.log(obj.getSwitch.call(obj2));
console.log(obj.getSwitch.call(obj3));

console.log(obj.getSwitchWithSuffix.apply(obj1, ["key", "value"]));
console.log(obj.getSwitchWithSuffix.apply(obj2, ["key", "value"]));
console.log(obj.getSwitchWithSuffix.apply(obj3, ["key", "value"]));
