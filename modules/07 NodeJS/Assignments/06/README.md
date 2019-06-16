<h2>Server (Node.js)</h2>
<p>create a folder named <code>documents</code> with 5 different files. for example: file1.json, file2.json, file3.json, file4.json, file4.json and file5.json.</p>
<p>create an Express application.</p>
<p>create a POST handler to the path <code>/file</code> which accepts a list of file names as part of the request BODY.</p>.</p>
<p>the POST handler should look for the files and create a new TXT file <code>found_files.txt</code> with the list of found files - one file name per line (using Node.js streams and pipe).</p>
<p>the POST response should be "OK" (status code 200) on a success operation or "Error" (status code 500) on a failure.</p>
<p>add a middleware which logs the list of file names using <code>console.log</code>.</p>
<h2>Example</h2>
<h3>Request with the files file1.json, file2.json and file99.json:</h3>
<code>
(POST) http://localhost:5000
(BODY) {
    files: ["file1.json", "file2.json", "file99.json"]
}
</code>
<h3>Should create <code>found_files.txt</code> with the list of found files</h5>
<code>
file1.json
file2.json
</code>
<h3>And log</h5>
<code>["file1.json", "file2.json", "file99.json"]</code>
<h2>Client (Angular)</h2>
<p>build an Angular application which implement a search form with one input field for file name to search.<p>
<p>submitting the form will initiate a POST request to the server and will display the matching file names.</p>
