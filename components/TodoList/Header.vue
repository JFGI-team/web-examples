<script setup lang="ts">
const emit = defineEmits(["add"]);
const props = defineProps<{
  doneCount: number;
  totalCount: number;
}>();

const { doneCount, totalCount } = toRefs(props);
</script>

<template>
  <div class="header">
    <span>{{ doneCount }}/{{ totalCount }}</span>
    <button @click="emit('add')">추가</button>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
