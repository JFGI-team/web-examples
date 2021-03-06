import { defineNuxtConfig } from "nuxt";

/** π Tip
 * Nuxt νλ‘μ νΈ μ€μ μλλ€.
 *
 * # μ°Έκ³ 
 * Nuxt 3 - Nuxt configuration reference - https://v3.nuxtjs.org/api/configuration/nuxt.config
 */
export default defineNuxtConfig({
  /** π Tip
   * μ μ­μΌλ‘ μ§μ  λ  μ€νμΌμ μ€μ ν  μ μμ΅λλ€.
   *
   * # μ°Έκ³ 
   * Nuxt 3 - Nuxt configuration reference #css - https://v3.nuxtjs.org/api/configuration/nuxt.config#css
   */
  css: [
    /** π Tip
     * λΈλΌμ°μ κ° μ§μ ν κΈ°λ³Έ μ€νμΌμ μ¬μ©νκΈ° νΈνκ² λ³κ²½νλ μ€νμΌμλλ€.
     * νμ μλ μ€νμΌμ μμ κ±°λ μμ£Ό μ¬μ©λλ μ€νμΌμ μ μ©ν©λλ€.
     * μ΄ νλ‘μ νΈλ Blroκ° μ°λ μ€νμΌμ μ¬μ©ν©λλ€.
     *
     * μλ κ²μμ΄λ‘ λ λ§μ μ λ³΄λ₯Ό λ³Ό μ μμ΅λλ€.
     * - CSS Reset
     * - CSS μ΄κΈ°ν
     *
     * # μ°Έκ³ 
     * CSS Tools: Reset CSS - https://meyerweb.com/eric/tools/css/reset/
     * 2022 CSS Reset λ€μ μ¨λ³΄κΈ°! | velog@teo - https://velog.io/@teo/2022-CSS-Reset-λ€μ-μ¨λ³΄κΈ°
     */
    "~/assets/styles/reset.css",
  ],
});
