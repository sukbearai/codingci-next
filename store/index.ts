import { atom, RecoilState } from 'recoil'

export interface UserInfo {
  nickname: string
  age: number
}

export const userInfoStore = atom({
  key: 'UserInfo',
  default: null,
}) as RecoilState<UserInfo | null>
