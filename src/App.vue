<script setup lang="ts">
import Counter from './components/Counter.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row row-cols-auto">
      <div class="col">
        <h2> Counter</h2>
      </div>
      <div class="col">
        <Counter />
      </div>
    </div>
  </div>
</template>
