function ShapeType(name, description) {
    this.name = name;
    this.description = description;
}

function Shape(type, width, height) {
    this.type = type; 
    this.width = width;
    this.height = height;

    this.area = function () {
        switch (this.type.name) {
            case "square":
                return this.width*this.width;
            
            case "rectangle":
                return this.width*this.height;
        
            default:
                return -1;
        }
    }
    
}

var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners");
var rectangleShape = new Shape(rectangleType, 10, 2);
var rectangleShapeArea = rectangleShape.area();
console.log("Name:", rectangleShape.type.name);
console.log("Description:", rectangleShape.type.description);
console.log("Size:", rectangleShape.width + "x" + rectangleShape.height);
console.log("Area:", rectangleShapeArea);