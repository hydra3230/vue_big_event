//定制请求的实例

//导入axios
import axios from "axios";

//定义变量，记录前缀
const baseURL = 'http://localhost:8080';
const axiosInstance = axios.create({baseURL})

//添加响应拦截器
axiosInstance.interceptors.response.use(
    result=>{
        return result.data;
    },
    err=>{
        alert('Backend server error...');
        return Promise.reject(err);//确保异步的状态开源转换成失败的状态
    }
)

export default axiosInstance;//导出供使用