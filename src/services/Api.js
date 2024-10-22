import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8090", // 백엔드 API URL
});

// 요청 인터셉터 설정 (모든 요청에 Access Token 포함)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Bearer와 토큰 사이 공백 주의
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
