<script setup>
import { ref } from 'vue';

const tasks = ref([])
const newTaskText = ref("")
const newTaskImportant = ref(false)

function createNewTask() {
    const newTask = {
        text: newTaskText.value,
        important: newTaskImportant.value,
        done: false
    }
    newTaskText.value && tasks.value.push(newTask)
    clearFields()
}

function clearFields() {
    newTaskText.value = ""
    newTaskImportant.value = false
}

</script>
<template>
    <main class="h-screen bg-gray-900 flex items-center justify-center">
        <div class="w-[800px] h-fit bg-gray-700 p-6 rounded-lg">
            <section class="py-4">
                <h1 class="text-center text-gray-50 text-4xl font-bold">Todo.list</h1>
            </section>

            <section>
                <form class="bg-gray-600 p-4 rounded-lg" @submit.prevent>
                    <div class="flex gap-3">
                        <input type="text" placeholder="Digite o nome da tarefa..." maxlength="30"
                            class="flex-1 px-3 py-2 rounded outline-none" v-model="newTaskText"
                            @keyup.enter="createNewTask()">
                        <div class="flex items-center gap-4">
                            <div class="flex items-center gap-1 text-gray-50">
                                <input id="important" type="checkbox" class="cursor-pointer" v-model="newTaskImportant">
                                <label for="important" class="cursor-pointer">Important</label>
                            </div>
                            <button class="bg-slate-800 text-gray-50 px-4 py-2 rounded" @click="createNewTask()"
                                v-if="newTaskText.length">Salvar</button>
                        </div>
                    </div>
                    <div class="mt-2">
                        <p class="text-gray-50 text-lg">{{ newTaskText.length }}/30</p>
                    </div>
                </form>
            </section>

            <section class="grid grid-cols-3 gap-4 p-4">
                <div :class="task.done && `bg-slate-400` || task.important && `bg-red-400`"
                    class="h-40 bg-yellow-300 rounded-md overflow-hidden cursor-pointer transition-all"
                    v-for="task in tasks" :key="task.text" @click="task.done = !task.done">
                    <span :class="task.done && `bg-slate-500` || task.important && `bg-red-500`"
                        class="h-1/6 bg-yellow-500 block"></span>
                    <p :class="task.done && `line-through`" class="text-center text-xl font-semibold pt-10 px-2">{{
                        task.text
                        }}</p>
                </div>
            </section>
        </div>
    </main>
</template>