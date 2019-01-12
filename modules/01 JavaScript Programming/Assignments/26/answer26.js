function TransistionObj(color,flowerKind,size){
    this.color=color;
    this.flowerKind=flowerKind;
    this.size=size;
    }
//1   function 
   var convertKeyValue1=function (){
    if(typeof this === 'object'){
        var newObj={};
    for(var key in this){
            newObj[ this[key]]=key;
    }
  }
    return newObj;    
  }
  //2   function
    var convertKeyValue2=function (keySuffix, valueSuffix){
        if(typeof this === 'object'){
            var newObj={};
        for(var key in this){
                newObj[ this[key].concat(keySuffix)]=key.concat( valueSuffix);
        }
     }
        return newObj;
           }
  //1  
    var original=new TransistionObj("white","Aster","medium");
    var original1=new TransistionObj("pink","Rose","medium");
    var original2=new TransistionObj("black","Flower","small");
   console.log(convertKeyValue1.call(original));
   console.log(convertKeyValue1.call(original1));
   console.log(convertKeyValue1.call(original2));
//2
var arr=["first","last"];
   console.log(convertKeyValue2.apply(original,["first","last"]));
   console.log(convertKeyValue2.apply(original1,["first","last"]));
   console.log(convertKeyValue2.apply(original2,["first","last"]));
