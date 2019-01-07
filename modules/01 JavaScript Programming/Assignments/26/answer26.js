var obj = {
    CopyOfAnObject : function(keySuffix , valueSuffix){
       if (!valueSuffix){
        valueSuffix = "";
       }
       if (!keySuffix){
        keySuffix = "";
       }
       var newObj = {};
       var oldobj = this;
       for(var key in oldobj){
            newObj[oldobj[key]+keySuffix] = key + valueSuffix;
       }
       return newObj;
    }
}
  
var obj1 = {name:"gaby",age:30};
var obj2 = {name:"yossi",age:40};
var obj3 = {name:"maly",age:37};

console.log(obj.CopyOfAnObject.apply(obj1,["ab","cd"]));
console.log(obj.CopyOfAnObject.call(obj2));

