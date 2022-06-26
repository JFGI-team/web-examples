<script setup lang="ts">
const Examples = [
  { to: "/example/counter", name: "계수기 - Vue: ref" },
  { to: "/example/calc", name: "계산기 - Vue: ref, computed" },
  { to: "/example/pointer", name: "포인터 - Vue: ref, v-on" },
  { to: "/example/cursor-style", name: "커서 스타일 - CSS: cursor" },
];
</script>

<template>
  <div class="page">
    <ol class="list">
      <li v-for="example in Examples" :key="example.to" class="item">
        <NuxtLink :to="example.to" class="link">{{ example.name }}</NuxtLink>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}

.link {
  color: #0969da;
}
</style>
