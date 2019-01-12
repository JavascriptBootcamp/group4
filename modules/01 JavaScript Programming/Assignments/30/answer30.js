function ShapeType (name,description) {
    this.name = name;
    this.description = description;
}

function Shape (type,width,height) {
    this.shapeType = new ShapeType(type.name,type.description);
    this.width = width;
    this.height = height || width;
    this.area = function() {
        return this.width * this.height;
    };
}

var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners");
var rectangleShape = new Shape(rectangleType, 10, 2);
var rectangleShapeArea = rectangleShape.area();
console.log("Name:", rectangleShape.shapeType.name);
console.log("Description:", rectangleShape.shapeType.description);
console.log("Size:", rectangleShape.width + "x" + rectangleShape.height);
console.log("Area:", rectangleShapeArea);

var squareType = new ShapeType("square", "a shape with same length four sides and four corners");
var squareShape = new Shape(squareType, 10);
var squareShapeArea = squareShape.area();
console.log("Name:", squareShape.shapeType.name);
console.log("Description:", squareShape.shapeType.description);
console.log("Size:", squareShape.width + "x" + squareShape.height);
console.log("Area:", squareShapeArea);
