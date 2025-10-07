import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getuserInof } from '@/request'
import type { UserAPI } from '@/api.type/userInof.type'
import { formatCreateTime } from '@/utils/utils'
export const userstore = defineStore('userInof', () => {
    const userInof = reactive<UserAPI>({
        id: 0,
        phoneNumber: '',
        passWord: '',
        avatar: {
            id: 0,
            avatar: ''
        },
        articals: [],
        productions: [],
        discussions: []
    })
    const GetuserInof = async () => {
        const data = await getuserInof()
        formatCreateTime(data.data)
        Object.assign(userInof, data.data)
        console.log(userInof)
    }
    return { userInof, GetuserInof }
})
