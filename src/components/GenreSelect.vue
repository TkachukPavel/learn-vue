<script setup lang="ts">
import { ref } from 'vue';
import { testid } from '@/constants';

type GenreSelectProps = {
    genres: string[],
    selectedGenre?: string
}

const props = withDefaults(
    defineProps<GenreSelectProps>(), {
    genres: () => [],
    selectedGenre: 'all'
})

const emit = defineEmits<{
    onSelect: [value: string]
}>()

const selectedGenre = ref(props.selectedGenre)

const selectGenre = (genre: string) => {
    selectedGenre.value = genre;
    emit('onSelect', genre)
}

</script>

<template>
    <div class="container genre-select h-100">
        <div class="row  flex-nowrap row-cols-auto h-100 ">
            <div class="col ps-0 h-100 genre-select_genre-container">
                <div class="genre-select__genre d-flex h-100 flex-column justify-content-center px-2 text-uppercase"
                    :class="{ 'genre-select__genre--selected': 'all' === selectedGenre }" style="cursor: pointer;"
                    @click="selectGenre('all')" :data-testid="testid.GenreSelect.genreAll" tabindex="0"
                    @keyup.enter="selectGenre('all')">
                    all
                </div>
            </div>
            <div class="col h-100 genre-select__genre-container" v-for="genre in $props.genres">
                <div class="genre-select__genre d-flex  h-100 flex-column justify-content-center px-2 text-uppercase"
                    :class="{ 'genre-select__genre--selected': genre === selectedGenre }" style="cursor: pointer;"
                    @click="selectGenre(genre)" @keyup.enter="selectGenre(genre)"
                    :data-testid="testid.GenreSelect.genre(genre)" tabindex="0">
                    {{ genre }}

                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.genre-select {
    background: #232323;
    box-sizing: content-box;
    min-height: 50px;

    &__genre {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.5px;
        text-align: left;
        color: #FFFFFF;
        margin-bottom: -2px;
        box-sizing: content-box;
        min-height: 50px;

        &:focus-visible {
            outline-color: transparent;
        }

        &:hover,
        &--selected {
            border-bottom: 2px solid #F65261;
        }

    }
}
</style>