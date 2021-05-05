import axios from "axios";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";

const api = axios.create({
  baseURL: "https://hidden-hamlet-43774.herokuapp.com",
});

// const api = axios.create({
//   baseURL: "http://localhost:3400",
// });

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

export const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);
  const router = useHistory()
  const inc = useCallback(() => setCounter((counter) => counter + 1), [
    setCounter,
  ]);
  const dec = useCallback(() => setCounter((counter) => counter - 1), [
    setCounter,
  ]);
  const decwitherror = useCallback((err) =>{
    dec()
    if(err.response && (err.response.status===401 || err.response.status==='401')){
        router.push('/login')
    }
  }, [
    setCounter,
  ]);
  const interceptors = useMemo(
    () => ({
      request: (config) => (inc(), config),
      response: (response) => (dec(), response),
      error: (error) => (decwitherror(error), Promise.reject(error)),
    }),
    [inc, dec]
  );
  useEffect(() => {
    const reqInterceptor = api.interceptors.request.use(
      interceptors.request,
      interceptors.error
    );
    const resInterceptor = api.interceptors.response.use(
      interceptors.response,
      interceptors.error
    );
    return () => {
      api.interceptors.request.eject(reqInterceptor);
      api.interceptors.response.eject(resInterceptor);
    };
  }, [interceptors]);
  return [counter > 0];
};

//Auth
export const register = (payload) => api.post(`/auth/register`, payload);
export const login = (payload) => api.post(`/auth/login`, payload);
export const sendOTP = (payload) => api.post(`/auth/otp`, payload);
export const getUser = () => api.get(`/auth/getuser`);
export const changePassword = (payload) =>
  api.put(`auth/changepassword`, payload);

//Course
export const createCourse = (payload) =>
  api.post(`/course/createcourse`, payload);

export const submitAssignment = (payload) =>
  api.post(`/course/submitassignment`, payload);

//Get All public course
export const getAllPublicCourse = (id) => api.get(`/course/getallpubliccourse`);

//Get Course by course id
export const getCoursebyId = (id, auth) =>
  api.get(`/course/getcoursebyid`, {
    params: {
      course_id: id,
    },
  });

// /Update Course
export const updateCourse = (payload, params) =>
  api.put(`/course/updatecourse`, payload, {
    params: params,
  });

// /Update Assignment
export const updateAssignment = (payload, params) =>
  api.put(`/course/updateassignment`, payload, {
    params,
  });

//Getting all tutorial items
export const getVideo = (id, vid, type) =>
  api.get(`/course/getvideo`, {
    params: {
      course_id: id,
      video_id: vid,
      type: type,
    },
  });

//Getting all tutorial items
export const getAllAssignment = (id) =>
  api.get(`/course/getassignment`, {
    params: {
      course_id: id,
    },
  });

export const getStudentEnrollCourseWithId = (id) =>
  api.get(`/course/getstudentenrollcoursebyid`, {
    params: {
      course_id: id,
    },
  });

//delete Module Content
export const deleteSubModule = (params) =>
  api.delete(`/course/deletesubmodule`, {
    params: params,
  });

export const deleteCourse = (id) =>
  api.delete(`/course/deletecourse`, {
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

export const reviewAssignment = (payload, course_id, module_id) =>
  api.put(`/course/reviewassignmnet`, payload, {
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
  submitAssignment,
  updateCourse,
  changePassword,
  reviewAssignment,
  useAxiosLoader,
};
export default apis;

// orginalImage
// course_id
// body la comtemt
