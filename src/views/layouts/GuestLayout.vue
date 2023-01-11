<template>
      <div>    
        <header>
            <NavBar />
            <HeroSection />
        </header>
        <main>
            <slot/>
        </main>
        <div>
            <ContactInfo />
            <FooterSection />
        </div>

    </div>
</template>

<script setup>
import NavBar from '../../components/NavBar.vue';
import HeroSection from '../../components/HeroSection.vue';
import ContactInfo from '../../components/ContactInfo.vue';
import FooterSection from '../../components/FooterSection.vue';
</script>