<template>
    <div>
        <!-- <div class="">
            <a class="btn cart-icon" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <i class="fa-solid fa-cart-shopping fa-sm position-relative"></i>
                <span style="top: 15%;" class="fs-6 position-absolute start-100 translate-middle badge rounded-pill text-bg-danger">
                    15+
                </span>
            </a>
        </div> -->

        <div class="offcanvas offcanvas-start offcanvas-width" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Your cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        <div class="offcanvas-body">
            <div class="wrapper-order">
                <p>Start adding items to your cart</p>
                <div class="row my-3" v-for="menu in this.$store.state.cart" :key="menu.id">
                    <div class="col-8 d-flex align-items-center" >
                        <img class="img-cart" :src="menu.image"  alt="...">
                        <h6 class="text-danger mx-3">{{ menu.title }}</h6>
                    </div>
                    <div class="col-3">
                        <div class="d-flex flex-row justify-content-between align-items-center">
                            <div class="d-flex flex-column">
                                <span class="price-box text-center fw-semibold py-1">SR {{ menu.price }}</span>
                                <div>
                                    <button @click="minusQuantity(menu)" class="btn btn-sm  ">-</button>
                                    <span class=" fw-bold">x {{ menu.quantity }}</span>
                                    <button @click="addQuantity(menu)" class="btn btn-sm  ">+</button>
                                </div>
                            </div>
                            
                            <!-- <span class="remove-btn float-right btn btn-danger" @click="$store.commit('removeFromCart', menu)">x</span> -->
                        </div>         
                    </div>
                    <div class="col-1">
                        <span class="remove-btn float-right btn btn-sm btn-danger" @click="$store.commit('removeFromCart', menu)">x</span>
                    </div>
                </div>
            </div>
            <hr />
            
            <div class="row">
                <div class="col-6">
                    <h6>Total (Incl. VAT)</h6>
                </div>
                <div class="col-6 w-25">
                    <p class="total-style text-center fw-bold">SR {{ totalPrice }}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-8  d-flex justify-content-start">
                    <button class="btn btn-success mx-1">STC Pay</button>
                    <button class="btn btn-danger">Cash on Delivery</button>
                </div>
                <!-- <router-link style="text-decoration: none;" :to="{name: 'checkout'}"><button class="btn btn-secondary d-block w-100">Go to checkout</button></router-link> -->
                
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'

export default {
    name: "Cart",

    computed: {
        ...mapGetters(['totalPrice']),
    },

    methods: {
        addQuantity(menu) {
            this.$store.dispatch('addQuantity', menu)
        },
        minusQuantity(menu) {
            this.$store.dispatch('minusQuantity', menu)
        }
    }
}

</script>


<style>
.img-cart{
    width: 50px;
    height: 50px;
}
.go-checkout{
    text-decoration: none;
}
/* .remove-btn{
    padding: 1px 5px 1px 5px;
} */
.offcanvas-width {
  width: 550px !important;
}
.price-box{
    border: 0.5px solid #585858;
    border-radius: 5%;
}
.total-style{
    padding: 10px;
    border: 0.5px solid #585858;
    border-radius: 5%;
}

</style>