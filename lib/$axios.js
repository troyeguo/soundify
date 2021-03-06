import axios from "axios";

const $axios = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://soundify.960960.xyz",
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
      if (error.response.status === 401) {
        console.log("Error happened");
        console.log(error);
        let refresh_token = localStorage.getItem("react-spotify-refresh-token");
        console.log(refresh_token);
        // return window.location.reload();
        return axios
          .post("/refresh", {
            refresh_token: localStorage.getItem("react-spotify-refresh-token"),
          })
          .then((res) => {
            console.log(res, "res");
            if (res.status === 200) {
              // 1) put token to LocalStorage
              localStorage.setItem(
                "react-spotify-access-token",
                res.data.access_token
              );
              // window.location.reload();
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
