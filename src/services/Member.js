import api from "./Api";

export const login = async (email, password) => {
  try {
    const response = await api.post("/members/login", { email, password });
    return response.data; // accessToken과 유저 정보를 반환
  } catch (error) {
    throw error.response?.data || new Error("로그인 실패");
  }
};

export const signup = async (signupData) => {
  try {
    const response = await api.post("/members/signup", signupData);
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error("회원가입 실패");
  }
};

export const getMyPage = async () => {
  try {
    const response = await api.get("/members/mypage");
    return response.data;
  } catch (error) {
    console.error("마이페이지 정보 가져오기 실패:", error);
    throw error;
  }
};

// 마이페이지 업데이트 (PUT /mypage)
export const updateMyPage = async (mypageData) => {
  try {
    const response = await api.put("/members/mypage", mypageData);
    return response.data;
  } catch (error) {
    console.error("마이페이지 업데이트 실패:", error);
    throw error;
  }
};
