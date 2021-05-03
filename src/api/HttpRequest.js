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
        console.log("HTTP REQUEST",response);
        return responseData       
    } catch (error) {
        console.log(error?.response?.data);
        return error?.response?.data ?? { "status": false, "message": error["message"] || "Internal Server Error, Please try again", "status_code": error["status_code"] || 500 }
    }
} 

export {
    HttpRequest
}