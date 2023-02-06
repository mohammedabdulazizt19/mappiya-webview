<template>
    <div class="">
        <div class="container">
            <div class="row row-group-menu my-4 p-4">
                <h4>Eben Ezar Menus</h4>
                <span class="lh-sm">Japanese Restaurant with Delicious foods</span>


                <div class="col-lg-6 col-md-6 col-sm-12 col-12 my-3" v-for="menu in menus" :key="menu.id">
                    <div class="card card-style">
                        <div class="row no-gutters">
                            <div class="col-sm-8 p-4">
                                <h5 class="card-title">{{ menu.title }}</h5>
                                <p class="card-text lh-sm text-secondary">{{ menu.description }}</p>
                                <span class="fw-bold">SR {{ menu.price }}</span>
                            </div>
                            <div class="col-sm-4">
                                <div class="card-body menu-image-wrapper">
                                    <img class="card-img" v-bind:src="menu.image" alt="" />
                                    <!-- <i @click="addToCart" class="fa-solid fa-square-plus fa-2xl plus-icon"></i> -->
                                    <button @click="addToCart(menu)" class="btn btn-danger my-1">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>             
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: "AllMenu",

    computed: {
    ...mapState({
      menus: state => state.menus,
    })
  },
  methods: {
        ...mapActions(['fetchMenuItems']),

        addToCart(menu){ 
            this.$store.commit('addToCart', menu)  
        },
  },
  
  created() {
    this.fetchMenuItems()
  },

  
   
}
</script>

<style>
.row-group-menu{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.card{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.card-style {
    width: 600px;
}

@media (max-width: 1199.98px) {
    .card-style{
        width: 500px;
    }
}
 @media (max-width: 991.98px) { 
    .card-style{
        width: 400px;
    }
}


</style>