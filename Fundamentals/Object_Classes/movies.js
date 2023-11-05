function movies(arr) {
    let movies = []
    for (let text of arr) {

        let movieObj = {};

        if (text.includes(`addMovie`)) {
            let name = text.replace("addMovie ", "");
            movieObj.name = name;

            for (let second of arr) {

                if (second.includes(`${name} onDate`)) {

                    let theDate = second.replace(`${name} onDate `, "");
                    movieObj.date = theDate;
                }

                if (second.includes(`${name} directedBy`)) {

                    let director = second.replace(`${name} directedBy `, "");
                    movieObj.director = director;

                }

            }

        }
        if(Object.keys(movieObj).length > 0){
            movies.push(movieObj)

        }


    }
    // console.log(movies)
    for (const movie of movies) {
        if (Object.keys(movie).length ===3){
            console.log(JSON.stringify(movie))

        }
    }

}

// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ])

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])