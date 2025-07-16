<script setup lang="ts">
import MyList from '@/components/myNev.vue'
import userInof from '@/components/userInof.vue'
</script>
<template>
    <div class="container">
        <userInof></userInof>
        <MyList></MyList>
        <router-view></router-view>
    </div>
</template>
<style scoped>
.container {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
}
</style>
