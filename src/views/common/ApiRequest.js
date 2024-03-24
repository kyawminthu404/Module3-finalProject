import axios from "axios";
import { ApiRequestErrorHandler } from "./ApiRequestErrorHandler";

export const ApiRequest = async (value) => {
  let result,
    responseType,
    parameter,
    message,
    path = "";



  // Set the AUTH token for any request
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('TOKEN');
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    config.headers.Accept = "application/json";
    return config;
  });
    // handle error
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      // if status is 401 unauthenticated, remove session and redirect to login page
      if (error.response.status === 401) {
        window.location.href = `${window.location.origin}/Logout`;
      } else if (error.response.status === 404) {
        window.location.href = `${window.location.origin}/404`;
      } else if (error.response.status === 500) {
        // window.location.href = `${window.location.origin}/${customer_name}/${project_name}/500`;
      } else if (error.response.status === 403) {
        window.location.href = `${window.location.origin}/403`;
      }
      // if not 401, send error response to user page
      else {
        throw error;
      }
    }
  );

  path = process.env.REACT_APP_API_URL;

  // to decide responseType is exists or not
  value.type !== undefined ? (responseType = value.type) : (responseType = "");

  // set parameter based on api request method
  if (
    value.method === "post" ||
    value.method === "patch" ||
    value.method === "put" ||
    value.method === "delete"
  ) {
    parameter = {
      baseURL: path,
      method: value.method,
      url: value.url,
      data: value.params,
      responseType,
    };
  } else {
    parameter = {
      baseURL: path,
      method: value.method,
      url: value.url,
      params: value.params,
      responseType,
    };
  }

  if (value.headers !== undefined) {
    parameter.headers = value.headers;
  }

  // calling api
  await axios(parameter)
    .then(async (response) => {
      // call api response error handler
      message = await ApiRequestErrorHandler(response);
      message === true
        ? (result = response)
        : (result = { flag: false, message: message, data: response });
    })
    .catch(async (error) => {
      // if(error.response.status === 401) {
      //     const refreshRes = await refreshToken();
      //     if(refreshRes) {
      //         const resData = await ApiRequest(value);
      //         result = resData;
      //     } else {
      //         await logoutUser();
      //         result = { "flag": false, "message": ["Error in authentication"],"data": {status: "NG"} };
      //     }
      // } else {
      try {
        // call api response error handler
        message = await ApiRequestErrorHandler(error.response);
        result = { flag: false, message: message, data: error.response };
      } catch (error1) {
        if (error1.response !== undefined) {
          if (error.response !== undefined) {
            result = {
              flag: false,
              message: error.response.data.message,
              data: error.response.data.data,
            };
          } else {
            let data = { status: "OK" };
            result = {
              flag: false,
              message: ["Cannot connect to server"],
              data: data,
            };
          }
        } else {
          let data = { status: "OK" };
          result = {
            flag: false,
            message: ["Cannot connect to server"],
            data: data,
          };
        }
      }
      // }
    });
  return result;
};
