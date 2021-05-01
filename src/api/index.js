import axios from "axios";

// const api = axios.create({
//   baseURL: "https://hidden-hamlet-43774.herokuapp.com",
// });

const api = axios.create({
  baseURL: "http://localhost:3400",
});

// api.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("jwt")

// let headers = {
//   'Authorization': "Bearer " + localStorage.getItem("jwt")
// }

// Add a request interceptor
api.interceptors.request.use(function (config) {
  const token = "Bearer " + localStorage.getItem("jwt");
  config.headers.Authorization = token;

  return config;
});

//Auth
export const register = (payload) => api.post(`/auth/register`, payload);
export const login = (payload) => api.post(`/auth/login`, payload);
export const sendOTP = (payload) => api.post(`/auth/otp`, payload);

//Course
export const createCourse = (payload) =>
  api.post(`/course/createcourse`, payload);

//Get All public course
export const getAllPublicCourse = (id) => api.get(`/course/getallpubliccourse`);

//Get Course by course id
export const getCoursebyId = (id) =>
  api.get(`/course/getcoursebyid`, {
    params: {
      course_id: id,
    },
  });

//Get Course By Teacher user id
export const getCourseByUserId = () => api.get(`/course/getcoursebyuserid`);

//Enroll Course
export const EnrollCourse = (id) => api.post(`/course/enrollcourse`, { id });

export const updateCourseSubModuleName = (payload, id) =>
  api.post(`/course/updatecoursesubmodulename`, payload, {
    params: {
      course_id: id,
    },
  });

export const uploadVideoTutorial = (payload, course_id, module_id) =>
  api.post(`/course/uploadvideotutorial`, payload, {
    params: {
      course_id,
      module_id,
    },
  });

export const uploadDocsTutorial = (payload, course_id, module_id) =>
  api.post(`/course/uploaddocumenttutorial`, payload, {
    params: {
      course_id,
      module_id,
    },
  });

export const uploadAssignment = (payload, course_id, module_id) =>
  api.post(`/course/uploadassignmnet`, payload, {
    params: {
      course_id,
      module_id,
    },
  });

const apis = {
  register,
  login,
  createCourse,
  getCoursebyId,
  updateCourseSubModuleName,
  uploadVideoTutorial,
  EnrollCourse,
  sendOTP,
};
export default apis;
