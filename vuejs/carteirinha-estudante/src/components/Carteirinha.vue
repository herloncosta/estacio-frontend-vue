<script setup>
import { defineProps } from 'vue';
const { nome, matricula } = defineProps({ nome: String, matricula: String })
</script>


<template>
  <section class="flexgap-4 border-4 min-w-[400px] min-h-[200px] border-slate-700 p-6 rounded-lg bg-cyan-400">
    <div>
      <h3 class="font-semibold">Universidade XPTO</h3>
      <p>Identificação do Aluno</p>
    </div>

    <div class="flex items-center justify-between">
      <div class="text-lg">
        <p><span class="font-semibold">Nome:</span> {{ nome }}</p>
        <p><span class="font-semibold">Matrícula:</span> {{ matricula }}</p>
      </div>

      <div class="size-[100px] rounded-full">
        <img src="https://img.freepik.com/fotos-premium/desenho-de-menino-bonito_662214-8215.jpg"
          alt="foto de perfil do aluno" class="rounded-full">
      </div>
    </div>
  </section>
</template>