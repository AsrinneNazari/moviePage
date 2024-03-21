import { IMovie } from "./models/IMovie";

export const createmodalInfo = async (movie:IMovie) =>{
  const info = document.getElementById("info") as HTMLDivElement;
  info.innerHTML = "";

  const apiKey = import.meta.env.VITE_API_KEY;
  const movieInfoResponse = await fetch( `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`)
  const movieInfo = await movieInfoResponse.json();
  
  const starRatingContainer = document.createElement("div");
  const starIconElement = document.createElement("img");
  starIconElement.className = "star-icon"
  starIconElement.src = "./../src/img/star_icon.png"; 
  starRatingContainer.appendChild(starIconElement);
   
  
    const movieContainer = document.createElement("div");
      const title = document.createElement("h4");
      const year = document.createElement("h5");
      const moviePicture = document.createElement("img");
      const moviePlot = document.createElement("div");
      const movieActors = document.createElement("div");
      const movieInfoContainer = document.createElement("div");
      const movieRating = document.createElement("div")
      movieContainer.className = "movie-container-modal";
      moviePicture.className = "movie-picture-modal";
      movieInfoContainer.className = "movie-info-container";
      title.className = "modal-title"
      moviePlot.className = "movie-Plot"
      movieActors.className = "movie-actors"
      movieRating.className = "movie-Rating"

      moviePicture.src = movieInfo.Poster;
      title.innerHTML = movieInfo.Title;
      year.innerHTML = "(" + movieInfo.Year + ")";
      movieRating.innerHTML = "Rating:" + movieInfo.imdbRating;
      movieActors.innerHTML = "Actors:" + movieInfo.Actors;  
      moviePlot.innerHTML =  movieInfo.Plot;  
      movieRating.appendChild(starRatingContainer);

      movieInfoContainer.appendChild(title)
      movieInfoContainer.appendChild(year)
      movieInfoContainer.appendChild(movieRating)
      movieInfoContainer.appendChild(moviePlot)
      movieInfoContainer.appendChild(movieActors)
      movieContainer.appendChild(moviePicture);
      movieContainer.appendChild(movieInfoContainer);

      info.appendChild(movieContainer);
    }