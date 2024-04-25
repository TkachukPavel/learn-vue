<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0)

const increment = () => { counter.value++ };
const decrement = () => { counter.value-- };
</script>

<template>
    <div class="container counter">
        <div class="row align-items-center row-cols-auto">
            <div class="col">
                <button data-testid='counter__dec-btn' class="btn btn-primary" @click="decrement">
                    -
                </button>
            </div>
            <div class="col counter__value" data-testid="counter__val">
                {{ counter }}
            </div>
            <div class="col">
                <button class="btn btn-primary" data-testid="counter__inc-btn" @click="increment">+ </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.counter {
    &__value {
        font-weight: bold;
        font-size: large;
    }
}
</style>