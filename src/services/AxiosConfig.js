import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(
    function (response) {
        return Promise.resolve(response);
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axios;
