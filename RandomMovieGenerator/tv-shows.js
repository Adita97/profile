const generateBtn = document.getElementById('generate-btn')
const movieContainer = document.querySelector('.movie-container');
const languageSelect = document.querySelector('#language');

generateBtn.addEventListener('click', () => {
generateBtn.classList.add('btn-animation')
setTimeout(() =>{
generateBtn.classList.remove('btn-animation')
}, 2000);
})
generateBtn.addEventListener('click', () => {
    setTimeout(() => {
      const genreSelect = document.querySelector('#genre');
      const genre = genreSelect.value
      const language = languageSelect.value
      const minRating = document.querySelector('#min-rating').value;
      const year = document.querySelector('#year').value;
      
      movieContainer.innerHTML = '<p style="text-align: center;">Loading...</p>';
      
      movieContainer.innerHTML = '';
      const url = `https://api.themoviedb.org/3/discover/tv?api_key=d240c0501df566b063635647bb5d0be5&language=${language}&sort_by=popularity.desc&page=1&with_genres=${genre}&vote_average.gte=${minRating}&first_air_date_year=${year}`;
      console.log(url)
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const movies = data.results;
        
          
        //   movies.forEach(movie => {
        //     console.log
        const randomIndex = Math.floor(Math.random() * movies.length)
        const randomMovie = movies[randomIndex]
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
              <div class="movie-cover" style="background-image: url(https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}); background-position: center; background-size: 100%"></div>
              <h3>${randomMovie.name}</h3>
              <p>Year: ${randomMovie.first_air_date.substring(0, 4)}</p>
              <p>IMDB Rating: ${randomMovie.vote_average}</p>
            `;
            
            movieContainer.appendChild(movieCard);
        //   });
    
    
        })
        .catch(error => {
          console.error(error);
        });
    }, 2000)
  });
