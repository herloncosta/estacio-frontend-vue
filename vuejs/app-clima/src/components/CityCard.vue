<script setup>
import { defineEmits } from 'vue';

const props = defineProps(['name', 'description', 'temp', 'icon'])
const emit = defineEmits(['cardClick'])

function handleEmit() {
    emit('cardClick', props.name)
}
</script>

<template>
    <div class="w-full mx-auto bg-slate-600 p-4 rounded-md cursor-pointer hover:bg-slate-700 transition-all select-none"
        @click="handleEmit">
        <div class="w-full flex justify-center py-3">
            <img class="object-cover size-10" :src="props.icon" :alt="props.description + ' icon'">
        </div>
        <div class="text-center">
            <h3 class="font-bold text-xl">{{ props.name }}</h3>
            <h4 class="text-lg font-light">{{ props.description }}</h4>
            <div class="text-2xl font-semibold">{{ props.temp }}°C</div>
        </div>
    </div>
</template>