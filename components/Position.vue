<template>
  <button @click="handleClick" class="position-button" ref="positionRef"/>
</template>

<style>
.position-button {
  pointer-events: all;
  transform: rotate(90deg);
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
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

.position-button::after {
  --x: .8em;
  --border-left: calc(0.866 * var(--x));
  --border-bottom: calc(var(--x) / 2);
  --transform: calc(0.2887 * var(--border-left) * 0.5);
  border-top: var(--border-bottom) solid transparent;
  border-right: 0;
  border-bottom: var(--border-bottom) solid transparent;
  border-left: var(--border-left) solid white;
  transform: translateX(var(--transform));
  content: "";
  height: 0;
  width: 0;
}

.skills .position-button,
.projects .position-button,
.about .position-button,
.contact .position-button {
  bottom: 100px;
  opacity: .8;
  transform: rotate(33deg);
  transition: bottom .5s linear, opacity .5s linear, transform .5s linear;
  z-index: 115;
}

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
  transform: rotate(66deg);
  transition: bottom .5s linear, opacity .5s linear, transform .5s linear;
  z-index: 115;
}
</style>

<script setup>
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
</script>