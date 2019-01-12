function ShapeType(name, description){
    this.name = name;
    this.description = description;
}

function Shape(type, width, height){
    this.shapeType = type;
    this.width = width;
    this.height = type.name === 'square' ? width:height;
    this.area = () => {
        var area = 0;
        try{
            switch(this.shapeType.name){
                case 'rectangle':
                    area = width * height;
                    break;
                case 'square':
                    area = width * width;
                    break;
                default:          
                    throw 'not a rectangle or square';
            }
        }catch (ex){
            console.log(ex);
        }finally{
            return area;
        }      
    };
}

var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners");
var rectangleShape = new Shape(rectangleType, 10, 2);
var rectangleShapeArea = rectangleShape.area();
console.log("Name:", rectangleShape.shapeType.name);
console.log("Description:", rectangleShape.shapeType.description);
console.log("Size:", rectangleShape.width + "x" + rectangleShape.height);
console.log("Area:", rectangleShapeArea);
console.log();
rectangleType = new ShapeType("square", "a shape with four corners and four sides, all of them have the same size");
rectangleShape = new Shape(rectangleType, 10);
rectangleShapeArea = rectangleShape.area();
console.log("Name:", rectangleShape.shapeType.name);
console.log("Description:", rectangleShape.shapeType.description);
console.log("Size:", rectangleShape.width + "x" + rectangleShape.height);
console.log("Area:", rectangleShapeArea);
