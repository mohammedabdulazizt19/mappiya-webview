<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-2">
        <div class="container-fluid">
            <a class="navbar-brand ms-3 me-5" href="#">
                <img src="../assets/logo-ebenezar_notext.png" v-on:click="redirectToHome" width="39" height="34" class="d-inline-block align-text-top" alt="Eben Azar Restaurant"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <label class="form-label ms-1">Juan Dela Cruz</label>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><router-link class="dropdown-item" :to="{name: 'Profile'}">Profile</router-link></li>
                        <li><a class="dropdown-item">Log out</a></li>
                    </ul>
                </li>
            </ul>

            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    components: {
        RouterLink
    },
    methods: {
        redirectToHome() {
            this.$router.push('/');
        }
    }
}

</script>