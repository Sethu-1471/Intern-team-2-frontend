import axios from "axios";

axios.defaults.baseURL = "https://hidden-hamlet-43774.herokuapp.com/";
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
