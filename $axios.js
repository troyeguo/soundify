import axios from "axios";

// dotenv.config();
// console.log(process.env.NODE_ENV, "REACT_APP_BASE_URL");
const $axios = axios.create({
  timeout: 6000,
  retry: 4,
  retryDelay: 1000,
});

//请求拦截
$axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 通过reudx的store拿到拿到全局状态树的token ，添加到请求报文，后台会根据该报文返回status
    // 此处应根据具体业务写token
    // const token = store.getState().user.token || localStorage.getItem('token');
    const token = localStorage.getItem("react-spotify-access-token");
    config.headers = { Authorization: `Bearer ${token}` };

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    message.error(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
$axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      console.log(error.response, "error");
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        console.log("Error happened");
        console.log(error);
        // return window.location.reload();
        return axios
          .post("http://localhost:3000/refresh", {
            data: JSON.stringify({
              refresh_token: localStorage.getItem(
                "react-spotify-refresh-token"
              ),
            }),
          })
          .then((res) => {
            // console.log(this, "props");
            if (res.status === 200) {
              // 1) put token to LocalStorage
              localStorage.setItem(
                "react-spotify-access-token",
                res.data.access_token
              );
              // console.log("New token", res.data);
              // console.log(originalRequest);

              // // 2) Change Authorization header
              // axios.defaults.headers.common['Authorization'] =
              //   'Bearer ' + localStorageService.getAccessToken();

              // 3) return originalRequest object with Axios.
              return axios(originalRequest);
            }
          })
          .catch((error) => {
            console.log(error, "error");
          });
      }
    }
    return Promise.reject(error);
  }
);

export default $axios;
