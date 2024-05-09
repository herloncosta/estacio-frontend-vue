<script setup>
import { ref } from 'vue';

let counter = ref(0);
</script>

<template>
  <div class="container">
    <div>
      <h1>Vue Counter</h1>
    </div>

    <div>
      <h2>{{ counter }}</h2>
    </div>

    <div class="buttons">
      <button @click="counter--">-</button>
      <button @click="counter++">+</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 20px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.buttons button {
  min-width: 80px;
}
</style>
