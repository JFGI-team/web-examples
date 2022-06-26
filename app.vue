<script setup lang="ts">
/** 📘 Tip
 * 페이지의 제목이나 설명 등 기본 정보를 설정합니다.
 * app.vue 에서 설정하면 전역 설정으로 지정됩니다.
 *
 * # 참고
 * head 태그에는 무엇이 있을까? HTML의 메타데이터 — https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
 * Nuxt 3 - Head Management — https://v3.nuxtjs.org/guide/features/head-management
 */
const defaultTitle = "JFGI Nuxt 3 예제";
useHead({
  title: defaultTitle,
  titleTemplate: (title) => {
    if (title === defaultTitle) return title;
    return `${title} | ${defaultTitle}`;
  },
});
</script>

<template>
  <div id="app">
    <!-- 📘 Tip
      Nuxt가 감지한 페이지가 표시될 위치를 지정하는 컴포넌트입니다.
      페이지가 저장되는 pages 폴더 설명은 폴더 안의 📘.md 파일에서 볼 수 있습니다.

      # 참고
      Nuxt 3 - Pages directory — https://v3.nuxtjs.org/guide/directory-structure/pages
    -->
    <NuxtPage />
  </div>
</template>
