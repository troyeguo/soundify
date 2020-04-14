import axios from "axios";
import * as actionTypes from "./redux/action";
import { connect } from "react-redux";
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
    if (err || err.response.status === 401) {
      // Check if refresh token exists
      const refreshToken = localStorage.getItem("react-spotify-refresh-token");
      if (refreshToken) {
        // Send refresh token to server to acquire a new access token
        axios
          .post("http://localhost:3000/refresh", {
            data: JSON.stringify({
              refresh_token: refreshToken,
            }),
          })
          .then((res) => {
            console.log("Refresh token response -", res.data);
            axios
              .get("https://api.spotify.com/v1/me", {
                headers: {
                  Authorization: `Bearer ${res.data.access_token}`,
                },
              })
              .then(({ data }) => {
                localStorage.setItem(
                  "react-spotify-access-token",
                  res.data.access_token
                );

                let newUser = {
                  access_token: res.data.access_token,
                  displayName: data.display_name,
                  email: data.email,
                  display_name: data.display_name,
                  type: data.type,
                  country: data.country,
                  product: data.product,
                  avatar: data.images[0].url,
                };
                localStorage.setItem("newUser".JSON.stringify(newUser));
              });
          })
          .catch((e) => {
            console.log("Refresh token error -", e);
          })
          .finally(() => {
            this.setState({ loading: false });
          });
      } else {
        // Refresh token doesn't exist, the user is shown a 'login with Spotify button'
        this.setState({ loading: false });
      }
    }
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
