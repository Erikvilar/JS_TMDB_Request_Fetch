window.addEventListener('load', function () {


    const options = {
        method: 'GET',
        // mode: 'cors', // Removido para usar o valor padrão ('cors')
        headers: {
            accept: 'application/json'
            // Authorization: 'Bearer SEU_TOKEN_AQUI' // Remova ou substitua pelo seu token válido
        }
    };

    function fetchData() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=181c0d2cf37e7daad1425100c90a50ea', options)
            .then(response => response.json())
            .then(data => {

                console.log(data.results)
                const content = data.results;

                displayElements(content);


               



            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });

    }

    fetchData();



    var displayElements = (content) => {
        const moviesContainer = document.getElementById('movies');
        content.forEach(item => {
            const movieDiv = document.createElement('div');
            const titleElement = document.createElement('h2');
            const posterElement = document.createElement('img');
            const spanAverage = document.createElement('span')

            const spanPopulatiry = document.createElement('span')
            titleElement.textContent = item.title;
            posterElement.src = "https://image.tmdb.org/t/p/w500" + item.poster_path;
            movieDiv.appendChild(spanAverage).textContent = "★ Rate: " + item.vote_average;
            movieDiv.appendChild(spanPopulatiry).textContent = "♥ Popularity:" + item.popularity;
            movieDiv.appendChild(titleElement);
            movieDiv.appendChild(posterElement);

            moviesContainer.appendChild(movieDiv);

            movieDiv.addEventListener('mouseover', function () {
            const sinopseParagraph = document.createElement('p');
            sinopseParagraph.textContent = item.overview;
            movieDiv.appendChild(sinopseParagraph);
        });

        // Removendo a sinopse quando o mouse sai
        movieDiv.addEventListener('mouseout', function () {
            const sinopseParagraph = movieDiv.querySelector('p');
            if (sinopseParagraph) {
                sinopseParagraph.remove();
            }
        });
        });
    };

    var createElement = (father, child) => {
        var fatherElement = document.getElementById(father);
        var childElement = document.createElement(child);
        fatherElement.appendChild(childElement);

        return childElement;
    };

});
