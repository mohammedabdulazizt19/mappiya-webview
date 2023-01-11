<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <router-link class="nav-link" :to="{name: 'home'}"><img class="logo-eben" src="../assets/logo-ebenezar.png" alt="" /></router-link> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5 fw-semibold">
                        <li class="nav-item">
                            <router-link class="nav-link text-dark" :to="{name: 'home'}">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-dark" :to="{name: 'menu'}">Menu</router-link>
                        </li>  
                        <li class="nav-item">
                            <router-link class="nav-link text-dark" :to="{name: 'email'}">Email</router-link>
                        </li>
                    </ul>
                    <div class="d-flex ms-auto">
                        <router-link class="btn btn-primary" :to="{name: 'LogIn'}">Log in</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink} from 'vue-router'

</script>

<style>
.logo-eben{
    width: 100%;
    height: 100px;
}
</style>