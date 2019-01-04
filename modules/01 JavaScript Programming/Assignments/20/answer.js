var unfilteredArray = [1,2,4,5,9,12];

function myFilter(callbackFunc)
{
    var filteredArray = [];
    
    for(var i = 0; i < unfilteredArray.length; i++)
    {
        if(callbackFunc(unfilteredArray[i]))
        {
            filteredArray.push(unfilteredArray[i]);
        }
    }

    return filteredArray;
}

var filteredArray = myFilter(function(element)
{
    return element % 2 === 0;
});

console.log(filteredArray);


