import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3400",
});

export const register = (payload) => api.post(`/auth/register`, payload);
export const login = (payload) => api.post(`/auth/login`, payload);

export const createCourse = (payload) =>
  api.post(`/course/createcourse`, payload);
export const getCoursebyId = (id) =>
  api.get(`/course/getcoursebyid`, {
    params: {
      id: id,
    },
  });

export const updateCourseSubModuleName = (payload, id) =>
  api.post(`/course/updatecoursesubmodulename`, payload, {
    params: {
      course_id: id,
    },
  });

  export const uploadVideoTutorial = (payload, course_id, module_id) => api.post(`/course/uploadvideotutorial`, payload, {
    params: {
        course_id,
        module_id
    },
  });

  export const uploadDocsTutorial = (payload, course_id, module_id) => api.post(`/course/uploaddocumenttutorial`, payload, {
    params: {
        course_id,
        module_id
    },
  });

  export const uploadAssignment = (payload, course_id, module_id) => api.post(`/course/uploadassignmnet`, payload, {
    params: {
        course_id,
        module_id
    },
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
