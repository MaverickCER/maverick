<template>
<a :href="`${$t(`tContactSectionHref3`)}`" target="_blank" rel="noopener" class="chat-button">
  <div class="chat-button-label">
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
  <div class="chat-button-icon">
    <span></span>
    <span></span>
    <span></span>
  </div>
</a>
</template>

<style>
.chat-button {
  pointer-events: all;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  z-index: 114;
  cursor: default;
  background-color: transparent;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.chat-button-icon {
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
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

.chat-button-icon span {
  width: 5px;
  height: 5px;
  background-color: #f3f3f3;
  border-radius: 100%;
}

.chat-button-label {
  display: flex;
  width: fit-content;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: all .5s linear;
  overflow: hidden;
  z-index: -1;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #444444cc;
  position: relative;
  min-width: 0px;
  min-height: 40px;
  padding: 0 20px;
  cursor: pointer;
}

.chat-button-label p:empty {
  padding: 0;
  transition: all .5s linear;
  margin-right: 0px;
}

.chat-button-label p {
  max-width: 0px;
  color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all .5s linear;
  height: fit-content;
  font-family: "Roboto Mono", monospace;
  font-size: 16px;
  overflow: hidden;
  position: absolute;
  margin: 0 40px 0 0;
  line-height: 150%;
  white-space: nowrap;
}

.intro .chat-button-label {
  max-width: 0;
  cursor: default;
  overflow: hidden;
  transition: all .5s linear;
}

.skills .chat-button-label p.chat-skills,
.projects .chat-button-label p.chat-projects,
.about .chat-button-label p.chat-about,
.contact .chat-button-label p.chat-contact,
.project00 .chat-button-label p.chat-project00,
.project01 .chat-button-label p.chat-project01,
.project02 .chat-button-label p.chat-project02,
.project03 .chat-button-label p.chat-project03,
.project04 .chat-button-label p.chat-project04,
.project05 .chat-button-label p.chat-project05,
.project10 .chat-button-label p.chat-project10,
.project11 .chat-button-label p.chat-project11,
.project12 .chat-button-label p.chat-project12,
.project13 .chat-button-label p.chat-project13,
.project14 .chat-button-label p.chat-project14,
.project15 .chat-button-label p.chat-project15 {
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
</script>