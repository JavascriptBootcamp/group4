function missionOne() {

    this.swapBetweenKeyAndValue =  function () 
    {
        var newObj={};
        console.log("origin object: " ,this);
        for(key in this)
        {
            newKey=this[key];
            newObj[newKey]=key;

        }
        console.log("new object: " ,newObj);
        console.log("--------" );

    }
  }

  var obj1={
    name: "lit",
    age:68

};
var obj2={
    name: "lea",
    age:18

};
var obj3={
    name: "or",
    age:45

};
// missionOne.swapBetweenKeyaAndValue(obj1);
// missionOne.swapBetweenKeyaAndValue(obj2);
// person.swapBetweenKeyaAndValue(obj3);
missionOne.swapBetweenKeyAndValue.call(obj1);

