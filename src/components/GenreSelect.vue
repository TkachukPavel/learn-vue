<script setup lang="ts">
import { ref } from 'vue';

type GenreSelectProps = {
    genres: string[],
    selectedGenre?: string
}

const props = withDefaults(
    defineProps<GenreSelectProps>(), {
    genres: () => [],
    selectedGenre: ''
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
        <div class="row row-cols-auto h-100 ">
            <div class="col h-100 genre-select__genre-container" v-for="genre in $props.genres">
                <div class="genre-select__genre d-flex  h-100 flex-column justify-content-center px-2 text-uppercase"
                    :class="{ 'genre-select__genre--selected': genre === selectedGenre }"
                    @click="() => selectGenre(genre)" :data-testid="`genre-${genre}`">
                    {{ genre }}

                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.genre-select {
    background: #232323;
    border-bottom: 2px solid #424242;
    box-sizing: content-box;

    &__genre {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.5px;
        text-align: left;
        color: #FFFFFF;
        margin-bottom: -2px;
        box-sizing: content-box;

        &:hover,
        &--selected {
            border-bottom: 2px solid #F65261;
        }

    }
}
</style>