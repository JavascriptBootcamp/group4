var  ShapeType = function (name , description) {
    this.name =  name;
    this.description = description;
}

var Shape = function ( type , width , height) {

    this.type = type;
    this.width = width;
    this.height = height;

    this.area = function() {
        var shapeName = this.type.name;
       if ( shapeName = "rectangle"){
           var area = (this.width * this.height)
           return area;
       }

       if (shapeName = "square"){
        var area = (this.width * this.height)
        return area;
    }
    }
}

var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners ");
var rectangleShape = new Shape(rectangleType, 10, 2);
var rectangleShapeArea = rectangleShape.area();
console.log("\nName:", rectangleShape.type.name);
console.log("Description:", rectangleShape.type.description);
console.log("Size:", rectangleShape.width + "x" + rectangleShape.height);
console.log("Area:", rectangleShapeArea);



var squareType = new ShapeType("square", "a shape with  equal four sides ");
var squareShape = new Shape(squareType, 5, 5);
var squareTypShapeArea = squareShape.area();
console.log("\nName:", squareShape.type.name);
console.log("Description:", squareShape.type.description);
console.log("Size:", squareShape.width + "x" + squareShape.height);
console.log("Area:", squareTypShapeArea);