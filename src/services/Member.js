import api from "./Api";

export const login = async (email, password) => {
  try {
    const response = await api.post("/members/login", { email, password });
    return response.data;
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
