<script setup lang="ts">
const emit = defineEmits<{
  (e: "toggle"): void;
  (e: "delete"): void;
  (e: "update-label", value: string): void;
}>();
const props = defineProps<{
  done: boolean;
  label: string;
}>();

const { done, label } = toRefs(props);
const editMode = ref(false);

const modelDone = computed({
  get() {
    return done.value;
  },
  set(isDone) {
    if (isDone !== done.value) emit("toggle");
  },
});
const modelLabel = computed({
  get() {
    return label.value;
  },
  set(value) {
    emit("update-label", value);
  },
});

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === "Enter") editMode.value = false;
}
</script>

<template>
  <div class="item">
    <input v-model="modelDone" type="checkbox" />
    <template v-if="editMode">
      <input v-model="modelLabel" type="text" @keydown="handleKeyDown" />
    </template>
    <template v-else>
      <span class="label" :class="{ done: done }">{{ label }}</span>
      <div class="group">
        <button class="button" @click="editMode = true">수정</button>
        <button class="button" @click="emit('delete')">제거</button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
}
.label.done {
  text-decoration-line: line-through;
}
.group {
  margin-left: auto;
}
.button {
  margin-left: 8px;
}
</style>
