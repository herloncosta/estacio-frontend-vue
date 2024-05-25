<script setup>
import { reactive, ref } from "vue";
import CityCard from "./CityCard.vue";

import sun from "../assets/sun.svg"
import rain from "../assets/rain.svg"
import cloudy from "../assets/cloudy.svg"

const cities = reactive([
    {
        id: 1,
        name: "Salvador",
        description: "Ensolarado",
        icon: sun,
        temp: "30"
    },
    {
        id: 2,
        name: "Rio de Janeiro",
        description: "Chuvoso",
        icon: rain,
        temp: "20"
    },
    {
        id: 3,
        name: "Maranhão",
        description: "Nublado",
        icon: cloudy,
        temp: "27"
    },
    {
        id: 4,
        name: "Ceará",
        description: "Nublado",
        icon: sun,
        temp: "27"
    },
    {
        id: 5,
        name: "São Paulo",
        description: "Ensolarado",
        icon: cloudy,
        temp: "30"
    },
    {
        id: 6,
        name: "Minas Gerais",
        description: "Chuvoso",
        icon: rain,
        temp: "22"
    }
])

const clickedCityName = ref('Salvador')

function handleShowCityName(payload) {
    clickedCityName.value = payload
}
</script>

<template>
    <div>
        <div>
            <h2 class="text-lg text-center py-4">Cidade Selecionada:
                <span class="font-semibold">{{ clickedCityName }}</span>
            </h2>
        </div>
        <section class="grid grid-cols-3 gap-3">
            <CityCard @card-click="handleShowCityName" v-for="city in cities" :key="city.id" :name="city.name"
                :description="city.description" :temp="city.temp" :icon="city.icon"
                :class="clickedCityName === city.name ? 'bg-red-500 hover:bg-red-700' : ''" />
        </section>
    </div>
</template>