const songsData = {
    songsObjects: [
        { title: "Eyney Haneshama", singer: "David Lev", words: "Will shown soon" },
        { title: "Blue Man", singer: "Amitai", words: "Blue Goluboi dabuday" },
        { title: "Amaizing Words", singer: "Joe Mickus", words: "Olalalala" },
        { title: "Angular Childs", singer: "Shai Cohen", words: "Child star of Angular" },
        { title: "Moshon", singer: "Moshico", words: "King Moshon common common" }
    ]
}

for(let i = 0; i < songsData.songsObjects.length; i++) {
    songsData.songsObjects[i].id = i + 1;
}

module.exports = songsData; 