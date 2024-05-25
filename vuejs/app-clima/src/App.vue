<script setup>
import CitiesList from './components/CitiesList.vue';
import Header from './components/Header.vue';
</script>

<template>
  <main class="h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center">
    <Header>
      <h2>Fique por dentro de como anda o clima nos outros estados.</h2>
    </Header>
    <CitiesList />
  </main>
</template>
