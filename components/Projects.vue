<template>
  <section class="projects-section" id="projects">
    <svg xmlns="http://www.w3.org/2000/svg" width="419" height="1926" viewBox="0 0 419 1926" fill="none">
      <path
        d="M172.09 207.456C275.09 96.0918 172.09 10.6 127.09 12.4574C82.0901 14.3149 12.5901 49.0918 12.5901 128.477C12.5901 358.592 309.59 400.592 309.59 400.592C309.59 400.592 406.593 423.092 406.592 400.592C406.591 378.092 308.592 400.592 308.592 400.592L12.5918 462.592C12.5918 462.592 288.584 550.592 406.584 664.592C406.584 664.592 10.084 556.092 12.584 710.092C13.0411 738.249 54.584 742.592 80.584 747.592C82.8554 748.029 177.084 790.592 108.584 860.592C176.584 790.592 82.0946 748.389 80.584 748.092C19.584 736.092 12.584 775.592 12.584 775.592C12.584 831.092 92.084 831.092 92.084 831.092C92.084 831.092 12.2819 831.092 12.584 887.592C12.93 952.319 148.584 951.592 148.584 951.592C148.584 951.592 12.584 951.592 12.584 993.592C12.584 1035.59 148.584 1035.59 148.584 1035.59C47.584 1035.59 67.584 1130.59 67.584 1130.59C67.584 1130.59 75.084 1231.59 125.084 1189.59C175.084 1147.59 68.084 1130.59 68.084 1130.59C68.084 1130.59 12.584 1130.59 12.584 1189.59C12.584 1280.59 138.584 1280.59 138.584 1280.59C130.584 1280.59 132.584 1330.59 109.584 1330.59C70.0464 1330.59 12.584 1330.59 12.584 1359.59C12.584 1422.43 148.584 1445.59 148.584 1445.59C148.584 1445.59 12.584 1439.09 12.584 1477.59C12.584 1500.59 105.584 1576.59 105.584 1576.59C105.584 1576.59 139.584 1600.09 139.584 1605.59C139.584 1611.09 148.584 1639.59 73.584 1622.59C148.584 1639.09 138.584 1611.09 138.584 1605.59C138.584 1600.09 105.584 1577.59 105.584 1577.59C105.584 1577.59 12.584 1542.59 12.584 1605.59C12.584 1721.59 112.584 1721.59 406.584 1721.59H12.584C12.584 1721.59 138.584 1741.72 138.584 1799.59C138.584 1828.59 112.584 1828.59 112.584 1828.59C78.084 1828.59 68.084 1764.59 46.584 1764.59C23.8361 1764.59 13.584 1789.84 13.584 1812.59C13.584 1882.09 96.584 1913.59 96.584 1913.59"
        stroke="#790101" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <h2>{{ $t("tProjectsSectionTitle") }}</h2>
    <div class="projects-container">
      <span>
        <h3>{{ $t("tProjectsSectionSubtitle0") }}</h3>
        <div class="projects">
          <button @click="openAside('00')">
            <div>
              <NuxtImg src="/img/projects-section-img-00.png" :alt="`${$t(`tProjectsSectionAlt00`)}`"
                placeholder="/blur/projects-section-blur-00.png" />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionName00") }}</h4>
              <p>{{ $t("tProjectsSectionDescription00") }}</p>
              <u>{{ $t("tProjectsSectionLinkLabel00") }}</u>
            </div>
          </button>
          <button @click="openAside('01')">
            <div>
              <NuxtImg src="/img/projects-section-img-01.png" :alt="`${$t(`tProjectsSectionAlt01`)}`"
                placeholder="/blur/projects-section-blur-01.png" />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionName01") }}</h4>
              <p>{{ $t("tProjectsSectionDescription01") }}</p>
              <u>{{ $t("tProjectsSectionLinkLabel01") }}</u>
            </div>
          </button>
          <button @click="openAside('02')">
            <div>
              <NuxtImg src="/img/projects-section-img-02.png" :alt="`${$t(`tProjectsSectionAlt02`)}`"
                placeholder="/blur/projects-section-blur-02.png" />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionName02") }}</h4>
              <p>{{ $t("tProjectsSectionDescription02") }}</p>
              <u>{{ $t("tProjectsSectionLinkLabel02") }}</u>
            </div>
          </button>
        </div>
      </span>
      <span>
        <h3>{{ $t("tProjectsSectionSubtitle1") }}</h3>
        <div class="projects">
          <button @click="openAside('10')">
            <div>
              <NuxtImg src="/img/projects-section-img-10.png" :alt="`${$t(`tProjectsSectionAlt10`)}`"
                placeholder="/blur/projects-section-blur-10.png" />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionName10") }}</h4>
              <p>{{ $t("tProjectsSectionDescription10") }}</p>
              <u>{{ $t("tProjectsSectionLinkLabel10") }}</u>
            </div>
          </button>
          <button @click="openAside('11')">
            <div>
              <NuxtImg src="/img/projects-section-img-11.png" :alt="`${$t(`tProjectsSectionAlt11`)}`"
                placeholder="/blur/projects-section-blur-11.png" />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionName11") }}</h4>
              <p>{{ $t("tProjectsSectionDescription11") }}</p>
              <u>{{ $t("tProjectsSectionLinkLabel11") }}</u>
            </div>
          </button>
          <button @click="openAside('12')">
            <div>
              <NuxtImg src="/img/projects-section-img-12.png" :alt="`${$t(`tProjectsSectionAlt12`)}`"
                placeholder="/blur/projects-section-blur-12.png" />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionName12") }}</h4>
              <p>{{ $t("tProjectsSectionDescription12") }}</p>
              <u>{{ $t("tProjectsSectionLinkLabel12") }}</u>
            </div>
          </button>
        </div>
      </span>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
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
  min-height: 100vh;
  gap: 30px;
  overflow: hidden;
  max-width: 100%;
  background-color: #f3f3f3;
  padding: 50px 30px;
}

