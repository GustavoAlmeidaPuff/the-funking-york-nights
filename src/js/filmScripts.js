function idwgyu() {
    const sols = [
        "Primeira frase",
        "Segunda frase",
        "Terceira frase",
        "Quarta frase",
        "Quinta frase"
    ];
    
    let solsIndex = 0;
    
    function changePhrase() {
        const phraseContainer = document.getElementById('phrase');
        phraseContainer.innerHTML = sols[solsIndex];
        solsIndex = (solsIndex + 1) % sols.length; 
        setTimeout(changePhrase, 3000); 
    }
    
    changePhrase();
}




let phrase_element = document.getElementById('sentence')
phrase_element.innerHTML = "placeholder"
phrase_element.style.backgroundColor = "rgba(51, 51, 51, 0)"

let phrase = [
    "•If there are a news site that show how people REALLY are... show me it",
    "•SICK!!",
    "•A funkin' way to stay up-to-date",
    "•Left, right, up, or down??",
    "•A mother funkin' news site",
    `•"Why The funkin york nights?"... cus i made this site listening to the fnf's OST... it's simple`
];

//
function randomPhrase() {
    let randomIndex = Math.floor(Math.random() * phrase.length);
    return phrase[randomIndex];
}

// Exibindo a frase aleatória
console.log(randomPhrase())
phrase_element.innerHTML = (randomPhrase())


async function moviesPage() {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTlmZjBkOWJhN2I2NGM4MjliMDhjOThhNjc0MTFiMSIsIm5iZiI6MTcyMjE0NjExNy4wOTIzMDYsInN1YiI6IjY2OWMyZTI5NWRmYjllYThkZjhlYWVkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l-evMaMa33FeDcc5mSV2q-m8Po6F2aOWAGI8h9JF8ck',
            'accept': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        
        
        //add the changes(it's other page at all)
        moviesElement = document.getElementById('movie-list')
        mainElement = document.querySelector('main')
        let movie = data.results
        moviesElement.innerHTML = ''
        
        movie.forEach(movie => {
            const movieItem = document.createElement('div')
            movieItem.classList.add('movie-item')
            movieItem.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w400${movie.poster_path}" alt="${movie.title}" />
                <div class="movie-content">
                    <h2>${movie.title}</h2>
                    <hr>
                    <p class="overview">${movie.overview}</p>
                </div>
                <div class="card-footer">
                    <p>Release Date: <p style="color: #bb2043;">${movie.release_date}</p></p>
                    <p>Rating: <p style="color: #bb2043;">${movie.vote_average}</p></p>
                </div>
            `
            moviesElement.appendChild(movieItem)
        })
        
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

moviesPage()