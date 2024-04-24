<script setup lang="ts">
import Counter from './components/Counter.vue'
import GenreSelect from './components/GenreSelect.vue';
import SearchForm from './components/SearchForm.vue';

const genres = [
  'all',
  'documentary',
  'comedy',
  'horror',
  'crime'
]

const onSearch = (query: string) => alert(query)

const onGenreSelect = (genre: string) => alert(genre)
</script>

<template>
  <div class="container py-4">
    <div class="row row-cols-auto">
      <div class="col">
        <h2> Counter</h2>
      </div>
      <div class="col">
        <Counter />
      </div>
    </div>

    <div class="row mt-3 ">
      <div class="col-auto">
        <h2>Search Form</h2>
      </div>
      <div class="col">
        <SearchForm :init-query="'Star Wars'" @on-search="onSearch" />
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-auto">
        <h2>
          Genre Selector
        </h2>
      </div>
      <div class="col">
        <GenreSelect :selected-genre="genres[0]" :genres="genres" @on-select="onGenreSelect" />
      </div>
    </div>
  </div>
</template>
