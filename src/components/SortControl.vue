<script setup lang="ts">
import { SortingEnum } from '@/models/SortControl.model';
import { useFocusWithin } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import { testid } from '@/constants';


const Sorting = SortingEnum;

const sorting = defineModel<SortingEnum>()

const sortingElement = ref()
const opened = ref(false)

watch(useFocusWithin(sortingElement).focused, (focused) => {
    opened.value = focused
})

const displayValue = computed(() => {
    switch (sorting.value) {
        case SortingEnum.ReleaseDate:
            return 'release date';
        case SortingEnum.Title:
            return 'title'
    }
})

</script>

<template>
    <div class="container-fluid px-0 h-100 sort-control" ref="sortingElement">
        <div class="row row-cols-auto h-100 align-items-center">
            <div class="col">
                <label for="sort-select" class="sort-control__label text-uppercase">
                    sort by
                </label>
            </div>
            <div class="col">
                <div class="dropdown sort-contol__dropdown">
                    <input class="dropdown-toggle text-uppercase form-control sort-control__dropdown-toggle"
                        style="cursor: pointer;" :data-testid="testid.SortControl.menu" readonly :value="displayValue"
                        id="sort-select">
                    <ul class="dropdown-menu dropdown-menu-end sort-control__dropdown-menu" :class="{ show: opened }">
                        <li>
                            <a class="dropdown-item py-2 text-uppercase sort-control__dropdown-item"
                                @click="sorting = Sorting.ReleaseDate; opened = false"
                                :data-testid="testid.SortControl.year" style="cursor: pointer;" tabindex="0">
                                release date
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item py-2 text-uppercase sort-control__dropdown-item"
                                @click="sorting = Sorting.Title; opened = false" style="cursor: pointer;"
                                :data-testid="testid.SortControl.title" tabindex="0">
                                title
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.sort-control {
    background: #232323;

    &__label {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.5px;
        letter-spacing: 0.8888887763023376px;
        text-align: left;
        color: #FFFFFF;
        opacity: 0.6;
    }

    &__dropdown-toggle {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.5px;
        letter-spacing: 0.8888887763023376px;
        text-align: left;
        color: #FFFFFF;
        border: none;
        background-color: transparent;

        &::after {
            border-radius: 30px;
            margin-left: 8px;
            color: #F65261;
        }
    }

    &__dropdown-item {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.5px;
        letter-spacing: 0.8888887763023376px;
        text-align: left;
    }

    &__dropdown-menu {}
}
</style>