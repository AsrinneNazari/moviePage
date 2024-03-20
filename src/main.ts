import './style.css'
import axios from 'axios';
import { IOmdbResponse } from './models/IOmdbResponse';
import { createmodalInfo } from './createmodalInfo';

document.getElementById("searchForm")?.addEventListener("submit", async (e) =>{
  e.preventDefault();
  const apiKey = import.meta.env.VITE_API_KEY;
  const movieSearch = document.getElementById("searchText") as HTMLInputElement;
  const movieSearchValue = movieSearch.value;
  const respons = await axios.get<IOmdbResponse>(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieSearchValue}`);
  const data = respons.data;
  const movies = data.Search;


 const createHTML = () =>{
    const searchResults = document.getElementById("searchResults") as HTMLDivElement;
    const modalInfo = document.getElementById("modal-info") as HTMLDivElement;
    searchResults.innerHTML = "";
  
    movies.forEach((movie) => {
      const movieContainer = document.createElement("div");
      const title = document.createElement("h3");
      const year = document.createElement("h4");
      const moviePicture = document.createElement("img");
      moviePicture.src = movie.Poster;
      console.log("hej")
      movieContainer.className = "movieContainer";
      movieContainer.addEventListener("click", async () =>{

        modalInfo.style.display = "block"; 
      
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
    createHTML();
})


document.addEventListener("DOMContentLoaded", () =>{

  const searchText = document.getElementById("searchText") as HTMLInputElement;
  const moviesearchContainer = document.getElementById("movie-searchContainer") as HTMLDivElement;


  if (searchText.value === "") {
    moviesearchContainer.style.display = "none";
  }

searchText.addEventListener("input", () =>{
if (searchText.value === ""){
  moviesearchContainer.style.display = "none";
}
else{
  moviesearchContainer.style.display = "block";
}
})
})