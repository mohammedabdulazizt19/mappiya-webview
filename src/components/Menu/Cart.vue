<template>
    <div>

        <div class="offcanvas offcanvas-start offcanvas-width" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">My cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        <div class="offcanvas-body">
            <div class="wrapper-order">
                <p>Start adding items to your cart</p>
                <div class="row m-2 py-3 wrap-menu" v-for="menu in this.$store.state.cart" :key="menu.id">
                    <div class="col-5 text-center">
                        <img class="img-cart" :src="menu.image"  alt="...">
                    </div>
                    <div class="col-4 mt-1">
                        <h6 class="text-danger fw-bold text-dark cart-title">{{ menu.title }}</h6>
                        <span class="price-box text-center fw-semibold py-1">SR {{ menu.price }}</span>
                    </div>
                    <div class="col-2 column-quantity">
                        <div class="wrapper-quantity-main">
                            <div class="wrapper-quantity">
                                <div class="d-flex align-items-center ">
                                    <button @click="minusQuantity(menu)" class="btn btn-sm  ">-</button>
                                    <span class="fw-bold mx-2">{{ menu.quantity }}</span>
                                    <button @click="addQuantity(menu)" class="btn btn-sm  ">+</button>
                                </div> 
                            </div> 
                        </div>
                        <div class="wrap-x d-flex align-item-center">
                            <span class="btn-cart-style" @click="$store.commit('removeFromCart', menu)">x</span>
                        </div>        
                    </div>
                </div>
            </div>
            <hr />
            <div class="row px-2 row-textsize">
                <div class="col-6">
                    <p>Total (Incl. VAT)</p>
                    <p>Delivery Fee</p>
                </div>
                <div class="col-6 text-center">
                    <p class="">SR {{ totalPriceWithoutDeliveryFee }}</p>
                    <p class="">SR 12</p>
                </div>
            </div>
            <hr />
            <div class="row total-row-style">
                <div class="col-5 text-white">
                    <span class="fw-lighter">Total: ( {{ $store.getters.cartCount }} items)</span> 
                    <p class="total-price fw-bold">SR {{ totalPrice }}</p>
                </div>
                <div class="col-7 text-center m-auto">
                    <button class="checkout-btn fw-bold">Proceed to Checkout</button>
                </div>       
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
        totalPriceWithoutDeliveryFee() {
        return this.totalPrice - this.$store.state.deliveryFee
    }
    },

    methods: {
        addQuantity(menu) {
            this.$store.dispatch('addQuantity', menu)
        },
        minusQuantity(menu) {
            this.$store.dispatch('minusQuantity', menu)
        }
    },
   
}

</script>


<style>
.img-cart{
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.cart-title{
    font-size: 15px;
}

.price-box{
    color: #cf8b31;
}
.wrap-menu{
    background-color: #FAF4F0;
    border-radius: 10%;
}
.column-quantity{
    position: relative;
}
.wrapper-quantity-main{
   position: absolute;
   top: 55%;
   left: -50%;
   right: 20%;
}
.wrapper-quantity{
    border: 1.5px solid #000;
    font-size: 10px;
    padding-left: 15px;
    padding-right: 85px;
    border-radius: 20px;
}
.wrap-x{
    position: absolute;
    left: 120%;
    top: -30%;
}
.btn-cart-style{
    color: #fff;
    background-color: #979797;
    padding: 2px 10px 3px 10px;
    border-radius: 50%;
    cursor: pointer;
}
.row-textsize{
    font-size: 12px;
}
.total-row-style{
    background-color: #D0A772;
    padding: 10px;
    border-radius: 35px;
}
.checkout-btn{
    border: .5px solid #D0A772;
    border-radius: 40px;
    background-color: #fff;
    padding: 12px 15px 12px 15px;
    font-size: 12px;
}
.checkout-btn:hover{
    background-color: #cf8b31;
    border: .5px solid #fff;
    color: #fff;
}
.total-price{
    font-size: 2rem;
}
</style>