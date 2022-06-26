<script setup lang="ts">
const press = ref(false);
const x = ref(0);
const y = ref(0);

function handlePointerMove(event: PointerEvent) {
  x.value = event.x;
  y.value = event.y;
}

/** 📘 Tip
 * Vue에서 HTML 요소에 이벤트를 연결할 때는 v-on 속성을 사용합니다.
 * v-on은 HTMLElement.addEventListener로 동작합니다.
 * v-on:[event]="listener" 형식으로 사용할 수 있고, v-on은 @ 로 줄일 수 있습니다.
 * @[event]="listener"
 *
 * 리스너에는 addEventListener 메서드 처럼 함수를 넣을 수 있고,
 * 표현식이 그대로 들어갈 수도 있습니다.
 * @[event]="foo = 'bar'"
 *
 * 기본 이벤트 말고도 컴포넌트가 emit하는 사용자 지정 이벤트에도 사용됩니다.
 *
 * # 참고
 * EventTarget.addEventListener() - Web API | MDN - https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener
 * Event Handling | Vue.js - https://vuejs.org/guide/essentials/event-handling.html
 */

definePageMeta({
  exampleData: {
    emoji: "🖱️",
    title: "포인터 이벤트",
    tags: ["Vue", "v-on", "HTML", "JS", "PointerEvent"],
  },
});
</script>

<template>
  <div
    class="page"
    @pointerdown="press = true"
    @pointerup="press = false"
    @pointermove="handlePointerMove">
    <output>
      Press: {{ press }}<br />
      X: {{ x }}<br />
      Y: {{ y }}
    </output>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}
</style>
