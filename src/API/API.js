import axios from "axios";

export const API = axios.create({
  baseURL: "http://127.0.0.1:5000"
});
// ,withCredentials: true,

// API.interceptors.response.use(
//   (response) => {
//     console.log("success");
//     console.log(response);
//     if (response.data.token) {
//       const user = JSON.parse(localStorage.getItem("user"));
//       localStorage.setItem(
//         "user",
//         JSON.stringify({ ...user, token: response.data.token })
//       );
//     }
//     return response;
//   },
//   (response) => {
//     console.log("error find");
//     return Promise.reject(response);
//   }
// );
