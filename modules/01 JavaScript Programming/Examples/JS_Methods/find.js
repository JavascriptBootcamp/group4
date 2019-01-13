פונקציה שמחזירה ערך ראשון במערך שעונה על תנאי מסויים. אחרת מוחזר undefined.

var names = ["David", "Moshiko", "Gaby"];

var result = names.find(function(name){
  return name === "Moshiko";
})

console.log(result);
