const songsData = {
    songsObjects: [
        { 
          title: "Hakol Letova", 
          singer: "David Lev", 
          words: "Listen to the song",
          src: 'https://www.youtube.com/embed/w2kccPFk-Bs',
          url: 'https://www.youtube.com/watch?v=w2kccPFk-Bs',
          videoImg:'https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png'
        },
        { 
          title: "Yofi Machiv", 
          singer: "David Lev", 
          words: "Listen to the song",
          src: 'https://www.youtube.com/embed/fsAEyQ4XRhg',
          url: 'https://www.youtube.com/watch?v=fsAEyQ4XRhg',
          videoImg: 'https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png'
        },
        { 
          title: "Haemet (The Truch)", 
          singer: "David Lev", 
          words: "Listen to the song",
          src: 'https://www.youtube.com/embed/CvQACU0atW8',
          url: 'https://www.youtube.com/watch?v=CvQACU0atW8',
          videoImg:'https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png'
        },
        { 
          title: "Fire Of Hell", 
          singer: "David Lev", 
          words: "Listen to the song",
          src: 'https://www.youtube.com/embed/MFdHkfkWnA8',
          url: 'https://www.youtube.com/watch?v=MFdHkfkWnA8',
          videoImg:'https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png'
        },
        { 
          title: "Tfila", 
          singer: "David Lev", 
          words: "Listen to the song",
          src: 'https://www.youtube.com/embed/NjMsnchWg1k',
          url: 'https://www.youtube.com/watch?v=NjMsnchWg1k',
          videoImg:'https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png'
        }
    ]
}

for(let i = 0; i < songsData.songsObjects.length; i++) {
    songsData.songsObjects[i].id = i + 1;
}

module.exports = songsData; 

