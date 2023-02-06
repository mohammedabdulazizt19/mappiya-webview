<template>

    <div class="">
        <nav class="navbar navbar-expand-lg my-3">
            <div class="container">
                <router-link class="nav-link" :to="{name: 'home'}"><img class="logo-eben" src="../assets/logo-ebenezar_update.png" alt="" /></router-link> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5 fw-semibold ">
                        <li class="nav-item">
                            <router-link class="nav-link navbar-text" :to="{name: 'home'}">Home</router-link>
                        </li>
                        <li class="nav-item">

                            <router-link class="nav-link text-dark" :to="{name: 'menu'}">Menu</router-link>
                        </li>  
                    </ul>
                    <div class="d-flex ms-auto">
                        <router-link class="btn btn-warning btn-sm" :to="{name: 'LogIn'}">Log In</router-link>
                    <div class="d-flex ms-auto">
                        <button class="btn btn-success mx-2 position-relative" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            My Cart
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
                                {{ $store.getters.cartCount }}
                            </span>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { RouterLink} from 'vue-router'

export default {
    computed: {
    cartCount() {
      return this.$store.getters.cartCount;
    },
  }
}

</script>

<style>
.logo-eben{
    width: 100%;
    height: 40px;
}
.navbar{
    padding: 0;
}
.navbar-text{
    color: #fff;
}
</style>