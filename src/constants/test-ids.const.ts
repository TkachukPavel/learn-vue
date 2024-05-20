import { mapValues } from 'lodash'

const counter = 'counter'
export const Counter = {
  decBtn: `${counter}__dec-btn`,
  val: `${counter}__val`,
  incBtn: `${counter}__inc-btn`,
}

const dialog = 'dialog'
export const Dialog = {
  container: dialog,
  title: `${dialog}__title`,
  closeBtn: `${dialog}__close-btn`,
}

const genre = 'genre'
export const GenreSelect = {
  genreAll: `${genre}__all`,
  genre: (genre: string) => `${genre}__genre-${genre}`,
}

const movieDetails = 'movie-details'
export const MovieDetails = {
  poster: `${movieDetails}__poster`,
  title: `${movieDetails}__title`,
  score: `${movieDetails}__score`,
  genres: `${movieDetails}__genres`,
  year: `${movieDetails}__year`,
  runtime: `${movieDetails}__runtime`,
  overview: `${movieDetails}__overview`,
}
const movieTile = 'movie-tile'
export const MovieTile = {
  container: movieTile,
  menu: `${movieTile}__menu`,
  menuEdit: `${movieTile}__menu-edit`,
  menuDelete: `${movieTile}__menu-delete`,
  poster: `${movieTile}__poster`,
  title: `${movieTile}__title`,
  year: `${movieTile}__year`,
  genres: `${movieTile}__genres`,
}

const searchForm = 'search-form'
export const SearchForm = {
  container: searchForm,
  input: `${searchForm}__input`,
  btn: `${searchForm}__btn`,
}

const sortControl = 'sort-control'
export const SortControl = {
  menu: `${sortControl}__toggle`,
  year: `${sortControl}__year`,
  title: `${sortControl}__title`,
}

const movieList = 'movie-list'
export const MovieList = {
  addMovieBtn: `${movieList}__add-movie`,
  searchBtn: `${movieList}__search-btn`,
  searchForm: SearchForm,
  movieDetails: MovieDetails,
  GenreSelect: GenreSelect,
  SortControl: SortControl,
  total: `${movieList}__total-amount`,
  tile: (id: number) => `${movieList}__tile-${id}`,
}
