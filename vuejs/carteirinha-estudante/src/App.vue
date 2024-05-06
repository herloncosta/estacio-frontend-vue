<script setup>
import { ref } from 'vue';
import Carteirinha from './components/Carteirinha.vue';

let nome = ref("")
let matricula = ref("")
</script>

<template>
  <main class="h-screen flex items-center justify-center">
    <div class="w-[800px] mx-auto">
      <div class="text-center text-3xl mt-10">
        <h1>Gerador de Cateirinhas - Universidade XPTO</h1>
      </div>

      <section class="flex gap-6 justify-between mt-10">
        <div class="form">
          <form class="flex flex-col gap-3">
            <div class="w-[300px] flex flex-col">
              <label for="student-name" class="font-semibold">Name:</label>
              <input id="student-name" v-model="nome" type="text" placeholder="digite seu nome..."
                class="px-2 py-3 border-2 border-slate-500 rounded-md" maxlength="20">
            </div>

            <div class="w-[300px] flex flex-col">
              <label for="student-registration" class="font-semibold">Matrícula:</label>
              <input id="student-registration" v-model="matricula" type="text" placeholder="digite sua matrícula..."
                class="px-2 py-3 border-2 border-slate-500 rounded-md" maxlength="12">
            </div>
          </form>
        </div>

        <Carteirinha :nome="nome" :matricula="matricula" />
      </section>
    </div>
  </main>
</template>