import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8090", // 백엔드 API URL
});

// 요청 인터셉터 설정: 모든 요청에 Access Token 포함
api.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("토큰이 존재하지 않습니다. 로그인이 필요합니다.");
      alert("로그인 세션이 만료되었습니다. 다시 로그인해 주세요.");
      return;
    }

    // 이미 'Bearer '가 포함된 토큰이라면 그대로 사용
    if (token && token.startsWith("Bearer ")) {
      config.headers["Authorization"] = token;
    } else if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    console.log("Authorization 헤더:", config.headers["Authorization"]);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
