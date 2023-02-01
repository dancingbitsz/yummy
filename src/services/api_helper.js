import axios from "axios";
const API_URL_VIRTU_SWAP = process.env.REACT_APP_VIRTU_SWAP;
// const API_URL_VIRTU_SWAP = "http://localhost:3000/api";
const axiosApiVirtuSwap = axios.create({
  baseURL: API_URL_VIRTU_SWAP,
});
const requestMiddleware = (req) => {
  // eslint-disable-next-line no-useless-concat
  req.headers.authorization = "Bearer " + "token";
  return req;
};
const responseMiddleware = (response) => {
  //  Do something on every success full response
  return response;
};
const responseErr = (error) => {
  if (error?.response?.status === 401) {
    //   Logout / Redirect
    //   EX:
    //   Cookies.clear();
    //   store.dispatch(logout());
    return Promise.reject(error);
  }
  return Promise.reject(error);
};
axiosApiVirtuSwap.interceptors.request.use(requestMiddleware);
axiosApiVirtuSwap.interceptors.response.use(responseMiddleware, responseErr);

export { axiosApiVirtuSwap };
