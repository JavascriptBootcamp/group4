
var someObj = {
    CopyObjWithInvertedEntries : function(keySuffix, valueSuffix){
        if (!keySuffix) keySuffix = '';
        if (!valueSuffix) valueSuffix = '';
       
        var sourceObj = this; // this = someObj
        var newObj = {};

        for(var keyOfSourceObj in sourceObj){
            // The key of newObj is value of sourceObj = sourceObj[keyOfSourceObj]
            // The value of newObj is key of sourceObj = keyOfSourceObj
            newObj[sourceObj[keyOfSourceObj] + keySuffix] = keyOfSourceObj + valueSuffix;
        }

        return newObj;
    }
}

var obj1 = {firstName:'David', lastName: 'Lev'};
var obj2 = {firstName:'Moshe', lastName: 'Cohen'};
var obj3 = {firstName:'Shimon', lastName: 'Rabinovitch'};

console.log(someObj.CopyObjWithInvertedEntries.apply(obj1, [' is key', ' is value']));
console.log('\n');
console.log(someObj.CopyObjWithInvertedEntries.call(obj2, ' is key', ' is value'));
console.log('\n');
console.log(someObj.CopyObjWithInvertedEntries.call(obj3));


