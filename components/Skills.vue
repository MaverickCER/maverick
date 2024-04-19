<template>

  <section class="skills-section" id="skills">
    <h2>{{ $t("tSkillsSectionTitle") }}</h2>
    <h3>{{ $t("tSkillsSectionSubtitle") }}</h3>
    <div class="skills">
      <article>
        <NuxtImg src="/img/skills-section-img-0.png" :alt="`${$t(`tSkillsSectionAlt0`)}`"
          placeholder="/blur/skills-section-blur-0.png" />
        <p>{{ $t("tSkillsSectionLabel0") }}</p>
      </article>
      <article>
        <NuxtImg src="/img/skills-section-img-1.png" :alt="`${$t(`tSkillsSectionAlt1`)}`"
          placeholder="/blur/skills-section-blur-1.png" />
        <p>{{ $t("tSkillsSectionLabel1") }}</p>
      </article>
      <article>
        <NuxtImg src="/img/skills-section-img-2.png" :alt="`${$t(`tSkillsSectionAlt2`)}`"
          placeholder="/blur/skills-section-blur-2.png" />
        <p>{{ $t("tSkillsSectionLabel2") }}</p>
      </article>
      <article>
        <NuxtImg src="/img/skills-section-img-3.png" :alt="`${$t(`tSkillsSectionAlt3`)}`"
          placeholder="/blur/skills-section-blur-3.png" />
        <p>{{ $t("tSkillsSectionLabel3") }}</p>
      </article>
      <article>
        <NuxtImg src="/img/skills-section-img-4.png" :alt="`${$t(`tSkillsSectionAlt4`)}`"
          placeholder="/blur/skills-section-blur-4.png" />
        <p>{{ $t("tSkillsSectionLabel4") }}</p>
      </article>
      <article>
        <NuxtImg src="/img/skills-section-img-5.png" :alt="`${$t(`tSkillsSectionAlt5`)}`"
          placeholder="/blur/skills-section-blur-5.png" />
        <p>{{ $t("tSkillsSectionLabel5") }}</p>
      </article>
      <article>
        <NuxtImg src="/img/skills-section-img-6.png" :alt="`${$t(`tSkillsSectionAlt6`)}`"
          placeholder="/blur/skills-section-blur-6.png" />
        <p>{{ $t("tSkillsSectionLabel6") }}</p>
      </article>
      <article>
        <NuxtImg src="/img/skills-section-img-7.png" :alt="`${$t(`tSkillsSectionAlt7`)}`"
          placeholder="/blur/skills-section-blur-7.png" />
        <p>{{ $t("tSkillsSectionLabel7") }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  position: relative;
  overflow: hidden;
  translate: none;
  rotate: none;
  scale: none;
  transform: translate(0px, 0px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  overflow: hidden;
  max-width: 100%;
  padding: 50px 30px;
}

.skills-section h2 {
  font-size: clamp(28px, 10vw, 32px);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #790101;
  width: 100%;
}

.skills-section h3 {
  font-size: clamp(16px, 5.7vw, 24px);
  letter-spacing: 2px;
  text-align: center;
  font-weight: 300;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #444444;
  width: 100%;
}

.skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: auto;
}

.skills article {
  padding: 15px 15px 20px 15px;
  background-color: #f3f3f3;
  border-radius: 0.5rem;
  height: fit-content;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: auto;
}

.skills article svg,
.skills article img {
  display: block;
  margin: 0px auto 20px auto;
  width: 128px;
  height: 128px;
  background-color: transparent;
  border-radius: 0.25rem;
}

.skills article p {
  margin: 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #444444;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 128px;
  word-break: break-all;
}

@media (max-width: 420px) {
  .skills article svg,
  .skills article img {
    width: calc((100vw - 169px) / 2);
    height: calc((100vw - 169px) / 2);
  }

  .skills article p {
    width: calc((100vw - 169px) / 2);
  }
}
</style>