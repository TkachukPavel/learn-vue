<script setup lang="ts">
import { ref } from 'vue';
import { testid } from '@/constants';

const props = withDefaults(defineProps<{
    title?: string,
    show?: boolean
}>(), {
    title: '',
    show: false,
})

const show = ref(props.show)

const emit = defineEmits<{
    closed: []
}>()
</script>
<template>
    <Teleport to="body">
        <div v-if="show" class="container p-5 mt-3 position-relative dialog" :data-testid="testid.Dialog.container">
            <div class="row">
                <div class="col ">
                    <div class="px-2 mb-3 text-uppercase dialog__title " :data-testid="testid.Dialog.title">
                        {{ props.title }}
                    </div>
                </div>

                <button type="button" @click="show = false; emit('closed')" :data-testid="testid.Dialog.closeBtn"
                    class="btn position-absolute mt-3 me-3 top-0 end-0 btn-link w-auto h-auto dialog__close">
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </button>
            </div>
            <div class="row">
                <div class="col">
                    <div class="p-2">
                        <slot>Dialog Body</slot>

                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped lang="scss">
.dialog {
    background: #232323;

    &__close {
        --bs-link-color: #ffffff;
        --bs-link-hover-color: #F65261;
        font-size: 22px;
        --bs-btn-font-size: 22px;
    }

    &__title {
        font-family: Montserrat;
        font-size: 40px;
        font-weight: 300;
        line-height: 48.76px;
        letter-spacing: 1px;
        text-align: left;
        color: #FFFFFF
    }
}
</style>