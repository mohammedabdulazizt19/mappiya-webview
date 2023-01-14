<template>
    <LayoutLogIn>
    <div class="container">
        <div class="col-md-4 mx-auto pt-5">
            <div class="card m-5">
            <div class="card-header">
                <h4 class="mb-2 text-center mt-3">Eben Ezar Restaurant</h4>
            </div>
            <div class="card-body">
                <form>
                    <div class="mb-3 mx-5">
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
                    <div class="px-5 row mb-4">
                        <div class="col-md-5">
                            <button class=" btn btn-outline-primary btn-sm" type="button" :disabled="!email && !password" v-on:click="redirectMe">Log in</button> <!--logIn-->
                        </div>
                        <div class="col-md-7 text-end">
                            <label><a href="#">forget password</a></label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>

    </div>
    </LayoutLogIn>
</template>

<script>
import axios from "axios";
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
        }
    },
    methods: {
        redirectMe() {
            this.$router.push('/adminHome');
        },
        logIn() {
                axios.post('http://app.mappiya.com/api/sanctum/token', {
                email: this.email,
                password: this.password,
                device_name: 'Web_view',
                this:$router.push('/adminHome')
            })
            .then(function (response) {
                //console.log(response.data);
                alert(response.data);
                this.$router.push( '/adminHome');
                    //.then(data => {
                    //    this.$router.replace({ name: "Admin"});
                    //})
                        
            })
            .catch(function (error) {
                //console.log(error);
                //if(error.response.status === 422){
                //    this.$router.push({name: "Settings"});
                //}
            });
        }

    }
};


</script>

