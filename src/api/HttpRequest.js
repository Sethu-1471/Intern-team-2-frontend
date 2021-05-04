import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3400';

axios.interceptors.request.use(function (config) {
    const token = "Bearer " + localStorage.getItem("jwt");
    config.headers.Authorization = token;
  
    return config;
});


const HttpRequest = async ({path, body, query, headers = {"Content-Type": "application/json"}, method}) => {
    try {
        const response = await axios.request({
            method: method,
            url: `${path}${query ? "?"+query : ""}`,
            data: body,
            headers: headers
        })
        const responseData = response["data"];
        return responseData       
    } catch (error) {

        if(error?.response?.data instanceof Object) return error?.response?.data;

        return { "status": false, "message": error["message"], "status_code": error?.response?.status || 500 }
    }
} 

export {
    HttpRequest
}