.projects-section>svg {
  position: absolute;
  width: auto;
  margin: auto;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.projects-section>svg>path {
  stroke-dasharray: 10000;
  stroke-dashoffset: 10000;
  animation: draw 20s linear infinite;
}

@keyframes draw {
  0% {
    opacity: 0;
    stroke-dashoffset: 10000;
  }

  5% {
    opacity: .8;
    stroke-dashoffset: 10000;
  }

  95% {
    opacity: .8;
    stroke-dashoffset: 0;
  }

  100% {
    opacity: 0;
    stroke-dashoffset: 0;
  }
}

.projects-section h2 {
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

.projects-section h3 {
  font-size: clamp(16px, 5.7vw, 24px);
  letter-spacing: 2px;
  text-align: center;
  font-weight: 300;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #444444;
  width: 100%;
}

.projects-container {
  display: flex;
  flex-direction: row;
  max-width: 800px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.projects-container>span {
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
}

.projects a,
.projects button {
  border-radius: 0.5rem;
  height: fit-content;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: #fefefe;
  width: 100%;
  max-width: 385px;
  opacity: .9;
}

.projects a:hover,
.projects button:hover {
  box-shadow: 0 0 10px rgba(121, 1, 1, 0.1);
  opacity: 1;
}

.projects img {
  display: block;
  width: 111%;
  height: 111%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all .5s linear;
}

.projects a:hover img,
.projects button:hover img {
  width: 101%;
  height: 101%;
  transition: all .5s linear;
  background-color: #fefefe;
}

.projects button div:first-child {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 52.36%;
  border-radius: .5rem;
}

.projects button div:last-child {
  padding: 15px 15px 20px;
  border-radius: .5rem;
  z-index: 1;
  text-align: left;
  aspect-ratio: unset;
}

.projects h4 {
  margin: 0;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  color: #222222;
  overflow: hidden;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
}

.projects p {
  margin: 0;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  color: #444444;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 1rem;
  line-height: 1.5;
  margin: .5rem 0;
}

.projects u {
  color: #790101;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all .5s linear;
  position: relative;
  text-transform: uppercase;
  line-height: 1.5;
  font-weight: 600;
}

.projects u::after {
  content: ">";
  display: inline-block;
  position: absolute;
  right: -10px;
  top: 50%;
  color: transparent;
  transform: translateY(-50%);
  transition: all .5s linear;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
}

.projects a:hover u,
.projects button:hover u {
  border-bottom: 1px solid #790101;
  transition: all .5s linear;
}

.projects a:hover u::after,
.projects button:hover u::after {
  color: #790101;
  transition: all .5s linear;
}

@media (hover: none) {
  .projects img {
    width: 100%;
    height: 100%;
  }
}


@media (max-width: 575px) {
  .projects-container {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup>
const projectStore = useProjectStore();

const openAside = (project) => {
  projectStore.open(project);
}
</script>