<template>
  <section class="intro-section" id="intro">
    <article class="intro-article">
      <h1>{{ $t(`tIntroSectionTitle`) }}</h1>
      <h2>{{ $t(`tIntroSectionName`) }}</h2>
      <h3 v-html="$t(`tIntroSectionSubtitle`)"></h3>
    </article>
    <div class="img-marq" aria-hidden="true">
      <div class="circle-shadow"></div>
      <div class="slide-img-0">
        <div class="box">
          <NuxtImg src="/img/intro-section-img-00.png" :alt="`${$t(`tIntroSectionAlt00`)}`" placeholder="/blur/intro-section-blur-00.png" />
          <NuxtImg src="/img/intro-section-img-01.png" :alt="`${$t(`tIntroSectionAlt10`)}`" placeholder="/blur/intro-section-blur-01.png" />
          <NuxtImg src="/img/intro-section-img-02.png" :alt="`${$t(`tIntroSectionAlt02`)}`" placeholder="/blur/intro-section-blur-02.png" />
        </div>
        <div class="box">
          <NuxtImg src="/img/intro-section-img-00.png" :alt="`${$t(`tIntroSectionAlt00`)}`" placeholder="/blur/intro-section-blur-00.png" />
          <NuxtImg src="/img/intro-section-img-01.png" :alt="`${$t(`tIntroSectionAlt10`)}`" placeholder="/blur/intro-section-blur-01.png" />
          <NuxtImg src="/img/intro-section-img-02.png" :alt="`${$t(`tIntroSectionAlt02`)}`" placeholder="/blur/intro-section-blur-02.png" />
        </div>
      </div>
      <div class="slide-img-1">
        <div class="box">
          <NuxtImg src="/img/intro-section-img-10.png" :alt="`${$t(`tIntroSectionAlt10`)}`" placeholder="/blur/intro-section-blur-10.png" />
          <NuxtImg src="/img/intro-section-img-11.png" :alt="`${$t(`tIntroSectionAlt11`)}`" placeholder="/blur/intro-section-blur-11.png" />
          <NuxtImg src="/img/intro-section-img-12.png" :alt="`${$t(`tIntroSectionAlt12`)}`" placeholder="/blur/intro-section-blur-12.png" />
        </div>
        <div class="box">
          <NuxtImg src="/img/intro-section-img-10.png" :alt="`${$t(`tIntroSectionAlt10`)}`" placeholder="/blur/intro-section-blur-10.png" />
          <NuxtImg src="/img/intro-section-img-11.png" :alt="`${$t(`tIntroSectionAlt11`)}`" placeholder="/blur/intro-section-blur-11.png" />
          <NuxtImg src="/img/intro-section-img-12.png" :alt="`${$t(`tIntroSectionAlt12`)}`" placeholder="/blur/intro-section-blur-12.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-section {
  position: relative;
  overflow: hidden;
  translate: none;
  rotate: none;
  scale: none;
  transform: translate(0px, 0px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: calc(100vh - 51px);
}

.intro-section h1 {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: left;
  margin: 0;
  color: #222222;
}

.intro-section h2 {
  font-size: 77px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  text-align: left;
  margin: 0;
  color: var(--accent-clr-xx);
}

.intro-section h3 {
  font-size: 16px;
  letter-spacing: 2px;
  text-align: left;
  font-weight: 300;
  margin: 0;
  color: #444444;
}

.intro-section .intro-article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  position: relative;
  max-width: fit-content;
  margin-right: auto;
  background-color: #eeeeee;
  opacity: 1;
  background-image:  repeating-radial-gradient( circle at 100% 50%, transparent 0, #eee 40px ), repeating-linear-gradient( #ebebeb, #ebebeb );
  flex: 1;
  min-height: inherit;
  padding: 20px;
  padding-left: max(calc((100vw - 820px)/2),20px);
}

.intro-section .circle-shadow {
  z-index: 5;
  background-image: radial-gradient(circle,
      rgba(254, 254, 254, 1) 175px,
      transparent);
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  pointer-events: none;
  display: none;
}

.intro-section .img-marq {
  z-index: -1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  margin-left: 0;
  margin-right: 0;
  height: calc(100vh - 51px);
}

