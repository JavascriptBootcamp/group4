function findMax(chars){
    var max = chars[0];
    for(var i=0;i<chars.length;i++){
        if(chars[i]>max)
            max=chars[i];
    }
    console.log(max);
}

findMax([1,2,3,4,2])
//4
