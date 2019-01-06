<p>Create a constructor <code>ShapeType</code> which contains the properties <code>name</code> and <code>description</code>.</p>

<p>Create another constructor <code>Shape</code> which contains: <code>type</code> (contains a <code>ShapeType</code>), <code>width</code> and <code>height</code>. Additionally, it contains the function <code>area()</code> that calculates and return the area of one of the following shape types: square or rectangle.</p>

<p>Define a <code>square</code> and a <code>rectangle</code>. Then calculate and display their name, description and areas.</p>

<h2>For example:</h2>
<code>
<pre>
var rectangleType = new ShapeType("rectangle", "a shape with four sides and four corners");<br>
var rectangleShape = new Shape(rectangleType, 10, 2);<br>
var rectangleShapeArea = rectangleShape.area();<br>
console.log("Name:", rectangle.shapeType.name);<br>
console.log("Description:", rectangleShape.shapeType.description);<br>
console.log("Size:", rectangleShape.width + "x" + rectangleShape.height);
console.log("Area:", rectangleShapeArea);
</pre>
</code>
<h4>Output</h4>
Name: rectangle<br>
Description: a shape with four sides and four corners<br>
Size: 10x2
Area: 40