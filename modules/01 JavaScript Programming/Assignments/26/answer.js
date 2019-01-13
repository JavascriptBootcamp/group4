var student1 = 
{
    name : "Guy",
    GPA : 90,
    yearOfStudy : 3,
};

var student2 = 
{
    name : "Viktoria",
    GPA : 60,
    yearOfStudy : 1,
};

var student3 = 
{
    name : "Gargamel",
    GPA : 80,
    yearOfStudy : 2,
};

function exchangeKeysAndValues(keySuffix, valueSuffix)
{
    var manipulatedObject = {};
    var keys = Object.keys(this);
    var values = Object.values(this);
    
    if(keySuffix && valueSuffix)
    {
        for(var i = 0; i < values.length; i++)
        {
            manipulatedObject[values[i] + valueSuffix] = keys[i] + keySuffix;
        }
    
    }
    else
    {
        for(var i = 0; i < values.length; i++)
        {
            manipulatedObject[values[i]] = keys[i];
        }
    }

    return manipulatedObject;
}

// Test

console.log(exchangeKeysAndValues.call(student1));
console.log(exchangeKeysAndValues.call(student2));
console.log(exchangeKeysAndValues.call(student3));

console.log(exchangeKeysAndValues.apply(student1, [" value add"," key add"]));
console.log(exchangeKeysAndValues.apply(student2, [" value add"," key add"]));
console.log(exchangeKeysAndValues.apply(student3, [" value add"," key add"]));
