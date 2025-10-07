export interface CreateArticalAPI {
    title: string
    content: string
    category: string
}
export interface ArticalAPI extends CreateArticalAPI {
    id: number
    createTime: string
    status: number
}
export interface ArticalListRes {
    articals: ArticalAPI[]
    totial: number
}
