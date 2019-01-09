//Answer 30
function ShapeType(name,description){
    this.name = name;
    this.description = description;

}
function Shape(type,width,height){
    this.type = type;
    this.width = width;
    this.height = height;

    this.area = function(){
        return this.width * this.height;
    }
}

var recType = new Shape(new ShapeType("Rectangle","a shape with four sides and four corners"),10,2);
var squareType = new Shape(new ShapeType("Square","a shape with four same size sides"),5,5);

console.log("Name: " + recType.type.name);
console.log("Description: " + recType.type.description);
console.log("Size: " +recType.height + "x" + recType.width + " Area: " + recType.area());

console.log("");
console.log("");

console.log("Name: " + squareType.type.name);
console.log("Description: " + squareType.type.description);
console.log("Size: " +squareType.height + "x" + squareType.width + " Area: " + squareType.area());


