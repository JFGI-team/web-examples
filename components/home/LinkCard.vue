<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

defineProps<{
  to: RouteLocationRaw;
  emoji: string;
  title: string;
  tags: string[];
}>();
</script>

<template>
  <NuxtLink :to="to" class="link-card">
    <span class="emoji">{{ emoji }}</span>
    <span class="title">{{ title }}</span>
    <div class="tags">
      <span v-for="tag in tags" class="tag">{{ tag }}</span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.link-card {
  display: flex;
  flex-direction: column;

  padding: 1em;

  border: 1px solid #d0d7de;
  border-radius: 8px;
  background-color: #ffffff;

  font-size: 1rem;

  transition: border-color 0.1s, background-color 0.1s;
}
.link-card:hover {
  background-color: #f3f4f6;
}
.link-card:active {
  background-color: #ebecf0;
}

.link-card > .emoji {
  font-size: 2em;
}
.link-card > .title {
  margin: 8px 0;

  font-size: 1.25em;
  font-weight: bold;
}

.link-card > .tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: calc(100% + 8px);
  margin: auto -8px -8px 0;
}
.link-card > .tags > .tag {
  display: inline-block;

  margin: 0 8px 8px 0;
  padding: 2px 6px;

  border-radius: 4px;
  background-color: rgba(175, 184, 193, 0.2);

  font-size: 0.75em;
}
</style>
