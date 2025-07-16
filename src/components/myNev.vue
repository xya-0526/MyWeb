<script setup lang="ts">
import { ref } from 'vue'
const nev = ref(['我的文章', '作品展示', '项目经验', '学习路线', '掌握技术栈'])
</script>
<template>
    <div>
        <ul class="list">
            <li v-for="n in nev" :key="n" class="item">
                <router-linl> {{ n }} </router-linl>
            </li>
        </ul>
    </div>
</template>
<style>
.list {
    list-style: none;
    position: absolute;
    top: 25vh;
    left: 4vw;
}
.item {
    font-size: 1.5rem;
    width: 10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: antiquewhite;
    height: 10vh;
    cursor: pointer;
}
</style>
