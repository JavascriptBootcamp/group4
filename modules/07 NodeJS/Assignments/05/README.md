<h3>Server Side:</h3>
<p>create new folder.</p>
<p>initialize <code>package.json</code> using <code>npm init</code>.<p>
<p>install Express using <code>npm install express</code>
<p>create a <code>main.js</code> file.</p>
<p>create an empty array of chat messages.</p>
<p>initialize an Express application.</p>
<p>support the following CRUD (Create, Read, Update, Delete) operations:</p>
<ol>
    <li>POST (Create): Create a new message. each chat message should contain the following fields: "ID" (random number), "Author", "Message" fields (all fields should be transferred as part of the request BODY)</li>
    <li>GET (Read): Read all chat messages</li>
    <li>PUT (Update): Update "Message" field by "ID" ("ID" should be transferred as querystring, "Author" and "Message" should be part of the request BODY)</li>
    <li>DELETE (Delete): Delete message details by "ID" ("ID" should be transferred as querystring)</li>
</ol>
<<<<<<< HEAD
<p>* all fields should be transferred as part of the request BODY</p>
<p>** "ID" should be transferred as part of the request BODY</p>
<h3>Client Side:</h3>
=======
<h3>Bonus:</h3>
>>>>>>> 0e8b1a1c0b097d9b32ae2ae3a057a18d07d4700a
<p>build an Angular application which displays all chat messages and a form with two fields: "Your Name" and "Message".<p>
<p>submitting the form will initiate a POST request to the server and will add a new message.</p>
<p>allow the rest of the operations as well: Updating a message (by clicking an "Edit" icon and modifying the message using a form) and Deleting a message (by clicking a "Delete" icon).</p>
