

        function ShapeType(name,description){
            this.name =name;
            this.description=description;

        }
        function Shape(shapeTypeObj,width,heigh){
            this.shapeTypeObj=shapeTypeObj;
            this.width=width;
            this.heigh=heigh;

            this.area=function(){
                        return heigh*width;
            }
        }

        var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners");
var rectangleShape = new Shape(rectangleType, 10, 2);
var rectangleShapeArea = rectangleShape.area();
console.log("Name:", rectangleShape.shapeTypeObj.name);
console.log("Description:", rectangleShape.shapeTypeObj.description);
console.log("Size:", rectangleShape.width + "x" + rectangleShape.heigh);
console.log("Area:", rectangleShapeArea);
