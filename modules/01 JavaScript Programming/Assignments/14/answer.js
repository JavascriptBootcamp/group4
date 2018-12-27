var favoriteColors = ['green', 'blue', 'black', '#66ccff', '#ccffcc'];
var colorNum = 0;

favoriteColors.forEach ( color => {
	colorNum++;
	console.log(`My #${colorNum} choice is ${favoriteColors[colorNum-1]}`);
});
