<template>
    <NavBarLoggedIn />
    <slot></slot>
</template>

<script >
import NavBarLoggedIn from '../../components/NavBarLoggedIn.vue';

export default {
    components: {
        NavBarLoggedIn
    }
};
</script>