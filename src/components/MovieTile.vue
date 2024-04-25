<script setup lang="ts">
import type { Movie } from '@/models/MovieDetails.model';

defineEmits<{
    movieClicked: [value: Movie]
}>()

const props = defineProps<{
    movie: Movie
}>()
</script>

<template>
    <div class="container movie-tile" @click="$emit('movieClicked', $props.movie)">
        <div class="row">
            <div class="col-auto" style="cursor: pointer;" data-testid="movie-tile">
                <img class="movie-tile__poster" alt="Poster" :src="movie.posterUrl">
                <div class="row mt-3 pt-2 row-cols-auto justify-content-between">
                    <div class="col">
                        <div class="movie-tile__title text-capitalize">
                            {{ movie.title }}
                        </div>
                    </div>

                    <div class="col">
                        <div class="movie-tile__year px-2 py-1">
                            {{ movie.year }}
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
}
</style>