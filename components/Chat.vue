<template>
<section class="chat-section">
  <div class="chat-section-label">
    <p class="chat-skills">{{ $t(`tChatButtonSkills`) }}</p>
    <p class="chat-projects">{{ $t(`tChatButtonProjects`) }}</p>
    <p class="chat-about">{{ $t(`tChatButtonAbout`) }}</p>
    <p class="chat-contact">{{ $t(`tChatButtonContact`) }}</p>
    <p class="chat-project00">{{ $t(`tChatButtonProject00`) }}</p>
    <p class="chat-project01">{{ $t(`tChatButtonProject01`) }}</p>
    <p class="chat-project02">{{ $t(`tChatButtonProject03`) }}</p>
    <p class="chat-project03">{{ $t(`tChatButtonProject03`) }}</p>
    <p class="chat-project04">{{ $t(`tChatButtonProject04`) }}</p>
    <p class="chat-project05">{{ $t(`tChatButtonProject05`) }}</p>
    <p class="chat-project10">{{ $t(`tChatButtonProject10`) }}</p>
    <p class="chat-project11">{{ $t(`tChatButtonProject11`) }}</p>
    <p class="chat-project12">{{ $t(`tChatButtonProject13`) }}</p>
    <p class="chat-project13">{{ $t(`tChatButtonProject13`) }}</p>
    <p class="chat-project14">{{ $t(`tChatButtonProject14`) }}</p>
    <p class="chat-project15">{{ $t(`tChatButtonProject15`) }}</p>
  </div>
  <button class="chat-section-icon" @click="handleClick">
    <span></span>
    <span></span>
    <span></span>
  </button>
</section>
</template>

<style>
.chat-section {
  pointer-events: all;
  position: fixed;
  bottom: 20px;
  right: 24px;
  border: none;
  z-index: 114;
  cursor: default;
  background-color: transparent;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.chat-section-icon {
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 115;
  box-sizing: border-box;
  color: #fefefe;
  background-color: #790101;
  border: none;
  transition: .5s all linear;
  cursor: pointer;
  flex-direction: row;
  gap: 5px;
  opacity: .8;
}

.chat-section-icon span {
  width: 5px;
  height: 5px;
  background-color: #f3f3f3;
  border-radius: 100%;
}

.chat-section-label {
  display: flex;
  width: fit-content;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: all .5s linear;
  overflow: hidden;
  z-index: -1;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #444444cc;
  position: relative;
  min-width: 0px;
  min-height: 60px;
  padding: 0 30px;
  cursor: default;
}

.chat-section-label p:empty {
  padding: 0;
  transition: all .5s linear;
  margin-right: 0px;
}

.chat-section-label p {
  max-width: 0px;
  color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all .5s linear;
  height: fit-content;
  font-family: "Source Code Pro", Courier, monospace;
  font-size: 16px;
  overflow: hidden;
  position: absolute;
  margin: 0 40px 0 0;
  line-height: 150%;
  white-space: nowrap;
}

.intro .chat-section-label {
  max-width: 0;
  cursor: default;
  overflow: hidden;
  transition: all .5s linear;
}

.skills .chat-section-label p.chat-skills,
.projects .chat-section-label p.chat-projects,
.about .chat-section-label p.chat-about,
.contact .chat-section-label p.chat-contact,
.project00 .chat-section-label p.chat-project00,
.project01 .chat-section-label p.chat-project01,
.project02 .chat-section-label p.chat-project02,
.project03 .chat-section-label p.chat-project03,
.project04 .chat-section-label p.chat-project04,
.project05 .chat-section-label p.chat-project05,
.project10 .chat-section-label p.chat-project10,
.project11 .chat-section-label p.chat-project11,
.project12 .chat-section-label p.chat-project12,
.project13 .chat-section-label p.chat-project13,
.project14 .chat-section-label p.chat-project14,
.project15 .chat-section-label p.chat-project15 {
  position: relative;
  opacity: 1;
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  animation: typewriter 1s steps(25) .5s 1 normal both,
    blinkTextCursor 500ms steps(25) infinite normal;
}

@keyframes typewriter {
  from {
    max-width: 0;
  }
  to {
    max-width: 200px;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(254, 254, 254, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>

<script setup>
const handleClick = () => Tawk_API.toggle();
</script>