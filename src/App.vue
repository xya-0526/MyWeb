<script setup lang="ts">
import canvas from '@/utils/bg.js'
import { onMounted } from 'vue'
onMounted(() => {
    canvas()
})
</script>
<template>
    <div class="container">
        <!-- <span class="bg"></span> -->
        <canvas id="canvas"></canvas>
        <router-view></router-view>
    </div>
</template>
<style scoped>
.container {
    position: relative;
    width: 100vw;
    height: 100vh;
}
</style>
