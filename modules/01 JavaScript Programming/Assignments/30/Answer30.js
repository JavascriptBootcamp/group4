function ShapeType(name, description){
    this.name = name;
    this.description = description;
}

function Shape(type, width, height){
    this.type = type;
    this.width = width;
    this.height = height;
    this.area = function(){
        return this.width * this.height;
    }
}

var square = new ShapeType("square.", "A square is a shape with four sides that are all the same length and four corners that are all right angles.");
var rectangle = new ShapeType("rectangle.", "A rectangle is a four-sided shape whose corners are all ninety degree angles. Each side of a rectangle is the same length as the one opposite to it.")

console.log("Name: " + square.name)
console.log("Description: " + square.description);
var mySquare = new Shape(square, 6, 6);
console.log("width:" + mySquare.width + "  Height:" + mySquare.height + "  Area:" + mySquare.area());

console.log("Name: " + rectangle.name);
console.log("Description: " + rectangle.description);
var myRectangle = new Shape(rectangle, 8, 3);
console.log("width:" + myRectangle.width + "  Height:" + myRectangle.height + "  Area:" + myRectangle.area());
