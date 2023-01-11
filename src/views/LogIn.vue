<template>
    <LayoutLogIn>
    <div class="container">
        <div class="card m-5 ">
            <div class="card-header">
                <h4 class="mb-5 text-center mt-4">Eben Ezar Restaurant</h4>
            </div>
            <div class="card-body">
                <form>
                    <div class="row mb-3 mx-5">
                        <label class="col-sm-2 col-form-label text-end">Email</label>
                        <div class="col-sm-10">
                        <input type="email" v-model="email" placeholder="Username" class="form-control" required>
                        </div>
                    </div>
                    <div class="row mb-3 mx-5 col-xs-4">
                        <label class="col-sm-2 col-form-label text-end">Password</label>
                        <div class="col-sm-10">
                        <input type="password" v-model="password" placeholder="password" class="form-control" required>
                        </div>
                    </div>
                    <div class="mx-5">
                        <button type="button" v-on:click="logIn" class="btn btn-primary">Log in</button>
                    </div>
                    <div class="mt-5 mx-5 text-start">
                        <label class="form-label"><a href="#">forget password</a></label>
                    </div>
                        <div class="mb-3 mx-5 text-start">
                            <label class="form-label"><a href="#">Sign Up</a></label>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </LayoutLogIn>
</template>

<script>
import axios from "axios";
import LayoutLogIn from "./layouts/LogInLayout.vue";
export default {
    components: {
        LayoutLogIn
    },
    data() {
      return {
        email: "",
        password: "",
      };  
    },
    methods: {
        async logIn() {
            axios.post('http://app.mappiya.com/api/sanctum/token', {
                email: this.email,
                password: this.password,
                device_name: 'Web_view'
            })
            .then(function (response) {
                //console.log(response);
                alert(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        mounted()
        {
            let user = localStorage.getItem('user-info');
            if(user)
            {
                this.$router.push({name: "Home"});
            }
        }
    }
};
</script>