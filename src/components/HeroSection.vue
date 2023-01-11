<template>
    <div>
        <div class="container hero-container order-btn-wrapper">
            <img class="img-fluid" src="../assets/eben-banner.png" alt="">
            <router-link :to="{name: 'menu'}"><button class="btn btn-success order-btn">Order Now</button></router-link> 
        </div>
    </div>
</template>

<script setup>
import { RouterLink} from 'vue-router'

</script>

<style>
    .hero-container img{
        width: 100%;
    }
    .order-btn-wrapper{
        position: relative;
    }
    .order-btn{
        font-size: 1.2rem;
        position: absolute;
        top: 73%;
        left: 46.5%;
        padding: 10px 55px 10px 55px;
    }
</style>