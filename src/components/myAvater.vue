<script setup lang="ts">
defineProps({
    imgUrl: {
        type: String,
        default: () => ''
    }
})
</script>
<template>
    <div>
        <a-space>
            <a-avatar id="img" :image-url="imgUrl"></a-avatar>
        </a-space>
    </div>
</template>
<style scoped>
#img {
    width: 70px;
    height: 70px;
}
</style>
