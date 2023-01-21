<template>
    <LayoutLogIn>
        <div class="container bg_login py-5">
            <div class="col-12 col-md-8 col-lg-4 mx-auto">
                <div class="text-center">
                    <img src="../assets/logo-ebenezar_update.png" class="img-fluid mx-auto" alt="Eben Azar Restaurant" />
                </div>
            </div>
            <div class="col-12 col-md-8 col-lg-4 mx-auto">
                <div class="card border-warning text-bg-light m-5">
                    <div class="card-body">
                        <form>
                            <div class="mb-3 mx-5 mt-3">
                                <div class="form-group col-md-12">
                                    <label class="form-label text-end">Email</label>
                                    <input class="form-control" type="email" v-model="email" placeholder="Username" required>
                                </div>
                            </div>
                            <div class="mb-3 mx-5">
                                <div class="form-group col-md-12">
                                    <label class="form-label text-end">Password</label>
                                    <input class="form-control" type="password" v-model="password" placeholder="password" required>
                                </div>     
                            </div>
                            <div class="d-grid gap-2 col-12 mx-auto mb-4 mt-4 px-5">
                                <button class="btn btn-warning btn-sm" type="button" @click="handleSubmit">Log in</button>
                                <!-- <label class="text-center"><a href="#">forget password</a></label> -->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </LayoutLogIn>
</template>

<script>
import { registerRuntimeHelpers } from "@vue/compiler-core";
//import "../axios";
import axios from 'axios';

import router from "../plugins/router";
import LayoutLogIn from "./layouts/LogInLayout.vue";

//Vue.use(Router);

export default {
    components: {
        LayoutLogIn
    },
    data() {
        return {
            email: "",
            password: "",
            error: ''
        }

    },
    methods: {
        handleSubmit() {
            let $this = this;
            const response = axios.post('http://app.mappiya.com/api/sanctum/token', {
                email: this.email,
                password: this.password,
                device_name: 'Web_view'
                }).then(function (res) {
                //console.log(res.data);
                window.localStorage.setItem('token', res.data);
                $this.$router.push('/customer');
                }).catch(function (error) {
                console.log(error);
            });
        }
    }
};
</script>

<style>
.bg_login {
    background-color: #d0a772;
    height: 100vh;
}
</style>

