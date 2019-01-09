var ShapeType = function (name, description) {
    this.name = name;
    this.description = description;
}
var Shape = function (shapeType, width, height) {
    if (shapeType.name === "square")
        if (width !== height)
            throw "The height and width of the square must be equal.";

    this.shapeType = shapeType;
    this.width = width;
    this.height = height;

    this.area = function () {
        if (shapeType.name === "square" || shapeType.name === "rectangle")
            return width * height;
    }
}
try {
    var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners");
    var rectangleShape = new Shape(rectangleType, 10, 2);
    var rectangleShapeArea = rectangleShape.area();
    console.log("Name:", rectangleShape.shapeType.name);
    console.log("Description:", rectangleShape.shapeType.description);
    console.log("Size:", rectangleShape.width + "x" + rectangleShape.height);
    console.log("Area:", rectangleShapeArea);
} catch (error) {
    console.log(error);
}
