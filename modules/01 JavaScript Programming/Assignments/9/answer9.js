//1. multiply by 2 and log all numbers between 1 and 100 

for(var i=1; i<=100;++i)
{
    console.log(i*2);

}

var names=[ "David", "Yoni","lital"]
names.forEach(function(name){
    console.log(name +" have a great day!");
    
});
var star="";
for(var j=1; j<=5;++j)
{
    for(var k=1; k<=j;++k)
    {
     //  console.log(star);
     star+="*";        
    }
    
    console.log(star);

}
