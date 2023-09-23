<template>
<section>
<headertop></headertop>
    <RouterView />
<my_footer></my_footer>
  
    
</section>
</template>


<!-- cript  -->
<script>


import headertop from '../my_components/manage/headertop.vue'
import my_footer from '../my_components/manage/my_footer.vue'
import homepage from '../pages/homepage.vue'
import About from '../pages/About.vue'




export default{
    
    data(){
        return{

        }
    },

    components:{
        headertop,
        homepage, 
        About, 
        my_footer,
     
    

    }
}




</script>




<!-- style start here  -->
<style>

.router_link{
    color: red;
}

</style>

