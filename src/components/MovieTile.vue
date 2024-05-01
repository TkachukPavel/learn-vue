<script setup lang="ts">
import type { Movie } from '@/models/MovieDetails.model';
import { ref } from 'vue';

defineEmits<{
    movieClicked: [value: Movie],
    editMovie: [value: Movie],
    deleteMovie: [value: Movie]
}>()

const props = defineProps<{
    movie: Movie
}>()

const menuOpened = ref(false)

const toggleMenu = () => {
    menuOpened.value = !menuOpened.value
}
</script>

<template>
    <div class="container movie-tile" @click="$emit('movieClicked', $props.movie)">
        <div class="row">
            <div class="col-auto position-relative movie-tile__card" style="cursor: pointer;" data-testid="movie-tile">
                <div class="movie-tile__menu position-absolute end-0 dropdown">
                    <div class=" material-symbols-outlined movie-tile__menu-toggle me-3 mt-3"
                        :class="{ 'd-block': menuOpened }" @click.stop="toggleMenu" data-testid="movie-tile-menu">
                        more_vert
                    </div>
                    <ul class="dropdown-menu movie-tile__menu" :class="{ show: menuOpened }">
                        <li>
                            <a class="dropdown-item py-2 text-uppercase movie-tile__menu-item"
                                data-testid="movie-tile-edit"
                                @click.stop="() => { $emit('editMovie', $props.movie); menuOpened = false }">Edit</a>
                        </li>
                        <li>
                            <a class="dropdown-item py-2 text-uppercase movie-tile__menu-item"
                                data-testid="movie-tile-delete"
                                @click.stop="() => { $emit('deleteMovie', $props.movie); menuOpened = false }">delete</a>
                        </li>
                    </ul>
                </div>
                <img class="movie-tile__poster" alt="Poster" :src="movie.posterUrl">
                <div class="row mt-3 pt-2 row-cols-auto justify-content-between">
                    <div class="col">
                        <div class="movie-tile__title text-capitalize">
                            {{ movie.title }}
                        </div>
                    </div>

                    <div class="col">
                        <div class="movie-tile__year px-2 py-1">
                            {{ movie.releaseDate.getFullYear() }}
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <div class="movie-tile__genres">
                            {{ movie.genres.join(', ') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.movie-tile {
    background: #232323;

    &__poster {
        width: 322px;
        height: 455px;
    }

    &__title {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        line-height: 21.94px;
        text-align: left;
        color: #FFFFFF;
        opacity: 0.7;
    }

    &__year {
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 17.07px;
        text-align: center;
        color: #FFFFFF;
        opacity: 0.7;

        border-radius: 4px;
        border: 1px solid #979797;
    }

    &__genres {
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 17.07px;
        text-align: left;
        color: #FFFFFF;
        opacity: 0.5;
    }

    &__menu-toggle {
        color: #FFFFFF;
        fill: #FFFFFF;
        width: 36px;
        height: 36px;
        background-color: #232323;
        font-size: 30px;
        line-height: 36px;
        text-align: center;
        border-radius: 100%;
        user-select: none;
        display: none;
    }

    &__menu {
        --bs-dropdown-bg: #424242;
        --bs-dropdown-color: #ffffff;
        border: none;
        --bs-dropdown-border-radius: 0;

    }

    &__menu-item {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.5px;
        letter-spacing: 0.8888887763023376px;
        text-align: left;
        --bs-dropdown-link-color: #ffffff;
        --bs-dropdown-link-hover-bg: #F65261;
        --bs-dropdown-link-hover-color: #ffffff;
        --bs-dropdown-link-active-bg: #F65261;

    }

    &__card {
        cursor: pointer;
    }

    &__card:hover &__menu-toggle {
        display: block;
    }


}
</style>