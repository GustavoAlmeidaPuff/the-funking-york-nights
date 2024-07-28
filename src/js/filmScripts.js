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
                <h2>${movie.title}</h2>
                <p id="overview">${movie.overview}</p>
                <div class="card-footer">
                    <p>Release Date: ${movie.release_date}</p>
                    <p>Rating: ${movie.vote_average}</p>
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