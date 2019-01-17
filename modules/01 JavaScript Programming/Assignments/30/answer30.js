function ShapeType(name, description) {
    this.name = name;
    this.description = description;
}

function Shape(shapeType, width, height) {
    this.shapeType = shapeType;
    this.width = width;
    this.height = height;

    this.area = function () {
        return this.height * this.width;
    }

}

var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners");
var rectangleShape = new Shape(rectangleType, 10, 2);
var rectangleShapeArea = rectangleShape.area();

console.log("Name:", rectangleShape.shapeType.name);
console.log("Description:", rectangleShape.shapeType.description);
console.log("Size:", rectangleShape.width + "x" + rectangleShape.height);
console.log("Area:", rectangleShapeArea);