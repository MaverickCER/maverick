<template>
  <section class="intro-section" id="intro">
    <h1>{{ $t(`tIntroSectionTitle`) }}</h1>
    <h2>{{ $t(`tIntroSectionName`) }}</h2>
    <h3>{{ $t(`tIntroSectionSubtitle`) }}</h3>
    <div class="img-marq" aria-hidden="true">
      <div class="circle-shadow"></div>
      <div class="box-shadow"></div>
      <div class="box-shadow shadow-right"></div>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 86px);
  gap: 30px;
  padding: 50px 30px;
}

.intro-section h1 {
  font-size: clamp(12px, 4.3vw, 18px);
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #222222;
}

.intro-section h2 {
  font-size: clamp(28px, 10vw, 83px);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #790101;
}

.intro-section h2 span {
  margin-right: -2.5%;
}

.intro-section h3 {
  font-size: clamp(16px, 5.7vw, 24px);
  letter-spacing: 2px;
  text-align: center;
  font-weight: 300;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #444444;
}

.intro-section .circle-shadow {
  z-index: 5;
  background-image: -webkit-radial-gradient(circle,
      rgba(254, 254, 254, 0.05),
      transparent 50%);
  background-image: -o-radial-gradient(circle,
      rgba(254, 254, 254, 0.05),
      transparent 50%);
  background-image: radial-gradient(circle,
      rgba(254, 254, 254, 0.05),
      transparent 50%);
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  pointer-events: none;
}

.intro-section .box-shadow {
  z-index: 0;
  width: 290vw;
  height: 50vw;
  -webkit-transform-origin: 0%;
  -ms-transform-origin: 0%;
  transform-origin: 0%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  background-image: -webkit-gradient(linear,
      right top,
      left top,
      color-stop(50%, #fefefe),
      color-stop(80%, transparent));
  background-image: -webkit-linear-gradient(right,
      #fefefe 50%,
      transparent 80%);
  background-image: -o-linear-gradient(right, #fefefe 50%, transparent 80%);
  background-image: linear-gradient(270deg, #fefefe 50%, transparent 80%);
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  margin-top: auto;
  margin-bottom: auto;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: auto;
  -webkit-transform: rotate3d(0, 1, 0.00009, 80deg);
  transform: rotate3d(0, 1, 0.00009, 80deg);
}

.intro-section .shadow-right {
  -webkit-transform-origin: 100%;
  -ms-transform-origin: 100%;
  transform-origin: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  background-image: -webkit-gradient(linear,
      left top,
      right top,
      color-stop(50%, #fefefe),
      color-stop(80%, transparent));
  background-image: -webkit-linear-gradient(left, #fefefe 50%, transparent 80%);
  background-image: -o-linear-gradient(left, #fefefe 50%, transparent 80%);
  background-image: linear-gradient(90deg, #fefefe 50%, transparent 80%);
  top: 0%;
  bottom: 0%;
  left: auto;
  right: 0%;
  -webkit-transform: rotateX(0) rotateY(-80deg) rotate(0);
  transform: rotateX(0) rotateY(-80deg) rotate(0);
}

.intro-section .img-marq {
  z-index: -1;
  opacity: 0.7;
  -webkit-perspective: 1412px;
  perspective: 1412px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  overflow: hidden;
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

@media (max-width: 575px) {
  .intro-section {
    gap: 30px;
    min-height: calc(100vh - 245px);
  }

  .intro-section .box-shadow {
    display: none;
  }

  .intro-section .circle-shadow {
    z-index: 5;
    background-image: -webkit-radial-gradient(circle,
        rgba(254, 254, 254, 0.5),
        transparent 50%);
    background-image: -o-radial-gradient(circle,
        rgba(254, 254, 254, 0.5),
        transparent 50%);
    background-image: radial-gradient(circle,
        rgba(254, 254, 254, 0.9),
        transparent 100%);
  }

  .intro-section .img-marq {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
  }

  .intro-section .img-marq img {
    width: auto;
    height: 100%;
  }

  .intro-section .slide-img-0,
  .intro-section .slide-img-1 {
    position: relative;
    transform: unset;
    height: calc(50% - 30px);
  }
}
</style>