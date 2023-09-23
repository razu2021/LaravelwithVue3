<template>

    <div class="home">
        <h1> hlw i am from home page </h1>
        <banner></banner>
        <services></services>
    </div>

</template>

<script setup>
import banner from '../my_components/home_component/banner.vue'
import services from '../my_components/home_component/services.vue'
name:'Myhome'


</script>

<style scoped>
.home h1{
    padding: 100px 0px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    background: #000;
}


</style>