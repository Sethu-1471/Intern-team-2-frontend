import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3400",
});

let headers = {
  'Authorization': "Bearer " + localStorage.getItem("jwt")
}

//Auth
export const register = (payload) => api.post(`/auth/register`, payload);
export const login = (payload) => api.post(`/auth/login`, payload);

//Course
export const createCourse = (payload) =>
  api.post(`/course/createcourse`, payload, { headers });

//Get Course by course id
export const getCoursebyId = (id) =>
  api.get(`/course/getcoursebyid`, {
    params: {
      id: id,
    },
    headers
  });

//Get Course By Teacher user id
export const getCourseByUserId = (id) => api.get(`/course/getcoursebyuserid`, {
  headers: {
    'Authorization': "Bearer " + id
  }
})

export const updateCourseSubModuleName = (payload, id) =>
  api.post(`/course/updatecoursesubmodulename`, payload, {
    params: {
      course_id: id,
    },
    headers
  });

  export const uploadVideoTutorial = (payload, course_id, module_id) => api.post(`/course/uploadvideotutorial`, payload, {
    params: {
        course_id,
        module_id
    },
    headers
  });

  export const uploadDocsTutorial = (payload, course_id, module_id) => api.post(`/course/uploaddocumenttutorial`, payload, {
    params: {
        course_id,
        module_id
    },
    headers
  });

  export const uploadAssignment = (payload, course_id, module_id) => api.post(`/course/uploadassignmnet`, payload, {
    params: {
        course_id,
        module_id
    },
    headers
  });

const apis = {
  register,
  login,
  createCourse,
  getCoursebyId,
    updateCourseSubModuleName,
    uploadVideoTutorial
};
export default apis;
