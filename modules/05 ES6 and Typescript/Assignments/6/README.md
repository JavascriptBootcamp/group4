<p>create an interface named <code>IPlay</code></p>
<p>add a function named <code>play</code> which accepts as a parmeter <code>song</code> and returns <code>void</code> (console.log for example)</p>
<p>add a function named <code>next</code> without parmeters which returns some <code>void</code> (console.log for example)</p>
<p>add a function named <code>prev</code> without parmeters which returns some <code>void</code> (console.log for example)</p>
<hr>
<p>
create the following classes which implement <code>IPlay</code>:
<ol>
    <li>
        <code>Musician</code>.
        Properties:
        <ul>
            <li>name (string)</li>
            <li>age (number)</li>
            <li>instrument (enum of string: "Guitar", "Drums", "Bass" or "None")
        </ul>
    </li>
    <li>
        <code>Band</code>.
        Properties:
        <ul>
            <li>name (string)</li>
            <li>musicians (array of <code>Musician</code>)</li>
        </ul>
    </li>
    <li>
        <code>Radio</code>.
        Properties:
        <ul>
            <li>brand (string)</li>
            <li>color (enum of string: "Red", "Blue" or "Yellow")</li>
            <li>price (positive number)</li>
        </ul>
    </li>
</ol>
</p>
<p>create a <code>Radio</code> instance. play a song. move to the previous song. move to the next song</p>
<p>create a <code>Musician</code> instance. play a song. move to the previous song. move to the next song</p>
<p>create a <code>Band</code> of 4 musicians. each musician plays a different instruments. play a song. move to the previous song. move to the next song</p>