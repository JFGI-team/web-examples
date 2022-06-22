<script setup lang="ts">
const todo = ref([]);

const result = computed(() => {
  return JSON.stringify(todo.value, null, 2);
});
</script>

<template>
  <div class="page">
    <TodoList v-model="todo" />
    <hr />
    <pre><code>{{ result }}</code></pre>
  </div>
</template>

<style scoped></style>
