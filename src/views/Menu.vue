<template>

    <div>
        <Cart />

        <div>
        <div class="">
            <a class="btn cart-icon" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <i class="fa-solid fa-cart-shopping fa-sm position-relative"></i>
                <span style="top: 15%;" class="fs-6 position-absolute start-100 translate-middle badge rounded-pill text-bg-danger">
                    15+
                </span>
            </a>
        </div>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Your cart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                Start adding items to your cart
            </div>
            <hr />
            <div class="row">
                <div class="col-6">
                    <p>Subtotal</p>
                </div>
                <div class="col-6">
                    <p>₱ 0</p>
                </div>
            </div>
            
            <div class="row">
                <div class="col-6">
                    <h6>Total (Incl. VAT)</h6>
                </div>
                <div class="col-6">
                    <p>₱ 0</p>
                </div>
            </div>
            <div class="row">
                <button class="btn btn-secondary d-block w-100">Go to checkout</button>
            </div>
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
    
    </div>
</template>


<script>

import Cart from '../components/Menu/Cart.vue'
import AllMenu from '../components/Menu/AllMenu.vue';

export default {
    name: "Menu",
    components: {
        Cart,
        AllMenu,
        
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