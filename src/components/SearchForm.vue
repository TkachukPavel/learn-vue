<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    initQuery: String
})

const emit = defineEmits<{
    onSearch: [value: string]
}>()


const query = ref(props.initQuery ?? '')

const onSubmit = () => {
    emit('onSearch', query.value)
    query.value = ''
}
</script>

<template>
    <div class="container search-form">
        <form @submit.prevent="onSubmit">
            <div class="row gx-3">
                <div class="col">
                    <label for="searchInput" class="form-label d-none">
                        Search Input
                    </label>
                    <input class="form-control h-100 search-form__input" id="searchInput" v-model="query"
                        placeholder="What do you want to watch?">
                </div>
                <div class="col-auto">
                    <button class="btn search-form__search-button btn-primary text-uppercase">Search</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
.search-form {
    &__input {
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 400;
        line-height: 24.38px;
        text-align: left;
        color: rgba(255, 255, 255, 0.7);
        ;

        &::placeholder {
            color: rgba(255, 255, 255, 0.3);

        }

        background-color: rgba(50, 50, 50, 0.8);




    }

    &__search-button {
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 500;
        line-height: 24.38px;
        text-align: center;
        color: #FFFFFF;
        padding: 18px 74px;


    }
}
</style>