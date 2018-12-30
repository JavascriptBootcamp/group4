var favoriteMovie = {
    title: 'Favorite David',
    duration: 300,
    stars: ['David good', 'David well', 'David excellent', 'David nice', 'David beautiful', 'David amazing']
 };


function movieInfo() {
    var starsOutput = '';

    // favoriteMovie.stars.forEach( star => {
    //     starsOutput += star + ', '
    // });

    for (var i = 0; i < favoriteMovie.stars.length; i++) {
        if (i === favoriteMovie.stars.length-1) starsOutput += favoriteMovie.stars[i];
        else starsOutput += favoriteMovie.stars[i] + ', ';
    }
    
    console.log(favoriteMovie.title, 'lasts for', favoriteMovie.duration,'minutes. Stars:', starsOutput);
 }

 movieInfo();
