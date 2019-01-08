
function ShapeType(name,description){
    this.name = name;
    this.description = description;
}

function Shape(type,width,height){
    this.type = type;
    this.width = width;
    this.height = height;

    this.area = function(){
        if(this.type.name === 'square' || this.type.name === 'rectangle'){
            return this.width * this.height;
        }
    };
}

var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners");
var rectangleShape = new Shape(rectangleType, 10, 2);
var rectangleShapeArea = rectangleShape.area();
console.log("Name:", rectangleType.name);
console.log("Description:", rectangleType.description);
console.log("Size:", rectangleShape.width + "x" + rectangleShape.height);
console.log("Area:", rectangleShapeArea);