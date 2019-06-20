<ul>
<li>
    create an object "songs" which contains an array of 5 songs
</li>
<li>
    each song should contain:
    <ol>
        <li>id</li>
        <li>title</li>
        <li>singer</li>
        <li>words</li>
    </ol>
</li>
<li>create an express application</li>
<li>create a GET endpoint "/songs" which sends all songs as JSON response. for example: <code>http://localhost:5000/songs</code></li>
<li>create a GET endpoint "/songs" which sorts and sends sorted songs by "sort" querystring. for example: <code>http://localhost:5000/songs?sort=title</code></li>
<li>create a POST endpoint "/song" which adds a new song. the endpoint should generate a random ID and accept BODY as JSON: title, singer and words. the endpoint should add the song and send a response with the relevant status ("success"/"error") as a JSON object. for example: <code>http://localhost:5000/song, BODY { title: "...", singer: "...", words: "..." }</code></li>
<li>create a DELETE endpoint "/song" which deletes a song by "id". accept the "id" as a URL parameter. send a response with "success"/"error". for example: <code>http://localhost:5000/song/123</code></li>
<li>create a PUT endpoint "/song" which updates a song by "id". accept the "id" as a URL parameter. accept the song details ("title", "singer", "words") as JSON BODY. send a response with "success"/"error". for example: <code>http://localhost:5000/song/123, BODY { title: "...", singer: "...", words: "..." }</code></li>
</ul>