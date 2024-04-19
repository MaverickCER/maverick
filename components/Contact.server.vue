<template>
  <section class="contact-section" id="contact">
    <div>
      <ul>
        <li>{{ $t(`tContactSectionTitle`) }}</li>
        <li><a :href="`${$t(`tContactSectionHref0`)}`">{{ $t(`tContactSectionLinkLabel0`) }}</a></li>
        <li><a :href="`${$t(`tContactSectionHref1`)}`">{{ $t(`tContactSectionLinkLabel1`) }}</a></li>
        <li><a :href="`${$t(`tContactSectionHref2`)}`">{{ $t(`tContactSectionLinkLabel2`) }}</a></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #790101;
  color: #fefefe;
  z-index: 11;
  border-top: 2px solid #444;
}

.contact-section div {
  max-width: 840px;
  margin: auto;
}

.contact-section ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.contact-section li {
  top: 50%;
}

.contact-section li:first-child {
  flex: 1;
}

.contact-section li:first-child,
.contact-section li a {
  color: #fefefe;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  padding: 10px 20px;
  position: relative;
  display: block;
}

.contact-section li a:hover {
  text-decoration: underline;
}

.contact-section li:first-child {
  font-size: 24px;
}

@media (max-width: 573px) {
  .contact-section ul {
    justify-content: center;
  }

  .contact-section li:first-child {
    min-width: 100%;
    text-align: center;
    display: block;
    padding-left: 0;
    padding-right: 0;
  }

  .contact-section li a {
    text-align: center;
  }
}
</style>