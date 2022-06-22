<script setup lang="ts">
interface Item {
  done: boolean;
  label: string;
}

const emit = defineEmits(["update:modelValue"]);
const props = defineProps<{
  modelValue: Item[];
}>();

const { modelValue } = toRefs(props);

const doneCount = computed(() => {
  return modelValue.value.filter((value) => {
    return value.done;
  }).length;
});

function addItem() {
  const list = modelValue.value.concat({
    done: false,
    label: "New To-do",
  });
  emit("update:modelValue", list);
}
function toggleItem(index: number) {
  const list = modelValue.value;
  list[index].done = !list[index].done;
  emit("update:modelValue", list);
}
function deleteItem(index: number) {
  const list = modelValue.value;
  list.splice(index, 1);
  emit("update:modelValue", list);
}
function updateItemLabel(index: number, value: string) {
  const list = modelValue.value;
  list[index].label = value;
  emit("update:modelValue", list);
}
</script>

<template>
  <div class="todo-list">
    <TodoListHeader
      :done-count="doneCount"
      :total-count="modelValue.length"
      @add="addItem()"
    />
    <TodoListItem
      v-for="(item, i) in modelValue"
      :done="item.done"
      :label="item.label"
      class="item"
      @toggle="toggleItem(i)"
      @delete="deleteItem(i)"
      @update-label="(value) => updateItemLabel(i, value)"
    />
  </div>
</template>

<style scoped>
.todo-list {
  width: 512px;
}
.item {
  margin-top: 8px;
}
</style>
