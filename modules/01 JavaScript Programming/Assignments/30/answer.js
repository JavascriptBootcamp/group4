var ShapeType = function(name,description){
    this.name=name;
    this.description=description;


}
var Shape = function(ShapeType,width,height){
    this.ShapeType=ShapeType;
    this.width=width;
    this.height=height;

    this.area = function(){
        if(ShapeType.name==="square"){
            return width*width
        }
        if(ShapeType.name==="rectangle"){
            return width*height
        }
    }

}
var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners");
var rectangleShape = new Shape(rectangleType, 10, 2);
var rectangleShapeArea = rectangleShape.area();
console.log("Name:", rectangleShape.ShapeType.name);
console.log("Description:", rectangleShape.ShapeType.description);
console.log("Size:", rectangleShape.width + "x" + rectangleShape.height);
console.log("Area:", rectangleShapeArea);
