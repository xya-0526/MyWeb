<template>
    <section id="discussion" class="py-20 bg-gradient-to-b from-dark to-dark/95 relative">
        <div class="container mx-auto px-4">
            <!-- 标题 -->
            <div class="text-center mb-10">
                <h2 class="text-2xl font-bold mb-2">留言<span class="text-primary">板</span></h2>
                <p class="text-gray-400">有什么想对我说的，直接留言吧！</p>
            </div>

            <div class="max-w-2xl mx-auto">
                <!-- 留言列表 -->
                <div id="messageList" class="space-y-4 mb-6">
                    <!-- 留言 1 -->
                    <div
                        v-for="item in data"
                        :key="item.id"
                        class="card-gradient rounded-xl p-4 border border-gray-800"
                    >
                        <div class="flex items-start space-x-3">
                            <img
                                :src="`https://picsum.photos/${Math.floor(Math.random() * 100 + 100)}`"
                                alt="用户头像"
                                class="w-10 h-10 rounded-full"
                            />
                            <div class="flex-1">
                                <div class="flex justify-between items-center mb-1">
                                    <span class="font-medium text-white">游客</span>
                                    <span class="text-xs text-gray-400">{{ item.createTime }}</span>
                                </div>
                                <p class="text-gray-300">{{ item.text }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- 输入框和按钮 -->
                    <div class="card-gradient rounded-2xl p-6 border border-gray-800">
                        <form id="messageForm" @submit.prevent="psotDis" class="space-y-4">
                            <textarea
                                v-model="formdata.text"
                                id="content"
                                name="content"
                                rows="3"
                                required
                                class="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white resize-none"
                                placeholder="说点什么吧..."
                            ></textarea>
                            <button
                                type="submit"
                                class="py-2 px-6 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
                            >
                                发布留言
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import type { DiscusssionAPI } from '@/api.type/discussion.type'
import { addDiscussion } from '@/request'
import { computed, ref } from 'vue'
const props = defineProps<{ modelValue: DiscusssionAPI[] }>()
const data = computed(() => props.modelValue)
const formdata = ref({ text: '' })
const psotDis = async () => {
    if (!formdata.value) return alert('留言不能为空')
    const res = await addDiscussion(formdata.value)
    alert(res.message)
}
</script>
