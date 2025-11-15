const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2d553912632dc6dc336dd52070647fa4&page=1";
const IMGID = "https://image.tmdb.org/t/p/w1280";
const SEARCHID = "https://api.themoviedb.org/3/search/movie?api_key=2d553912632dc6dc336dd52070647fa4&query=";

const main =document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url){
  fetch(url).then(res=>res.json())
  .then(function(data){
    console.log(data.results);
    data.results.forEach(element=>{
      const div_card = document.createElement("div");
      div_card.setAttribute("class","card");
      const div_row = document.createElement("div");
      div_row.setAttribute("class","row");
      const div_column = document.createElement("div");
      div_column.setAttribute("class","column");
      const image = document.createElement("img");
      image.setAttribute("class","thumbnail");
      image.setAttribute("id","image");
      const title = document.createElement("h3");
      title.setAttribute("id","title");
      const center = document.createElement("center");

      title.innerHTML = `${element.title}`
      ;
      image.src=IMGID+element.poster_path;

      center.append(image);
      div_card.appendChild(center);
      div_card.appendChild(title);
      div_column.appendChild(div_card);
      div_row.appendChild(div_column);

      main.appendChild(div_row)
    });
  });
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  main.innerHTML="";

  const searchItem = search.value;

  if (searchItem){
    returnMovies(SEARCHID+searchItem);
    search.value="";

  }
})

// const API_KEY = "2d553912632dc6dc336dd52070647fa4";
// const BASE_URL = "https://api.themoviedb.org/3";
// const IMG_URL = "https://image.tmdb.org/t/p/w500";
// const FALLBACK_IMG = "https://via.placeholder.com/500x750?text=No+Image";

// const APILINK = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
// const SEARCHID = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;

// const main = document.getElementById("section");
// const form = document.getElementById("form");
// const search = document.getElementById("query");

// loadMovies(APILINK);

// function loadMovies(url) {
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       main.innerHTML = "";

//       const row = document.createElement("div");
//       row.setAttribute("class", "row");

//       data.results.forEach(movie => {
//         const column = document.createElement("div");
//         column.setAttribute("class", "column");

//         const card = document.createElement("div");
//         card.setAttribute("class", "card");

//         const image = document.createElement("img");
//         image.setAttribute("class", "thumbnail");
//         image.setAttribute("id", "image");
//         image.src = movie.poster_path ? IMG_URL + movie.poster_path : FALLBACK_IMG;

//         const title = document.createElement("h3");
//         title.setAttribute("id", "title");
//         title.textContent = movie.title;

//         const rating = document.createElement("p");
//         rating.textContent = `⭐ Rating: ${movie.vote_average}`;

//         const release = document.createElement("p");
//         release.textContent = `📅 Released: ${movie.release_date}`;

//         const center = document.createElement("center");
//         center.appendChild(image);

//         card.appendChild(center);
//         card.appendChild(title);
//         card.appendChild(rating);
//         card.appendChild(release);
//         column.appendChild(card);
//         row.appendChild(column);
//       });

//       main.appendChild(row);
//     })
//     .catch(err => {
//       console.error("Error fetching movies:", err);
//       main.innerHTML = "<p>Something went wrong. Please try again later.</p>";
//     });
// }

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   const searchItem = search.value.trim();
//   if (searchItem) {
//     loadMovies(SEARCHID + encodeURIComponent(searchItem));
//     search.value = "";
//   }
// });