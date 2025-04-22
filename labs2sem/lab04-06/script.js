"use strict";

const container = document.getElementById("movies-container");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const genreFilter = document.getElementById("genre-filter");

let allMovies = [];
let filteredMovies = [];

async function fetchMovies() {
  try {
    const res = await fetch("https://api.tvmaze.com/shows");
    if (!res.ok) throw new Error("Помилка при завантаженні даних");
    const data = await res.json();
    return data;
  } catch (error) {
    alert(error.message);
    return [];
  }
}

function renderMovies(movies) {
  container.innerHTML = movies.map(({ name, image, rating, genres }) => `
    <div class="movie-card">
      <img src="${image?.medium || 'https://via.placeholder.com/210x295'}" alt="${name}" />
      <h3>${name}</h3>
      <p>Рейтинг: ${rating?.average || 'N/A'}</p>
      <p>Жанри: ${genres.join(', ')}</p>
    </div>
  `).join('');
}

function populateGenres(movies) {
  const genres = new Set();
  movies.forEach(({ genres: g }) => g.forEach(genre => genres.add(genre)));

  genreFilter.innerHTML = `<option value="all">Всі жанри</option>` +
    Array.from(genres)
      .sort()
      .map(genre => `<option value="${genre}">${genre}</option>`)
      .join('');
}

function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;
  const sortBy = sortSelect.value;

  let result = [...allMovies];

  // Фільтр за назвою
  if (searchTerm) {
    result = result.filter(movie =>
      movie.name.toLowerCase().includes(searchTerm)
    );
  }

  // Фільтр за жанром
  if (selectedGenre !== "all") {
    result = result.filter(movie =>
      movie.genres.includes(selectedGenre)
    );
  }

  // Сортування
  result.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return (b.rating.average || 0) - (a.rating.average || 0);
    }
  });

  filteredMovies = result;
  renderMovies(filteredMovies);
}

function setupEventListeners() {
  searchInput.addEventListener("input", applyFilters);
  sortSelect.addEventListener("change", applyFilters);
  genreFilter.addEventListener("change", applyFilters);
}

(async function init() {
  allMovies = await fetchMovies();
  filteredMovies = [...allMovies];
  populateGenres(allMovies);
  renderMovies(allMovies);
  setupEventListeners();
})();
