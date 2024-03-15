export const createHTML = (movies) =>{
    const searchResults = document.getElementById("searchResults") as HTMLDivElement;
    searchResults.innerHTML = "";
  
    movies.forEach((movie) => {
      const movieContainer = document.createElement("div");
      const title = document.createElement("h3");
      const moviePicture = document.createElement("img");
      moviePicture.src = movie.Poster;
  
      movieContainer.className = "movieContainer";
      movieContainer.addEventListener("click", async () =>{
        const movieDetails = await (movie.Title);
        console.log(movieDetails);
        });
      title.innerHTML = movie.Title;
      movieContainer.appendChild(title);
      movieContainer.appendChild(moviePicture);
      searchResults.appendChild(movieContainer);
    });
  
  }