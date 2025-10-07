import request from './req'
const id = import.meta.env.VITE_APP_USERID
export const getuserInof = async () => {
    try {
        const res = await request.get(`/user/userInof/${id}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const addDiscussion = async (body: { text: string }) => {
    try {
        const res = await request.post(`/discussion/create/${id}`, body)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
