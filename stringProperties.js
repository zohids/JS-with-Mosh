const movie = {
    title: 'A',
    releaseYear: 2018,
    rating: 4.5,
    director: 'B'
}

showProperties(movie);

function showProperties(obj) {
    for (const key in obj) {
        if(typeof obj[key] === "string") console.log(key, obj[key])        
    }
}