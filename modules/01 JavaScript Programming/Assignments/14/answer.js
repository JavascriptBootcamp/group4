
//1
var favColors = ["red","brown","black","yellow"]
favColors.forEach(function(item,index){
    //console.log(`My #${index+1} choice is ${item}`)
})
//Bonus
var favColors = ["red","brown","black","yellow"]
favColors.forEach(function(item,index){
    if(index==1)
    console.log(`My ${index+1}st choice is ${item}`)
    if(index==2)
    console.log(`My ${index+1}nd choice is ${item}`)
    if(index==3)
    console.log(`My ${index+1}rd choice is ${item}`)
})