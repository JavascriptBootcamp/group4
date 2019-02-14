
var copyValuesKeys = function(keySuffix , valueSuffix) {
  var copyObj = {};
 
  var keys = Object.keys(this);
  var values = Object.values(this);
  
  values.forEach(function (val , i){
    copyObj[val+keySuffix] = keys[i]+valueSuffix;
  }) 
  
  
  return copyObj;

}

my = {
    name:"aviyot",
    age:38
}

car = {
  name : "mazda",
  Model: 626,
  isActive :false
}

rackbet = {
  name:611,
  start:"netivot",
  end:"telaviv",
  time: "1:15"
}


//console.log(copyValuesKeys.call(my));
//console.log(copyValuesKeys.call(car));
//console.log(copyValuesKeys.call(rackbet));


var arg = ["-key","-val"];
console.log(copyValuesKeys.apply(my,arg));
console.log(copyValuesKeys.apply(car,arg));
console.log(copyValuesKeys.apply(rackbet,arg));


