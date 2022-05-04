import axios from 'axios'

// success接收一个匿名函数，函数可以传递参数
// 相当于把一个匿名函数变成了一个叫success的函数，然后再调用
export function request0(config,success) {
  const axiosA = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  axiosA(config)
  .then(res => {
    // 调用函数
    success(res)
    // function success(res) {
    //   console.log(res);
    // })
    // success(res)
  })
  .catch(res => {

  })
}
// 第二种封装

// axios本身就是一个promise，我们只需要把他返回出去就行
export function request(config) {
  const axiosB = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  /*
  // axios拦截器
  // 请求拦截器 -> 发送请求前拦截
  axiosB.interceptors.request.use(
    config => {
      console.log(config);
      // 当拦截器拦截之后，在期间做完某些操作后需要把拦截的东西再返回出去
      return config
    }),
    error => {
      console.log(error);
    }
  // 响应拦截器 -> 数据响应时拦截
  axiosB.interceptors.response.use(
    res => {
      console.log('响应拦截成功');
      console.log(res);
      return res
    },
    error => {
      console.log(error);
    }
  )
  */
 return axiosB(config)
}

