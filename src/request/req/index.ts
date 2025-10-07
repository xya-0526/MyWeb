import axios from 'axios'
const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL || '/api',
    timeout: 5000
})
request.interceptors.request.use(
    (config) => {
        console.log(import.meta.env.VITE_APP_BASE_URL)
        return config
    },
    (err) => {
        throw new Error(err)
    }
)
request.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        throw new Error(err)
    }
)
export default request
