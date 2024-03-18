import { IMovie } from "./models/IMovie";

export const createmodalInfo = async (movie:IMovie) =>{
  const info = document.getElementById("info") as HTMLDivElement;
  info.innerHTML = "";

  const apiKey = import.meta.env.VITE_API_KEY;
  const movieInfoResponse = await fetch( `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`)
  const movieInfo = await movieInfoResponse.json();
  console.log(movieInfo)
  
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

      moviePicture.src = movieInfo.Poster;
      title.innerHTML = movieInfo.Title;
      year.innerHTML = "(" + movieInfo.Year + ")";
      moviePlot.innerHTML = "Plot:" + movieInfo.Plot;  
      movieActors.innerHTML = "Actors:" + movieInfo.Actors;  
      movieRating.innerHTML = "Rating:" + movieInfo.imdbRating;


      movieInfoContainer.appendChild(title)
      movieInfoContainer.appendChild(year)
      movieInfoContainer.appendChild(moviePlot)
      movieInfoContainer.appendChild(movieActors)
      movieInfoContainer.appendChild(movieRating)
      movieContainer.appendChild(moviePicture);
      movieContainer.appendChild(movieInfoContainer);

      info.appendChild(movieContainer);
    
    }