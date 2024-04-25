<script setup lang="ts">
import type { Movie } from '@/models/MovieDetails.model';
import { computed } from 'vue';

const props =
    defineProps<{ movie: Movie }>()

const movieLength = computed(() => {
    const { length } = props.movie
    const hrs = Math.trunc(length / 60)
    const min = length % 60
    return `${hrs}h ${min}min`
})
</script>

<template>
    <div class="container movie-details">
        <div class="row g-5">
            <div class="col-auto">
                <img :src="$props.movie?.posterUrl" class="movie-details__poster" alt="movie poster">
            </div>
            <div class="col">
                <div class="row row-cols-auto flex-nowrap align-items-end">
                    <div class="col">
                        <h3 class="movie-details__title text-uppercase">
                            {{ $props.movie?.title }}
                        </h3>
                    </div>
                    <div class="col">
                        <div class="movie-details__score">
                            {{ $props.movie?.score }}
                        </div>
                    </div>
                </div>
                <div class="row mt-8">
                    <div class="col">
                        <div class="movie-details__genres">
                            {{ $props.movie?.genres?.join(', ') }}
                        </div>
                    </div>
                </div>
                <div class="row mt-3 pt-3 gx-5 row-cols-auto">
                    <div class="col">
                        <div class="movie-details__year">
                            {{ $props.movie?.year }}
                        </div>
                    </div>
                    <div class="col">
                        <div class="movie-details__length">{{ movieLength }}</div>
                    </div>
                </div>
                <div class="row mt-3 pt-3">
                    <div class="col">
                        <div class="movie-details__description">
                            {{ $props.movie?.description }}
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
        text-align: center;
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

    &__poster {}

}
</style>