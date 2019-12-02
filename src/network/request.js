import axios from 'axios'

export function request(config) {
    //创建axios的实例
    const instance =axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    //axios的拦截器
    //2.1请求拦截的作用
    // instance.interceptors.request.use(config => {
    //   // console.log(config)
    //   //1.比如config中的一些信息不符合服务器
    //
    //   //2.比如每次发送网络请求时  希望在界面中显示一个请求的图标
    //
    //   //3.某些网络请求（比如登录） 必须携带一些特殊的信息
    //   return config
    // }, err => {
    //   // console.log(err);
    // })
    //
    //2.2响应拦截
    // instance.interceptors.response.use(res => {
    //   console.log(res)
    // }, error => {
    //   console.log(error)
    // })

    //发送真正的请求  instance(config)本身会返回一个Promise
    return instance(config)

}

