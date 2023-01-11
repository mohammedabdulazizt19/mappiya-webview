<template>
    <div>
        <div class="container" >
                <div class="row mt-2 categ-row">
                    <div class="col-3 my-3 ">
                        <ul class="mt-3 text-uppercase d-flex justify-content-between menu-categ">
                            <li v-for="category in categories" :key="category.id" class="mx-3 categ-list">{{ category }}</li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
</template>

<script >
export default {
    
    data() {
        return {
            menus: {},
            categories: []
        }
    },
    
    mounted() {
        fetch('http://localhost:3000/menus')
        .then(res => res.json())
        .then(data => this.menus = data)
        .then(data => this.categories = Object.keys(data))
        .catch(err => console.log(err.message))
    }
}
</script>

<style>
.categ-list{
    cursor: pointer;
}
.categ-list:hover {
    font-weight: bold;
}
</style>