<template>
  <div>
      <header>
        <NavBar class="navbar-sticky" />
      </header>
  
      <div class="main-container" style="min-height: 100%;">
        <main class="main-route">
          <router-view />
        </main>
        <div>
          <ContactInfo />
          <FooterSection />
        </div>
      </div>
  </div>
</template>

<script >
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ContactInfo from './components/ContactInfo.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: "App",
  components: {
    NavBar,
    HeroSection,
    ContactInfo,
    FooterSection
  },
}

</script>

<style>
.navbar-sticky{
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: #D0A772;
}
.main-route{
  padding-top: 100px;
}

main {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>

