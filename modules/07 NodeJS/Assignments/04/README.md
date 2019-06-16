<p>use <code>group4/Modules/06 Angular/Examples/ng-memory-game</code>.</p>
<p>create a node server which accepts search keywords as a querystring.</p>
<p>the server should request Google Images for search results for the specified keywords.</p>
<p>use the first 8 pictures from the results as the card content in the memory game.</p>
<h2>Example</h2>
<h4>after sending to the server the keywords "movie star face close up":</h4>
<img src="ng-memory-game.jpg">
<h2>npm modules</h2>
<p>execute requests using the <a href="https://www.npmjs.com/package/request" target="_blank">request</a> npm module. Install it by running <code>npm init -y</code> and <code>npm install request</code>.</p>
<p>
  read from querystring using the code from <code>group4/modules/06 Angular/Examples/video-search-server</code>:
<code>
<pre>
const url = require('url');
...
const query = url.parse(req.url,true).query;
const actorName = query.actorName;
...
</pre>
</code>
</p>
<p>take the first 8 images from Google HTML page using <a href="https://www.npmjs.com/package/jsdom" target="_blank">jsdom</a> npm module. Install it by running <code>npm install jsdom</code>.</p>
