<script setup lang="ts">
import { startCase } from "lodash-es";

const examples = useRouter()
  .getRoutes()
  .filter((route) => {
    return route.path.startsWith("/exam");
  })
  .map(({ name, path }) => ({
    name: name.toString().replace("exam", ""),
    to: path,
  }));
</script>

<template>
  <div class="page">
    <ul class="list">
      <li v-for="{ name, to } in examples" class="list__item">
        <NuxtLink :to="to">
          {{ startCase(name) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
