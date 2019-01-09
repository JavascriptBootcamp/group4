//Answer 26
var switcher = function(obj,keySuffix,valueSuffix){
    switched = {};
    for(var key in obj){
        switched[ obj[key] += keySuffix ] = key;
        switched[ obj[key] ] += valueSuffix;
        
    }
    return switched;
}

obj1 = {1:2 , 3:4 , 5:6};
obj2 = {7:8 , 9:10 , 11:12};
obj3 = {13:14 , 15:16 , 17:18};

// console.log(switcher.call(this,obj1));
// console.log(switcher.call(this,obj2));
// console.log(switcher.call(this,obj3));

console.log(switcher.apply(this,[obj1,'k1','v1']));
console.log(switcher.apply(this,[obj2,'k2','v2']));
console.log(switcher.apply(this,[obj3,'k3','v3']));


