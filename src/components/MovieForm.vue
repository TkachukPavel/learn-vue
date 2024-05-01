<script setup lang="ts">
import vNumberFormat from '@/directives/number-format-directive';
import type { Movie } from '@/models/MovieDetails.model';
import VueDatePicker from '@vuepic/vue-datepicker'
import { ref, watch } from 'vue';
import { vOnClickOutside } from '@vueuse/components'
import { durationFormatter, scoreFormatter } from '@/utils/number-formatters';
import { useFocusWithin } from '@vueuse/core';

type MovieForm = Partial<Movie>

const emit = defineEmits<{
    submit: [value: MovieForm]
}>()

const genresField = ref()

const props = withDefaults(
    defineProps<{ movie?: MovieForm }>(), {
    movie: () => ({
        genres: []
    })
})

const dropdownOpened = ref(false)

const genres = [
    'Crime',
    'Documentary',
    'Horror',
    'Comedy',
    'Action & Adventure'
]

const form = ref<MovieForm>({ ...props.movie })

watch(useFocusWithin(genresField).focused, (focused) => {
    dropdownOpened.value = focused
})
</script>

<template>
    <div class="container px-0 movie-form">
        <form @submit.prevent="emit('submit', form)" @reset.prevent="form = { ...props.movie }">
            <div class="row pb-3 mb-2">
                <div class="col">
                    <div class="movie-form__container d-flex flex-column">
                        <label for="movie-form-title" class="text-uppercase form-label movie-form__input-label">
                            title
                        </label>

                        <input required id="movie-form-title" class="form-control p-3 movie-form__input" type="text"
                            v-model="form.title">

                    </div>
                </div>
                <div class="col-auto">
                    <div class="movie-form__container d-flex flex-column">
                        <label for="movie-form-release-date" class="text-uppercase form-label movie-form__input-label">
                            release date
                        </label>
                        <VueDatePicker dark class="w-fixed" auto-apply v-model="form.releaseDate"
                            input-class-name="form-control py-3 ps-5 movie-form__input" format="MM/dd/yyyy"
                            :enable-time-picker="false">
                            <template #input-icon>
                                <div class="material-symbols-outlined p-3">
                                    calendar_month
                                </div>
                            </template>
                        </VueDatePicker>

                    </div>
                </div>
            </div>
            <div class="row pb-3 mb-2">
                <div class="col">
                    <div class="movie-form__container d-flex flex-column">
                        <label for="movie-form-url" class="text-uppercase form-label movie-form__input-label">
                            movie url
                        </label>
                        <input id="movie-form-url" class="form-control p-3 movie-form__input" type="text"
                            placeholder="https://" v-model="form.movieUrl">

                    </div>
                </div>
                <div class="col-auto">
                    <div class="movie-form__container d-flex flex-column">
                        <label for="movie-form-release-rating"
                            class="text-uppercase form-label movie-form__input-label">
                            rating
                        </label>
                        <input id="movie-form-release-rating" class="form-control p-3 movie-form__input w-fixed"
                            type="text" v-model.number="form.score" v-number-format="scoreFormatter" placeholder="7.8"
                            min="0" max="10">

                    </div>
                </div>
            </div>
            <div class="row pb-3 mb-2">
                <div class="col">
                    <div class="movie-form__container d-flex flex-column">
                        <label for="movie-form-genre" class="text-uppercase form-label movie-form__input-label">
                            genre
                        </label>
                        <div ref="genresField">
                            <input id="movie-form-genre" class="form-control p-3 movie-form__input"
                                placeholder="Select Genre" readonly :value="form.genres?.join(', ')" type="text"
                                :style="{ cursor: 'pointer' }">

                            <ul class="dropdown-menu dropdown-menu-end movie-form__dropdown-menu"
                                :class="{ show: dropdownOpened }">
                                <li tabindex="0" v-for="(genre, index) in genres" :style="{ cursor: 'pointer' }">
                                    <div class="dropdown-item text-capitalize p-0 ps-2 movie-form__dropdown-item">
                                        <div class="form-check d-flex align-items-center">

                                            <input :id="`genre-${index}`" type="checkbox" :value="genre"
                                                v-model="form.genres" class="form-check-input ps-3"
                                                :style="{ cursor: 'pointer' }">
                                            <label :for="`genre-${index}`" :style="{ cursor: 'pointer' }"
                                                class="form-check-label movie-form__checkbox-label  w-100 py-2 ps-3 pe-3 h-100 ">
                                                {{ genre }}

                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
                <div class="col-auto">
                    <div class="movie-form__container d-flex flex-column">
                        <label for="movie-form-runtime" class="text-uppercase form-label movie-form__input-label">
                            runtime
                        </label>
                        <input id="movie-form-runtime" class="form-control p-3 movie-form__input w-fixed"
                            placeholder="minutes" v-number-format="durationFormatter" v-model.number="form.length">

                    </div>
                </div>
            </div>

            <div class="row pb-5 mb-2">
                <div class="col">
                    <label for="movie-form-overview" class="text-uppercase form-label movie-form__input-label">
                        overview
                    </label>
                    <textarea class="form-control p-3 movie-form__input movie-form__input--textarea"
                        placeholder="Movie Description" id="movie-form-overview" v-model="form.description"></textarea>

                </div>
            </div>

            <div class="row row-cols-auto justify-content-end">
                <div class="col">
                    <button type="reset" class="btn  btn-outline-secondary text-uppercase py-2 px-5">Reset</button>
                </div>
                <div class="col">
                    <button type="submit" class="btn btn-primary text-uppercase py-2 px-5">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>


<style scoped lang="scss">
.w-fixed {
    width: 300px;
}

.movie-form {
    background: #232323;

    &__input {
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 400;
        line-height: 24.38px;
        text-align: left;
        color: #FFFFFF;
        border-radius: 0;

        border-color: transparent;
        background-color: #323232F2;

        &--textarea {
            min-height: 197px;
        }

        &::placeholder {
            color: #FFFFFF;
            opacity: 0.3;
        }

    }

    &__dropdown-item {
        // --bs-dropdown-link-color: #ffffff;
        --bs-dropdown-link-hover-bg: transparent !important;
        --bs-dropdown-link-hover-color: #f65261 !important;
        --bs-dropdown-link-active-bg: transparent !important;
        --bs-dropdown-link-active-color: #f65261 !important;
    }

    &__input-label {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
        line-height: 19.5px;
        letter-spacing: 0.8888887763023376px;
        text-align: left;
        color: #F65261;
    }

    &__checkbox-label {
        font-family: Montserrat;

    }

}
</style>