<p>use <code>group4/Modules/03 Front End Development/Assignments/57</code>.</p>
<p>
build it using Angular.
</p>
<p>
<h2>Additions</h2>
<h4>Step 1</h4>
<ol>
    <li>after an images has been clicked - add a border around it</li>
    <li>if an image has more then 10 likes - increase its size a little bit</li>
    <li>if an image has 0 likes - decrease its size a little bit</li>
    <li>if an image has between 0 and 10 likes - its size should be normal</li>
</ol>
<h4>Step 2</h4>
<ol>
    <li>add an author name to each image and display it below</li>
    <li>clicking on the author's name - should lead to another page (use routing) in which all author's images should be displayed. For example: <code>http://localhost:4200/authors/joe</code> should lead to a page in which all images under the author "joe"</li>
    <li>add the following details to each author: ID, profile picture, facebook profile URL and description. then add these details to the author's page and change the route to be the ID instead of name</li>
    <li>extract all functionallity which is not related to the display, from the component - to a <b>service</b></li>
</ol>
</p>
<p>
Recommendation for a solution process:
<ol>
    <li>
    create an angular app
    </li>
    <li>
    create an array of images in app component
    </li>
    <li>
    display the images, buttons and counters in the app component using *ngFor
    </li>
    <li>
    design the component
    </li>
    <li>
    handle clicking on the images
    </li>
    <li>
    handle storing the data in localStorage
    </li>
    <li>
    implement routing and services
    </li>
</ol>
</p>
<p>
    References:<ol>
    <li>
     <a href="https://itnext.io/css-styling-in-angular-2-7530aa2718e7" target="_blank">
        CSS Styling
    </a>
    </li>
    <li>
    <a href="https://angular.io/tutorial/toh-pt5" target="_blank">Angular Tutorial - Routing</a>
    </li>
    </ol>
</p>
