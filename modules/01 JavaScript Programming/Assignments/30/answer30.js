
function ShapeType (name, description){
    this.name = name;
    this.description = description;
}

function Shape(type, width, height) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.area = function() {
        return width * height;
    }
}

var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners");
var rectangleShape = new Shape(rectangleType, 10, 2);
var rectangleShapeArea = rectangleShape.area();

console.log("Name:", rectangleShape.type.name);
console.log("Description:", rectangleShape.type.description);
console.log("Sizes:", rectangleShape.width + "x" + rectangleShape.height);
console.log("Area:", rectangleShapeArea + "\n");

