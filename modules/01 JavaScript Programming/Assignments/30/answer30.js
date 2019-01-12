function ShapeType(name, description)
{
    this.name=name;
    this.description=description;
}

function Shape (type,width,height)
{
    this.shapeType=type;
    this.width=width;
    this.height=height;
    this.area=function()
    {
        if (this.shapeType.name === "square" || this.shapeType.name === "rectangle")
        {
            return width * height;

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
