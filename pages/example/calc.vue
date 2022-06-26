<script setup lang="ts">
const numberA = ref(0);
const numberB = ref(0);

const operator = ref("add");

/** 📘 Tip
 * computed는 입력으로 받은 함수의 결과 값이 달라질 때 마다 동기화되는 값입니다.
 * 대신 결과에 관여한 값이 동기화되는 값을 때만 동기화 됩니다.
 * 하지만 주로 ref를 사용해 크게 신경쓰지 않아도 됩니다.
 *
 * 표현식을 <template>에 직접 적을 때 보다 코드를 보기 좋게 정리할 수 있습니다.
 * 혹은 여러 ref 값 등을 가공할 때 쓸 수 있습니다.
 *
 * ref처럼 스크립트에서는 값을 foo.value 형식으로 접근해야 합니다.
 */
const result = computed(() => {
  switch (operator.value) {
    case "add":
      return numberA.value + numberB.value;
    case "sub":
      return numberA.value - numberB.value;
    case "mul":
      return numberA.value * numberB.value;
    case "div":
      return numberA.value / numberB.value;
  }
});

definePageMeta({
  exampleData: {
    emoji: "📐",
    title: "계산기",
    tags: ["Vue", "Ref", "Computed"],
  },
});
</script>

<template>
  <div class="page">
    <input v-model="numberA" type="number" />
    <select v-model="operator" class="selector">
      <option value="add">+</option>
      <option value="sub">-</option>
      <option value="mul">*</option>
      <option value="div">/</option>
    </select>
    <input v-model="numberB" type="number" />
    =
    <output>{{ result }}</output>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}

.selector {
  margin: 0 1em;
}
</style>
