<template>
  <header>
    <nav>
      <ul>
        <li><a href="#">{{ $t("tIntroSectionName") }}</a></li>
        <li><a href="#skills">{{ $t("tSkillsSectionTitle") }}</a></li>
        <li><a href="#projects">{{ $t("tProjectsSectionTitle") }}</a></li>
        <li><a href="#about">{{ $t("tAboutSectionTitle") }}</a></li>
        <li><a href="#contact">{{ $t("tContactSectionTitle") }}</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #790101;
  color: #fefefe;
  z-index: 11;
  border-bottom: 2px solid #444;
}

header nav {
  max-width: 840px;
  position: relative;
  margin: auto;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

nav li {
  top: 50%;
}

nav li:first-child {
  flex: 1;
}

nav li a {
  color: #fefefe;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  padding: 10px 20px;
  position: relative;
  display: block;
  width: fit-content;
}

.skills nav li a[href="#skills"],
.projects nav li a[href="#projects"],
.about nav li a[href="#about"],
.contact nav li a[href="#contact"],
nav li a:hover {
  font-weight: bold;
}

nav li:first-child a {
  font-size: 24px;
  font-weight: bold;
  cursor: default;
}

@media (max-width: 527px) {
  nav ul {
    justify-content: center;
  }

  nav li:first-child {
    min-width: 100%;
    text-align: center;
    display: block;
  }

  nav li a {
    text-align: center;
  }

  nav li:first-child a {
    margin: auto;
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const observer = ref(null);

function onElementObserved(entries) {
  const intersecting = entries.find((entry) => entry.isIntersecting);
  if (!intersecting || !intersecting.target || typeof intersecting.target.getAttribute !== 'function') return;
  const id = intersecting.target.getAttribute('id');
  if (!id) return;
  const element = document.getElementById('__nuxt');
  element.className = id;
};
onMounted(() => {
  observer.value = new IntersectionObserver(onElementObserved, {
    root: null,
    rootMargin: '0px',
    threshold: 0.22,
  });

  const element = document.getElementById('__nuxt');
  element.querySelectorAll('section[id]').forEach((section) => {
    observer.value.observe(section);
  });
});
onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>
