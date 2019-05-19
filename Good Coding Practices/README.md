Included with this file is a very simple client-side app.
Your mission, is to improve it a bit by implementing some additional features.
Please focus on good coding practices.  

Once done, please submit a Pull Request with the new and improved version.

What to do:
1) Make the piece "hollow" when the mouse hovers over it (hollow means only the border should be drawn with the color of the piece)
2) The `init` function has too much code duplication - fix it 
3) Add a 'Reset' button that returns the piece back to its initial location
4) Add a 'Randomize' button that places the piece at a random location
5) Make sure that the piece never gets off the screen
6) Make the motion of the piece smooth instead of jumpy
7) When the page loads, get today's temperature from an API and set the piece's color according to the following ranges:
    - < 10 degrees: Blue
    - 11 - 20 degrees: Green
    - 21 - 30 degrees: Yellow
    - More than 30 degrees: Red

    You can use this URL to retrieve the weather data for Tel-Aviv:  
    http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv
8) How would you improve the code of this project?   
Meaning, how would you implement the same application differently (if at all) - did you have parts of the code that you didn't like? would you add anything? Use a different architecture?
Create an additional HTML file and give some suggestions!