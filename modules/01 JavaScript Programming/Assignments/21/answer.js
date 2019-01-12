function max(nums)
{
    if(!Array.isArray(nums))
    {
       throw "Input is not an array!";
    }
    if(nums.some(isNaN))
    {
        throw "Only numeric values in array is accepted!";
    }
    
    return nums.reduce((a, b) => Math.max(a, b));
}


try
{
    console.log(max([5,-4,0,12,4,53,2]));
}
catch(ex)
{
    console.log(ex);
}
