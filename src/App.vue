<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><router-link class="nav-link active" :to="{name: 'home'}">Home</router-link></li>
        <li class="nav-item"><router-link class="nav-link" :to="{name: 'about'}">About</router-link></li>
      </ul>
    </div>
  </nav>
<router-view />
</template>

<script setup>
import {RouterView, RouterLink} from 'vue-router'

</script>
