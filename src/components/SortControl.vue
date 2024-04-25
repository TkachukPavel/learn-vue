<script setup lang="ts">
import { SortingEnum } from '@/models/SortControl.model';
import { ref } from 'vue';


const Sorting = SortingEnum;

const opened = ref(false)
const sorting = defineModel<SortingEnum>()

const toggleDropdown = () => {
    opened.value = !opened.value
}

const selectSort = (newSorting: SortingEnum) => {
    opened.value = false
    sorting.value = newSorting
}

</script>

<template>
    <div class="container sort-control">
        <div class="row row-cols-auto align-items-center">
            <div class="col">
                <div for="sort-select" class="sort-control__label text-uppercase">
                    sort by
                </div>
            </div>
            <div class="col">
                <div class="dropdown sort-contol__dropdown">
                    <button class="btn dropdown-toggle text-uppercase sort-control__dropdown-toggle" type="button"
                        @click="toggleDropdown" data-testid="sort-control-toggle">
                        {{ sorting }}
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end sort-control__dropdown-menu" :class="{ show: opened }">
                        <li>
                            <a class="dropdown-item py-2 text-uppercase sort-control__dropdown-item"
                                @click="() => selectSort(Sorting.ReleaseDate)" data-testid="sorting-release-date">
                                {{ Sorting.ReleaseDate }}
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item py-2 text-uppercase sort-control__dropdown-item"
                                @click="() => selectSort(Sorting.Title)" data-testid="sorting-title">
                                {{ Sorting.Title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
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
        --bs-btn-active-color: #F65261;
        --bs-btn-hover-color: #F65261;

        &::after {
            border-radius: 30px;
            margin-left: 8px;
            color: #F65261;
        }
    }

    &__dropdown-menu {
        --bs-dropdown-bg: #424242;
        --bs-dropdown-color: #ffffff;
        border: none;
        --bs-dropdown-border-radius: 0;
    }

    &__dropdown-item {
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
}
</style>