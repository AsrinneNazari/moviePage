import './style.css'
import axios from 'axios';
import { createHTML } from './htmlForMovies';


document.getElementById("searchForm")?.addEventListener("submit", async (e) =>{
  e.preventDefault();
  const apiKey = import.meta.env.VITE_API_KEY;
  const movieSearch = document.getElementById("searchText").value;
  const respons = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieSearch}`);
  const data = respons.data;

  createHTML(data.Search);
})

/* Gör fältet tomt om man ej sökt */

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