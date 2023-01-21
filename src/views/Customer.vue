<template>
    
    <LayoutCustomer>
        <div class="container text-center bg_customer">
        <label v-html="token"></label>
    </div>
    </LayoutCustomer>


</template>

<script>
import LayoutCustomer from "./layouts/CustomerLayout.vue";
//import { RouterLink } from 'vue-router'

export default {
    components: {
        LayoutCustomer
    },
    data() {
        return {
            token: ''
        }
    },
    methods: {
        redirectMe() {
            this.$router.push('/profile');
        }
    },mounted() {
        this.token = window.localStorage.getItem('token');

    }
};
</script>

<style>
.bg_customer {
    background-color: #d0a772;
}

</style>