<template>

    <!-- <GuestLayout> -->

        <Cart />


        <div>
            <div class="container hero-container order-btn-wrapper">
                <div class="row">
                    <img class="img-fluid eben-banner" src="../assets/eben-banner.png" alt="">
                    <router-link :to="{name: 'menu'}"><button class="menu-btn btn btn-success order-btn">Order Now</button></router-link> 
                </div>
            </div>
            <div class="container menu-container">
                <div class="container">
                    <div class="row p-4 title-row">
                        <div class="col-5">
                            <h4>Eben Ezar Restaurant</h4>
                            <div class="d-flex align-items-center">
                                <i style="color: #FFF019;" class="fa-solid fa-star"></i>
                                <p class="mt-3 mx-2">4.4/5 <span class="text-secondary">(100+)</span></p>
                            </div>
                            
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="resto-tag d-flex justify-content-between text-secondary">
                                        <li>Japanese</li>
                                        <li>Asian</li>
                                        <li>Noodles</li>
                                        <li>Rice Dishes</li>
                                        <li>Southeast Asian</li>
                                    </ul>
                                </div>
                            </div>
                        </div>   
                    </div> 
                </div>


                <AllMenu />
            </div>
        </div>  

    <!-- </GuestLayout> -->

    


</template>


<script>

// import GuestLayout from './layouts/GuestLayout.vue';


import Cart from '../components/Menu/Cart.vue'
import AllMenu from '../components/Menu/AllMenu.vue';

export default {
    name: "Menu",
    components: {
        Cart,
        AllMenu,
        // GuestLayout,
    },
}

</script>
 
<style>
.cart-icon{
    position: absolute;
    top: 3.3%;
    left: 80%;
    font-size: 1.75rem;
}

.title-row{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.menu-categ{
    list-style-type: none;
}
.categ-row{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.menu-image-wrapper{
    position: relative;
}
.menu-image-wrapper img{
    width: 100%;
    height: 100px;
    object-fit: cover;
}

.hero-container img{
        width: 100%;
        object-fit: cover;
        align-items: center;
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