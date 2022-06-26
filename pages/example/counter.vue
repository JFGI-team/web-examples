<script setup lang="ts">
/** 📘 Tip
 * ref는 변경되면 동기화가 필요한 값에 사용됩니다.
 * ref의 값이 변경되면 ref가 사용된 다른 computed나 watch가 변경됩니다.
 *
 * # 참고
 * Reactivity Fundamentals | Vue.js #Reactive Variables with ref() - https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive-variables-with-ref
 */
const count = ref(0);

function decrement() {
  /** 📘 Tip
   * 스크립트에서는 ref의 값을 foo.value 형식으로 접근해야 합니다.
   */
  count.value--;
}
function increment() {
  count.value++;
}

definePageMeta({
  exampleData: {
    emoji: "🔢",
    title: "계수기",
    tags: ["Vue", "Ref"],
  },
});
</script>

<template>
  <div class="page">
    <button class="button" @click="decrement">-</button>
    <output class="count">
      <!-- 📘 Tip
        <template> 에서 ref 값을 사용할 때는 value 값을 자동으로 가져옵니다.
        그리고 값이 변경될 때 자동으로 다시 렌더링됩니다.
      -->
      {{ count }}
    </output>
    <button class="button" @click="increment">+</button>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}

.count {
  width: 5em;

  font-size: 3rem;
  text-align: center;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1em;
  height: 1em;

  font-size: 2rem;
}
</style>
