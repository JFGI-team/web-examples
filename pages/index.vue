<script setup lang="ts">
const examplePages = useRouter()
  .getRoutes()
  .filter((route) => {
    return !!route.meta.exampleData;
  })
  .map((route) => {
    const meta = route.meta.exampleData;
    return {
      to: route.path,
      emoji: meta.emoji,
      title: meta.title,
      tags: meta.tags,
    };
  });
</script>

<template>
  <div class="page">
    <ul class="list">
      <li v-for="example in examplePages" :key="example.to">
        <HomeLinkCard
          :to="example.to"
          :emoji="example.emoji"
          :title="example.title"
          :tags="example.tags"
          class="link" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  align-content: flex-start;
  gap: 24px;

  list-style: none;

  width: 100%;
  height: 100%;
  padding: 24px;
}
.link {
  height: 100%;
}
</style>
