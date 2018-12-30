var movie = {
    title: 'The Hobbit',
    duration: 2,
    Stars: ['Leonardo DiCaprio', 'Brad Pitt', 'Angelina Jolie', 'Jennifer Aniston']
};

function printmovieInfo(movieObj){
    console.log(movieObj.title,'last for',movieObj.duration,'minutes.',Object.keys(movieObj)[2] + ': ' + movieObj['Stars'].join(', ') + '.');
}

printmovieInfo(movie);
