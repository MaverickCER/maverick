<template>
  <section class="about-section" id="about">
    <div class="bio">
      <h2>{{ $t(`tAboutSectionTitle`) }}</h2>
      <p>{{ $t(`tAboutSectionBio`) }}</p>
      <h3>{{ $t(`tAboutSectionSubtitle0`) }}</h3>
      <ul>
        <li>{{ $t(`tAboutSectionListItem00`) }}</li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li>{{ $t(`tAboutSectionListItem01`) }}</li>
        <li>{{ $t(`tAboutSectionListItem02`) }}</li>
      </ul>
      <h3>{{ $t(`tAboutSectionSubtitle1`) }}</h3>
      <ul>
        <li>{{ $t(`tAboutSectionListItem10`) }}</li>
        <li>{{ $t(`tAboutSectionListItem11`) }}</li>
        <li>{{ $t(`tAboutSectionListItem12`) }}</li>
      </ul>
    </div>
    <NuxtImg src="/img/about-section-img.png" :alt="`${$t(`tAboutSectionAlt`)}`"
      placeholder="/blur/about-section-blur.png" class="background" />
  </section>
</template>

<style scoped>
.about-section {
  display: flex;
  justify-content: left;
  align-items: flex-end;
  flex-wrap: wrap;
  max-width: 800px;
  margin: auto;
  padding: 50px 30px 0;
}

.about-section h2 {
  font-size: clamp(28px, 10vw, 32px);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  text-align: left;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #790101;
  width: 100%;
}

.about-section h3 {
  font-size: clamp(16px, 5.7vw, 24px);
  letter-spacing: 2px;
  text-align: left;
  font-weight: 300;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #444444;
  width: 100%;
}

.about-section .bio {
  width: 100%;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
}

.about-section .bio ul {
  margin-bottom: 0;
}

.about-section .content {
  width: 62%;
  position: relative;
  z-index: 1;
  padding: 0 0 50px;
  box-sizing: border-box;
  margin-bottom: auto;
}

.about-section .content ul {
  margin-top: 0;
}

.about-section .background {
  display: flex;
  width: 38%;
  height: auto;
  max-height: 600px;
  aspect-ratio: .775;
  object-fit: contain;
  object-position: 50% 100%;
  flex: 1;
}

@media (max-width: 700px) {
  .about-section .bio {
    padding: 50px 30px 0;
    margin: auto;
    width: 100%;
    max-width: 800px;
  }

  .about-section .content {
    width: 100%;
    padding: 0 30px 0;
    max-width: 800px;
    margin: auto;
  }

  .about-section .background {
    width: 100%;
  }
}

.about-section .bio p,
.about-section .bio li,
.about-section .content p,
.about-section .content li {
  color: #222222;
  font-family: "Montserrat", sans-serif;
}
</style>