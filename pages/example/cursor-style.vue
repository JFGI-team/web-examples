<script setup lang="ts"></script>

<template>
  <div class="page">
    <div class="section vue">Vue.js</div>
    <div class="section nuxt">Nuxt.js</div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}
.section {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 256px;
  height: 256px;
}

.vue {
  /** 📘 Tip
   * 커서 스타일에는 사진이 들어갈 수 있습니다.
   * 하지만 사진은 128 × 128 해상도를 넘기면 안되고,
   * 보통 32 × 32 해상도를 권장합니다.
   *
   * 그리고 항상 대체 키워드를 지정해줘야 합니다.
   * 
   * # 참고
   * cursor - CSS: Cascading Style Sheets | MDN - https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
   */
  cursor: url("/assets/example/cursor/vue.svg"), auto;
  background-color: #ccc;
}
.nuxt {
  cursor: url("/assets/example/cursor/nuxt.svg"), auto;
  background-color: #333;
  color: #fff;
}
</style>
