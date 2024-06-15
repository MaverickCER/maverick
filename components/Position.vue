<template>
  <button @click="handleClick" class="position-button" ref="positionRef" title="back" />
</template>

<style>
.position-button {
  pointer-events: all;
  transform: rotate(180deg);
  font-family: "Montserrat", sans-serif;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 20px;
  right: 24px;
  text-align: center;
  box-sizing: border-box;
  color: #fefefe;
  background-color: var(--accent-clr-xx);
  border: none;
  z-index: 115;
  transition: all .5s linear;
  cursor: pointer;
  opacity: 1;
}

.skills .position-button,
.projects .position-button,
.about .position-button,
.contact .position-button,
.project00 .position-button,
.project01 .position-button,
.project02 .position-button,
.project03 .position-button,
.project04 .position-button,
.project05 .position-button,
.project10 .position-button,
.project11 .position-button,
.project12 .position-button,
.project13 .position-button,
.project14 .position-button,
.project15 .position-button {
  bottom: 100px;
  opacity: .8;
  transform: rotate(0deg);
  transition: bottom .5s linear, opacity .5s linear, transform .5s linear;
  z-index: 115;
}

.position-button::before,
.position-button::after {
  content: '';
  display: block;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  transition: width 0.5s, height 0.5s, top 0.5s, left 0.5s, transform 0.5s;
  width: 5px;
  height: 20px;
  top: 18px;
}

.position-button::before {
  left: 22px;
  transform: rotate(225deg);
}

.position-button::after {
  left: 33px;
  transform: rotate(-225deg);
}

.project00 .position-button::before,
.project01 .position-button::before,
.project02 .position-button::before,
.project03 .position-button::before,
.project04 .position-button::before,
.project05 .position-button::before,
.project10 .position-button::before,
.project11 .position-button::before,
.project12 .position-button::before,
.project13 .position-button::before,
.project14 .position-button::before,
.project15 .position-button::before {
  width: 5px;
  height: 36px;
  top: 12px;
  left: 28px;
  transform: rotate(45deg);
}

.project00 .position-button::after,
.project01 .position-button::after,
.project02 .position-button::after,
.project03 .position-button::after,
.project04 .position-button::after,
.project05 .position-button::after,
.project10 .position-button::after,
.project11 .position-button::after,
.project12 .position-button::after,
.project13 .position-button::after,
.project14 .position-button::after,
.project15 .position-button::after {
  width: 5px;
  height: 36px;
  top: 12px;
  left: 28px;
  transform: rotate(-45deg);
}
</style>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const projectStore = useProjectStore();

const handleClick = () => {
  const element = document.getElementById('__nuxt');
  if (element.className === 'intro') {
    element.className = 'projects';
    const projects = document.getElementById('projects');
    window.scrollTo({top: projects.offsetTop - 50, behavior: 'smooth'});
  } else if (element.className !== 'projects' && element.className.includes('project')) {
    projectStore.close();
  } else {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

const handleBack = () => {
  if (projectStore.$state.project) {
    projectStore.close();
  }
}

onMounted(() => {
  window.addEventListener('popstate', handleBack);
});

onUnmounted(() => {
  window.removeEventListener('popstate', handleBack);
});
</script>