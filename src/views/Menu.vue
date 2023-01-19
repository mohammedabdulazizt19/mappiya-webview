<template>
    <div>
        <Cart />
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
</template>


<script>
import Cart from '../components/Menu/Cart.vue'
import AllMenu from '../components/Menu/AllMenu.vue';
export default {
    name: "Menu",
    components: {
        Cart,
        AllMenu
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



</style>