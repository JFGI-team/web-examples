<script setup lang="ts">
useHead({
  title: "🔳 격자 판",
});
definePageMeta({
  exampleData: {
    emoji: "🔳",
    title: "격자 판",
    tags: ["Vue", "v-for"],
  },
});
</script>

<template>
  <div class="page">
    <div class="grid">
      <!-- 📘 Tip
        v-for는 Python의 for-range 처럼 사용할 수 있습니다.
        아래처럼 다중 v-for를 이용해 행/열을 반복할 수 있습니다.
        대신 1부터 시작합니다.

        # 참고
        List Rendering | Vue.js #v-for whit a Range - https://vuejs.org/guide/essentials/list.html#v-for-with-a-range
      -->
      <div v-for="i in 5" class="row">
        <div v-for="j in 5" class="cell">
          {{ (i - 1) * 5 + j }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  align-items: center;
  height: 100%;
}

.grid {
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  border: 1px solid #d0d7de;
}
.row {
  display: flex;
}
.cell {
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  border: 1px solid #d0d7de;
  background-color: #ffffff;

  transition: border-color 0.1s, background-color 0.1s;
}
.cell:hover {
  background-color: #f3f4f6;
}
.cell:active {
  background-color: #ebecf0;
}
</style>
