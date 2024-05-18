<template>
  <div>
    <NuxtPage :page-key="route => route.fullPath" />
  </div>
</template>

<style>
#__nuxt {
  --accent-clr: #790101;
  --accent-clr-xx: #790101;
  --accent-clr-00: #FF390A;
  --accent-clr-01: #FA510E;
  --accent-clr-02: #083f88;
  --accent-clr-03: #790101;
  --accent-clr-04: #790101;
  --accent-clr-05: #790101;
  --accent-clr-10: #6161FF;
  --accent-clr-11: #393F47;
  --accent-clr-12: #f0a400;
  --accent-clr-13: #790101;
  --accent-clr-14: #790101;
  --accent-clr-15: #790101;
  --progress-width: 0%;
  --main-progress-width: 0%;
}
#__nuxt.project00 {
  --accent-clr-xx: var(--accent-clr-00);
}
#__nuxt.project01 {
  --accent-clr-xx: var(--accent-clr-01);
}
#__nuxt.project02 {
  --accent-clr-xx: var(--accent-clr-02);
}
#__nuxt.project03 {
  --accent-clr-xx: var(--accent-clr-03);
}
#__nuxt.project04 {
  --accent-clr-xx: var(--accent-clr-04);
}
#__nuxt.project05 {
  --accent-clr-xx: var(--accent-clr-05);
}
#__nuxt.project10 {
  --accent-clr-xx: var(--accent-clr-10);
}
#__nuxt.project11 {
  --accent-clr-xx: var(--accent-clr-11);
}
#__nuxt.project12 {
  --accent-clr-xx: var(--accent-clr-12);
}
#__nuxt.project13 {
  --accent-clr-xx: var(--accent-clr-13);
}
#__nuxt.project14 {
  --accent-clr-xx: var(--accent-clr-14);
}
#__nuxt.project15 {
  --accent-clr-xx: var(--accent-clr-15);
}
.zsiqcw-close .siqcw-minimise-icon,
.zsiq_theme1 .zsiq_flt_rel {
  background-color: var(--accent-clr-xx) !important;
}
html,
body {
  margin: 0;
  padding: 0;
  background-color: #fefefe;
  scroll-behavior: smooth;
}
* {
  box-sizing: border-box;
}
h2 {
  font-family: "Source Code Pro", Courier, monospace;
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
}
h1, h3, h4, h5, h6, p, a, span, s, b, strong, em, i {
  font-family: "Source Sans 3", Arial, Helvetica, sans-serif;
}
</style>

<script setup>
const { setLocale } = useI18n();

</script>