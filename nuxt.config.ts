import { defineNuxtConfig } from "nuxt";

/**
 * Nuxt 프로젝트 설정입니다.
 *
 * # 참고
 * Nuxt 3 - Nuxt configuration reference - https://v3.nuxtjs.org/api/configuration/nuxt.config
 */
export default defineNuxtConfig({
  /**
   * 전역으로 지정 될 스타일을 설정할 수 있습니다.
   *
   * # 참고
   * Nuxt 3 - Nuxt configuration reference #css - https://v3.nuxtjs.org/api/configuration/nuxt.config#css
   */
  css: [
    /**
     * 브라우저가 지정한 기본 스타일을 사용하기 편하게 변경하는 스타일입니다.
     * 필요 없는 스타일을 없애거나 자주 사용되는 스타일을 적용합니다.
     * 이 프로젝트는 Blro가 쓰는 스타일을 사용합니다.
     *
     * 아래 검색어로 더 많은 정보를 볼 수 있습니다.
     * - CSS Reset
     * - CSS 초기화
     *
     * # 참고
     * CSS Tools: Reset CSS - https://meyerweb.com/eric/tools/css/reset/
     */
    "~/assets/styles/reset.css",
  ],
});
