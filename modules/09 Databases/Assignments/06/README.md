<p>use <code>group4/Modules/06 Angular/Assignments/11/angular11</code>.</p>
<p>create a MongoDB collection for storing user details: Full Name, Email Address, Age, Username, Password.</p>
<p>add a user to the collection on signing up.</p>
<p>display all user details after a successful sign in.</p>
<h3>Bonus #1</h3>
<p>store login attempts in MongoDB.</p>
<p>block the user from signing in for 15 minutes after 5 unsuccessful attempts (wrong password).</p>
<h3>Bonus #2</h3>
<p>create a MongoDB collection for storing password recovery requests.</p>
<p>add a request after submitting the password recovery form.</p>
<p>schedule a job using <a href="https://scotch.io/tutorials/nodejs-cron-jobs-by-examples" target="_blank">cron-job</a> Node module.</p>
<p>the job should run every ten minutes.</p>
<p>the job should send a recovery email (with username and password) to all users in the collection and remove their requests afterwards.</p>
<p>send the emails using <a href="https://nodemailer.com/about/" target="_blank">Nodemailer</a> Node module.</p>