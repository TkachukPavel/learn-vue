<script setup lang="ts">
import GenreSelect from '@/components/GenreSelect.vue';
import SearchForm from '@/components/SearchForm.vue';
import SortControl from '@/components/SortControl.vue';
import MovieTile from '@/components/MovieTile.vue';
import { ref, watch, watchEffect } from 'vue';
import { useFetch } from '@vueuse/core';
import { capitalize } from 'lodash';
import MovieDetails from '@/components/MovieDetails.vue';
import { api, genres, testid } from '@/constants';
import { SortingEnum, type Movie, type MoviesResponse } from '@/models';

const $details = ref<HTMLElement | null>(null)
const selectedMovie = ref<Movie | null>(null)
const sorting = ref(SortingEnum.ReleaseDate)
const search = ref('')
const moviesUrl = ref(`${api}/movies`)
const genre = ref('all')

const data = ref<MoviesResponse | null>(null)

// using useFetch
// const { data } = useFetch(moviesUrl, { refetch: true }).get().json()

//  using fetchapi
watch(moviesUrl, async (url) => {
  data.value = await fetch(url).then(r => r.json())
})


watchEffect(async () => {
  const qParams: any = {}
  if (genre.value !== 'all') {
    qParams.filter = capitalize(genre.value)
  }

  if (search.value !== '') {
    qParams.searchBy = 'title'
    qParams.search = search.value
  }

  qParams.sortBy = sorting.value
  qParams.sortOrder = 'asc'

  const paramsAsUrl = Object.keys(qParams).map(key => `${key}=${qParams[key]}`).join('&')
  moviesUrl.value = `${api}/movies${paramsAsUrl ? '?' + paramsAsUrl : ''}`
})
</script>

<template>
  <div class="container-fluid flex-grow-1 py-4 movie-app">
    <div class="row">
      <div class="col">
        <div class="movie-app__search-container" ref="$details">
          <div class="row pb-3 mb-3 row-cols-auto justify-content-between">
            <div class="col">
              <div class="movie-app__app-title">
                <span class="fw-bold">netflix</span>roulette
              </div>
            </div>
            <div class="col">
              <button v-if="!selectedMovie" class="btn movie-app__add-movie text-uppercase"
                :data-testid="testid.MovieList.addMovieBtn">
                + add movie
              </button>

              <button v-else class="btn btn-link movie-app__search-btn" @click="selectedMovie = null">
                <span class="material-symbols-outlined" style="font-size: 28px">search</span>
              </button>
            </div>
          </div>

          <div class="row px-5 mx-5  mb-5">
            <div class="col">
              <template v-if="!selectedMovie">
                <div class="row mb-3 pb-3">
                  <div class="col">
                    <label class="movie-app__search-title text-uppercase">
                      FIND YOUR MOViE
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="movie-app__search">
                      <SearchForm :initQuery="search" @onSearch="search = $event" />
                    </div>
                  </div>
                </div>
              </template>
              <MovieDetails v-else :movie="selectedMovie" />
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="row mx-2 movie-app__toolbar">
          <div class="col ps-0">
            <GenreSelect :genres="genres" :selected-genre="genre" @onSelect="genre = $event" />
          </div>
          <div class="col-auto">
            <SortControl v-model="sorting" />
          </div>
        </div>

        <div class="row ps-2 mt-3 mb-4">
          <div class="col">
            <div class="movie-app__search-count">
              <span class="fw-bold">{{ data?.totalAmount ?? 0 }}</span> movies found
            </div>
          </div>
        </div>


        <div class="row g-5 row-cols-auto justify-content-center">
          <div class="col" v-for="movie in data?.data ?? []" :key="movie.id">
            <MovieTile :movie="movie" @movieClicked="selectedMovie = $event; $details?.scrollIntoView()" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.movie-app {
  background: #232323;

  &__search-btn {
    --bs-link-color: #F65261;
    --bs-link-hover-color: #F65261;
    font-size: 28px;
    --bs-btn-font-size: 22px;
  }

  &__toolbar {
    border-bottom: 2px solid #424242;

  }

  &__search-title {
    font-family: Montserrat;
    font-size: 40px;
    font-weight: 300;
    line-height: 48.76px;
    letter-spacing: 1px;
    text-align: center;
    color: #FFFFFF;
  }

  &__app-title {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    line-height: 24.38px;
    text-align: left;
    color: #F65261;
    opacity: 1;
  }

  &__add-movie {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.38px;
    text-align: right;
    color: #F65261;
    background-color: rgba(96, 96, 96, 0.68);
    --bs-btn-active-color: #F65261;
    --bs-btn-active-bg: rgba(96, 96, 96, 0.68);
    border-color: transparent;
  }

  &__search-count {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.38px;
    text-align: left;
    color: #FFFFFF
  }

  &__search-container {
    // background-image: url('/src/assets/background.png');
    // background
    background-size: cover;
    background-clip: content-box;
    // opacity: 0.3;
    top: -48px;
  }
}
</style>