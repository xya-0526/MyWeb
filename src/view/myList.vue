<template>
    <div class="CONTAIN">
        <a-list
            :bordered="false"
            :style="{ width: `50vw` }"
            :max-height="600"
            :scrollbar="scrollbar"
            @reach-bottom="fetchData"
            :data="list"
        >
            <template #scroll-loading>
                <div v-if="bottom">No more data</div>
                <a-spin v-else />
            </template>
            <template #item="{ item, index }">
                <a-list-item :key="index"> {{ item }} </a-list-item>
            </template>
        </a-list>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const scrollbar = ref(true)
const list = reactive<Array<string>>([])
let current = ref<number>(1)
let bottom = ref<boolean>(false)
const fetchData = () => {
    console.log('reach bottom!')
    console.log(current.value)
    if (current.value <= 5) {
        window.setTimeout(() => {
            const index = list.length
            list.push(
                `Beijing Bytedance Technology Co., Ltd. ${index + 1}`,
                `Bytedance Technology Co., Ltd. ${index + 2}`,
                `Beijing Toutiao Technology Co., Ltd. ${index + 3}`,
                `Beijing Volcengine Technology Co., Ltd. ${index + 4}`,
                `China Beijing Bytedance Technology Co., Ltd. ${index + 5}`
            )
            current.value += 1
        }, 2000)
    } else {
        bottom.value = true
    }
}
</script>
<style>
.arco-list-item-main {
    font-size: 1rem;
    display: flex;
    justify-content: start;
    align-items: center;
}
.arco-list-item {
    height: 10vh;
}
.CONTAIN {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.arco-list-content {
    color: #f0d8d8;
}
</style>
