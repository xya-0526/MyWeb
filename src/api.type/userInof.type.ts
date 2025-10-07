import type { ArticalAPI } from './artical.type'
import type { AvatarAPI } from './avatar.type'
import type { DiscusssionAPI } from './discussion.type'
import type { ProductionAPI } from './production.type'

export interface userInfo<T, Y, U, I> {
    id: number
    name?: string
    phoneNumber: string
    passWord: string
    email: string
    avatar: T
    articals: Y[]
    productions: U[]
    discussions: I[]
}
export type UserAPI = userInfo<AvatarAPI, ArticalAPI, ProductionAPI, DiscusssionAPI>
