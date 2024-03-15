
export const createHTML = (movies) =>{
    const searchResults = document.getElementById("searchResults") as HTMLDivElement;
    const modalInfo = document.getElementById("modal-info") as HTMLDivElement;
    searchResults.innerHTML = "";
  
    movies.forEach((movie) => {
      const movieContainer = document.createElement("div");
      const title = document.createElement("h3");
      const year = document.createElement("h4");
      const moviePicture = document.createElement("img");
      moviePicture.src = movie.Poster;
  
      movieContainer.className = "movieContainer";
      movieContainer.addEventListener("click", async () =>{
        const movieDetails = await (movie.Title);
        modalInfo.style.display = "block"; 
        console.log(movieDetails);
        createmodalInfo(movie);
        });
      title.innerHTML = movie.Title;
      year.innerHTML = "(" + movie.Year + ")";
      movieContainer.appendChild(title);
      movieContainer.appendChild(year);
      movieContainer.appendChild(moviePicture);
      searchResults.appendChild(movieContainer);
    });
    const closemodal = document.getElementById("close-modal-info");
    closemodal?.addEventListener("click", () =>{
      modalInfo.style.display = "none";
    })
  }

  export const createmodalInfo = (movie) =>{
  const info = document.getElementById("info") as HTMLDivElement;
  info.innerHTML = "";
  
    const movieContainer = document.createElement("div");
      const title = document.createElement("h4");
      const year = document.createElement("h5");
      const moviePicture = document.createElement("img");
      const moviePlot = document.createElement("div");
      movieContainer.className = "movie-container-modal";
      moviePicture.className = "movie-picture-modal";

      moviePicture.src = movie.Poster;
      title.innerHTML = movie.Title;
      year.innerHTML = "(" + movie.Year + ")";
      moviePlot.innerHTML = movie.Plot;  //funkar ej, varför?

      movieContainer.appendChild(moviePicture);
      movieContainer.appendChild(title);
      movieContainer.appendChild(year);
      movieContainer.appendChild(moviePlot);

      info.appendChild(movieContainer);
    

}
