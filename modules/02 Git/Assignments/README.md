<h1>How To Answer A Question Using Git?</h1>
<code>
<pre>
cd [GROUP4_ROOT_FOLDER]
git checkout master
git checkout -b [ANSWER_BRANCH_NAME]
... write your code ...
git add .
git commit -m [COMMIT_MESSAGE]
git push origin [ANSWER_BRANCH_NAME]
... create a pull request from [ANSWER_BRANCH_NAME] to JavascriptBootcamp's Master ...
</pre>
</code>

<h1>How To Sync My Repo With JavascriptBootcamp's Master?</h1>
<p>If there are unrelated changes in your pull request, you've probably checked-out your branch from a "dirty" branch.</p>
<p>In order to reset your "master" branch and checkout from it to your answer, perform the following steps:</p>
<code>
<pre>
cd [GROUP4_ROOT_FOLDER]
git remote add upstream https://github.com/JavascriptBootcamp/group4.git
git fetch upstream
git checkout master
git reset --hard upstream/master  
git push origin master --force
</pre>
</code>
