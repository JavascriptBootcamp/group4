function ShapeType(name, description) {
    this.name = name;
    this.description = description;

    if (this.name.toLowerCase() !== 'rectangle' || this.name.toLowerCase() !== 'square') {
        //this.description = "The shape name must be 'rectangle' or 'square' ";
        return "The shape name must be 'rectangle' or 'square' ";
    }  
    
}

function Shape(type, width, height) {

    this.area = function() {   
        if (type.name.toLowerCase() === "rectangle" || type.name.toLowerCase() === "square"){ 
            this.type = type;
            this.width = width;
            this.height = height;
        
            return this.width * this.height;  
        }
        else {
            this.width = this.height = 0;
            return " The shape name must be 'rectangle' or 'square' ";
        }
    }
   
}


var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners");
var rectangleShape = new Shape(rectangleType, 10, 2);
var rectangleShapeArea = rectangleShape.area();


console.log('\n');
console.log("Name:", rectangleType.name);
console.log("Description:", rectangleType.description);
console.log("Size:", rectangleShape.width + " * " + rectangleShape.height);
console.log("Area:", rectangleShapeArea);
console.log('\n');
