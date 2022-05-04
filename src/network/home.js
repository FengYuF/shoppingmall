// 首页相关的所有网络请求
import { request } from "./request";
export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}
