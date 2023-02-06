<template>
    <div class="home-view">
        <div class="container hero-container order-btn-wrapper">
            <div class="row">
                <img class="img-fluid eben-banner" src="../assets/eben-cover2.jpg" alt="">
                <router-link :to="{name: 'menu'}"><button class="menu-btn btn btn-success order-btn">Order Now</button></router-link> 
            </div>
        </div>
    </div>
</template>

<script>
// import GuestLayout from './layouts/GuestLayout.vue';

// export default{
//     components: {
//         GuestLayout
//     }
// }
</script>
 
<style>

.hero-container img{
        width: 100%;
        object-fit: cover;
        align-items: center;
        height: 100%;
    }
    .order-btn-wrapper{
        position: relative;
    }
    .home-view .order-btn{
        font-size: 1.2rem;
        position: absolute;
        top: 85%;
        left: 45%;
        padding: 10px 55px 10px 55px;
    }

    @media (max-width: 575.98px) { 
        .menu-btn{
            padding: 2px 7px 2px 7px;
            font-size: 1rem;
        }
        .eben-banner{
            max-width: 100%;
            width: 100%;
        }
    }
    @media (max-width: 767.98px) { 
        .menu-btn{
            padding: 5px 15px 5px 15px;
            font-size: 1rem;
        }
     }
</style>



