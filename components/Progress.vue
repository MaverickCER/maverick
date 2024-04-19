<template>
  <section class="progress-section" aria-hidden="true">
    <div class="progress main"></div>
  </section>
</template>

<style>
.progress-section {
  width: 100%;
  height: 8px;
  background-color: #fefefe;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 12;
  overscroll-behavior: none;
}

.progress {
  background-color: var(--accent-clr-xx);
  height: 100%;
  width: var(--progress-width);
  transition: all .5s linear;
}

aside .progress-section {
  z-index: 112;
}
</style>

<script setup>
import { onMounted, onUnmounted } from "vue";

function handleScroll() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const element = document.getElementById('__nuxt');
  element.style.setProperty('--progress-width', `${scrolled}%`);
}

onMounted(() => {
  handleScroll();
  document.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
});
</script>