.intro-section .img-marq img {
  width: 50vw;
  -webkit-perspective: 100px;
  perspective: 100px;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  margin-left: 3rem;
  margin-right: 3rem;
  -webkit-transform: perspective(100px);
  transform: perspective(100px);
  vertical-align: middle;
  max-width: 100%;
  display: inline-block;
  border-radius: 0.25rem;
  object-fit: contain;
  width: auto;
  height: 100%;
}

.intro-section .slide-img-0 {
  z-index: -1;
  -webkit-transform-origin: 0%;
  -ms-transform-origin: 0%;
  transform-origin: 0%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: -10%;
  right: auto;
  -webkit-transform: rotate3d(0, 1, 0.00009, 80deg);
  transform: rotate3d(0, 1, 0.00009, 80deg);
  position: relative;
  transform: unset;
  height: calc((100vh - 51px)/2 - 45px);
}

.intro-section .slide-img-0 .box {
  -webkit-transform: translate(0%, 0px);
  -ms-transform: translate(0%, 0px);
  transform: translate(0%, 0px);
  -webkit-animation-name: slideImgLeftAnimation;
  animation-name: slideImgLeftAnimation;
  -webkit-animation-duration: 20s;
  animation-duration: 20s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.intro-section .slide-img-1 {
  z-index: -1;
  -webkit-transform-origin: 100%;
  -ms-transform-origin: 100%;
  transform-origin: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: auto;
  right: -10%;
  -webkit-transform: rotateX(0) rotateY(-80deg) rotate(0);
  transform: rotateX(0) rotateY(-80deg) rotate(0);
  position: relative;
  transform: unset;
  height: calc((100vh - 51px)/2 - 45px);
}

.intro-section .slide-img-1 .box {
  -webkit-transform: translate(0%, 0px);
  -ms-transform: translate(0%, 0px);
  transform: translate(0%, 0px);
  -webkit-animation-name: slideImgRightAnimation;
  animation-name: slideImgRightAnimation;
  -webkit-animation-duration: 20s;
  animation-duration: 20s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.intro-section .box {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

@-webkit-keyframes slideImgLeftAnimation {
  from {
    -webkit-transform: translate(0%, 0px);
    transform: translate(0%, 0px);
  }

  to {
    -webkit-transform: translate(-100%, 0px);
    transform: translate(-100%, 0px);
  }
}

@keyframes slideImgLeftAnimation {
  from {
    -webkit-transform: translate(0%, 0px);
    transform: translate(0%, 0px);
  }

  to {
    -webkit-transform: translate(-100%, 0px);
    transform: translate(-100%, 0px);
  }
}

@-webkit-keyframes slideImgRightAnimation {
  from {
    -webkit-transform: translate(0%, 0px);
    transform: translate(0%, 0px);
  }

  to {
    -webkit-transform: translate(100%, 0px);
    transform: translate(100%, 0px);
  }
}

@keyframes slideImgRightAnimation {
  from {
    -webkit-transform: translate(0%, 0px);
    transform: translate(0%, 0px);
  }

  to {
    -webkit-transform: translate(100%, 0px);
    transform: translate(100%, 0px);
  }
}

@media (max-width: 749px) {
  .intro-article {
    gap: 30px;
    min-height: calc(100vh - 245px);
    padding: 4vw;
    min-width: 100%;
    background-color: transparent !important;
    background-color: #eee;
    background-image: repeating-radial-gradient(circle at 50% 50%, #ffffff50 0px, #ffffff00 40px), repeating-linear-gradient(#ffffff00, #ffffff00)!important;
  }
  
  .intro-section .circle-shadow {
    display: flex;
  }
  
  .intro-section h1,
  .intro-section h2,
  .intro-section h3 {
    text-align: center;
  }
  .intro-section h2 {
    font-size: 73px;
  }

  .intro-section .img-marq {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
    position: absolute;
    width: 100%;
  }

  .intro-section .img-marq img {
    width: auto;
    height: 100%;
  }

  .intro-section .slide-img-0,
  .intro-section .slide-img-1 {
    position: relative;
    transform: unset;
    height: calc(50% - 45px);
  }
}
@media (max-width: 527px) {
  .intro-section {
    min-height: calc(100vh - 89px);
  }
}
@media (max-width: 374px) {
  .intro-section h2 {
    font-size: 50px;
  }
}
</style>