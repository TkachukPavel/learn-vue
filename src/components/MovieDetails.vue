<script setup lang="ts">
import type { Movie } from '@/models/MovieDetails.model';
import { durationFormatter, scoreFormatter } from '@/utils/number-formatters';
import { testid } from '@/constants';

const props =
    defineProps<{ movie: Movie }>()

</script>

<template>
    <div class="container movie-details">
        <div class="row g-5">
            <div class="col-auto">
                <img :src="props.movie.poster_path" class="movie-details__poster" :alt="`${$props.movie.title} poster`"
                    :data-testid="testid.MovieDetails.poster">
            </div>
            <div class="col">
                <div class="row flex-nowrap align-items-center">
                    <div class="col">
                        <h3 class="movie-details__title text-uppercase" :data-testid="testid.MovieDetails.title">
                            {{ props.movie.title }}
                        </h3>
                    </div>
                    <div class="col-auto">
                        <div class="movie-details__score" :data-testid="testid.MovieDetails.score">
                            {{ scoreFormatter(props.movie.vote_average) }}
                        </div>
                    </div>
                </div>
                <div class="row mt-8">
                    <div class="col">
                        <div class="movie-details__genres" :data-testid="testid.MovieDetails.genres">
                            {{ props.movie.genres?.join(', ') }}
                        </div>
                    </div>
                </div>
                <div class="row mt-3 pt-3 gx-5 row-cols-auto">
                    <div class="col">
                        <div class="movie-details__year" :data-testid="testid.MovieDetails.year">
                            {{ new Date(props.movie?.release_date ?? '').getFullYear() }}
                        </div>
                    </div>
                    <div class="col">
                        <div class="movie-details__length" :data-testid="testid.MovieDetails.runtime">{{
                            durationFormatter(props.movie.runtime) }}</div>
                    </div>
                </div>
                <div class="row mt-3 pt-3">
                    <div class="col">
                        <div class="movie-details__description" :data-testid="testid.MovieDetails.overview">
                            {{ props.movie.overview }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.movie-details {
    background: #232323;

    &__title {
        font-family: Montserrat;
        font-size: 40px;
        font-weight: 300;
        line-height: 48.76px;
        letter-spacing: 1px;
        color: #FFFFFF
    }

    &__score {
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 300;
        line-height: 60px;
        text-align: center;
        color: #FFFFFF;

        width: 60px;
        height: 60px;
        border: 1px solid #FFFFFF;
        border-radius: 100%;
    }

    &__genres {
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 17.07px;
        text-align: left;
        opacity: 0.5;
        color: #FFFFFF
    }

    &__year,
    &__length {
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 300;
        line-height: 29.26px;
        text-align: left;
        color: #F65261
    }

    &__description {
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 300;
        line-height: 24.38px;
        text-align: left;
        color: #FFFFFF;
        opacity: 0.5;
    }

    &__poster {
        width: 323.41px;
        height: 486px;
        display: block;
        background-color: #555555;
        color: #FFFFFF;
    }

}
</style>