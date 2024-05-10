<script setup>
import { reactive, ref } from "vue";

const tasks = reactive([]);
const newTaskText = ref("");
const newTaskImportant = ref(false);

function createNewTask() {
    const newTask = {
        id: new Date(),
        text: newTaskText.value,
        important: newTaskImportant.value,
        done: false,
    };
    newTaskText.value && tasks.push(newTask);
    clearFields();
}

function clearFields() {
    newTaskText.value = "";
    newTaskImportant.value = false;
}

function currentCharsCount() {
    return newTaskText.value.length;
}

function toggleTaskDone(taskId) {
    const currentTask = tasks.find((t) => t.id == taskId);
    currentTask.done = !currentTask.done;
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
                        <input
                            type="text"
                            placeholder="Digite o nome da tarefa..."
                            maxlength="30"
                            class="flex-1 px-3 py-2 rounded outline-none"
                            v-model="newTaskText"
                            @keyup.enter="createNewTask()"
                        />
                        <div class="flex items-center gap-4">
                            <div class="flex items-center gap-1 text-gray-50">
                                <input
                                    id="important"
                                    type="checkbox"
                                    class="cursor-pointer"
                                    v-model="newTaskImportant"
                                />
                                <label for="important" class="cursor-pointer">Important</label>
                            </div>
                            <button
                                class="bg-slate-800 text-gray-50 px-4 py-2 rounded"
                                @click="createNewTask()"
                                v-if="newTaskText.length"
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                    <div class="mt-2">
                        <p class="text-gray-50 text-lg">{{ currentCharsCount() }}/30</p>
                    </div>
                </form>
            </section>

            <section class="grid grid-cols-3 gap-4 p-4">
                <div
                    :class="{
                        'bg-yellow-400': !task.important,
                        'bg-red-400': task.important,
                        'bg-gray-400': task.done,
                    }"
                    class="h-40 rounded-md overflow-hidden cursor-pointer transition-all"
                    v-for="task in tasks"
                    :key="task.id"
                    @click="toggleTaskDone(task.id)"
                >
                    <span
                        :class="{
                            'bg-yellow-500': !task.important,
                            'bg-red-500': task.important,
                            'bg-gray-500': task.done,
                        }"
                        class="h-1/6 block"
                    ></span>
                    <p
                        :class="task.done && `line-through`"
                        class="text-center text-xl font-semibold pt-10 px-2 select-none"
                    >
                        {{ task.text }}
                    </p>
                </div>
            </section>
        </div>
    </main>
</template>
