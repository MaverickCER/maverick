<template>
  <section class="skills-section" id="skills">
    <h2>{{ $t("tSkillsSectionTitle") }}</h2>
    <h3>{{ $t("tSkillsSectionSubtitle") }}</h3>
    <div>
      <div>
        <NuxtImg
          src="/img/skills-section-img-0.png"
          :alt="`${$t(`tSkillsSectionAlt0`)}`"
          placeholder="/blur/skills-section-blur-0.png"
        />
      </div>
      <article>
        <h4>{{ $t("tSkillsSectionTitle0") }}</h4>
        <p>{{ $t("tSkillsSectionLabel0") }}</p>
      </article>
    </div>
    <div>
      <div>
        <NuxtImg
          src="/img/skills-section-img-1.png"
          :alt="`${$t(`tSkillsSectionAlt1`)}`"
          placeholder="/blur/skills-section-blur-1.png"
        />
      </div>
      <article>
        <h4>{{ $t("tSkillsSectionTitle1") }}</h4>
        <p>{{ $t("tSkillsSectionLabel1") }}</p>
      </article>
    </div>
    <div>
      <div>
        <NuxtImg
          src="/img/skills-section-img-2.png"
          :alt="`${$t(`tSkillsSectionAlt2`)}`"
          placeholder="/blur/skills-section-blur-2.png"
        />
      </div>
      <article>
        <h4>{{ $t("tSkillsSectionTitle2") }}</h4>
        <p>{{ $t("tSkillsSectionLabel2") }}</p>
      </article>
    </div>
    <div>
      <div>
        <NuxtImg
          src="/img/skills-section-img-3.png"
          :alt="`${$t(`tSkillsSectionAlt3`)}`"
          placeholder="/blur/skills-section-blur-3.png"
        />
      </div>
      <article>
        <h4>{{ $t("tSkillsSectionTitle3") }}</h4>
        <p>{{ $t("tSkillsSectionLabel3") }}</p>
      </article>
    </div>
    <div>
      <div>
        <NuxtImg
          src="/img/skills-section-img-4.png"
          :alt="`${$t(`tSkillsSectionAlt4`)}`"
          placeholder="/blur/skills-section-blur-4.png"
        />
      </div>
      <article>
        <h4>{{ $t("tSkillsSectionTitle4") }}</h4>
        <p>{{ $t("tSkillsSectionLabel4") }}</p>
      </article>
    </div>
    <div>
      <div>
        <NuxtImg
          src="/img/skills-section-img-5.png"
          :alt="`${$t(`tSkillsSectionAlt5`)}`"
          placeholder="/blur/skills-section-blur-5.png"
        />
      </div>
      <article>
        <h4>{{ $t("tSkillsSectionTitle5") }}</h4>
        <p>{{ $t("tSkillsSectionLabel5") }}</p>
      </article>
    </div>
    <div>
      <div>
        <NuxtImg
          src="/img/skills-section-img-6.png"
          :alt="`${$t(`tSkillsSectionAlt6`)}`"
          placeholder="/blur/skills-section-blur-6.png"
        />
      </div>
      <article>
        <h4>{{ $t("tSkillsSectionTitle6") }}</h4>
        <p>{{ $t("tSkillsSectionLabel6") }}</p>
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
  line-height: 1;
  text-align: center;
  margin: 0;
  color: var(--accent-clr-xx);
  width: 100%;
}

.skills-section h3 {
  font-size: clamp(16px, 5.7vw, 24px);
  letter-spacing: 2px;
  text-align: center;
  font-weight: 300;
  margin: 0;
  color: #444444;
  width: 100%;
}

.skills-section > div {
  display: flex;
  flex-direction: row;
  background-color: #444;
  color: #FEFEFE;
  width: 100%;
  max-width: 800px;
  margin: auto;
  align-items: center;
  position: relative;
}

.skills-section > div::before {
  content: '';
  display: block;
  height: 12px;
  position: absolute;
  top: 0;
  left: 168px;
  width: 25%;
  background-color: #790101;
}

.skills-section > div::after {
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 168px;
  background-color: #eeeeee;
  background-image:  repeating-radial-gradient( circle at 100% 50%, transparent 0, #eee 40px ), repeating-linear-gradient( #ebebeb, #ebebeb );
}

.skills-section > div:nth-of-type(2n) {
  flex-direction: row-reverse;
}

.skills-section > div:nth-of-type(2n)::before {
  left: calc(75% - 168px);
}

.skills-section > div:nth-of-type(2n)::after {
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  top: 0;
  left: calc(100% - 168px);
  width: 168px;
  background-color: #eeeeee;
  background-image:  repeating-radial-gradient( circle at 0% 50%, transparent 0, #eee 40px ), repeating-linear-gradient( #ebebeb, #ebebeb );
}

.skills-section > div > div {
  position: relative;
  overflow: hidden;
  width: 168px;
  flex-shrink: 0;
  height: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skills-section > div > div > img {
  width: 128px;
  height: 128px;
  z-index: 1;
  position: relative;
}

.skills-section article {
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 32px;
  gap: 20px;
  position: relative;
}

.skills-section article h4 {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.skills-section article p {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

@media (max-width: 425px) {
  .skills-section > div,
  .skills-section > div:nth-of-type(2n) {
    flex-direction: column;
  }
  
  .skills-section > div::after,
  .skills-section > div:nth-of-type(2n)::after {
    content: '';
    display: block;
    width: 100%;
    height: 168px;
    aspect-ratio: 1;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #eeeeee;
    background-image: repeating-radial-gradient( circle at 50% 100%, transparent 0, #eee 40px ), repeating-linear-gradient( #ebebeb, #ebebeb );
  }

  .skills-section > div::before,
  .skills-section > div:nth-of-type(2n)::before {
    display: none;
  }

  .skills-section article::after {
    content: '';
    display: block;
    width: 33%;
    height: 12px;
    background-color: #790101;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>