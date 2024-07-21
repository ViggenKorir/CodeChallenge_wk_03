document.addEventListener("DOMContentLoaded", () => {
    const movieContainer = document.getElementById("movie-container");

    // Fetch data from the JSON file
    fetch("db.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Display each movie seperately in the container
            data.films.forEach(movie => {
                const movieCard = createMovieCard(movie);
                movieContainer.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Error fetching movie data:', error));
});

function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    movieCard.innerHTML = `
        <div class="card-image">
            <img src="${movie.poster}" alt="${movie.title} Poster" />
        </div>
        <div class="card-content">
            <h2 class="movie-title">${movie.title}</h2>
            <p class="movie-description">${movie.description}</p>
            <p class="release-date">Showtime: <span>${movie.showtime}</span></p>
            <p class="release-date">Available Tickets: <span>${movie.capacity - movie.tickets_sold}</span></p>
        </div>
    `;

    return movieCard;
}
