import type { User } from '@/api.type/userInof.type'
function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleString() // 格式化为本地日期时间格式
}
export function formatCreateTime(obj: User) {
    for (const key in obj) {
        const value = obj[key]
        if (Array.isArray(value)) {
            value.forEach((item) => {
                if (item && typeof item === 'object' && item.createTime) {
                    item.createTime = formatDate(item.createTime)
                }
            })
        } else if (typeof value === 'object' && value !== null) {
            formatCreateTime(value) // 递归调用处理对象
        }
    }
}
