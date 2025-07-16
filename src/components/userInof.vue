<script setup lang="ts">
import { ref } from 'vue'
import Avater from '@/assets/image/avater.jpg'
import MyAvater from '@components/myAvater.vue'
const url = ref<string>(Avater)
</script>

<template>
    <div class="userInof">
        <MyAvater :imgUrl="url"></MyAvater>
        <div class="user"><span>xya</span> | <span>男</span> | <span>2003-05-26</span></div>
    </div>
</template>

<style scoped>
.userInof {
    top: 10vh;
    left: 5vw;
    border-radius: 16px;
    width: 150px;
    height: 150px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 16px;
    background: transparent; /* 半透明白色 */
    /* backdrop-filter: blur(8px) brightness(1.1); 模糊+提亮 */
    border: 1px solid rgba(255, 255, 255, 0.3); /* 淡边框 */
    /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2); */
    overflow: hidden;
}

.userInof::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(transparent 40%, transparent 100%);
    pointer-events: none;
    z-index: 0;
}

.user {
    position: relative;
    z-index: 1;
    color: #ffffff;
    font-size: 14px;
    text-align: center;
}
</style>
