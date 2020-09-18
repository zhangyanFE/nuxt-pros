import axios from "axios";

const httpService = axios.create({
  baseURL: "",
  timeout: 1000 * 180, // 请求超时时间
  headers: {
    "Content-Type": "multipart/form-data"
    // "Content-Type": "application/x-www-form-urlencoded",
    // 'Content-Type': 'application/json;charset=UTF-8'
    // 'Access-Control-Allow-Origin': '*',
  }
});

// 添加请求拦截器
httpService.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
httpService.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return response.data;
    }
    return response;
  },
  error => {
    console.log("error==>", error);
    return Promise.reject(error);
  }
);

export default httpService;
