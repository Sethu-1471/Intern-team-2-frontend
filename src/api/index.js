import axios from 'axios'

const api = axios.create({
    baseURL: 'https://hidden-hamlet-43774.herokuapp.com/',
})

export const register = payload => api.post(`/auth/register`, payload);
export const login = payload => api.post(`/auth/login`, payload);


const apis = {
    register,
    login
}
export default apis;