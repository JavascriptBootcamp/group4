Object.defineProperty() הינה מתודה שמגדירה מאפיין חדש ישירות אל תוך האובייקט, או יכולה לערוך מאפיין קיים של אובייקט מסוים, ומחזירה את האובייקט .

לדוגמא: 

var obj = {};

Object.defineProperty(obj, "prop1", {

    value : "amir",

    writable : false

});


obj.prop1 = 12345;

console.log(obj.prop1);

