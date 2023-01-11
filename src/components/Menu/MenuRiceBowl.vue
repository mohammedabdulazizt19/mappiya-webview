<template>
    <div class="">
        <div class="container">
            <div class="row row-group-menu my-4 p-4">
                <h4>Rice Bowl</h4>
                <span class="lh-sm">Best Japanese Rice Bowl</span>

                <div class="col-6 my-3" v-for="menu in menus" :key="menu.id">
                    <div class="card" style="width: 600px;">
                        <div class="row no-gutters">
                            <div class="col-sm-8 p-4">
                                <h5 class="card-title">{{ menu.title }}</h5>
                                <p class="card-text lh-sm text-secondary">{{ menu.description }}</p>
                                <span >{{ menu.price }}</span>
                            </div>
                            <div class="col-sm-4">
                                <div class="card-body menu-image-wrapper">
                                    <img class="card-img menu-img" v-bind:src="menu.image" />
                                    <i class="fa-solid  fa-square-plus fa-2xl plus-icon"></i>
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
export default {
    data() {
        return {
            menus: {
                rice: []
            }
        }
    },
    mounted() {
        fetch('http://localhost:3000/menus')
        .then(res => res.json())
        .then(data => this.menus = data.rice)
        .catch(err => console.log(err.message))
    }
}

</script>

<style>
.row-group-menu{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.card{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}


</style>